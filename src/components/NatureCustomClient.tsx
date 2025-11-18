"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Building2,
  Leaf,
  Award,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Premium Purity",
    desc: "Premium purified water in every bottle",
  },
  {
    icon: Sparkles,
    title: "High-Quality Labels",
    desc: "Waterproof, high-quality printed labels",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "Eco-friendly packaging and recyclable PET bottles",
  },
  {
    icon: Award,
    title: "Perfect For",
    desc: "Perfect for events, hotels, gyms, and promotions",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Corporate Clients",
    desc: "Elevate your brand presence",
  },
  { icon: Users, title: "Event Organizers", desc: "Make lasting impressions" },
  {
    icon: Droplets,
    title: "Hotels & Restaurants",
    desc: "Premium guest experience",
  },
  { icon: Award, title: "Fitness Centers", desc: "Motivate with your brand" },
];

export default function NatureCustomClient() {
  return (
    <main className="bg-white">
      {/* Hero Section - Aquafina Style */}
      <section className="relative bg-gradient-to-br from-[#0066B3] via-[#0080CC] to-[#00A0E3] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-2.5 mb-8 border border-white/30">
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white font-semibold text-sm tracking-wide">
                CUSTOMIZED BRANDING
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Nature Custom
            </h1>

            <h2 className="text-3xl lg:text-4xl font-bold text-white/95 mb-8">
              Your Brand, Our Bottle
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Create personalized bottled water that reflects your identity,
              vision, and values with Nature Water
            </p>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-[#0066B3] font-bold px-10 py-5 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2003/svg"
            className="w-full h-16 lg:h-24"
          >
            <path
              d="M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Image Gallery - Premium Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#0066B3] font-bold text-sm uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Custom Branded Bottles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading brands have transformed their identity with our
              custom bottled water solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { src: "/images/custom-1.jpeg", alt: "Customized bottle 1" },
              { src: "/images/custom-2.jpeg", alt: "Customized bottle 2" },
              { src: "/images/custom-3.jpeg", alt: "Customized bottle 3" },
              { src: "/images/custom-4.jpeg", alt: "Customized bottle 4" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section - Alternating Layout */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-block text-[#0066B3] font-bold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Your Brand, Our Bottle — A Perfect Partnership
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                At <strong>Nature Water</strong>, we go beyond hydration — we
                help you make an impression. With our Customized Branding
                Service, your brand becomes part of every refreshing sip.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re a corporate client, hotel, restaurant, event
                organizer, or fitness center, we create premium bottled water
                that showcases your brand&apos;s identity with elegance.
              </p>
            </div>

            {/* Features Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0066B3] group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066B3] to-[#00A0E3] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From boardrooms to ballrooms, our custom bottles make your brand
              shine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0066B3] to-[#00A0E3] mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Contact */}
      <section
        id="contact"
        className="relative bg-gradient-to-r from-[#0066B3] via-[#0080CC] to-[#0066B3] py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-2.5 mb-8 border border-white/30">
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white font-semibold text-sm tracking-wide">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight">
              Let&apos;s Create Your Branded Bottles
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to make your brand shine? Our experts will guide you from
              design to delivery — ensuring your bottles look as refreshing as
              the water inside.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "111-628-873",
                link: "tel:111628873",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                content: "0300-5553186",
                link: "https://wa.me/923005553186",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "info@naturewater.com.pk",
                link: "mailto:info@naturewater.com.pk",
                color: "from-purple-500 to-pink-500",
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-white/90 font-semibold text-lg group-hover:text-yellow-300 transition-colors">
                  {contact.content}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <Link
              href="/corporate"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white hover:text-[#0066B3] transition-all duration-200 text-lg"
            >
              View Corporate Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              Trusted by Leading Brands
            </h3>
            <p className="text-gray-600">
              Join hundreds of satisfied clients who have elevated their brand
              with Nature Water
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black text-gray-400">
              PREMIUM QUALITY
            </span>
            <span className="text-2xl font-black text-gray-400">
              ECO-FRIENDLY
            </span>
            <span className="text-2xl font-black text-gray-400">
              PSQCA CERTIFIED
            </span>
            <span className="text-2xl font-black text-gray-400">100% PURE</span>
          </div>
        </div>
      </section>
    </main>
  );
}
