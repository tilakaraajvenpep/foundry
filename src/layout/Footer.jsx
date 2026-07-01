import { useState } from "react";
import { Link } from "react-router-dom";
import { Settings, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer({ onOpenRfq }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: About & Socials */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-500/30">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-wider text-white uppercase leading-none block">
                  Apex Precision
                </span>
                <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-widest leading-none mt-0.5 block">
                  Engineering
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Apex Precision Engineering is a leading Tier-1 manufacturer specializing in multi-axis CNC machining, precision engineering, heavy fabrication, and laser cutting. Delivering certified industrial components worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="Twitter / X"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">CNC Turning</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">CNC Milling</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">5-Axis Machining</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Laser Cutting</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Metal Fabrication</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Reverse Engineering</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2 mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Aerospace</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Automotive</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Medical Devices</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Defence & Armaments</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Industrial Automation</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Oil & Gas</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2 mb-4">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to receive technical articles, manufacturing guidelines, and company updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 pr-10 text-xs text-white placeholder-slate-500 focus:border-blue-600 focus:outline-none dark:border-slate-800 dark:bg-slate-900"
              />
              <button
                type="submit"
                className="absolute right-1 px-2.5 py-1.5 text-blue-500 hover:text-blue-400 transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-500 font-semibold mt-1 animate-pulse">
                Successfully subscribed! Thank you.
              </p>
            )}
          </div>
        </div>

        {/* Footer Middle Section (HQ Contact Details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-b border-slate-800 py-10 mb-8 text-sm">
          <div className="flex gap-3 items-start">
            <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-white">Factory Address</h5>
              <p className="text-xs text-slate-400 mt-1">Plot 12-A, Race Course, Coimbatore, Tamil Nadu, India - 641018</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Phone className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-white">Call Sales Team</h5>
              <p className="text-xs text-slate-400 mt-1">
                0422-2345678<br />
                +91 8970976567
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Mail className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-white">Email Inquiries</h5>
              <p className="text-xs text-slate-400 mt-1">
                sales@apexprecision.co.in<br />
                info@apexprecision.co.in
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Clock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-white">Operational Hours</h5>
              <p className="text-xs text-slate-400 mt-1">
                Mon - Sat: 8:00 AM - 8:00 PM<br />
                Production Floor: 24/7 (3 Shifts)
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Copyrights & Policy links) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Apex Precision Engineering Private Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
