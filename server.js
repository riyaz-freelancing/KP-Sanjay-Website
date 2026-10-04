import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static files route for uploaded images
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
app.use('/uploads', express.static(UPLOADS_DIR));

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, 'infographic-' + uniqueSuffix + ext);
  }
});
const upload = multer({ storage: storage });

// Database helper functions
const DB_PATH = path.join(__dirname, 'data', 'db.json');

function readDb() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      return { dailyAffairs: [], announcements: [], leads: [] };
    }
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return { dailyAffairs: [], announcements: [], leads: [] };
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing db.json:', err);
    return false;
  }
}

// ==========================================
// 1. IMAGE UPLOAD API
// ==========================================
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    return res.json({
      success: true,
      url: imageUrl,
      filename: req.file.filename,
      size: req.file.size
    });
  } catch (err) {
    console.error('Image upload error:', err);
    return res.status(500).json({ success: false, message: 'Failed to upload image' });
  }
});

// ==========================================
// 2. DAILY AFFAIRS API (GET, POST, DELETE)
// ==========================================
app.get('/api/affairs', (req, res) => {
  const db = readDb();
  res.json(db.dailyAffairs || []);
});

app.post('/api/affairs', (req, res) => {
  const db = readDb();
  const body = req.body;

  const newPost = {
    id: 'affair-' + Date.now(),
    date: body.date || new Date().toISOString().split('T')[0],
    displayDate: body.displayDate || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    dayName: body.dayName || new Date().toLocaleDateString('en-GB', { weekday: 'long' }),
    title: body.title || 'Daily Current Affairs & Syllabus Sheet',
    category: body.category || 'International Relations & GK',
    subtitle: body.subtitle || 'UPSC | APPSC | TGPSC | Competitive Special',
    posterUrl: body.posterUrl || 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
    pdfUrl: body.pdfUrl || '#',
    tagline: body.tagline || 'Read • Revise • Practice • Succeed',
    topics: body.topics || [],
    mcqs: body.mcqs || []
  };

  db.dailyAffairs = [newPost, ...(db.dailyAffairs || [])];
  writeDb(db);

  res.status(201).json({ success: true, post: newPost });
});

app.delete('/api/affairs/:id', (req, res) => {
  const db = readDb();
  const id = req.params.id;
  db.dailyAffairs = (db.dailyAffairs || []).filter(item => item.id !== id);
  writeDb(db);
  res.json({ success: true });
});

// ==========================================
// 3. MCQ QUESTION BUILDER API
// ==========================================
app.post('/api/mcq', (req, res) => {
  const db = readDb();
  const { affairId, mcq } = req.body;

  if (!affairId || !mcq || !mcq.question) {
    return res.status(400).json({ success: false, message: 'Missing affairId or question details' });
  }

  let updated = false;
  db.dailyAffairs = (db.dailyAffairs || []).map(affair => {
    if (affair.id === affairId) {
      updated = true;
      const formattedMcq = {
        id: 'q-' + Date.now(),
        question: mcq.question,
        options: mcq.options || [],
        correctIndex: parseInt(mcq.correctIndex, 10) || 0,
        explanation: mcq.explanation || 'Refer to today\'s syllabus sheet for complete analysis.'
      };
      return {
        ...affair,
        mcqs: [...(affair.mcqs || []), formattedMcq]
      };
    }
    return affair;
  });

  if (updated) {
    writeDb(db);
    return res.json({ success: true });
  } else {
    return res.status(404).json({ success: false, message: 'Affair post not found' });
  }
});

// ==========================================
// 4. STUDENT LEADS API
// ==========================================
app.get('/api/leads', (req, res) => {
  const db = readDb();
  res.json(db.leads || []);
});

app.post('/api/leads', (req, res) => {
  const db = readDb();
  const body = req.body;
  const newLead = {
    id: 'lead-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    name: body.name,
    phone: body.phone,
    email: body.email || '',
    city: body.city || 'Not specified',
    interest: body.interest || 'General Inquiry',
    status: 'New'
  };

  db.leads = [newLead, ...(db.leads || [])];
  writeDb(db);
  res.status(201).json({ success: true, lead: newLead });
});

app.patch('/api/leads/:id', (req, res) => {
  const db = readDb();
  const id = req.params.id;
  const { status } = req.body;

  db.leads = (db.leads || []).map(l => l.id === id ? { ...l, status } : l);
  writeDb(db);
  res.json({ success: true });
});

// ==========================================
// 5. ANNOUNCEMENTS TICKER API
// ==========================================
app.get('/api/announcements', (req, res) => {
  const db = readDb();
  res.json(db.announcements || []);
});

app.post('/api/announcements', (req, res) => {
  const db = readDb();
  const { text } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ success: false });

  db.announcements = [text.trim(), ...(db.announcements || [])];
  writeDb(db);
  res.json({ success: true, announcements: db.announcements });
});

app.delete('/api/announcements/:index', (req, res) => {
  const db = readDb();
  const idx = parseInt(req.params.index, 10);
  db.announcements = (db.announcements || []).filter((_, i) => i !== idx);
  writeDb(db);
  res.json({ success: true, announcements: db.announcements });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Full-stack Dynamic API Server running at http://localhost:${PORT}`);
});
