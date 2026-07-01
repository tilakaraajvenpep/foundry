import { useInView } from "react-intersection-observer";
import CountUpRaw from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, Shield, Award, Users, Cpu, ArrowRight, CheckCircle2, ChevronRight, Zap, Target, Star } from "lucide-react";
import { SERVICES, WHY_CHOOSE_US, TESTIMONIALS } from "../constants/staticData";

const CountUp = typeof CountUpRaw === "function" ? CountUpRaw : (CountUpRaw.default || CountUpRaw);

export default function Home({ onOpenRfq }) {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 150, suffix: "+", label: "Global Clients" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 35, suffix: "+", label: "Modern CNC Machines" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-32 xl:py-40">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-15 industrial-bg pointer-events-none" />
        
        {/* Abstract glowing blobs */}
        <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 h-80 w-80 rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400"
            >
              <Zap className="h-3 w-3 fill-current" />
              <span>AS9100 / ISO 9001:2015 CERTIFIED</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Precision CNC Machining & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-blue-400">
                Industrial Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto lg:mx-0 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed"
            >
              Delivering world-class CNC machining, sheet fabrication, precision tool engineering, laser cutting, and complex custom assemblies for high-reliability industries across India and export markets.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenRfq}
                className="rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-600/35 transition-all duration-200 cursor-pointer"
              >
                Get Free Quote
              </button>
              <Link
                to="/infrastructure"
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-850 hover:border-slate-650 transition-all duration-200"
              >
                View Infrastructure
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Image / Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                alt="CNC Machining" 
                className="w-full rounded-xl object-cover aspect-4/3 opacity-85 hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 rounded-xl" />
            </div>
            
            {/* Tech Specs Overlay */}
            <div className="absolute -bottom-6 -left-6 z-20 glass-panel rounded-2xl p-4 shadow-xl border border-white/10 max-w-[200px]">
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Metrology Lab</span>
              <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 font-semibold">Tolerances down to ±5 microns on coordinate CMM systems.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section ref={statsRef} className="relative z-20 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-xl dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center flex flex-col justify-center px-4 ${index >= 2 ? "pt-6 md:pt-0" : ""}`}>
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-500">
                  {statsInView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Our Capabilities</span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              World-Class Engineering Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We operate an advanced, climate-controlled CNC machining workshop and fabrication shop delivering full turn-key solutions.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.slice(0, 6).map((service) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="glass-card rounded-2xl overflow-hidden shadow-md flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {service.details}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {service.capabilities[0]}
                    </span>
                    <Link 
                      to={`/services#${service.id}`} 
                      className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-orange-600"
                    >
                      Read More <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-850 dark:bg-slate-800 dark:hover:bg-slate-700 px-6 py-3 text-sm font-bold text-white transition-all shadow-md"
            >
              <span>Explore All 13 Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Why Partner With Us</span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Engineered For High Reliability
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We leverage 25+ years of tooling optimization, strict quality policies, and direct material traceability.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {WHY_CHOOSE_US.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className="rounded-xl border border-slate-100 dark:border-slate-800/70 p-6 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800/50 transition-all duration-300 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                  {item.id === "precision" && <Target className="h-5 w-5" />}
                  {item.id === "machines" && <Cpu className="h-5 w-5" />}
                  {item.id === "engineers" && <Users className="h-5 w-5" />}
                  {item.id === "quality" && <Award className="h-5 w-5" />}
                  {item.id === "delivery" && <CheckCircle2 className="h-5 w-5" />}
                  {item.id === "pricing" && <Award className="h-5 w-5" />}
                  {item.id === "export" && <Zap className="h-5 w-5" />}
                  {item.id === "custom" && <Settings className="h-5 w-5" />}
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white mb-2 text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CLIENT MARQUEE */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-center text-xs font-bold text-slate-450 uppercase tracking-widest">Trusted By Industrial Giants</p>
        </div>
        <div className="flex w-full select-none overflow-hidden relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee whitespace-nowrap gap-12 py-3">
            {[
              "Larsen & Toubro", "Mahindra & Mahindra", "BHEL", "Tata Motors", "Siemens India", 
              "Bharat Forge", "Kirloskar Oil Engines", "Godrej Aerospace", "HAL", "ISRO Subcontractors"
            ].concat([
              "Larsen & Toubro", "Mahindra & Mahindra", "BHEL", "Tata Motors", "Siemens India", 
              "Bharat Forge", "Kirloskar Oil Engines", "Godrej Aerospace", "HAL", "ISRO Subcontractors"
            ]).map((logoName, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 text-slate-450 dark:text-slate-600 font-extrabold uppercase text-sm md:text-base tracking-widest"
              >
                <Settings className="h-5 w-5 animate-spin-slow text-slate-400 dark:text-slate-700" />
                <span>{logoName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CSS for Marquee animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}} />
      </section>

      {/* 6. CERTIFICATIONS */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Global Compliance</span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl leading-tight">
                Our Accreditations & Standards
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Apex Precision operates under stringent guidelines and holds key governmental & industrial certifications. We are a registered MSME unit, recognized in the Make in India initiative, and export compliance ready.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "ISO 9001:2015 Process Control Certification",
                  "Registered under MSME India",
                  "Make in India registered entity",
                  "Approved Supplier for Defense & Aerospace OEMs"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { title: "ISO 9001", subtitle: "Quality Systems", cert: "QMS Certification" },
                { title: "MSME Unit", subtitle: "Govt of India Registered", cert: "Micro-Small-Medium" },
                { title: "Startup India", subtitle: "Innovative Tech", cert: "DPIIT Recognized" },
                { title: "Make In India", subtitle: "Local Value Addition", cert: "100% Domestic Content" },
                { title: "Export Ready", subtitle: "ISPM-15 Wood Crates", cert: "Customs Clearance CE" },
                { title: "Lean Facility", subtitle: "5S Standardized", cert: "Zero Waste Target" }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="rounded-xl p-5 bg-white shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center flex flex-col justify-between h-40"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 dark:text-white text-sm">{cert.title}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5">{cert.subtitle}</p>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2 block">
                    {cert.cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SLIDER SECTION */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Client Feedback</span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="rounded-2xl p-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-orange-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-650 dark:text-slate-355 italic leading-relaxed">
                    "{t.review}"
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-900">
                  <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-950 dark:text-white text-xs">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="relative overflow-hidden bg-blue-600 py-16 dark:bg-blue-700">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Have a Manufacturing Requirement?
          </h2>
          <p className="mx-auto max-w-2xl text-blue-100 text-sm sm:text-base leading-relaxed">
            Upload your 2D CAD blueprints or 3D STEP files. Our estimation team will perform a manufacturing cycle-time simulation and return a detailed quote within 24-48 hours.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onOpenRfq}
              className="rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-slate-900 transition-all cursor-pointer"
            >
              Request a Quote Now
            </button>
            <Link
              to="/contact"
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
