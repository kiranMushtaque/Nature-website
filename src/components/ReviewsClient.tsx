"use client";

import { Star, Quote, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    rating: 5,
    comment:
      "Bilkul saaf paani hai, delivery bhi time pe. 19L bottle perfect hai office ke liye!",
    date: "15 October 2025",
    verified: true,
  },
  {
    id: 2,
    name: "Ayesha R.",
    rating: 5,
    comment:
      "Mera beta sirf yehi peeta hai ab. Koi smell nahi, bilkul natural taste!",
    date: "12 October 2025",
    verified: true,
  },
  {
    id: 3,
    name: "Dr. Usman",
    rating: 5,
    comment:
      "Hospital mein use kar rahe hain. TDS level bohot low, patients ke liye safe.",
    date: "8 October 2025",
    verified: true,
  },
  {
    id: 4,
    name: "Saba Khan",
    rating: 4,
    comment:
      "Paani acha hai lekin delivery thori late aayi. Customer service ne jaldi fix kar diya.",
    date: "5 October 2025",
    verified: true,
  },
  {
    id: 5,
    name: "Rashid Mahmood",
    rating: 5,
    comment:
      "Office ke liye 50 bottles order ki, sab time pe pahunch gayi. Recommended!",
    date: "1 October 2025",
    verified: true,
  },
  {
    id: 6,
    name: "Hassan Ali",
    rating: 5,
    comment:
      "Fresh lagta hai jaise spring water. Office mein sab ko pasand aa gaya.",
    date: "28 September 2025",
    verified: true,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 transition-all ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewsClient() {
  return (
    <main className="bg-white">
      {/* === HERO - TEXT ONLY (Same as Hero) === */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8 md:px-16 text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-600"></div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-light">
              Customer Voice
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-slate-900 leading-tight">
            Trusted by <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Thousands
            </span>
          </h1>

          <p className="text-lg md:text-xl font-light text-slate-600 max-w-4xl mx-auto leading-relaxed">
            25 years of pure hydration, backed by real families, offices, and
            hospitals across Pakistan.
          </p>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                4.9
              </div>
              <StarRating rating={5} />
              <p className="text-sm text-slate-500 mt-1">
                1,284 Verified Reviews
              </p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
            <div className="text-center">
              <p className="text-4xl font-thin text-slate-900">25K+</p>
              <p className="text-sm text-slate-600">Happy Customers</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === REVIEWS GRID === */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-blue-100/50 backdrop-blur-sm"
              >
                {/* Verified Badge */}
                {review.verified && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-light tracking-wider">Verified</span>
                  </div>
                )}

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xl font-thin shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-slate-900">
                      {review.name}
                    </h3>
                    <p className="text-xs text-slate-500">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-5">
                  <StarRating rating={review.rating} />
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-10 h-10 text-blue-100 -z-10" />
                  <p className="text-base font-light text-slate-700 leading-relaxed pl-8 pr-6 italic">
                    {review.comment}
                  </p>
                  <Quote className="absolute -bottom-3 -right-1 w-10 h-10 text-blue-100 rotate-180 -z-10" />
                </div>

                {/* Hover Sparkle */}
                <Sparkles className="absolute top-4 left-4 w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-thin mb-6">
            Ready for Pure Hydration?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
            Join thousands who trust Nature Water for their daily hydration
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/923005553186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-12 py-6 rounded-full font-light tracking-wider uppercase shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all text-lg flex items-center justify-center gap-3"
            >
              <Sparkles className="w-6 h-6" />
              Order Now
            </a>
            <a
              href="/corporate"
              className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-full font-light tracking-wider uppercase hover:bg-white hover:text-blue-600 transition-all text-lg"
            >
              Corporate Solutions
            </a>
          </div>
        </div>
      </section>

      {/* === TRUST BADGES === */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-widest text-slate-400 font-light">
            <span>25+ YEARS</span>
            <span>ISO CERTIFIED</span>
            <span>PSQCA APPROVED</span>
            <span>HALAL CERTIFIED</span>
          </div>
        </div>
      </section>
    </main>
  );
}
