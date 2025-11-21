

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
  CheckCircle2,
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
    if (cv) text += `*CV Attached:* ${cv.name}\n`;

    const whatsappUrl = `https://wa.me/923005553186?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp();
    alert("Your application has been sent successfully via WhatsApp!");
    setCareerModal(false);
    setFormData({ name: "", phone: "", position: "", message: "", cv: null });
  };

  return (
    <>
      <footer
        className="relative bg-cover bg-center bg-no-repeat text-gray-300 mt-20"
        style={{ backgroundImage: "url('/images/footer.png')" }}
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="absolute inset-0 bg-black/24" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Company Info & Social */}
            <div className="lg:col-span-5">
              <div className="relative mb-10 inline-block">
                <div className="absolute -inset-x-6 -inset-y-4 bg-white/20 backdrop-blur-xl rounded-3xl -z-10"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-4 flex items-center justify-center w-44 h-20">
                  <Image
                    src="/images/footer-logo.png"
                    alt="Nature Water - Premium Purified Bottled Water in Karachi | Official Logo"
                    width={180}
                    height={80}
                    className="drop-shadow-md object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-lg">
                Karachi&apos;s leading bottled water company, delivering premium
                quality purified water to homes, offices, and corporates across
                Karachi for over 25 years. Your health is our priority.
              </p>

              {/* Social Media  */}
              <div className="mb-8">
                <h3 className="text-white font-semibold text-sm mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4 [&_a]:no-underline">
                  <a
                    href="https://www.facebook.com/share/1AAwjetVFC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-[#1877F2] p-3 rounded-full transition-all duration-300 group"
                    aria-label="Follow Nature Water on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition" />
                  </a>
                  <a
                    href="https://www.instagram.com/naturehealthywater"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-gradient-to-tr from-pink-500 to-orange-500 p-3 rounded-full transition-all duration-300 group"
                    aria-label="Follow Nature Water on Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nature-water/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-[#0A66C2] p-3 rounded-full transition-all duration-300 group"
                    aria-label="Connect with Nature Water on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@naturewaterofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-black p-3 rounded-full transition-all duration-300 group"
                    aria-label="Follow Nature Water on TikTok"
                  >
                    <svg
                      className="w-5 h-5 text-white"
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
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-4">
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
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
                Our Services
              </h3>
              <ul className="space-y-4">
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
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
                Contact Info
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Head Office</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Plot # B-213, Sector 6-F, Mehran Town, Korangi Industrial
                      Area, Karachi, Pakistan
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <a
                      href="tel:111628873"
                      className="text-xl font-bold text-white hover:text-cyan-300 transition"
                    >
                      111-NATURE{" "}
                      <span className="text-cyan-400">(111-628-873)</span>
                    </a>
                    <a
                      href="https://wa.me/923005553186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-green-400 hover:text-green-300 font-medium"
                    >
                      WhatsApp: 0300-5553186
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Career CTA Section */}
          <div className="mt-16 pt-10 border-t border-slate-700/50">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-xl">
                      <Briefcase className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Join Our Team
                      </h3>
                      <p className="text-gray-300 max-w-md">
                        We&apos;re always looking for talented professionals to
                        join our growing team.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCareerModal(true)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-black/40 backdrop-blur-md border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {[
                "ISO Certified",
                "PSQCA Approved",
                "25+ Years Trusted",
                "100% Pure Water",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black/60 py-6 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nature Water Pvt. Ltd.
            </p>
          </div>
        </div>
      </footer>

      {/* Career Modal */}
      {careerModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setCareerModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <Briefcase className="w-7 h-7 text-blue-600" />
                  Career Application
                </h2>
                <button
                  onClick={() => setCareerModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
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
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <input
                type="text"
                required
                placeholder="Position Applied For *"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <textarea
                rows={4}
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
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
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Send Application via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


