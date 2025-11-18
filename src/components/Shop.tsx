

"use client";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";
import Link from "next/link";
import {
  ShoppingBag,
  ChevronRight,
  Droplets,
  Award,
  Shield,
} from "lucide-react";

interface ShopProps {
  products: Product[];
}

export default function Shop({ products }: ShopProps) {
  const featured = products.slice(0, 4);

  return (
    <section
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
      aria-labelledby="shop-heading"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <header className="text-center mb-16 md:mb-20">
          {/* Top Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-blue-600"></div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-600" />
              <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-semibold">
                Our Range
              </p>
            </div>
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-blue-600 via-blue-600 to-transparent"></div>
          </div>

          {/* Main Heading */}
          <h2
            id="shop-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-slate-900 mb-6 leading-tight"
          >
            Pure Water, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 font-light">
              Pure Living
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg font-light text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Curated for homes, offices, and events — every bottle is a promise
            of purity, quality, and trust.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-xs uppercase tracking-wider text-slate-600 font-medium">
                PSQCA Certified
              </span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-600" />
              <span className="text-xs uppercase tracking-wider text-slate-600 font-medium">
                ISO 2003
              </span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-600" />
              <span className="text-xs uppercase tracking-wider text-slate-600 font-medium">
                100% Pure
              </span>
            </div>
          </div>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
          {featured.map((product) => (
            <div
              key={product.id}
              className="transform transition-all duration-500 hover:-translate-y-3"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/products/all"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-medium tracking-wide uppercase shadow-2xl hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300 text-sm md:text-base"
            aria-label="View full product collection"
          >
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            <span>View Full Collection</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}