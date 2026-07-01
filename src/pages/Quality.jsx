import { motion } from "framer-motion";
import { ShieldCheck, Award, FileSpreadsheet, Ruler, Search, Settings, CheckCircle2 } from "lucide-react";
import { QUALITY_PROCESS } from "../constants/staticData";

export default function Quality() {
  const metrologyTools = [
    {
      name: "Zeiss CNC 3D CMM",
      type: "Coordinate Measuring Machine",
      accuracy: "Volumetric Accuracy: 1.7 + L/333 μm",
      use: "Validating complex 3D profiles, hole positions, coaxiality, and GD&T features."
    },
    {
      name: "Mitutoyo LH-600F",
      type: "Digital Linear Height Gauge",
      accuracy: "Accuracy: (1.1 + 0.6L/600) μm",
      use: "Rapid, highly precise checks of heights, steps, diameters, and runout on the production floor."
    },
    {
      name: "Taylor Hobson Surtronic",
      type: "Digital Surface Roughness Tester",
      accuracy: "Resolution down to 0.01 Ra",
      use: "Measuring finish textures, Ra/Rz/Rq profiles on shafts and food-grade components."
    },
    {
      name: "Mitutoyo Micrometers",
      type: "Digital Outside/Inside Gauges",
      accuracy: "Calibration tolerance: ±1 μm",
      use: "Daily shop-floor inspection of turned diameters, bore depths, and pin sizes."
    },
    {
      name: "Vernier Digital Calipers",
      type: "Linear Sliding Gauges",
      accuracy: "Resolution: 0.01 mm",
      use: "First-level rough dimensional verification and general length checks."
    },
    {
      name: "Rockwell & Vickers Testers",
      type: "Mechanical Hardness Metrology",
      accuracy: "±0.5 HRC / HV",
      use: "Validating case depths and surface hardness profiles on heat-treated steels."
    }
  ];

  const corePillars = [
    {
      title: "ISO 9001:2015",
      icon: Award,
      desc: "Our quality management processes are systematically audited to align with modern international supply standards."
    },
    {
      title: "Lean 5S Manufacturing",
      icon: Settings,
      desc: "Rigid shop-floor organization (Sort, Set in order, Shine, Standardize, Sustain) eliminates waste and prevents cross-contamination."
    },
    {
      title: "Full Material Traceability",
      icon: FileSpreadsheet,
      desc: "Every part is marked with batch serialization linked back to the original steel mill test certificate heat number."
    }
  ];

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Quality Assurance</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Zero-Defect Quality Policy</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Operating a temperature-controlled metrology lab and integrating scheduled checks across every single stage of production.
          </p>
        </div>
      </section>

      {/* Core Quality Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex gap-4 items-start"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-955 dark:text-white text-base mb-1">{pillar.title}</h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quality Process Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Process Flow</span>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Our Quality Assurance Process</h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUALITY_PROCESS.map((proc) => (
            <div 
              key={proc.id}
              className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between h-64"
            >
              {/* Giant number watermark */}
              <div className="absolute -top-3 -right-3 text-7xl font-extrabold text-slate-100 dark:text-slate-800/40 pointer-events-none select-none font-mono">
                {proc.step}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
                  Quality Milestone
                </span>
                <h4 className="font-bold text-slate-950 dark:text-white text-sm mb-3">
                  {proc.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {proc.description}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Gate Approval Required</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspection Equipment Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Calibration & Standards</span>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Metrology Lab Inspection Equipment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrologyTools.map((tool, idx) => (
            <div 
              key={idx}
              className="rounded-xl border border-slate-150 p-5 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between h-48"
            >
              <div>
                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {tool.type}
                </span>
                <h4 className="font-bold text-slate-955 dark:text-white text-sm mt-1 mb-2">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {tool.use}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                <Ruler className="h-3.5 w-3.5" />
                <span className="font-mono">{tool.accuracy}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
