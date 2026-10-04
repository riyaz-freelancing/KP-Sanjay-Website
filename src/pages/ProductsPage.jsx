import React, { useState } from 'react';
import { EXPORT_PRODUCTS } from '../data/exportProducts';
import { 
  Search, 
  Filter, 
  Globe, 
  Package, 
  FileText, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  X,
  ChevronRight,
  ShieldCheck,
  Building2,
  Anchor,
  Truck
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const ProductsPage = () => {
  const { addInquiry } = useData();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const categories = [
    'All',
    'Marine & Seafood',
    'Rice & Grains',
    'Spices & Condiments',
    'Fruits & Vegetables',
    'Dry Fruits & Nuts',
    'Tea, Coffee & Jaggery',
    'Oilseeds & Oils'
  ];

  // Filter products by search and category
  const filteredProducts = EXPORT_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.hsCode.includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.destinations.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const handleOpenRfq = (product) => {
    setActiveRfqProduct(product);
    setRfqSubmitted(false);
    setRfqModalOpen(true);
  };

  const handleRfqSubmit = (e) => {
    e.preventDefault();
    addInquiry({
      name: `${rfqForm.contactName} (${rfqForm.companyName || 'Buyer'})`,
      email: rfqForm.email,
      phone: rfqForm.phone,
      message: `RFQ Quote Request for ${activeRfqProduct?.name} [HS Code: ${activeRfqProduct?.hsCode}]. Quantity: ${rfqForm.quantity}, Incoterms: ${rfqForm.incoterm}, Port: ${rfqForm.destinationPort}. Message: ${rfqForm.message}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });

    setRfqSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* PAGE HEADER BANNER */}
        <div className="bg-[#06102a] text-white rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>INDIAN EXPORT COMMODITIES & SEAFOOD CATALOG</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Global Import-Export Product Hub
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Explore authentic Indian export products across Marine & Seafood, Spices, Basmati Rice, Grains, Fresh Fruits, Nuts, and Oilseeds. Complete with official HS Codes, export specifications, and direct RFQ container pricing.
            </p>

            {/* Quick Export Stats Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-amber-300">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-700/80">
                <Anchor className="w-4 h-4 text-blue-400" />
                <span>MPEDA & APEDA Approved</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-700/80">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Exported to 12+ Global Markets</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-700/80">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>20ft FCL & 40ft Reefer Containers</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-6 text-left">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by Name, HS Code (e.g. 030617), Category or Destination Market (e.g. USA, EU)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image & Badges */}
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

                  {/* HS Code Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="text-[11px] font-black px-3 py-1 rounded-lg bg-slate-950/90 text-amber-400 border border-amber-500/40 uppercase tracking-wider backdrop-blur-md">
                      HS CODE: {product.hsCode}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-blue-600 text-white uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold text-[#06102a] tracking-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {product.desc}
                  </p>

                  {/* Key Export Meta */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-700 font-semibold">
                      <span className="text-slate-500">Origin:</span>
                      <span className="font-bold text-slate-900">{product.origin}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-700 font-semibold">
                      <span className="text-slate-500">Min Order (MOQ):</span>
                      <span className="font-bold text-amber-600">{product.minOrder}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1 pt-1">
                      <span className="text-slate-500 text-[11px] block w-full mb-1 font-semibold">Major Export Markets:</span>
                      {product.destinations.map((dest) => (
                        <span key={dest} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>View Specifications</span>
                </button>

                <button
                  onClick={() => handleOpenRfq(product)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request EXIM Quote (RFQ)</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* PRODUCT SPECIFICATIONS MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 text-left relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs font-black px-3 py-1 rounded-md bg-amber-100 text-amber-800 border border-amber-300">
                  HS CODE: {selectedProduct.hsCode}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-50 text-blue-700">
                  {selectedProduct.category}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#06102a]">
                {selectedProduct.name}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {selectedProduct.desc}
              </p>

              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-extrabold text-[#06102a] uppercase tracking-wider border-b border-slate-200 pb-2">
                  Technical Specifications & Export Packaging
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block mb-0.5 font-bold">Export Packaging:</span>
                    <span className="font-semibold text-slate-900">{selectedProduct.packaging}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block mb-0.5 font-bold">Minimum Order Quantity (MOQ):</span>
                    <span className="font-semibold text-amber-600">{selectedProduct.minOrder}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                    <span className="text-slate-500 block mb-0.5 font-bold">Origin & Sourcing Hub:</span>
                    <span className="font-semibold text-slate-900">{selectedProduct.origin}</span>
                  </div>
                </div>

                {/* Specs Object Detail */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2 text-xs">
                  <span className="font-extrabold text-blue-950 block">Quality & Grading Compliance:</span>
                  {Object.entries(selectedProduct.specs).map(([key, val]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-700 border-b border-blue-100/60 pb-1">
                      <span className="capitalize text-slate-500 font-bold">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-semibold text-slate-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
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
                  Request EXIM Quote
                </button>
              </div>

            </div>
          </div>
        )}

        {/* REQUEST QUOTATION (RFQ) MODAL */}
        {rfqModalOpen && activeRfqProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 text-left relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setRfqModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {rfqSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    RFQ Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your quotation request for <span className="font-bold text-slate-900">{activeRfqProduct.name}</span> has been routed to KP Sanjay's international trade desk. Our export manager will email you formal FCL/CIF pricing within 12 hours.
                  </p>
                  <button
                    onClick={() => setRfqModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRfqSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-amber-100 text-amber-800 border border-amber-300 uppercase tracking-wider">
                      OFFICIAL EXIM RFQ FORM
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#06102a] pt-1">
                      Request Container Quotation
                    </h3>
                    <p className="text-xs text-slate-600">
                      Product: <span className="font-bold text-blue-600">{activeRfqProduct.name}</span> (HS Code: {activeRfqProduct.hsCode})
                    </p>
                  </div>

                  <div className="space-y-4 text-xs font-semibold text-slate-800">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Company / Buyer Name *</label>
                        <input
                          type="text"
                          required
                          value={rfqForm.companyName}
                          onChange={(e) => setRfqForm({ ...rfqForm, companyName: e.target.value })}
                          placeholder="Global Imports Corp"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block mb-1">Contact Person *</label>
                        <input
                          type="text"
                          required
                          value={rfqForm.contactName}
                          onChange={(e) => setRfqForm({ ...rfqForm, contactName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Business Email *</label>
                        <input
                          type="email"
                          required
                          value={rfqForm.email}
                          onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                          placeholder="buyer@imports.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block mb-1">WhatsApp / Phone *</label>
                        <input
                          type="tel"
                          required
                          value={rfqForm.phone}
                          onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                          placeholder="+1 555-0199"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block mb-1">Target Quantity *</label>
                        <select
                          value={rfqForm.quantity}
                          onChange={(e) => setRfqForm({ ...rfqForm, quantity: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option>1x20ft FCL Container</option>
                          <option>1x40ft Reefer Container</option>
                          <option>2+ Containers / Bulk</option>
                          <option>Air Freight Trial Batch</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-1">Incoterms *</label>
                        <select
                          value={rfqForm.incoterm}
                          onChange={(e) => setRfqForm({ ...rfqForm, incoterm: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                          <option value="FOB">FOB (Free on Board - Mumbai)</option>
                          <option value="CFR">CFR (Cost & Freight)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-1">Destination Port *</label>
                        <input
                          type="text"
                          required
                          value={rfqForm.destinationPort}
                          onChange={(e) => setRfqForm({ ...rfqForm, destinationPort: e.target.value })}
                          placeholder="Port of Jebel Ali / Hamburg"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1">Packaging / Special Requirements (Optional)</label>
                      <textarea
                        rows={3}
                        value={rfqForm.message}
                        onChange={(e) => setRfqForm({ ...rfqForm, message: e.target.value })}
                        placeholder="Specify target price, private label requirements or glazing preference..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Container RFQ</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
