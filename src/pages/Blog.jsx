import { useState } from "react";
import { BLOGS } from "../constants/staticData";
import { Calendar, Tag, Clock, ArrowRight, X, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["All", "CNC Machining", "Precision Engineering", "Fabrication", "Industry 4.0"];

  const filteredBlogs = activeCategory === "All"
    ? BLOGS
    : BLOGS.filter(b => b.category === activeCategory);

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-955 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Engineering Knowledge Base</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Latest Articles & Insights</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Read practical guides on GD&T tolerances, tool wear optimizations, robotic assembly, and digital manufacturing trends.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-10">
        <div className="flex flex-wrap gap-2 justify-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "text-slate-650 hover:bg-slate-100 dark:text-slate-350 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((post) => (
            <div 
              key={post.id}
              className="bg-white dark:bg-slate-900 border border-slate-150/70 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-[450px] group"
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {post.category}
                </div>
              </div>

              {/* Text metadata and summary */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex gap-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      5 Min Read
                    </span>
                  </div>
                  
                  <h3 className="font-extrabold text-slate-950 dark:text-white text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-550 hover:text-orange-600 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FULL ARTICLE MODAL READER */}
      <AnimatePresence>
        {selectedArticle !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Reader Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col z-10"
            >
              {/* Close reader */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 rounded-full p-2 bg-slate-950/60 hover:bg-slate-950 text-white transition-colors cursor-pointer border border-white/5"
                aria-label="Close Reader"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Hero header */}
              <div className="relative h-60 bg-slate-900 overflow-hidden shrink-0">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover opacity-60" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">{selectedArticle.title}</h2>
                </div>
              </div>

              {/* Text content scroll */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-grow">
                {/* Meta details */}
                <div className="flex gap-5 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-3 dark:border-slate-800">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-blue-600" /> Date: {selectedArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-blue-600" /> Read: 5 Min</span>
                  <span className="flex items-center gap-1"><BookOpen className="h-4 w-4 text-blue-600" /> Author: Engineering Metrology Dept</span>
                </div>

                <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
                  <p className="font-semibold text-slate-950 dark:text-white border-l-4 border-orange-500 pl-4 py-1.5 bg-slate-50 dark:bg-slate-955 rounded">
                    {selectedArticle.summary}
                  </p>
                  
                  {/* Hardcoded detail text to support high-quality articles */}
                  <p>{selectedArticle.content}</p>
                  
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pt-2">Technical Implementation Details</h4>
                  <p>
                    Precision manufacturing depends heavily on analyzing machining cycle steps. By matching specific machine feed speeds (mm/min) with appropriate coolant concentration percentages, tool heat dissipation is improved, resulting in superior quality component surface finishes and longer tool life.
                  </p>
                  <p>
                    Furthermore, statistical process control (SPC) charts help monitor dimension drift. When deviation approaches warning limits, tool offsets are adjusted on the CNC control panel, correcting tolerances before parts go out of bounds. This prevents unnecessary scrap generation and maintains standard quality targets.
                  </p>
                </div>

                {/* Subfooter */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="rounded-lg bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors"
                  >
                    Done Reading
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
