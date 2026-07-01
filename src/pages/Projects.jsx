import { useState } from "react";
import { PRODUCTS } from "../constants/staticData";
import { Check, Download, Layers, ShieldAlert, Award, FileSpreadsheet, Percent, Timer, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [downloadingPart, setDownloadingPart] = useState(null);

  const handleDownload = (partName) => {
    setDownloadingPart(partName);
    setTimeout(() => {
      setDownloadingPart(null);
      alert(`Technical blueprint PDF drawing for ${partName} has been downloaded successfully (Dummy Action).`);
    }, 1500);
  };

  const showcaseMetrics = [
    { label: "Machining Cycle Time Reduction", value: "32%", detail: "Optimized multi-tool VMC milling setups" },
    { label: "Scrap Rate Reduction", value: "0.14%", detail: "IoT sensor tracking on automatic tooling" },
    { label: "Tooling Cost Savings", value: "18%", detail: "Custom designed carbide inserts" },
    { label: "Production Output Gain", value: "2.4x", detail: "Implemented continuous 3-shift HMC runs" }
  ];

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Component Catalog</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Products & Showcase</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Review our catalog of standard components, custom machined parts, materials, and dimensional tolerances.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER CASE STUDY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Explanations */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest block">
                Manufacturing Optimization
              </span>
              <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
                Case Study: Heavy Forged Gear Shaft
              </h2>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                Our client required high-volume gear shafts with a bearing shoulder tolerance of h6 fit (±5 microns). Historically, the raw forging suffered heavy surface stress cracking during turning.
              </p>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                By redesigning the tooling fixture to include live thermal vibration dampening and changing to a special grade Ti-coated carbide insert, we achieved the target tolerance in a single operation, eliminating the secondary surface grinding step entirely.
              </p>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-955 rounded-xl border dark:border-slate-800">
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 block">-32%</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase">Cycle Time</span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-955 rounded-xl border dark:border-slate-800">
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 block">-88%</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase">Scrap Rate</span>
                </div>
              </div>
            </div>

            {/* Right Col: Images Side by Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-sm aspect-4/3 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=400&q=80" 
                  alt="Raw steel forging" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-3 left-3 bg-slate-950/70 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                  Before: Raw Forging
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-sm aspect-4/3 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
                  alt="Finished machined gear shaft" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                  After: CNC Machined Part
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METRICS & STATISTICS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseMetrics.map((met, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border dark:border-slate-800 p-6 rounded-xl shadow-sm">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-500 block">{met.value}</span>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase tracking-wider">{met.label}</h4>
              <p className="text-[11px] text-slate-400 mt-1">{met.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATALOG GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Our Products</span>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Precision Components Catalog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div 
              key={prod.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              
              {/* Product Visual */}
              <div className="relative h-48 overflow-hidden bg-slate-50 border-b dark:border-slate-850">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Product Specifications details */}
              <div className="p-5 flex-1 space-y-4">
                <div>
                  <h4 className="font-bold text-slate-955 dark:text-white text-base">
                    {prod.name}
                  </h4>
                  <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mt-0.5">
                    Sector: {prod.industry}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-50 dark:border-slate-800/40">
                    <span className="text-slate-400 font-semibold">Material Grade</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-right max-w-[180px] truncate">{prod.material}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50 dark:border-slate-800/40">
                    <span className="text-slate-400 font-semibold">Standard Tolerance</span>
                    <span className="font-bold text-slate-850 dark:text-slate-100">{prod.tolerance}</span>
                  </div>
                </div>
              </div>

              {/* Subfooter download button */}
              <div className="p-5 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
                <button
                  onClick={() => handleDownload(prod.name)}
                  disabled={downloadingPart !== null}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Download className="h-4.5 w-4.5" />
                  <span>{downloadingPart === prod.name ? "Downloading..." : "Download Drawing"}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
