


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Droplet,
  Award,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  BadgeCheck,
} from "lucide-react";
import VideoModal from "./VideoModal";

// === 6 Banner Images ===
const banners = [
  "/images/banner-1.jpeg",
  "/images/banner-2.jpeg",
  "/images/banner-3.jpeg",
  "/images/banner-4.jpeg",
  "/images/banner-5.jpeg",
  "/images/banner-6.jpeg",
];

// === Structured Data for SEO ===
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nature Water",
  description:
    "Premium bottled water with 14-stage RO purification. Trusted by 25,000+ families across Pakistan since 2003.",
  foundingDate: "2003",
  url: "https://naturewater.com.pk",
  logo: "https://naturewater.com.pk/images/products/naturewater-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-111-628-873",
    contactType: "Customer Service",
    areaServed: "PK",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "25000",
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Stats animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* === SEO Structured Data === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* === Premium Announcement Bar === */}
      <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex items-center justify-center gap-3">
            <Sparkles
              className="w-4 h-4 text-blue-300 animate-pulse"
              strokeWidth={1}
            />
            <p className="text-xs md:text-sm font-extralight tracking-[0.35em] uppercase text-blue-50">
              Celebrating 25 Years of Excellence • Call: 111-628-873
            </p>
            <Sparkles
              className="w-4 h-4 text-blue-300 animate-pulse"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>

      {/* === Banner Slider === */}
      <div className="relative w-full bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="relative w-full max-w-[1600px] mx-auto aspect-[16/6] sm:aspect-[16/7] md:aspect-[1600/584]">
          {banners.map((banner, index) => (
            <Image
              key={index}
              src={banner}
              alt={`Nature Water - Premium Bottled Water Delivery Service ${
                index + 1
              }`}
              fill
              priority={index === 0}
              className={`object-cover transition-all duration-1000 ease-in-out ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              sizes="100vw"
              quality={90}
            />
          ))}

          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all duration-500 ${
                  index === current
                    ? "h-2 w-8 bg-white shadow-lg shadow-white/50"
                    : "h-2 w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* === Main Hero Section === */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20 md:py-28 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* === Left: Product Display === */}
            <div className="order-2 lg:order-1 relative">
              {/* Main Product Image */}
              <div className="relative z-10">
                <Image
                  src="/images/home.jpeg"
                  alt="Nature Water - 14-Stage RO Purified Bottled Water"
                  width={600}
                  height={600}
                  className="w-full object-contain drop-shadow-2xl animate-float"
                  priority
                  quality={95}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-20 -right-4 bg-white rounded-2xl shadow-2xl p-4 max-w-[180px] animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-xl">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="text-lg font-black text-gray-900">25+ Yrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* === Right: Content Section === */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-600"></div>
                <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-light">
                  Established 2003
                </p>
              </div>

              {/* Main Heading - Proper H1 for SEO */}
              <div className="space-y-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    Nature
                  </span>
                  <br />
                  <span className="text-slate-900">Water</span>
                  {/* SEO-friendly hidden text */}
                  <span className="sr-only">
                    - Premium Bottled Water in Pakistan with 14-Stage RO
                    Purification
                  </span>
                </h1>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light">
                    Premium Quality
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-thin text-slate-700 leading-relaxed">
                  Pure Water is Your Right
                </h2>
              </div>

              {/* Description */}
              <div className="max-w-xl">
                <p className="text-lg font-light text-slate-600 leading-[1.9]">
                  For over two decades, we&apos;ve perfected the art of water
                  purification. Every drop is a testament to our unwavering
                  commitment to quality, delivering crystal-clear hydration to
                  discerning families across Pakistan.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-3 gap-6 py-10">
                {[
                  {
                    icon: Droplet,
                    label: "14-Stage RO",
                    desc: "Advanced Purification",
                  },
                  { icon: Shield, label: "BPA-Free", desc: "Safe Packaging" },
                  {
                    icon: Award,
                    label: "ISO Certified",
                    desc: "Quality Assured",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group text-center cursor-pointer"
                    role="article"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <item.icon
                        className="w-6 h-6 text-blue-600"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-700 font-light">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust Points */}
              <div className="space-y-5">
                <h3 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-light mb-8">
                  The Nature Difference
                </h3>
                <ul className="space-y-4" role="list">
                  {[
                    "Over two decades of excellence in water purification",
                    "Advanced 14-stage reverse osmosis technology",
                    "Trusted by 25,000+ premium households and enterprises",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <CheckCircle2
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                      <span className="text-base font-light text-slate-600">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <a
                  href="https://wa.me/923005553186?text=Assalam%20o%20Alaikum!%20Main%20Nature%20Water%20order%20karna%20chahta%20hun..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                  aria-label="Order Nature Water on WhatsApp"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3 text-sm font-light tracking-[0.2em] uppercase">
                    Order Now
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  </span>
                </a>
                <Link
                  href="/corporate"
                  className="group relative border border-blue-600 text-blue-600 px-12 py-6 text-center overflow-hidden transition-all duration-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                  aria-label="Corporate water solutions"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative text-sm font-light tracking-[0.2em] uppercase">
                    Corporate Solutions
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Enhanced Stats Section === */}
      <section
        className="relative bg-gradient-to-r from-slate-50 via-white to-slate-50 py-24 overflow-hidden"
        aria-label="Company statistics"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent"></div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div className="relative max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              {
                value: "50L+",
                label: "Bottles Delivered",
                icon: TrendingUp,
                color: "from-blue-600 to-cyan-600",
              },
              {
                value: "25K+",
                label: "Happy Families",
                icon: Users,
                color: "from-green-600 to-emerald-600",
              },
              {
                value: "25",
                label: "Years Legacy",
                icon: Clock,
                color: "from-purple-600 to-pink-600",
              },
              {
                value: "ISO",
                label: "Certified",
                icon: BadgeCheck,
                color: "from-orange-600 to-red-600",
              },
            ].map((stat, idx) => (
              <article
                key={idx}
                className="text-center group"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                    : "none",
                }}
              >
                <div className="relative inline-block mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}
                  ></div>
                  <stat.icon
                    className={`w-10 h-10 mx-auto text-transparent bg-clip-text bg-gradient-to-r ${stat.color} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className={`text-6xl font-thin text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-600 font-light">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
        {/* video */}
       <VideoModal videoId="MlXaDNYN2hg" />
      </section>

      {/* === Animations === */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}