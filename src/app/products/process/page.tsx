




import React from "react";
import {
  Droplet,
  Filter,
  Zap,
  Wind,
  Sparkles,
  Package,
  Shield,
  Award,
  CheckCircle,
  Beaker,
} from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      icon: Filter,
      title: "Source Filtration",
      description: "Removes sediments and suspended particles.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Droplet,
      title: "Reverse Osmosis (RO)",
      description: "Filters out dissolved salts and impurities.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "UV Sterilization",
      description: "Eliminates microorganisms and pathogens.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Wind,
      title: "Ozone Treatment",
      description: "Ensures long-lasting freshness and safety.",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: Sparkles,
      title: "Mineral Balancing",
      description: "Adds essential minerals for natural taste.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Package,
      title: "Automatic Bottling",
      description: "100% touch-free filling and sealing.",
      color: "from-blue-600 to-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/labtested.jpeg')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#f8fafc",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <Beaker className="w-5 h-5" />
              <span className="text-sm font-medium">
                6-Stage Purification System
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Process
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-gray-100 font-light">
              The Science Behind Every Drop
            </p>
            <p className="text-lg mb-8 text-gray-200 leading-relaxed max-w-2xl">
              At Nature Water, purity isn&apos;t just claimed — it&apos;s proven. Every
              bottle goes through a 6-step advanced purification process,
              ensuring crystal-clear, great-tasting, and safe drinking water.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm text-blue-100">Purification Stages</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99.99%</div>
              <div className="text-sm text-blue-100">Purity Level</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-blue-100">Lab Tested</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">ISO</div>
              <div className="text-sm text-blue-100">Certified Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Purification Steps
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Each stage is carefully designed to deliver crystal-clear,
              great-tasting, and safe drinking water
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-600 transition-all group"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${step.color} rounded-xl shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600">
              Multiple checkpoints ensure consistent quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Source Protection",
                desc: "Protected water sources with continuous monitoring and environmental controls",
              },
              {
                icon: Beaker,
                title: "Laboratory Testing",
                desc: "Every batch tested for over 150 parameters before bottling",
              },
              {
                icon: Award,
                title: "Certification",
                desc: "ISO 9001, HACCP, and international quality standards compliance",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Rigorous Testing Standards
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We don&apos;t just meet industry standards — we exceed them. Every
                bottle undergoes comprehensive testing before reaching your
                hands.
              </p>
              <ul className="space-y-4">
                {[
                  "Microbiological analysis for bacteria and pathogens",
                  "Chemical composition and mineral content testing",
                  "Heavy metal screening and contamination checks",
                  "pH level and TDS (Total Dissolved Solids) monitoring",
                  "Taste, odor, and clarity assessments",
                  "Packaging integrity and seal verification",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Test Results
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Bacterial Count",
                      value: "0 CFU/ml",
                      status: "Pass",
                    },
                    { label: "pH Level", value: "7-8.5", status: "Optimal" },
                    { label: "TDS", value: "200 ppm", status: "Ideal" },
                    {
                      label: "Heavy Metals",
                      value: "Not Detected",
                      status: "Safe",
                    },
                  ].map((test, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700 font-medium">
                        {test.label}
                      </span>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          {test.value}
                        </div>
                        <div className="text-sm text-green-600">
                          {test.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-white/20 rounded-full backdrop-blur-sm border-2 border-white/30">
            <Sparkles className="w-10 h-10" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Promise</h2>
          <p className="text-2xl leading-relaxed">
            Every batch is{" "}
            <span className="font-bold border-b-2 border-white">
              lab-tested
            </span>{" "}
            before it reaches you — because at Nature Water, quality control is
            not a process, <span className="font-bold">it&apos;s a promise.</span>
          </p>
        </div>
      </section>
    </div>
  );
}

