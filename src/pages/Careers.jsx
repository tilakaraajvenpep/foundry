import { useState } from "react";
import { useForm } from "react-hook-form";
import { CAREERS } from "../constants/staticData";
import { MapPin, Briefcase, Calendar, CheckCircle2, ChevronRight, X, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplied, setIsApplied] = useState(false);
  const [fileName, setFileName] = useState("");
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplied(false);
    reset();
    setFileName("");
  };

  const onSubmit = (data) => {
    setIsApplied(true);
    reset();
    setFileName("");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const benefits = [
    { title: "Continuous Technical Training", desc: "Sponsorship for Mastercam, SolidWorks certification, GD&T seminars, and machinery safety training." },
    { title: "Comprehensive Health Cover", desc: "Corporate medical insurance covering employees and immediate family members, with annual checkups." },
    { title: "Performance Bonus Scales", desc: "Bi-annual productivity bonuses tied to shop floor OEE benchmarks and quality PPM targets." },
    { title: "Safety-First Environment", desc: "ISO 45001 compliance standards, clean indoor air filtration systems, and full protective gear allowances." }
  ];

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Join Our Team</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Careers at Apex Precision</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Build your future with a team that values precision, engineering expertise, and safety above all.
          </p>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Life at Apex</span>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Employee Benefits</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex gap-4 items-start"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base mb-1.5">{b.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings list */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Available Openings</span>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">Job Opportunities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAREERS.map((job) => (
            <div 
              key={job.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-96 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                    <Briefcase className="h-3 w-3" />
                    {job.dept}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                    <MapPin className="h-3 w-3" />
                    {job.loc}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                    <Calendar className="h-3 w-3" />
                    Exp: {job.exp}
                  </span>
                </div>

                {/* Job Info */}
                <div>
                  <h3 className="text-lg font-bold text-slate-955 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {job.desc}
                  </p>
                </div>

                {/* Requirements list */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                    Candidate Requirements
                  </span>
                  <ul className="space-y-1 text-xs">
                    {job.reqs.slice(0, 3).map((req, ridx) => (
                      <li key={ridx} className="flex gap-2 items-center text-slate-700 dark:text-slate-350 truncate">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => handleApplyClick(job)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Apply For Job</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* JOB APPLICATION MODAL */}
      <AnimatePresence>
        {selectedJob !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-h-[85vh] flex flex-col z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">Apply for Position</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-0.5">{selectedJob.title}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-655"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="overflow-y-auto p-6 flex-1">
                {!isApplied ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-350">Full Name</label>
                      <input
                        type="text"
                        {...register("fullName", { required: "Name is required" })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="e.g. Rahul Patil"
                      />
                      {errors.fullName && <span className="text-[10px] text-orange-500">{errors.fullName.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-355">Email Address</label>
                        <input
                          type="email"
                          {...register("email", { required: "Email is required" })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          placeholder="name@mail.com"
                        />
                        {errors.email && <span className="text-[10px] text-orange-500">{errors.email.message}</span>}
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-355">Phone Number</label>
                        <input
                          type="tel"
                          {...register("phone", { required: "Phone is required" })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          placeholder="+91 XXXXX"
                        />
                        {errors.phone && <span className="text-[10px] text-orange-500">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-355">Experience (Years)</label>
                        <input
                          type="text"
                          {...register("exp", { required: "Experience is required" })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          placeholder="e.g. 4 Years"
                        />
                        {errors.exp && <span className="text-[10px] text-orange-500">{errors.exp.message}</span>}
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-355">Current Location</label>
                        <input
                          type="text"
                          {...register("currentLoc", { required: "Location is required" })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          placeholder="e.g. Pune"
                        />
                        {errors.currentLoc && <span className="text-[10px] text-orange-500">{errors.currentLoc.message}</span>}
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-355">Attach CV / Resume (PDF or DOCX)</label>
                      <div className="relative flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/40 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.docx,.doc"
                          onChange={handleFileChange}
                          required
                          className="absolute inset-0 cursor-pointer opacity-0"
                        />
                        <Upload className="mb-1.5 h-6 w-6 text-blue-600 dark:text-blue-500" />
                        {fileName ? (
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Selected: {fileName}</p>
                        ) : (
                          <>
                            <p className="text-xs text-slate-655 dark:text-slate-400">
                              <span className="font-bold text-blue-600 dark:text-blue-500">Upload Resume</span> or drag and drop
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-355">Brief Cover Letter / Introduction</label>
                      <textarea
                        rows="3"
                        {...register("coverLetter")}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="Tell us about your technical CNC experience or qualifications..."
                      ></textarea>
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-end gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="rounded-full bg-emerald-50 p-3 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 mb-3">
                      <CheckCircle2 className="h-10 w-10 animate-bounce" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-2">Application Received!</h4>
                    <p className="text-xs text-slate-655 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                      Thank you! Your application for the <span className="font-bold text-slate-800 dark:text-white">{selectedJob.title}</span> role has been successfully submitted. Our HR team will review your CV and contact you within 3-5 business days.
                    </p>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="rounded-lg bg-slate-950 px-5 py-2 text-xs font-bold text-white hover:bg-slate-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
