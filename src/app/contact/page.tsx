

// src/app/contact/ContactClient.tsx
"use client";

import { Phone, Mail, MapPin, ArrowRight, Sparkles, Droplets, Shield, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";

const UAN = "111-628-873 (NATURE)";
const WHATSAPP = "923005553186";
const EMAIL = "info@naturewater.com.pk";
const ADDRESS =
  "Plot # B-213, Sector 6-F Mehran town korangi industrial Karachi";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  // 24/7 Counter Animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => (c < 24 ? c + 1 : 0));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    const text = encodeURIComponent(
      `Assalam o Alaikum!\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      (phone ? `*Phone:* ${phone}\n` : "") +
      `*Message:*\n${message}\n\n---\nSent from Nature Water Contact Form`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setName(""); setEmail(""); setPhone(""); setMessage("");
    setLoading(false);
  };

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* === HERO SECTION === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            <Droplets className="w-full h-full text-blue-600/10 animate-spin-slow" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center space-y-10 z-10">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-600"></div>
            <p className="text-sm uppercase tracking-[0.5em] text-blue-700 font-medium">
              Contact Us
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-900 leading-tight">
            Pure Connection
          </h1>

          <p className="text-xl md:text-2xl font-light text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Reach Pakistan’s most trusted premium water brand. Our team is
            available{" "}
            <span className="text-blue-600 font-semibold">24 hours a day</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href={`tel:${UAN}`}
              className="group bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-12 py-6 rounded-2xl font-medium uppercase tracking-wider shadow-2xl hover:shadow-blue-600/40 hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              Call UAN: {UAN} 
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-green-600 border-2 border-green-200 px-12 py-6 rounded-2xl font-medium uppercase tracking-wider shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* === CONTACT INFO + FORM === */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-bold text-slate-900">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-600 mt-4">
                  We’re here to serve you with purity and excellence.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mt-4"></div>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                      Head Office
                    </p>
                    <p className="text-lg font-medium text-slate-700 mt-1">
                      {ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                      UAN
                    </p>
                    <a
                      href={`tel:${UAN}`}
                      className="text-lg font-medium text-slate-700 hover:text-blue-600"
                    >
                      {UAN}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-lg font-medium text-slate-700 hover:text-blue-600"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl">
                <p className="text-sm uppercase tracking-wider text-slate-600 font-medium mb-3">
                  Instant Support
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-medium uppercase shadow-lg hover:shadow-green-600/40 hover:scale-105 transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  WhatsApp Chat
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Form — مکمل درست شدہ */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact-name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-white/70 text-slate-700 placeholder-slate-500 focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-white/70 text-slate-700 placeholder-slate-500 focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="contact-phone"
                    placeholder="+92 300 555 3186"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-white/70 text-slate-700 placeholder-slate-500 focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="contact-message"
                    placeholder="Write your message here..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-white/70 text-slate-700 placeholder-slate-500 focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-5 rounded-xl font-medium uppercase tracking-wider shadow-xl hover:shadow-green-600/40 hover:scale-105 transition-all text-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      Opening WhatsApp...
                      <Sparkles className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send via WhatsApp
                      <Sparkles className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* === INTERACTIVE MAP === */}
      <section className="py-24 bg-gradient-to-r from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Visit Our State-of-the-Art Facility
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Korangi Industrial Area, Karachi
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.281614987486!2d67.123456!3d24.876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzM1LjYiTiA2N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
              title="Nature Water Head Office Location"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* === TRUST BADGES === */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="space-y-3">
              <Shield className="w-12 h-12 mx-auto text-blue-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                PSQCA Certified
              </p>
            </div>
            <div className="space-y-3">
              <Award className="w-12 h-12 mx-auto text-cyan-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                ISO 2003
              </p>
            </div>
            <div className="space-y-3">
              <Clock className="w-12 h-12 mx-auto text-green-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                <span className="text-3xl font-bold text-blue-600">
                  {count}
                </span>
                /7 Support
              </p>
            </div>
            <div className="space-y-3">
              <Droplets className="w-12 h-12 mx-auto text-blue-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                100% Pure
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}