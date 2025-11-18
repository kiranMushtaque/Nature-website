
// src/app/products/all/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import { Shield, Droplets, Clock, Award } from "lucide-react";

// === SEO METADATA ===
export const metadata: Metadata = {
  title: "Nature Water Products | Premium Bottled Water in Karachi",
  description:
    "Explore Nature Water's full range: 19L bottles, 1.5L, 500ml, shrink packs & dispensers. PSQCA certified, ISO 25003, free delivery in Karachi.",
  openGraph: {
    title: "Nature Water Products – Pure. Premium. Delivered.",
    description: "19L, 1.5L, 500ml bottles & dispensers. Order via WhatsApp.",
    url: "https://naturewater.com.pk/products/all",
    images: ["/og-products.jpg"],
    siteName: "Nature Water",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Water Products",
    description: "Premium mineral water for homes & offices",
    images: ["/og-products.jpg"],
  },
};

// === SCHEMA.ORG – Product Listing + Organization ===
const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nature Water Product Catalog",
  description: "Complete range of premium bottled water and dispensers",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      image: `https://naturewater.com.pk${p.image}`,
      description: p.description,
      offers: {
        "@type": "Offer",
        priceCurrency: "PKR",
        price: p.discountedPrice || p.price,
        ...(p.discountedPrice && { priceValidUntil: "2026-12-31" }),
        availability: "https://schema.org/InStock",
        url: `https://naturewater.com.pk/products/all#product-${p.id}`,
      },
    },
  })),
};

export default function AllProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            <Droplets className="w-full h-full text-blue-600/10 animate-spin-slow" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center space-y-12 z-10">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-blue-600"></div>
            <p className="text-sm uppercase tracking-[0.5em] text-blue-700 font-semibold">
              Premium Hydration
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-900 leading-tight text-center">
            <span className="block">Pure Water</span>
            <span className="block sm:inline">Pure Living</span>
          </h1>

          {/* FIXED RESPONSIVE PARAGRAPH - YEH SIRF IS PART KO FIX KIYA */}
          <div className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            <p className="hidden sm:block">From 19L home bottles to 500ml travel packs — every drop is PSQCA certified, ISO 2003 compliant.</p>
            <p className="sm:hidden">From 19L bottles to 500ml packs every drop is PSQCA certified, ISO 2003 compliant.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <a
              href="#products"
              className="group bg-white text-blue-600 border-2 border-blue-200 px-12 py-6 rounded-2xl font-medium uppercase tracking-wider shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
            >
              Explore Range
              <Droplets className="w-6 h-6 group-hover:animate-pulse" />
            </a>
            <a
              href="https://wa.me/923005553186?text=Assalam%20o%20Alaikum!%20Main%20Nature%20Water%20order%20karna%20chahta%20hun..."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-12 py-6 rounded-2xl font-medium uppercase tracking-wider shadow-2xl hover:shadow-blue-600/40 hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
            >
              Order on WhatsApp
              <Award className="w-6 h-6 group-hover:animate-spin" />
            </a>
          </div>
        </div>
      </section>

      {/* HERO IMAGE – Full Width, No Crop */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-50/50 to-cyan-50/50 backdrop-blur-sm border border-blue-100">
            <div className="relative w-full pt-[50%]">
              <Image
                src="/images/product-hero.jpeg"
                alt="Nature Water Premium Bottled Water Collection"
                fill
                priority
                className="absolute inset-0 object-contain p-8 md:p-16 brightness-95"
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OnPfQAJJAPYb2m9YQAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section
        id="products"
        className="py-24 bg-gradient-to-b from-white to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Complete Product Range
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
              Trusted by 25,000+ homes, offices, schools & hospitals across
              Karachi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="group transform transition-all duration-500 hover:-translate-y-4"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="space-y-3">
              <Shield className="w-14 h-14 mx-auto text-blue-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                PSQCA Certified
              </p>
            </div>
            <div className="space-y-3">
              <Award className="w-14 h-14 mx-auto text-cyan-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                ISO 25003
              </p>
            </div>
            <div className="space-y-3">
              <Clock className="w-14 h-14 mx-auto text-green-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                24/7 Delivery
              </p>
            </div>
            <div className="space-y-3">
              <Droplets className="w-14 h-14 mx-auto text-blue-600" />
              <p className="text-sm uppercase tracking-widest text-slate-600 font-medium">
                100% Pure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready for Pure Hydration?
          </h2>
          <p className="text-blue-100 mb-10 text-lg font-light">
            Join thousands of families who choose Nature Water daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/cart"
              className="inline-block bg-white text-blue-700 px-14 py-6 rounded-full font-medium uppercase tracking-wider shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all text-lg"
            >
              View Cart
            </a>
            <a
              href="https://wa.me/923005553186"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-14 py-6 rounded-full font-medium uppercase tracking-wider hover:bg-white/10 hover:scale-105 transition-all text-lg"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}