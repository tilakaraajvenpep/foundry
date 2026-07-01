import { useState, useEffect, useRef } from "react";
import { Search, X, CornerDownLeft, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { SERVICES, MACHINERY, PRODUCTS, INDUSTRIES } from "../constants/staticData";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const keyword = query.toLowerCase();
    const matches = [];

    // Search Pages/Routes
    const routes = [
      { name: "Home Page", path: "/", type: "Page", desc: "Main landing page, statistics, and overview" },
      { name: "About Us", path: "/about", type: "Page", desc: "Mission, vision, timeline, leadership team" },
      { name: "Services", path: "/services", type: "Page", desc: "Detailed list of our engineering services" },
      { name: "Industries Served", path: "/industries", type: "Page", desc: "Key sectors we manufacture parts for" },
      { name: "Infrastructure / Machinery", path: "/infrastructure", type: "Page", desc: "CNC shop-floor equipment and CMM lab details" },
      { name: "Quality Controls", path: "/quality", type: "Page", desc: "ISO compliance, inspection, and traceability processes" },
      { name: "Completed Projects", path: "/projects", type: "Page", desc: "Industrial gallery and client success stories" },
      { name: "Factory Gallery", path: "/gallery", type: "Page", desc: "Production floor, workers, and packaging images" },
      { name: "Careers & Jobs", path: "/careers", type: "Page", desc: "Current job openings and application forms" },
      { name: "Latest Blog / Articles", path: "/blog", type: "Page", desc: "Manufacturing articles, Industry 4.0 guidelines" },
      { name: "Contact & Location", path: "/contact", type: "Page", desc: "Address, phone, email, and Google Maps location" }
    ];

    routes.forEach(r => {
      if (r.name.toLowerCase().includes(keyword) || r.desc.toLowerCase().includes(keyword)) {
        matches.push({ ...r, key: `route-${r.path}` });
      }
    });

    // Search Services
    SERVICES.forEach(s => {
      if (s.title.toLowerCase().includes(keyword) || s.description.toLowerCase().includes(keyword)) {
        matches.push({
          name: s.title,
          path: `/services#${s.id}`,
          type: "Service",
          desc: s.description,
          key: `service-${s.id}`
        });
      }
    });

    // Search Machinery
    MACHINERY.forEach(m => {
      if (m.name.toLowerCase().includes(keyword) || m.description.toLowerCase().includes(keyword)) {
        matches.push({
          name: m.name,
          path: `/infrastructure#${m.id}`,
          type: "Machinery",
          desc: m.description,
          key: `machinery-${m.id}`
        });
      }
    });

    // Search Products
    PRODUCTS.forEach(p => {
      if (p.name.toLowerCase().includes(keyword) || p.material.toLowerCase().includes(keyword) || p.industry.toLowerCase().includes(keyword)) {
        matches.push({
          name: p.name,
          path: `/projects`, // Link to products page/showcase
          type: "Product",
          desc: `Material: ${p.material} | Tolerance: ${p.tolerance}`,
          key: `product-${p.id}`
        });
      }
    });

    // Limit to 8 results
    setResults(matches.slice(0, 8));
  }, [query]);

  const handleResultClick = (path) => {
    onClose();
    // For hash routes, wait dynamic time and scroll
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      navigate(route);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      navigate(path);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mt-10 md:mt-20 flex flex-col max-h-[80vh]"
        >
          {/* Search Box */}
          <div className="relative flex items-center border-b border-slate-200 p-4 dark:border-slate-800">
            <Search className="h-6 w-6 text-slate-400 ml-2" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, products, machinery, pages..."
              className="w-full bg-transparent px-4 py-2 text-lg text-slate-900 focus:outline-none dark:text-white"
            />
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="overflow-y-auto p-4 flex-grow">
            {results.length > 0 ? (
              <div className="space-y-1">
                <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Search Results ({results.length})</span>
                {results.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleResultClick(item.path)}
                    className="w-full text-left flex items-start gap-4 rounded-xl p-3 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
                  >
                    <div className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 uppercase mt-0.5 min-w-[85px] text-center">
                      {item.type}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{item.desc}</p>
                    </div>
                    <CornerDownLeft className="h-4 w-4 text-slate-300 dark:text-slate-600 self-center opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">No results found for "{query}"</p>
                <p className="text-sm text-slate-400 mt-1">Check spelling or search for broader keywords like "CNC", "Laser", or "ISO".</p>
              </div>
            ) : (
              <div className="py-6 px-4">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  <Sparkles className="h-5 w-5" />
                  <span>Popular Searches</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { label: "CNC Machining Capabilities", path: "/services" },
                    { label: "Precision Machined Shafts", path: "/projects" },
                    { label: "5-Axis Machining Center", path: "/infrastructure" },
                    { label: "ISO Quality Certificates", path: "/quality" },
                    { label: "Open Engineering Jobs", path: "/careers" },
                    { label: "Request a Free Quote", path: "/contact" }
                  ].map((search, i) => (
                    <button
                      key={i}
                      onClick={() => handleResultClick(search.path)}
                      className="text-left px-4 py-2.5 rounded-xl border border-slate-100 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/20 text-sm text-slate-700 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:bg-blue-950/20 dark:text-slate-300 dark:hover:text-blue-400 transition-all"
                    >
                      {search.label}
                    </button>
                  ))}
                </div>
                <div className="mt-8 border-t border-slate-100 pt-4 dark:border-slate-800 flex justify-between text-xs text-slate-400">
                  <span>Press <kbd className="font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">ESC</kbd> to close</span>
                  <span>Use keywords to filter</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
