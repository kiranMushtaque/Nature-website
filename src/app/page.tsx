







"use client"
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
import products from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Phone,
  Sparkles,
  Droplet,
  Shield,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";


export default function HomePage() {
  

  return (
    <div className="overflow-x-hidden">
      <Hero />

      <Shop products={products} />

      {/* Premium Purification Process Section */}
      <section className="relative py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Premium Section Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-600"></div>
                <Droplet className="w-6 h-6 text-blue-600" strokeWidth={1} />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-blue-600"></div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-slate-900 mb-6 tracking-tight">
                14-Stage
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Purification Excellence
                </span>
              </h2>

              <p className="text-xl font-light text-slate-600 tracking-wide max-w-2xl mx-auto">
                Where science meets luxury in every pristine drop
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Premium Process Steps */}
            <div className="space-y-6">
              {[
                {
                  stage: "1-3",
                  title: "Multi-Stage Filtration",
                  desc: "Precision removal of sediment & particles",
                  icon: "✦",
                },
                {
                  stage: "4-6",
                  title: "Carbon Purification",
                  desc: "Elimination of chlorine & unwanted odors",
                  icon: "◈",
                },
                {
                  stage: "7-10",
                  title: "Reverse Osmosis",
                  desc: "99.9% dissolved solids extraction",
                  icon: "◆",
                },
                {
                  stage: "11-12",
                  title: "UV Sterilization",
                  desc: "Complete microorganism neutralization",
                  icon: "✧",
                },
                {
                  stage: "13-14",
                  title: "Mineral Enhancement",
                  desc: "Essential minerals carefully reintroduced",
                  icon: "◇",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="flex gap-6 bg-white/80 backdrop-blur-sm rounded-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-200">
                    {/* Premium Stage Number */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white font-thin rounded-sm w-20 h-20 flex flex-col items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                        <span className="text-2xl font-light">
                          {step.stage}
                        </span>
                        <span className="text-xs opacity-80">{step.icon}</span>
                      </div>
                      <div className="absolute inset-0 bg-blue-600 rounded-sm blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    </div>

                    {/* Premium Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-slate-900 mb-2 tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-blue-400/10 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-black/5 blur-3xl rounded-full"></div>

                <Image
                  src="/adds/add-9.jpeg"
                  alt="Advanced Purification Technology"
                  width={600}
                  height={600}
                  className="relative rounded-sm shadow-2xl w-full"
                  quality={100}
                  priority={true}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-sm p-8 shadow-2xl"
                >
                  <p className="text-5xl font-thin mb-2">99.9%</p>
                  <p className="text-sm font-light text-blue-100 tracking-wider uppercase">
                    Pure Excellence
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Premium CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link
              href="/products/process"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span className="font-light tracking-[0.2em] uppercase text-sm">
                Discover More
              </span>
              <ChevronRight
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                strokeWidth={1}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Trust Indicators */}
      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "ISO Certified",
                desc: "International quality standards",
              },
              {
                icon: Award,
                title: "25 Years Legacy",
                desc: "Quarter-century of excellence",
              },
              {
                icon: Droplet,
                title: "50L+ Delivered",
                desc: "Trusted by thousands daily",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon
                      className="w-10 h-10 text-blue-600"
                      strokeWidth={1}
                    />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto bg-blue-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Premium Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/30"></div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Premium Icon */}
            <div className="mb-12">
              <Sparkles
                className="w-16 h-16 mx-auto text-blue-300 animate-pulse"
                strokeWidth={1}
              />
            </div>

            {/* Premium Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin mb-8 leading-tight tracking-wide">
              Ready for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 mt-2">
                Pure Hydration?
              </span>
            </h2>

            {/* Premium Subheadline */}
            <p className="text-xl font-light text-blue-100 mb-16 tracking-wide max-w-3xl mx-auto leading-relaxed">
              Join 25,000+ families who choose **pure luxury** in every drop
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923005553186?text=Assalam%20o%20Alaikum!%20Main%20Nature%20Water%20order%20karna%20chahta%20hun..."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="w-5 h-5 relative z-10" strokeWidth={1} />
                <span className="relative z-10 font-light tracking-[0.2em] uppercase text-sm">
                  Order on WhatsApp
                </span>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/promotions"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white px-12 py-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-light tracking-[0.2em] uppercase text-sm">
                    Exclusive Offers
                  </span>
                  <ChevronRight
                    className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                    strokeWidth={1}
                  />
                </Link>
              </motion.div>
            </div>

            {/*  Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-white/10"
            >
              <p className="text-sm font-light text-blue-200 tracking-[0.3em] uppercase">
                Premium Hydration • Delivered Daily • Since 2003
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

