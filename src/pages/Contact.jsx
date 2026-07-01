import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ChevronDown, ChevronUp, Sparkles, MessageSquare } from "lucide-react";
import { FAQS } from "../constants/staticData";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Contact Our Engineering Office</h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have a blueprint drawing ready for cycle-time estimation? Reach out to our technical sales team directly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form, Info, Maps */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-955 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                <span>Send Technical Message</span>
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-350">Your Name</label>
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="Rahul Patil"
                      />
                      {errors.name && <span className="text-[10px] text-orange-500">{errors.name.message}</span>}
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-350">Email Address</label>
                      <input
                        type="email"
                        {...register("email", { 
                          required: "Email is required", 
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
                        })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="name@company.com"
                      />
                      {errors.email && <span className="text-[10px] text-orange-500">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-350">Phone Number</label>
                      <input
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="+91 XXXXX"
                      />
                      {errors.phone && <span className="text-[10px] text-orange-500">{errors.phone.message}</span>}
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-350">Subject</label>
                      <input
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="e.g. CNC turning capacities"
                      />
                      {errors.subject && <span className="text-[10px] text-orange-500">{errors.subject.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-350">Message Body</label>
                    <textarea
                      rows="4"
                      {...register("message", { required: "Message is required" })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      placeholder="Type details of your production batch, metal grades, tolerance ranges..."
                    ></textarea>
                    {errors.message && <span className="text-[10px] text-orange-500">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 py-3 text-center text-xs font-bold text-white shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="rounded-full bg-emerald-50 p-3 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 mb-3">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-455 max-w-sm mb-4 leading-relaxed">
                    Thank you! Your inquiry was sent to our technical staff. We will review your requests and get back to you within one business day.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Address Cards & Live Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Details Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-955 dark:text-white text-sm">Coimbatore Factory Site</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Plot 12-A, Race Course, Coimbatore, Tamil Nadu, India - 641018</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-955 dark:text-white text-sm">Technical Support Hotlines</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    0422-2345678 (Office Desk)<br />
                    +91 8970976567 (Global Exports)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-955 dark:text-white text-sm">Email Inboxes</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    sales@apexprecision.co.in<br />
                    info@apexprecision.co.in
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-955 dark:text-white text-sm">Working Hours</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Monday - Saturday: 8:00 AM - 8:00 PM IST<br />
                    Production Operations: 24 Hours (Closed Sundays)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Iframe Block */}
            <div className="rounded-2xl overflow-hidden border border-slate-150 shadow-sm h-64 bg-slate-100">
              <iframe
                title="Race Course Coimbatore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.331566276709!2d76.9723225!3d10.9996024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859f71c4c1a7b%3A0xc07a9775f0580a5d!2sRace%20Course%252C%20Coimbatore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 20 FAQs ACCORDION SECTION */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="h-4 w-4" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-2xl font-extrabold text-slate-955 dark:text-white sm:text-3xl">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400">Technical details on ordering, metal capabilities, inspection certifications, and exports.</p>
        </div>

        {/* 20 Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-950 dark:text-white text-xs sm:text-sm hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-550 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-850">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
