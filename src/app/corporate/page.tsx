


// src/app/corporate/page.tsx
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  Droplet,
  Building2,
  Calendar,
  Package,
  Award,
  Users,
  Truck,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nature Water Corporate Services | Hydration Solutions for Businesses",
  description:
    "Discover Nature Water's corporate services, offering reliable bottled water delivery, bulk supply, and custom labeling for businesses, offices, and events in Karachi.",
};

export default function CorporateServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* ====== HERO SECTION */}
      <section className="relative w-full bg-gradient-to-br from-cyan-50 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="text-center mb-16 space-y-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-600"></div>
              <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-light">
                Corporate Services
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-slate-900 leading-tight">
              Hydration for <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Every Workplace
              </span>
            </h1>

            <p className="text-lg md:text-xl font-light text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Trusted by leading organizations across Karachi for reliable bottled water delivery.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white/50 backdrop-blur-sm border border-blue-100/50">
            <div className="relative w-full pt-[56.25%]">
              <Image
                src="/images/corporate.jpg"
                alt="Nature Water Corporate Services"
                fill
                priority
                className="absolute inset-0 object-contain p-8 md:p-12 brightness-95 drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 1200px"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OnPfQAJJAPYb2m9YQAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/923005553186?text=Assalam%20o%20Alaikum!%20Main%20corporate%20services%20ke%20liye%20baat%20karna%20chahta%20hun..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full font-light tracking-wider uppercase shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all text-sm md:text-base"
            >
              Get Corporate Quote
            </a>
            <a
              href="tel:+923005553186"
              className="bg-white text-blue-600 px-10 py-5 rounded-full font-light tracking-wider uppercase shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all text-sm md:text-base border border-blue-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

     
      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Seamless Hydration for Your Team
          </h2>
          <p className="text-xl text-gray-600">
            Our corporate services are designed to provide seamless hydration
            for your employees, clients, and guests — without hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Shield, title: "Reliable Service", color: "blue" },
            { icon: Droplet, title: "Pure Water", color: "cyan" },
            { icon: Users, title: "Professional Care", color: "blue" },
            { icon: Award, title: "Trusted Quality", color: "cyan" },
          ].map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-8 text-center shadow-2xl">
          <p className="text-2xl lg:text-3xl font-semibold">
            That&apos;s the Nature Water corporate promise.
          </p>
        </div>
      </section>

      {/* Corporate Offerings */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Corporate Offerings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Calendar,
                title: "Scheduled Delivery",
                description: "Scheduled delivery of 19L bottles for offices",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Building2,
                title: "Bulk Supply",
                description: "Bulk supply for hotels, schools, and institutions",
                color: "from-cyan-500 to-cyan-600",
              },
              {
                icon: Package,
                title: "Custom Labeling",
                description: "Custom-labeled water bottles for events and meetings",
                color: "from-blue-600 to-cyan-600",
              },
              {
                icon: Truck,
                title: "Flexible Plans",
                description: "Dedicated corporate accounts with flexible plans",
                color: "from-cyan-600 to-blue-600",
              },
            ].map((offering, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${offering.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  <offering.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2003/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 25c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Partner with Nature Water?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses across Karachi that trust us for their daily hydration needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}