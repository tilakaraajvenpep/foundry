import { motion } from "framer-motion";
import { Car, Plane, Activity, Droplet, Shield, Cpu, Scissors, Coffee, Sprout, Zap, Smartphone, Anchor, Settings } from "lucide-react";
import { INDUSTRIES } from "../constants/staticData";

const iconMap = {
  automotive: Car,
  aerospace: Plane,
  medical: Activity,
  "oil-gas": Droplet,
  defence: Shield,
  "industrial-automation": Cpu,
  "textile-machinery": Scissors,
  "food-processing": Coffee,
  agriculture: Sprout,
  "power-generation": Zap,
  electronics: Smartphone,
  "heavy-engineering": Anchor
};

const standardsMap = {
  automotive: "IATF 16949 / PPAP Level 3 compliant",
  aerospace: "AS9100 compliant processes, full chemical analysis",
  medical: "ISO 13485 compliance structures, passive coatings",
  "oil-gas": "NACE corrosion testing, high pressure seals",
  defence: "Certified heat treatment, registered MIL-SPEC sourcing",
  "industrial-automation": "Fast cycle machining, PEM hardware integration",
  "textile-machinery": "Surface induction hardening, DIN 7 gear accuracy",
  "food-processing": "SS316L mirror polish finishing (Ra < 0.4μm)",
  agriculture: "Structural welding, heavy load testing",
  "power-generation": "UT & dye-penetrant weld testing, wear coatings",
  electronics: "Anodizing Class II/III, heatsink optimization",
  "heavy-engineering": "AWS D1.1 certified large steel fabrication"
};

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Sectors We Supply</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Industries We Serve</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Delivering customized mechanical components conforming to specific safety, environmental, and dimensional standards.
          </p>
        </div>
      </section>

      {/* Grid List of Industries */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {INDUSTRIES.map((industry) => {
            const SectorIcon = iconMap[industry.id] || Settings;
            const standardText = standardsMap[industry.id] || "ISO quality certified";
            
            return (
              <motion.div 
                key={industry.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 shadow-sm flex flex-col justify-between h-72 border border-slate-200/50"
              >
                <div>
                  {/* Top line with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 shadow-inner">
                      <SectorIcon className="h-6 w-6" />
                    </div>
                    <span className="text-[9px] font-bold text-orange-500 bg-orange-500/10 dark:bg-orange-550/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Active Supply
                    </span>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {industry.description}
                  </p>
                </div>

                {/* Subfooter: Standards compliance */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                    Quality Standard Compliance
                  </span>
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-350 mt-1 block">
                    {standardText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Trust Quote / Banner */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="rounded-2xl bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-850 p-8 shadow-sm">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            "By pairing specialized tool setups (like custom CBN inserts for hardened steel or diamond endmills for carbon composites) with certified mill-test heat numbers, we guarantee component durability in highly demanding operational environments."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Engineering Metrology Team</span>
          </div>
        </div>
      </section>

    </div>
  );
}
