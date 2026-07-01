import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import FloatingButtons from "../components/FloatingButtons";
import RFQModal from "../components/RFQModal";
import SearchModal from "../components/SearchModal";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [theme, toggleTheme] = useTheme();
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Navigation Header */}
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenRfq={() => setIsRfqOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Page Area */}
      <main className="flex-1 flex flex-col">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-grow flex flex-col"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <Footer onOpenRfq={() => setIsRfqOpen(true)} />

      {/* Floating Buttons Widget */}
      <FloatingButtons onOpenRfq={() => setIsRfqOpen(true)} />

      {/* RFQ Modal */}
      <RFQModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

    </div>
  );
}
