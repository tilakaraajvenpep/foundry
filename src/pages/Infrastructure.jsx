import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MACHINERY } from "../constants/staticData";
import { Cpu, Settings, Wrench, CheckCircle, TableProperties } from "lucide-react";
import { motion } from "framer-motion";

export default function Infrastructure() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [location]);

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Our Factory Shop Floor</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Machinery & Infrastructure</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Equipped with multi-axis Japanese and German machining technology, continuous automated lines, and a dedicated temperature-controlled inspection lab.
          </p>
        </div>
      </section>

      {/* Machinery Catalog List */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Machinery Anchor Quick Navigation */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 shadow-sm flex flex-wrap gap-2 justify-center">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest w-full text-center mb-2">
            Jump to Machine Specification
          </span>
          {MACHINERY.map(m => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-450 dark:hover:border-blue-500 bg-slate-50 dark:bg-slate-950 text-[11px] font-bold text-slate-700 dark:text-slate-300 transition-colors"
            >
              {m.name.split(" (")[0]}
            </a>
          ))}
        </div>

        {MACHINERY.map((machine, index) => (
          <div
            key={machine.id}
            id={machine.id}
            className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            
            {/* Left: Image & Applications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-4/3 shadow-sm">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Unit {index + 1}
                </div>
              </div>

              {/* Applications List */}
              <div className="rounded-xl bg-slate-50 dark:bg-slate-955 p-5 border border-slate-100 dark:border-slate-850">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Wrench className="h-4 w-4 text-blue-600" />
                  <span>Key Production Parts</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {machine.applications.map((app, aidx) => (
                    <li key={aidx} className="flex gap-2 items-center">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Technical Datasheet */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white">
                  {machine.name}
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 leading-relaxed">
                  {machine.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="rounded-xl border border-slate-150 dark:border-slate-800 overflow-hidden shadow-inner">
                <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 border-b border-slate-150 dark:border-slate-850 flex items-center gap-2">
                  <TableProperties className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-350 uppercase tracking-widest">
                    Machine Datasheet Specifications
                  </span>
                </div>
                <table className="w-full text-xs text-left divide-y divide-slate-150 dark:divide-slate-800">
                  <tbody className="divide-y divide-slate-150 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    {Object.entries(machine.specs).map(([specKey, specVal]) => (
                      <tr key={specKey} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                        <td className="px-4 py-3 font-semibold text-slate-500 dark:text-slate-450 w-1/3 border-r dark:border-slate-850">
                          {specKey}
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-800 dark:text-slate-200">
                          {specVal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
