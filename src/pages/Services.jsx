import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVICES } from "../constants/staticData";
import { Search, ChevronRight, FileText, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function Services({ onOpenRfq }) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const location = useLocation();

  // Scroll to hash element if present on load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [location]);

  // Filter logic
  const filteredServices = SERVICES.filter(service => {
    const matchesQuery = service.title.toLowerCase().includes(query.toLowerCase()) || 
                         service.description.toLowerCase().includes(query.toLowerCase()) ||
                         service.details.toLowerCase().includes(query.toLowerCase());
    
    if (activeTab === "all") return matchesQuery;
    if (activeTab === "machining") return matchesQuery && (service.id.includes("cnc") || service.id.includes("mc"));
    if (activeTab === "fabrication") return matchesQuery && (service.id.includes("fabrication") || service.id.includes("welding") || service.id.includes("laser"));
    if (activeTab === "solutions") return matchesQuery && (!service.id.includes("cnc") && !service.id.includes("mc") && !service.id.includes("fabrication") && !service.id.includes("welding") && !service.id.includes("laser"));
    return matchesQuery;
  });

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Our Engineering Capabilities</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Manufacturing Services</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From single prototype validation units to high-volume multi-pallet continuous production, we deliver excellence at micrometric scales.
          </p>
        </div>
      </section>

      {/* Filter Controls Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {[
              { id: "all", label: "All Services" },
              { id: "machining", label: "CNC Machining" },
              { id: "fabrication", label: "Fabrication & Laser" },
              { id: "solutions", label: "Solutions & Assembly" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-650 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 flex items-center">
            <Search className="absolute left-3.5 h-4.5 w-4.5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 bg-slate-50 text-slate-800 rounded-lg text-xs focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

        </div>
      </section>

      {/* Services List */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0 lg:divide-x dark:divide-slate-800 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 text-white lg:hidden">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="hidden lg:block text-2xl font-extrabold text-slate-950 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-650 dark:text-slate-350 font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Capabilities grid */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Machine Capacity & Tolerance Limits
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {service.capabilities.map((cap, cidx) => (
                      <div key={cidx} className="flex gap-2 items-center text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-500 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RFQ Trigger link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-450 dark:text-slate-500">
                    Lead time: 5-15 Days (Prototypes)
                  </span>
                  <button
                    onClick={onOpenRfq}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-950/70 px-4.5 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 transition-colors cursor-pointer"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Inquire About {service.title}</span>
                  </button>
                </div>

              </div>

            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl dark:bg-slate-900 border dark:border-slate-800">
            <SlidersHorizontal className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-700 dark:text-slate-300">No services match your filters</p>
            <button
              onClick={() => { setQuery(""); setActiveTab("all"); }}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-2 hover:underline"
            >
              Clear filters and search again
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
