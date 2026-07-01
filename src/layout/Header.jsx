import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Sun, Moon, Menu, X, ChevronDown, Settings, Shield, Cpu, Flame, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../constants/staticData";

export default function Header({ theme, toggleTheme, onOpenRfq, onOpenSearch }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasMega: true },
    { name: "Industries", path: "/industries" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Quality", path: "/quality" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  // Group services for the Mega Menu
  const megaMenuData = [
    {
      category: "CNC Machining",
      icon: Cpu,
      items: SERVICES.filter(s => s.id.includes("cnc") || s.id.includes("mc"))
    },
    {
      category: "Metal Fabrication",
      icon: Flame,
      items: SERVICES.filter(s => s.id.includes("fabrication") || s.id.includes("welding") || s.id.includes("laser"))
    },
    {
      category: "Solutions & Engineering",
      icon: Settings,
      items: SERVICES.filter(s => !s.id.includes("cnc") && !s.id.includes("mc") && !s.id.includes("fabrication") && !s.id.includes("welding") && !s.id.includes("laser"))
    }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "glass-nav shadow-lg py-3" 
          : "bg-white/95 dark:bg-slate-950/95 py-5 border-b border-slate-100 dark:border-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-300">
              <Settings className="h-6 w-6 animate-spin-slow" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-wider text-slate-900 dark:text-white uppercase leading-none block">
                Apex Precision
              </span>
              <span className="text-[10px] font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest leading-none mt-0.5 block">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                      className={`flex items-center gap-1 py-2 text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer ${
                        isActive || location.pathname.startsWith("/services")
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full z-50 w-[780px] -translate-x-[40%] mt-2 rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-6"
                        >
                          {megaMenuData.map((category) => {
                            const CatIcon = category.icon;
                            return (
                              <div key={category.category} className="space-y-3">
                                <div className="flex items-center gap-2 border-b border-slate-100 pb-2 dark:border-slate-800">
                                  <CatIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    {category.category}
                                  </span>
                                </div>
                                <ul className="space-y-2">
                                  {category.items.map((item) => (
                                    <li key={item.id}>
                                      <Link
                                        to={`/services#${item.id}`}
                                        className="block rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-medium"
                                      >
                                        <p className="font-semibold text-slate-900 dark:text-white text-xs">{item.title}</p>
                                        <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal">{item.description}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Search, Theme Toggle, Quote Button, Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              title="Search Site (Ctrl+K)"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={toggleTheme}
              title="Toggle Theme"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Request Quote Button */}
            <button
              onClick={onOpenRfq}
              className="hidden sm:inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200 cursor-pointer"
            >
              Request Quote
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors xl:hidden cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] z-40 bg-slate-900/60 backdrop-blur-sm xl:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-[65px] bottom-0 z-40 w-80 bg-white shadow-2xl dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 overflow-y-auto xl:hidden flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 dark:border-slate-800">
                  Navigation Menu
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-base font-semibold py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                        location.pathname === link.path
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                <button
                  onClick={onOpenRfq}
                  className="w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Request Quote
                </button>
                <div className="text-center text-[10px] text-slate-400 dark:text-slate-500">
                  Precision Engineered. Quality Delivered.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
