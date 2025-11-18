


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
 
  Users,

  Award,
  Droplets,
  Check,
} from "lucide-react";

const achievements = [
  {
    image: "/images/Achievements/images-3.jpeg", 
  },
  {
    image: "/images/Achievements/images-4.jpeg", 
  },
  {
    image: "/images/Achievements/images-1.jpeg", 
  },
  {
    image: "/images/Achievements/images-2.jpeg",
  },
  {
    image: "/images/Achievements/images-5.jpeg",
  },
];

// CONTENT DATA (Separate from images)
const achievementContent = [
  {
    title: "Emerging Brand of the Year",
    description:
      "Proudly recognized as the Emerging Brand of the Year — a testament to our consistent quality, innovation, and 25 years of trusted purity.",
  },
  {
    title: "Official Hydration Partner",
    subtitle: "Governor House Event",
    description:
      "Served as the Official Hydration Partner at Governor House Sindh during the Pakistan–South Africa Economic Council gathering, celebrating international business collaboration and brand excellence.",
  },
  {
    title: "Official Hydration Partner",
    subtitle: "Health Care Expo",
    description:
      "Collaborated with the Health Care Expo as their Official Hydration Partner, promoting healthy hydration and wellness awareness.",
  },
  {
    title: "Official Hydration Partner",
    subtitle: "IEEEP Fair 2025",
    description:
      "Partnered with the IEEEP Fair 2025, supporting innovation and technology professionals with refreshing hydration throughout the event.",
  },
];

const stats = [
  {
    num: "25+",
    label: "Years of Excellence",
    icon: Trophy,
    color: "text-blue-600",
  },
  {
    num: "500K+",
    label: "Bottles Delivered Daily",
    icon: Droplets,
    color: "text-cyan-600",
  },
  {
    num: "100+",
    label: "Corporate Partners",
    icon: Users,
    color: "text-emerald-600",
  },
  {
    num: "15+",
    label: "Industry Awards",
    icon: Award,
    color: "text-purple-600",
  },
];

const values = [
  { title: "Quality", desc: "ISO certified excellence in every drop" },
  { title: "Innovation", desc: "14-step purification technology" },
  { title: "Sustainability", desc: "Eco-friendly packaging & operations" },
  { title: "Trust", desc: "PSQCA & Halal certified" },
];

export default function AchievementsClient() {
  return (
    <main className="bg-white">
      {/* HERO - TEXT ONLY */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8 md:px-16 text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-600"></div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-light">
              Our Achievements
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-slate-900 leading-tight">
            Leading with <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Excellence
            </span>
          </h1>

          <p className="text-lg md:text-xl font-light text-slate-600 max-w-4xl mx-auto leading-relaxed">
            25 years of delivering pure hydration, building trust, and setting
            industry standards across Pakistan.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <Link
              href="/corporate"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full font-light tracking-wider uppercase shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all text-sm md:text-base"
            >
              Partner With Us
            </Link>
            <Link
              href="/products/all"
              className="bg-white text-blue-600 px-10 py-5 rounded-full font-light tracking-wider uppercase shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all text-sm md:text-base border border-blue-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-thin text-slate-900">
                  {stat.num}
                </div>
                <p className="text-sm text-slate-600 font-light mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGES IN ONE LINE - WITHOUT BADGES AND ICONS */}
      <section className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-white/50 backdrop-blur-sm border border-blue-100/50">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={ach.image}
                      alt={`Achievement ${i + 1}`}
                      fill
                      className="object-contain p-6 brightness-95 group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OnPfQAJJAPYb2m9YQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  {/* BADGE AND ICON BOTH REMOVED */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT BELOW - SEPARATE SECTION */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-900 mb-4">
              Our Milestones
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {achievementContent.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  {item.subtitle && (
                    <span className="text-sm uppercase tracking-wider text-blue-600 font-light">
                      {item.subtitle}
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-thin text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin text-slate-900 mb-6">
              What Sets Us Apart
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl text-center group hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-thin text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-thin mb-6">
            Ready to Partner with Excellence?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
            Join hundreds of leading organizations who trust Nature Water for
            their hydration needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/corporate"
              className="bg-white text-blue-600 px-12 py-6 rounded-full font-light tracking-wider uppercase shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all text-lg"
            >
              Corporate Solutions
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-full font-light tracking-wider uppercase hover:bg-white hover:text-blue-600 transition-all text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-widest text-slate-400 font-light">
            <span>PSQCA CERTIFIED</span>
            <span>ISO VERIFIED</span>
            <span>HALAL CERTIFIED</span>
            <span>100% PURE</span>
          </div>
        </div>
      </section>
    </main>
  );
}