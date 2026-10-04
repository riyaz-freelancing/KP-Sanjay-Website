import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXPORT_PRODUCTS } from '../data/exportProducts';
import { 
  Sparkles, 
  Search, 
  FileText, 
  Send, 
  CheckCircle2, 
  X, 
  Anchor, 
  Globe, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { useData } from '../context/DataContext';

const CATEGORY_MAP = {
  'marine-seafood': {
    title: 'Marine & Seafood Exports',
    categoryName: 'Marine & Seafood',
    badge: 'MPEDA REGISTERED & HACCP CERTIFIED',
    bannerImg: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1400&q=85',
    desc: 'Export grade frozen Vannamei & Black Tiger shrimp, Squid tubes, Cuttlefish, Surmai, Pomfret, Mud Crabs, Ghol Maws, and Fish Meal processed under strict cold chain logistics.'
  },
  'rice-grains': {
    title: 'Rice & Grains Exports',
    categoryName: 'Rice & Grains',
    badge: 'GI TAGGED & AGMARK CERTIFIED',
    bannerImg: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1400&q=85',
    desc: 'Premium 1121 & 1509 Basmati Rice, Sona Masoori, IR64 Non-Basmati Parboiled Rice, MP Sharbati Wheat Flour (Atta), and Yellow Maize for bulk container exports.'
  },
  'spices': {
    title: 'Spices & Condiments Exports',
    categoryName: 'Spices & Condiments',
    badge: 'SPICES BOARD INDIA REGISTERED',
    bannerImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=85',
    desc: 'Alleppey Green Cardamom, Tellicherry Black Pepper, Guntur Teja S17 Chilli, Salem Double Super Turmeric, Cumin (Jeera), Coriander seeds, and Asafoetida.'
  },
  'fruits-vegetables': {
    title: 'Fruits & Fresh Vegetables Exports',
    categoryName: 'Fruits & Vegetables',
    badge: 'APEDA COLD CHAIN CERTIFIED',
    bannerImg: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=85',
    desc: 'VHT & Irradiated Ratnagiri Alphonso & Kesar Mangoes, Nashik Light Red Onions, Grand Naine Cavendish Bananas, and Bhagwa Pomegranates.'
  },
  'dry-fruits': {
    title: 'Dry Fruits & Nuts Exports',
    categoryName: 'Dry Fruits & Nuts',
    badge: 'CEPCI EXPORT QUALITY GRADED',
    bannerImg: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1400&q=85',
    desc: 'W180 Jumbo, W240 Whole, and W320 Cashew Nuts, Malayvar Golden Raisins (Kishmish), and Kashmir Light Walnut kernels.'
  },
  'beverages-jaggery': {
    title: 'Tea, Coffee & Organic Jaggery Exports',
    categoryName: 'Tea, Coffee & Jaggery',
    badge: 'TEA BOARD & COFFEE BOARD REGISTERED',
    bannerImg: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1400&q=85',
    desc: 'Single-estate Assam Orthodox Tea, Chikmagalur Arabica Coffee beans, and 100% Chemical-Free Organic Sugarcane Jaggery (Gur) powder and blocks.'
  },
  'oilseeds-oils': {
    title: 'Oilseeds & Edible Oils Exports',
    categoryName: 'Oilseeds & Oils',
    badge: 'IOPEPC & FSSAI REGISTERED',
    bannerImg: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1400&q=85',
    desc: 'HPS Groundnut Peanuts (Bold/Java), 99.98% Hulled Sesame Seeds, Cold Pressed Kachi Ghani Mustard Oil, and Virgin Coconut Oil.'
  }
};

export const CategoryPage = () => {
  const { categorySlug } = useParams();
  const { addInquiry } = useData();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [activeRfqProduct, setActiveRfqProduct] = useState(null);

  // RFQ Form State
  const [rfqForm, setRfqForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    quantity: '1 Container (20ft FCL)',
    incoterm: 'CIF',
    destinationPort: '',
    message: ''
  });

  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  // Get current category configuration
  const currentCategoryConfig = CATEGORY_MAP[categorySlug] || {
    title: 'Export Commodities Catalog',
    categoryName: 'All',
    badge: 'EXPORT QUALITY GUARANTEED',
    bannerImg: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1400&q=85',
    desc: 'Browse authentic Indian export products with complete HS Codes, specifications, and container RFQ quote form.'
  };

  // Filter products ONLY related to this specific category
  const categoryProducts = EXPORT_PRODUCTS.filter((product) => {
    if (currentCategoryConfig.categoryName === 'All') return true;
    return product.category === currentCategoryConfig.categoryName;
  });

  const filteredProducts = categoryProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.hsCode.includes(searchQuery) ||
    product.destinations.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleOpenRfq = (product) => {
    setActiveRfqProduct(product);
    setRfqSubmitted(false);
    setRfqModalOpen(true);
  };

  const handleRfqSubmit = (e) => {
    e.preventDefault();
    if (!rfqForm.contactName || !rfqForm.email || !rfqForm.phone) return;

    addInquiry({
      ...rfqForm,
      productName: activeRfqProduct?.name || 'General Inquiry',
      category: activeRfqProduct?.category || currentCategoryConfig.categoryName
    });

    setRfqSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* DEDICATED CATEGORY HEADER BANNER WITH CRISP CLEAR BACKGROUND IMAGE */}
        <div className="relative rounded-3xl overflow-hidden bg-[#06102a] text-white shadow-2xl p-8 sm:p-12 lg:p-14 text-left group">
          <img
            src={currentCategoryConfig.bannerImg}
            alt={currentCategoryConfig.title}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1400&q=85";
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06102a] via-[#06102a]/85 to-transparent" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentCategoryConfig.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight drop-shadow-md">
              {currentCategoryConfig.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium drop-shadow">
              {currentCategoryConfig.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-amber-300">
              <div className="flex items-center gap-1.5 bg-[#06102a]/90 px-4 py-2.5 rounded-xl border border-slate-700/80 backdrop-blur-md">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Direct Exporter Sourcing</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#06102a]/90 px-4 py-2.5 rounded-xl border border-slate-700/80 backdrop-blur-md">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Container Load (20ft FCL / 40ft Reefer)</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-md text-left">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${currentCategoryConfig.categoryName} (by Name, HS Code, or Country)...`}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* PRODUCT CARDS GRID */}
        <div>
          <div className="flex items-center justify-between mb-6 text-left">
            <h2 className="text-xl sm:text-2xl font-black text-[#06102a]">
              Available Products ({filteredProducts.length})
            </h2>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {currentCategoryConfig.categoryName}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center space-y-4">
              <p className="text-slate-600 font-medium text-sm">
                No products found matching "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden bg-slate-950">
                      <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[11px] font-black px-3 py-1 rounded-lg bg-slate-950/90 text-amber-400 border border-amber-500/40 uppercase tracking-wider backdrop-blur-md">
                          HS CODE: {product.hsCode}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                          {product.tag}
                        </span>
                        <h3 className="text-xl font-extrabold text-[#06102a] tracking-tight mt-2 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {product.desc}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 font-medium">Export Destinations:</span>
                          <span className="font-bold text-slate-800">{product.destinations.slice(0, 3).join(', ')}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 font-medium">Min Order Quantity:</span>
                          <span className="font-bold text-amber-600">{product.minOrder}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-4 h-4 text-slate-600" />
                      <span>View Specifications</span>
                    </button>

                    <button
                      onClick={() => handleOpenRfq(product)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Container RFQ Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* SPECIFICATIONS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-left border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-black px-3 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                HS CODE: {selectedProduct.hsCode}
              </span>
              <h3 className="text-2xl font-black text-[#06102a]">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-slate-600">Origin: {selectedProduct.origin}</p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Product Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                {Object.entries(selectedProduct.specs || {}).map(([key, val]) => (
                  <div key={key} className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400">{key}</span>
                    <p className="font-bold text-slate-800">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-black text-slate-900 uppercase tracking-wider">Packaging & Minimum Order</h4>
              <p className="text-slate-700"><strong>Packaging:</strong> {selectedProduct.packaging}</p>
              <p className="text-slate-700"><strong>Min Order:</strong> {selectedProduct.minOrder}</p>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const prod = selectedProduct;
                  setSelectedProduct(null);
                  handleOpenRfq(prod);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md"
              >
                Request RFQ Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTAINER RFQ MODAL */}
      {rfqModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-left border border-slate-200">
            <button
              onClick={() => setRfqModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block">
                CONTAINER RFQ QUOTE REQUEST
              </span>
              <h3 className="text-xl font-black text-[#06102a] mt-1">
                {activeRfqProduct?.name || 'Container Export Quote'}
              </h3>
            </div>

            {rfqSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">RFQ Quote Sent!</h4>
                <p className="text-xs text-slate-600">
                  Thank you! Our EXIM trade team will issue a formal FOB/CIF quote for {activeRfqProduct?.name} within 24 hours.
                </p>
                <button
                  onClick={() => setRfqModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={rfqForm.companyName}
                      onChange={(e) => setRfqForm({ ...rfqForm, companyName: e.target.value })}
                      placeholder="e.g. Global Importers LLC"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={rfqForm.contactName}
                      onChange={(e) => setRfqForm({ ...rfqForm, contactName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={rfqForm.email}
                      onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                      placeholder="john@importer.com"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={rfqForm.phone}
                      onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                      placeholder="+1 234 567 8900"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Incoterm</label>
                    <select
                      value={rfqForm.incoterm}
                      onChange={(e) => setRfqForm({ ...rfqForm, incoterm: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium focus:outline-none focus:border-amber-500"
                    >
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="FOB">FOB (Free On Board)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Destination Port *</label>
                    <input
                      type="text"
                      required
                      value={rfqForm.destinationPort}
                      onChange={(e) => setRfqForm({ ...rfqForm, destinationPort: e.target.value })}
                      placeholder="e.g. Jebel Ali / Rotterdam"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Target Quantity & Notes</label>
                  <textarea
                    rows={2}
                    value={rfqForm.message}
                    onChange={(e) => setRfqForm({ ...rfqForm, message: e.target.value })}
                    placeholder="Specify target quantity, packing preference, or special quality requirements..."
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Submit Container RFQ Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
