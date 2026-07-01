import { motion } from "framer-motion";
import { Award, Compass, Eye, Heart, Calendar, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { TIMELINE, MANAGEMENT } from "../constants/staticData";

export default function About() {
  const values = [
    {
      title: "Dimensional Precision",
      icon: Award,
      desc: "We adhere strictly to technical blueprints and micrometric guidelines. If it is not within tolerance, it does not leave our shop floor."
    },
    {
      title: "Ethical Leadership",
      icon: ShieldCheck,
      desc: "Complete transparency with customers, certified mill testing authenticity, and absolute protection of proprietary design IP."
    },
    {
      title: "Engineering Innovation",
      icon: Activity,
      desc: "Continuous investments in multi-axis machinery, CAD/CAM training, smart tooling, and automated robotic positioning fixtures."
    },
    {
      title: "Client-Centric Success",
      icon: Heart,
      desc: "Flexible production scaling, Kanban inventory agreements, and rapid technical support to minimize customer assembly downtime."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Who We Are</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">About Apex Precision</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Leading industrial manufacturing in Coimbatore, India since 2001. Specializing in high-precision component engineering for global supply chains.
          </p>
        </div>
      </section>

      {/* Intro & Factory Overview Section */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Animated Image Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=400&q=80" 
                alt="Factory floor" 
                className="rounded-xl object-cover h-56 w-full shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=400&q=80" 
                alt="Worker handling steel" 
                className="rounded-xl object-cover h-40 w-full shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                alt="CAD engineering design" 
                className="rounded-xl object-cover h-40 w-full shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=400&q=80" 
                alt="CMM Metrology inspection" 
                className="rounded-xl object-cover h-56 w-full shadow-md"
              />
            </div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
              25 Years of Precision Engineering Excellence
            </h2>
            <p className="text-slate-600 dark:text-slate-450 leading-relaxed text-sm">
              Founded at the turn of the millennium as a small, local machining workshop, Apex Precision Engineering has grown into a world-class manufacturing powerhouse. Our facility spans 30,000 square feet in Race Course, Coimbatore, housing state-of-the-art multi-axis CNC machines and automated manufacturing lines.
            </p>
            <p className="text-slate-600 dark:text-slate-450 leading-relaxed text-sm">
              We employ over 80 expert programmers, quality auditors, sheet-metal fabricators, and certified welders. By operating 24 hours a day in three shifts, we maintain massive production capacity, delivering over 50,000 precision parts monthly with defect rates under 150 PPM (Parts Per Million).
            </p>
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="rounded-xl p-5 bg-white shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold mb-2">
                  <Compass className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-wider">Our Mission</span>
                </div>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                  To provide OEMs with zero-defect custom mechanical components and fabrication assemblies through rigid process controls, advanced CAM toolpaths, and transparent scheduling.
                </p>
              </div>
              
              <div className="rounded-xl p-5 bg-white shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-orange-500 font-bold mb-2">
                  <Eye className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-wider">Our Vision</span>
                </div>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                  To become India's premier digitally integrated engineering partner, setting international benchmarks in high-speed milling tolerances, lean manufacturing, and green factory operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white dark:bg-slate-900 py-16 border-t border-b border-slate-100 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const ValIcon = v.icon;
              return (
                <div key={i} className="p-5 rounded-xl border border-slate-100 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="mb-3 text-blue-600 dark:text-blue-500">
                    <ValIcon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Our Journey</span>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Corporate Growth Timeline</h2>
        </div>

        {/* Timeline Line & Milestones */}
        <div className="relative border-l border-blue-500/25 dark:border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
          {TIMELINE.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-600 ring-4 ring-blue-50 dark:ring-blue-950/60">
                <Calendar className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" />
              </div>
              
              <div className="rounded-xl bg-white shadow-sm border border-slate-100 p-5 dark:bg-slate-900 dark:border-slate-800">
                <span className="text-xs font-bold text-orange-500 dark:text-orange-400 font-mono tracking-wide">
                  YEAR {item.year}
                </span>
                <h4 className="text-base font-bold text-slate-950 dark:text-white mt-0.5">{item.title}</h4>
                <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership / Management Team Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Our Leadership</span>
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Expert Management</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {MANAGEMENT.map((leader, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-2xl overflow-hidden shadow-sm flex flex-col h-full group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-sm font-bold truncate">{leader.name}</h4>
                    <p className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase mt-0.5">{leader.role}</p>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
