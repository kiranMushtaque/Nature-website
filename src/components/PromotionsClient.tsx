"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Sparkles } from "lucide-react";

export default function PromotionsClient() {
  const offers = [
    {
      id: 1,
      img: "add-1",
      title: "Free Trial Samples",
      desc: "Available for hotels, restaurants & institutions",
    },
    {
      id: 2,
      img: "add-2",
      title: "Free 2 Cartons!",
      desc: "Limited slots for new distributors",
    },
    {
      id: 4,
      img: "add-4",
      title: "Amazing Offer!",
      desc: "Get FREE Table Top Dispenser + Mehran Hamper",
    },
  ];

  return (
    <>
      {/* ==== HERO ==== */}
      <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0066B3] via-[#00509e] to-[#004C99]">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Exclusive <span className="text-yellow-400">Offers</span> &
              <br className="hidden sm:block" /> Promotions
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-blue-100">
              Limited‑time deals for homes, offices, and corporate partners
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923005553186?text=Assalam%20o%20Alaikum!%20Mujhe%20offers%20ke%20bare%20mein%20batayein..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-full font-bold text-base sm:text-lg shadow-xl transition"
              >
                <Phone className="w-5 h-5" />
                Claim on WhatsApp
              </a>

              <Link
                href="/products/all"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0066B3] px-7 py-3.5 rounded-full font-bold text-base sm:text-lg transition"
              >
                Shop Now <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==== PROMOTIONS GRID ==== */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Current Promotions
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Don’t miss out — these offers are available for a limited time!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, i) => (
              <motion.article
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/adds/${offer.img}.jpeg`}
                    alt={offer.title}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    LIMITED
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.desc}</p>

                  <a
                    href="https://wa.me/923005553186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#0066B3] hover:text-[#004C99] font-semibold text-sm transition"
                  >
                    Claim Now <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-12 text-center text-xs sm:text-sm text-gray-500">
            * Terms & conditions apply. Offers valid while stocks last.
          </p>
        </div>
      </section>

      {/* ==== FINAL CTA ==== */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#0066B3] to-[#004C99] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Ready to Grab Your Offer?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-7">
            Contact us now and get your exclusive deal!
          </p>

          <a
            href="tel:111628873"
            className="inline-flex items-center gap-2 bg-white text-[#0066B3] hover:bg-gray-100 px-9 py-3.5 rounded-full font-bold text-base sm:text-lg shadow-xl transform hover:scale-105 transition"
          >
            Call Now: 111‑628‑873
          </a>
        </div>
      </section>
    </>
  );
}
