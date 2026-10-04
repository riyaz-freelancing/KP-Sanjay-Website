import React from 'react';
import { EXPORT_PRODUCTS } from '../data/exportProducts';
import { Sparkles, ArrowRight, Anchor, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductsPreviewSection = () => {
  // Show top 6 featured export commodities
  const featuredProducts = EXPORT_PRODUCTS.slice(0, 6);

  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>INDIAN EXPORT COMMODITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06102a] tracking-tight leading-tight">
              Featured Export Products & <span className="text-gradient-amber">Commodities</span>
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              We source, process, and package authentic Indian export commodities including Frozen Seafood, Basmati Rice, Spices, Fruits, and Grains for international buyers worldwide.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all shrink-0 self-start md:self-auto"
          >
            <span>View Full Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-black px-3 py-1 rounded-lg bg-slate-950/90 text-amber-400 border border-amber-500/40 uppercase tracking-wider backdrop-blur-md">
                      HS CODE: {product.hsCode}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                    {product.category}
                  </span>

                  <h3 className="text-xl font-bold text-[#06102a] tracking-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {product.desc}
                  </p>

                  <div className="pt-3 text-xs font-semibold text-slate-700 flex items-center justify-between border-t border-slate-200/80">
                    <span className="text-slate-500">Min Order Quantity:</span>
                    <span className="font-bold text-amber-600">{product.minOrder}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/products"
                  className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-blue-600 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Request EXIM Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
