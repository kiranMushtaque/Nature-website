

"use client";

import React from "react";
import { Droplets, Shield, Sparkles, Award, CheckCircle } from "lucide-react";

export default function OurWaterClient() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white scroll-smooth">
        {/* ==== HERO - 100% RESPONSIVE (SAME AS YOURS) ==== */}
        <section className="relative w-full h-screen md:h-[85vh] lg:h-[90vh] overflow-hidden">
          {/* Background Image - SAME AS YOURS */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat"
            style={{
              backgroundImage: "url('/images/our-water.jpeg')",
              backgroundPosition: "center top",
              backgroundSize: "contain",
            }}
          />

          {/* Responsive Background Fix - SAME AS YOURS */}
          <style jsx>{`
            @media (max-width: 640px) {
              .hero-bg {
                background-size: 200% auto !important;
                background-position: center 10% !important;
              }
            }
            @media (min-width: 641px) and (max-width: 1024px) {
              .hero-bg {
                background-size: 160% auto !important;
              }
            }
            @media (min-width: 1025px) {
              .hero-bg {
                background-size: cover !important;
                background-position: center center !important;
              }
            }
          `}</style>

          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/85 md:bg-blue-900/80" />

          {/* CONTENT - TEXT FULLY VISIBLE */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 max-w-5xl mx-auto text-center">
            {/* Hidden SEO H1 */}
            <h1 className="sr-only">
              Nature Water - Pakistan&apos;s Purest Bottled Water
            </h1>

            {/* Visual Title */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-4 sm:mb-6">
              <Droplets className="w-14 h-14 sm:w-16 md:w-20 text-cyan-200" />
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl">
                Our Water
              </h2>
            </div>

            {/* TEXT - FIXED RESPONSIVE */}
            <div className="w-full max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 font-medium leading-relaxed px-4 sm:px-6 drop-shadow-md">
                At Nature Water, purity is our promise and passion. As
                Pakistan&apos;s first-ever national bottled water brand with
                both national and international certifications, we&apos;re
                setting new benchmarks in safe hydration and quality assurance.
              </p>
            </div>
          </div>
        </section>

        {/* ==== MAIN CONTENT ==== */}
        <section
          id="purification"
          className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 scroll-mt-20"
        >
          {/* Intro card */}
          <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-10 lg:mb-14 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Sparkles className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-3">
                  14-Stage Purification Process
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Every drop of Nature Water goes through an advanced 14-stage
                  purification process, ensuring that each bottle meets the
                  highest standards of purity, safety, and taste. From source to
                  sip, we guarantee water that&apos;s clean, healthy, and
                  naturally refreshing.
                </p>
              </div>
            </div>
          </article>

          {/* Feature cards */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
            {/* Card 1 */}
            <article className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-blue-200">
              <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                Sourced from Nature
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our water is sourced from deep underground wells, naturally
                protected from external contaminants. It then undergoes our
                state-of-the-art 14-stage purification system, designed to
                remove impurities while retaining the perfect natural balance.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-cyan-200">
              <div className="bg-cyan-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-800 mb-3">
                Essential Minerals
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To enhance it&apos;s smooth and balanced flavor, we add a
                carefully measured blend of essential minerals after
                purification. This gives Nature Water it&apos;s distinctive pure
                taste that&apos;s ideal for daily hydration, fitness, and family
                health.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-teal-200">
              <div className="bg-teal-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-teal-800 mb-3">
                Certified Purity
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our commitment to quality is backed by both national and
                international certifications, confirming that every bottle of
                Nature Water meets global standards for safety and purity.
              </p>
            </article>
          </div>

          {/* Quality Assurance */}
          <article className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
              <Award className="w-10 h-10 sm:w-12 mb-3 sm:mb-0 sm:mr-3" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">
                Quality You Can Trust
              </h2>
            </div>

            <div className="grid gap-6 mt-6 sm:mt-8 md:grid-cols-2">
              {[
                {
                  title: "National Certifications",
                  desc: "Approved by Pakistan's leading quality standards authorities",
                },
                {
                  title: "International Standards",
                  desc: "Meeting global benchmarks for water purity and safety",
                },
                {
                  title: "14-Stage Purification",
                  desc: "Advanced filtration ensuring maximum purity in every drop",
                },
                {
                  title: "Natural Mineral Balance",
                  desc: "Perfectly balanced minerals for optimal taste and health",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0 mt-1 text-cyan-200" />
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-blue-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </>
  );
}