
// app/about/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { Droplets, Users } from "lucide-react";

// === SEO Metadata ===
export const metadata: Metadata = {
  title: "About Nature Water | 25 Years of Pure Drinking Water in Karachi",
  description:
    "Trusted for 25 years, Nature Water delivers pure, safe, and mineral-balanced bottled water across Karachi. Learn about our mission, values, and commitment to quality & sustainability.",
  keywords:
    "Nature Water, bottled water Karachi, pure drinking water, 19L water bottle, water delivery Karachi, mineral water Pakistan, safe water",
  openGraph: {
    title: "About Nature Water | 25 Years of Purity in Karachi",
    description:
      "Karachi's most trusted bottled water brand for 25 years. Pure, safe, and delivered to your door.",
    url: "https://naturewater.com.pk/about",
    siteName: "Nature Water",
    images: [
      {
        url: "/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "Nature Water – 25 Years of Pure Bottled Water in Karachi",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Water | 25 Years of Purity",
    description: "Karachi's trusted bottled water brand since 2000.",
    images: ["/images/about.jpg"],
  },
  alternates: {
    canonical: "https://naturewater.com.pk/about",
  },
};

// === Structured Data (JSON-LD) ===
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nature Water",
  url: "https://naturewater.com.pk",
  logo: "https://naturewater.com.pk/logo.png",
  description: "Karachi's leading bottled water brand for 25 years, delivering pure and safe drinking water.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-21-111-628-873",
    contactType: "Customer Service",
    areaServed: "PK",
    availableLanguage: "Urdu, English",
  },
  sameAs: [
    "https://facebook.com/naturewaterpk",
    "https://instagram.com/naturewaterpk",
  ],
  foundingDate: "2000",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 150 },
  slogan: "Purity. Trust. Every Drop.",
};

export default function AboutUs() {
  return (
    <>
      {/* === Structured Data === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* SEO: Only One H1 (Hidden for screen, visible to search engines) */}
      <h1 className="sr-only">
        Nature Water – About Us | 25 Years of Pure Bottled Water in Karachi
      </h1>

      {/* ====== HERO SECTION ====== */}
      <section className="relative w-full bg-white overflow-hidden" aria-labelledby="hero-heading">
        <div className="relative w-full max-w-[1600px] mx-auto aspect-[16/6] sm:aspect-[16/7] md:aspect-[1600/600]">
          <Image
            src="/images/about.jpg"
            alt="Nature Water bottled water plant and 25 years of purity in Karachi"
            fill
            className="object-cover object-top md:object-center"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNMQIoIFMRTG8QwIHrHHO0ZcI7kHwgqYIgGHR2CCdJQFhwzSDvMmoOKhBwev0B6vUfYYkHwf//Z"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Droplets className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-2" aria-hidden="true" />
              <h2 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                Nature Water
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-wide">
              Purity. Trust. Every Drop.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ====== OUR STORY ====== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Our Story
          </h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              For <span className="font-bold text-blue-600">25 years</span>, Nature Water has been Karachi’s symbol of trust, purity, and health.
            </p>
            <p>
              What began as a small idea—to make pure drinking water available for everyone—has grown into one of the country’s most recognized bottled water brands.
            </p>
            <p className="text-lg sm:text-xl font-medium text-gray-900 italic">
              Every drop of Nature Water is more than hydration—it’s a promise.
            </p>
            <p>
              A promise of safety, quality, and care, backed by decades of experience and innovation.
            </p>

            <p className="font-semibold mt-6 sm:mt-8">We serve a wide range of customers:</p>

            <ul className="mt-4 sm:mt-6 space-y-3 text-left max-w-xl mx-auto">
              {[
                "Corporates that rely on timely 19L bottle deliveries",
                "Households that trust our daily home service",
                "Modern trade outlets and retailers that stock Nature Water for their valued customers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 sm:mt-8">
              Our team operates with one mission: to ensure that every sip is safe, refreshing, and naturally balanced.
            </p>

            <p className="text-xl sm:text-2xl font-bold text-blue-600 mt-8 sm:mt-10">
              Because at Nature Water — you don’t just drink water; you drink confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ====== OUR VALUES ====== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Integrity",
                desc: "We never compromise on quality or purity.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Care",
                desc: "We care about the people and the planet.",
                gradient: "from-rose-500 to-pink-500",
              },
              {
                title: "Innovation",
                desc: "We invest in technology to ensure the highest standards.",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                title: "Sustainability",
                desc: "We take responsibility for every bottle we produce.",
                gradient: "from-emerald-500 to-teal-500",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div
                  className={`bg-gradient-to-br ${value.gradient} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform`}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/30 rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VISION ====== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-5 sm:mb-6">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3" aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">VISION</h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
            To be Karachi’s leading bottled water brand, known for purity, reliability, and sustainability, while ensuring that every household, office, and community has access to safe drinking water—every single day.
          </p>
        </div>
      </section>

      {/* ====== MISSION ====== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">
            MISSION
          </h2>
          <div className="space-y-5 sm:space-y-6">
            {[
              "To deliver pure bottled water across Karachi",
              "To build long-term partnerships with corporates, institutions, and households through consistency and trust",
              "To ensure eco-conscious production and packaging for a healthier planet",
              "To continuously innovate purification technology for unmatched quality",
              "To support community hydration drives and make clean water accessible for all",
            ].map((mission, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-blue-100 rounded-full p-2 mt-1 group-hover:bg-blue-600 transition-colors">
                  <Droplets className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <p className="text-base sm:text-lg text-gray-700 flex-1">{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Pure Water. Delivered.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10">
            Serving Karachi with excellence.
          </p>
          <a
            href="tel:111628873"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            aria-label="Call Nature Water at 111-628-873"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}