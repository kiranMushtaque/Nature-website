




import React from "react";
import { Droplets, Recycle, Truck, Users, Leaf, Heart } from "lucide-react";

export default function Sustainability() {
  const initiatives = [
    {
      icon: Recycle,
      title: "Recyclable and BPA-free packaging",
    },
    {
      icon: Droplets,
      title: "Return and reuse programs for 19L bottles",
    },
    {
      icon: Truck,
      title: "Optimized delivery routes to minimize fuel emissions",
    },
    {
      icon: Users,
      title: "Community hydration drives in underprivileged areas",
    },
    {
      icon: Leaf,
      title:
        "Active promotion of eco-friendly practices within our teams and partners",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header Section - IMPROVED RESPONSIVE */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4 md:mb-6 shadow-lg">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            SUSTAINABILITY & CSR
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4 md:mb-6">
            Pure Water, Pure Planet
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            At Nature Water, we believe that caring for people begins with
            caring for the planet. We&apos;re committed to reducing our
            environmental footprint and promoting sustainable hydration across
            Karachi.
          </p>
        </div>

        {/* Green Initiatives Section */}
        <div className="mb-12 md:mb-16 px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Our Green Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-md">
                      <initiative.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-1 mt-1 md:mt-2">
                    {initiative.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center shadow-2xl mx-4">
          <p className="text-lg md:text-xl lg:text-2xl text-white font-medium mb-3 md:mb-4">
            Every drop we deliver today ensures a better tomorrow.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-blue-50 italic">
            Because purity shouldn&apos;t just be in water — it should be in our
            actions too.
          </p>
        </div>
      </div>
    </div>
  );
}