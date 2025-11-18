

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  MapPin,
  ChevronRight,
  Briefcase,
  X,
} from "lucide-react";
import { useState } from "react";

export default function NestleStyleFooter() {
  const [careerModal, setCareerModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
    message: "",
    cv: null as File | null,
  });

  const sendToWhatsApp = () => {
    const { name, phone, position, message, cv } = formData;
    let text = `*Career Application - Nature Water*\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Position:* ${position}\n`;
    if (message) text += `*Message:* ${message}\n`;
    if (cv) text += `*CV:* ${cv.name}\n`;

    const whatsappUrl = `https://wa.me/923005553186?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp();
    alert("Your application has been sent via WhatsApp!");
    setCareerModal(false);
    setFormData({ name: "", phone: "", position: "", message: "", cv: null });
  };

  return (
    <>
      <footer
        className="relative bg-cover bg-center bg-no-repeat text-gray-300 mt-20"
        style={{ backgroundImage: `url('/images/footer.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
            <div className="lg:col-span-2">
          
<div className="relative mb-8 inline-block">  

  <div className="absolute -inset-x-4 -inset-y-3 bg-white/95 rounded-3xl blur-xl -z-10"></div>
  <div className="absolute -inset-x-2 -inset-y-2 bg-white/90 rounded-2xl -z-10"></div>
  
 
  <div className="relative h-12 w-32 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-3">  {/* w-40 → w-32 */}
    <Image
      src="/images/products/naturewater-logo.png"
      alt="Nature Water"
      width={140}    
      height={56}
      className="drop-shadow-lg"
    />
  </div>
</div>

            

              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Karachi&apos;s leading bottled water company, delivering premium
                quality purified water to homes, offices, and corporates across
                Karachi for over 25 years. Your health is our priority.
              </p>

              {/* Social Media */}
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-sm mb-3">
                  Connect With Us
                </h3>
                <div className="flex space-x-3">
                 
                  <a
                    href="https://www.facebook.com/share/1AAwjetVFC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-blue-600 p-2.5 rounded-full transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/naturehealthywater?igsh=MWR5d3pwYzIybWQxMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-pink-600 p-2.5 rounded-full transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nature-water/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-blue-700 p-2.5 rounded-full transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@naturewaterofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-black p-2.5 rounded-full transition-colors duration-300"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.62V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.9a6.68 6.68 0 0 0-5.75 6.7 6.68 6.68 0 0 0 6.71 6.7 6.68 6.68 0 0 0 6.7-6.7V9.72a10.47 10.47 0 0 0 6.13 2.03V8.23a7.5 7.5 0 0 1-4.38-1.54Z" />
                    </svg>
                  </a>
                
                </div>
              </div>
            </div>

           

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/products/all", label: "Our Products" },
                  { href: "/reviews", label: "Customer Reviews" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group no-underline"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/products/all", label: "Bottled Water" },
                  { href: "/corporate", label: "Corporate Supply" },
                  { href: "/products/sustainability", label: "Sustainability" },
                  { href: "/products/certificates", label: "Certifications" },
                  { href: "/products/process", label: "Purification Process" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group no-underline"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">
                Contact Info
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-medium mb-1">Address</p>
                    <p className="text-gray-300 leading-relaxed">
                      Plot # B-213, Sector 6-F Mehran town korangi industrial
                      Karachi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-medium mb-1">UAN</p>
                    <a
                      href="tel:111628873"
                      className="text-gray-300 hover:text-white transition-colors block font-medium"
                    >
                      111-628-873{" "}
                      <span className="text-cyan-400 font-bold">(NATURE)</span>
                    </a>
                    <a
                      href="https://wa.me/923005553186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors block mt-1 text-sm"
                    >
                      WhatsApp: 0300-5553186
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Career Section */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-white border border-white/20">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Join Our Team
              </h3>
              <p className="text-sm mb-4 opacity-90">
                We&apos;re hiring! Send your CV via WhatsApp.
              </p>
              <button
                onClick={() => setCareerModal(true)}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-2.5 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Trust Badges - */}
        <div className="relative border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Nature Water Pvt. Ltd. All rights
                reserved.
              </p>
            
            </div>
          </div>
        </div>

        <div className="relative bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-300">
              {[
                "ISO Certified",
                "PSQCA Approved",
                "25+ Years Trusted",
                "100% Pure Water",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Career Modal  */}
      {careerModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setCareerModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  Career Application
                </h2>
                <button
                  onClick={() => setCareerModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
           
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <input
                type="tel"
                required
                placeholder="Phone *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <input
                type="text"
                required
                placeholder="Position Applied For *"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <textarea
                rows={3}
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload CV (PDF/DOC)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cv: e.target.files?.[0] || null,
                    })
                  }
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}