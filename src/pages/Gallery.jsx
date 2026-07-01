import { useState, useEffect } from "react";
import { GALLERY_ITEMS } from "../constants/staticData";
import { X, ChevronLeft, ChevronRight, Maximize2, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items
  const filteredItems = activeFilter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const categories = ["All", "Machines", "Production", "Workers", "Inspection", "Assembly", "Packaging", "Loading", "Office"];

  // Key navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handlePrev = () => {
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Visual Tour</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Factory Media Gallery</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Take a visual walk through our automated production lines, inspection cells, packaging stations, and engineering office.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-10">
        <div className="flex flex-wrap gap-2 justify-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeFilter === cat
                  ? "bg-blue-600 text-white"
                  : "text-slate-650 hover:bg-slate-100 dark:text-slate-350 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Image Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/50 group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-300"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <span className="self-end rounded bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold truncate max-w-[200px]">{item.title}</h4>
                    <p className="text-[10px] text-slate-300">Click to enlarge</p>
                  </div>
                  <Maximize2 className="h-4.5 w-4.5 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full z-10 flex flex-col items-center gap-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-450 p-1.5 rounded-lg bg-slate-900/60 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Main Photo Visual */}
              <div className="relative overflow-hidden rounded-xl bg-slate-900 max-h-[70vh] flex items-center justify-center border border-white/10">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] object-contain max-w-full"
                />

                {/* Left Switcher */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center transition-colors border border-white/5 cursor-pointer"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Right Switcher */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center transition-colors border border-white/5 cursor-pointer"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Title & Index counter */}
              <div className="text-center text-white space-y-1">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                  {filteredItems[lightboxIndex].category} Division
                </span>
                <h4 className="text-base font-bold">{filteredItems[lightboxIndex].title}</h4>
                <p className="text-xs text-slate-400">
                  Photo {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
