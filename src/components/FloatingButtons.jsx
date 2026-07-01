import { useState, useEffect } from "react";
import { MessageCircle, FileText, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons({ onOpenRfq }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Request Quote */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenRfq}
        aria-label="Request Quote"
        className="flex h-12 items-center gap-2 rounded-full bg-orange-500 px-4 text-white shadow-xl hover:bg-orange-600 transition-colors cursor-pointer"
      >
        <FileText className="h-5 w-5" />
        <span className="text-sm font-bold hidden sm:inline">Request Quote</span>
      </motion.button>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/919999999999?text=Hello%20Apex%20Precision%20Engineering,%20I%20have%20an%20industrial%20manufacturing/machining%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition-colors cursor-pointer"
      >
        <MessageCircle className="h-6 w-6 fill-white text-emerald-500" />
      </motion.a>
    </div>
  );
}
