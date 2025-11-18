



// src/app/products/certificates/page.tsx
"use client";

import { Eye, Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const allCertificates = [
  {
    title: "HCTRS Halal Certificate",
    subtitle: "HFI N-WTR 2025-26",
    file: "/certificates/HCTRS-Halal-Certificate-HFI-N-WTR-2025-26.pdf",
    icon: "Halal",
    color: "emerald",
  },
  {
    title: "FSSC 25003 V6",
    subtitle: "Global Food Safety Standard",
    file: "/certificates/HEALTH-FACTORY-INTERNATIONAL-FSSC-V6-RAU-DEC2024.pdf",
    icon: "Global",
    color: "blue",
  },
  {
    title: "PSQCA License",
    subtitle: "Karachi Standards 2024",
    file: "/certificates/PSQCA-License-2024.pdf",
    icon: "PSQCA",
    color: "indigo",
  },
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    file: "/certificates/SB-ISO-9001-Certificate-HEALTH-FACTORY-INTERNATIONAL.pdf",
    icon: "ISO",
    color: "amber",
  },
  {
    title: "Sindh Food Authority",
    subtitle: "Food Safety License 2025",
    file: "/certificates/Sind-Food-Authority-2025.pdf",
    icon: "SFA",
    color: "rose",
  },
];

export default function CertificatesPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Halal":
        return <Shield className="w-5 h-5" />;
      case "Global":
        return <Award className="w-5 h-5" />;
      case "PSQCA":
        return <CheckCircle className="w-5 h-5" />;
      case "ISO":
        return <Award className="w-5 h-5" />;
      case "SFA":
        return <Shield className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getColor = (color: string) => {
    const colors: Record<string, string> = {
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
      amber: "bg-amber-50 text-amber-700 border-amber-200",
      rose: "bg-rose-50 text-rose-700 border-rose-200",
    };
    return colors[color] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <>
      {/* === Hero Section with Responsive Background Image === */}
      <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 overflow-hidden">
        {/* Background Image - No cropping on sides */}
        <div 
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/certificates/certificate-hero.jpeg')",
            backgroundSize: '100% auto',
            backgroundPosition: 'center center'
          }}
        >
          {/* Hidden image for SEO */}
          <Image
            src="/certificates/certificate-hero.jpeg"
            alt="Nature Water Certificates - Global Quality Standards and International Certifications"
            width={1920}
            height={1080}
            priority
            className="hidden"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/70" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight px-4"
          >
            Certified Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Every drop of Nature Water meets global safety and quality benchmarks — backed
            by internationally recognized certifications.
          </motion.p>
        </div>
      </div>

      {/* === Certificates Section === */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest mb-3 md:mb-4"
            >
              Certified Excellence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-5 leading-tight px-4"
            >
              Trusted by Global Standards
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Every drop of Nature Water is backed by rigorous international certifications —
              independently audited, annually renewed, and globally recognized.
            </motion.p>
          </header>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allCertificates.map((cert, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-3 md:gap-4 mb-6">
                  <div
                    className={`p-2.5 md:p-3 rounded-xl ${getColor(
                      cert.color
                    )} border shadow-sm flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {getIcon(cert.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight break-words">
                      {cert.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>

                {/* View Button */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate PDF`}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 md:px-6 py-3 md:py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-xl active:scale-95"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  View Certificate
                </a>
              </motion.article>
            ))}
          </div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 p-8 md:p-12 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-2xl md:rounded-3xl text-white text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">
              Quality is Our Promise
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-6 md:mb-8 px-4">
              All certifications are issued by independent, accredited bodies and renewed
              annually. Your trust is backed by science, standards, and transparency.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
              <div className="min-w-[100px]">
                <p className="font-bold text-2xl md:text-3xl text-white">5+</p>
                <p className="text-blue-200 text-sm md:text-base">Global Standards</p>
              </div>
              <div className="min-w-[100px]">
                <p className="font-bold text-2xl md:text-3xl text-white">100%</p>
                <p className="text-blue-200 text-sm md:text-base">Compliance Rate</p>
              </div>
              <div className="min-w-[100px]">
                <p className="font-bold text-2xl md:text-3xl text-white">Annual</p>
                <p className="text-blue-200 text-sm md:text-base">Audits & Renewal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}