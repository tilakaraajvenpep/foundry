import { useForm } from "react-hook-form";
import { useState } from "react";
import { X, Upload, CheckCircle2, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RFQModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqId, setRfqId] = useState("");
  const [fileName, setFileName] = useState("");

  const onSubmit = (data) => {
    // Generate a random RFQ ID
    const randomId = "RFQ-" + Math.floor(100000 + Math.random() * 900000);
    setRfqId(randomId);
    setIsSubmitted(true);
    reset();
    setFileName("");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Request For Quotation (RFQ)</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Provide part details & drawing for engineering analysis.</p>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form / Success Screen */}
          <div className="overflow-y-auto p-6 flex-1">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Company Name</label>
                    <input
                      type="text"
                      {...register("companyName", { required: "Company name is required" })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                      placeholder="e.g. Apex Industries"
                    />
                    {errors.companyName && <span className="text-xs text-orange-500">{errors.companyName.message}</span>}
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Contact Person</label>
                    <input
                      type="text"
                      {...register("contactPerson", { required: "Contact person is required" })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                      placeholder="Full Name"
                    />
                    {errors.contactPerson && <span className="text-xs text-orange-500">{errors.contactPerson.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      type="email"
                      {...register("email", { 
                        required: "Email is required", 
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                      })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                    {errors.email && <span className="text-xs text-orange-500">{errors.email.message}</span>}
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <span className="text-xs text-orange-500">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Industry</label>
                    <select
                      {...register("industry", { required: "Please select an industry" })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                    >
                      <option value="">Select Industry</option>
                      <option value="automotive">Automotive</option>
                      <option value="aerospace">Aerospace</option>
                      <option value="medical">Medical</option>
                      <option value="oil-gas">Oil & Gas</option>
                      <option value="defence">Defence</option>
                      <option value="automation">Industrial Automation</option>
                      <option value="heavy-engineering">Heavy Engineering</option>
                      <option value="other">Other Sector</option>
                    </select>
                    {errors.industry && <span className="text-xs text-orange-500">{errors.industry.message}</span>}
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Material Grade</label>
                    <select
                      {...register("material", { required: "Please select a material" })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                    >
                      <option value="">Select Material</option>
                      <option value="carbon-steel">Carbon Steel (EN8/24)</option>
                      <option value="stainless-steel">Stainless Steel (SS304/316)</option>
                      <option value="aluminum">Aluminum Alloys</option>
                      <option value="brass-bronze">Brass & Bronze</option>
                      <option value="titanium">Titanium / Inconel</option>
                      <option value="plastics">PEEK / POM Plastics</option>
                      <option value="other">Other / Custom Alloy</option>
                    </select>
                    {errors.material && <span className="text-xs text-orange-500">{errors.material.message}</span>}
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Quantity (units)</label>
                    <input
                      type="number"
                      {...register("quantity", { 
                        required: "Quantity is required", 
                        min: { value: 1, message: "Must be 1 or more" }
                      })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                      placeholder="e.g. 500"
                    />
                    {errors.quantity && <span className="text-xs text-orange-500">{errors.quantity.message}</span>}
                  </div>
                </div>

                {/* File Upload Zone */}
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Upload 2D/3D Drawings (PDF, DXF, STEP, ZIP)</label>
                  <div className="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.dxf,.step,.stp,.zip,.rar"
                      onChange={handleFileChange}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <Upload className="mb-2 h-8 w-8 text-blue-600 dark:text-blue-500" />
                    {fileName ? (
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Selected: {fileName}</p>
                    ) : (
                      <>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <span className="font-semibold text-blue-600 dark:text-blue-500">Click to upload</span> or drag and drop files here
                        </p>
                        <p className="text-xs text-slate-400 mt-1">Maximum file size: 25MB. PDF, STEP, DXF, ZIP formats supported.</p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">Additional Project Notes / Tolerances</label>
                  <textarea
                    rows="3"
                    {...register("notes")}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                    placeholder="Provide specific details e.g., thread requirements, critical tolerances, heat treatments, surface finish Ra values."
                  ></textarea>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200"
                  >
                    Submit RFQ
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="rounded-full bg-emerald-50 p-4 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 mb-4 ring-8 ring-emerald-100 dark:ring-emerald-950/20">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h4 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">Quotation Request Submitted!</h4>
                <p className="text-slate-600 dark:text-slate-300 max-w-md mb-6 leading-relaxed">
                  Thank you! Your Request for Quotation (RFQ) has been received. Our engineering team will review your specifications and get back to you within 24-48 hours.
                </p>
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-3 dark:border-slate-800 dark:bg-slate-950 max-w-sm mb-8 w-full">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Reference ID</span>
                  <p className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400 mt-0.5">{rfqId}</p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
