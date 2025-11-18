

// ========================================
// src/app/products/page.tsx
// ========================================

import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import { Droplet, Filter, Award, ShoppingBag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nature Water Products | Pure Bottled Water for Every Need",
  description:
    "Explore Nature Water's range of premium bottled water products, purified through a 14-stage reverse osmosis process. Available in various sizes for homes, offices, and events in Karachi.",
};

export default function ProductsPage() {
  const displayedProducts = products.slice(0, 4);

  return (
    <>
 
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Droplet className="w-5 h-5" />
            <span className="font-semibold">Pure Water Products</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Our Premium Products
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Purified through a 14-stage reverse osmosis process — trusted for 25+ years across Karachi.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gradient-to-b from-white to-blue-50/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Features Bar */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-blue-100">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">100% Pure</h3>
              <p className="text-sm text-gray-600">14-Stage Purified</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-green-100">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">ISO Certified</h3>
              <p className="text-sm text-gray-600">Quality Assured</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cyan-100">
              <div className="bg-cyan-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">BPA Free</h3>
              <p className="text-sm text-gray-600">Eco-Friendly</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-purple-100">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Same Day Available</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Bulk Orders?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for corporate plans, bulk discounts, and custom labeling options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923005553186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-xl"
              >
                Contact Sales Team
              </a>
              <a
                href="/corporate"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition"
              >
                View Corporate Plans
              </a>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}










