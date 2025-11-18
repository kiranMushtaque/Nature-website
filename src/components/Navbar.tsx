



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Phone,
  MapPin,
  Droplets,
  Filter,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Close mobile menu on outside click
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Dropdown Data
  const productMenuItems = [
    {
      href: "/products/all",
      label: "All Products",
      desc: "Complete range",
      icon: Droplets,
    },
    {
      href: "/our-water",
      label: "Our Water",
      desc: "Purity from source to sip",
      icon: Filter,
    },
    {
      href: "/products/process",
      label: "Purification Process",
      desc: "14-step advanced",
      icon: Filter,
    },
    {
      href: "/products/sustainability",
      label: "Sustainability",
      desc: "Eco-friendly",
      icon: Leaf,
    },
    {
      href: "/products/certificates",
      label: "Certificates",
      desc: "PSQCA, ISO, Halal",
      icon: ShieldCheck,
    },
  ];

  // About menu organized in 2 columns
  const aboutMenuColumn1 = [
    { href: "/about", label: "About Us", desc: "25 years of trust" },
    {
      href: "/corporate",
      label: "Corporate",
      desc: "Corporates & institutions",
    },
    { href: "/reviews", label: "Reviews", desc: "Customer stories" },
    { href: "/faqs", label: "FAQs", desc: "Common questions" },
  ];

  const aboutMenuColumn2 = [
    {
      href: "/nature-custom",
      label: "Nature Custom",
      desc: "Branded bottles",
    },
    {
      href: "/people-who-trust-us",
      label: "Trusted By",
      desc: "100,000+ customers",
    },
    {
      href: "/achievements",
      label: "Our Achievements",
      desc: "Awards & recognition",
    },
  ];

  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <>
      {/* Top Contact Bar - Premium Blue */}
      <div className="bg-gradient-to-r from-[#0066B3] to-[#004C99] text-white text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href="tel:111628873"
                className="flex items-center gap-1.5 hover:text-cyan-200 transition-colors duration-200"
                aria-label="Call helpline"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xs:inline">Helpline: </span>111-628-873
                <span className="text-cyan-300 font-semibold">(NATURE)</span>
              </a>
              <a
                href="https://wa.me/923005553186"
                className="flex items-center gap-1.5 hover:text-cyan-200 transition-colors duration-200"
                aria-label="WhatsApp contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.253-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.257 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.125 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3-8.413Z" />
                </svg>
                <span className="hidden xs:inline">WhatsApp: </span>0300-5553186
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Karachi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100 sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Nature Water - Home"
            >
              <Image
                src="/images/products/naturewater-logo.png"
                alt="Nature Water - Premium Bottled Water"
                width={140}
                height={56}
                sizes="(max-width: 768px) 120px, 140px"
                className="h-10 w-auto lg:h-12 transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isProducts = item === "Products";
                const isAbout = item === "About";

                return isProducts ? (
                  <div key={item} className="relative group">
                    <button
                      className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm hover:text-[#0066B3] transition-colors duration-75"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {item}
                      <ChevronDown className="w-4 h-4 transition-transform duration-75 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-75 z-50 group-hover:translate-y-0 -translate-y-1">
                      <div className="p-5 space-y-1">
                        {productMenuItems.map(
                          ({ href, label, desc, icon: Icon }) => (
                            <Link
                              key={href}
                              href={href}
                              className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-75 group/item border border-transparent hover:border-blue-300"
                            >
                              <Icon className="w-5 h-5 text-[#0066B3] mt-0.5 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-75" />
                              <div>
                                <p className="font-semibold text-sm text-gray-800 group-hover/item:text-[#0066B3] transition-colors duration-75">
                                  {label}
                                </p>
                                <p className="text-xs text-gray-500 group-hover/item:text-gray-700 transition-colors duration-75">
                                  {desc}
                                </p>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : isAbout ? (
                  <div key={item} className="relative group">
                    <button
                      className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm hover:text-[#0066B3] transition-colors duration-75"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {item}
                      <ChevronDown className="w-4 h-4 transition-transform duration-75 group-hover:rotate-180" />
                    </button>
                    {/* 2 Column Layout for About */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[520px] bg-white shadow-2xl rounded-2xl border border-gray-200 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-75 z-50 group-hover:translate-y-0 -translate-y-1">
                      <div className="p-5 grid grid-cols-2 gap-4">
                        {/* Column 1 */}
                        <div className="space-y-1">
                          {aboutMenuColumn1.map(({ href, label, desc }) => (
                            <Link
                              key={href}
                              href={href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-75 border border-transparent hover:border-blue-300"
                            >
                              <div>
                                <p className="font-semibold text-sm text-gray-800 hover:text-[#0066B3] transition-colors duration-75">
                                  {label}
                                </p>
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-75">
                                  {desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* Column 2 */}
                        <div className="space-y-1">
                          {aboutMenuColumn2.map(({ href, label, desc }) => (
                            <Link
                              key={href}
                              href={href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-75 border border-transparent hover:border-blue-300"
                            >
                              <div>
                                <p className="font-semibold text-sm text-gray-800 hover:text-[#0066B3] transition-colors duration-75">
                                  {label}
                                </p>
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-75">
                                  {desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item}
                    href={href}
                    className="text-gray-700 font-semibold text-sm hover:text-[#0066B3] transition-colors duration-75 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0066B3] after:transition-all after:duration-150 hover:after:w-full"
                  >
                    {item}
                  </Link>
                );
              })}

              <Link
                href="/promotions"
                className="relative px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-75 flex items-center gap-1"
              >
                Offers
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                  HOT
                </span>
              </Link>

              <Link
                href="/cart"
                className="relative p-2.5 rounded-full hover:bg-blue-50 transition-all duration-75 hover:scale-110"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                href="/products/all"
                className="bg-gradient-to-r from-[#0066B3] to-[#004C99] text-white px-6 py-2.5 font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-75"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile: Cart Icon + Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Cart Icon - Always Visible on Mobile */}
              <Link
                href="/cart"
                className="relative p-2 rounded-full hover:bg-blue-50 transition-all duration-75"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-75"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-b from-[#0066B3] to-[#004C99] z-50 overflow-y-auto shadow-2xl animate-slide-in">
            <div className="px-6 pt-20 pb-10 space-y-1">
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-150"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {navItems.map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isProducts = item === "Products";
                const isAbout = item === "About";

                return isProducts ? (
                  <div key={item} className="border-b border-white/20 pb-2">
                    <button
                      onClick={() => {
                        setProductsOpen(!productsOpen);
                        setAboutOpen(false);
                      }}
                      className="w-full flex justify-between items-center py-4 text-lg font-bold text-white hover:bg-white/10 active:bg-white/20 rounded-xl px-3 transition-all duration-100"
                      aria-expanded={productsOpen}
                    >
                      {item}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          productsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        productsOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-2 pb-4 space-y-1 bg-white/5 backdrop-blur-sm rounded-2xl p-4 mt-2 border border-white/10">
                        {productMenuItems.map(({ href, label, icon: Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-4 py-3 text-white/90 font-medium hover:text-white hover:bg-white/10 active:bg-white/20 active:scale-95 transition-all duration-100 rounded-lg px-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon className="w-5 h-5 text-cyan-300" />
                            <span>{label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : isAbout ? (
                  <div key={item} className="border-b border-white/20 pb-2">
                    <button
                      onClick={() => {
                        setAboutOpen(!aboutOpen);
                        setProductsOpen(false);
                      }}
                      className="w-full flex justify-between items-center py-4 text-lg font-bold text-white hover:bg-white/10 active:bg-white/20 rounded-xl px-3 transition-all duration-150"
                      aria-expanded={aboutOpen}
                    >
                      {item}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        aboutOpen
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-2 pb-4 space-y-1 bg-white/5 backdrop-blur-sm rounded-2xl p-4 mt-2 border border-white/10">
                        {/* All About links in one column on mobile */}
                        {[...aboutMenuColumn1, ...aboutMenuColumn2].map(
                          ({ href, label }) => (
                            <Link
                              key={href}
                              href={href}
                              className="block py-3 text-white/90 font-medium hover:text-white hover:bg-white/10 active:bg-white/20 active:scale-95 transition-all duration-100 rounded-lg px-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item}
                    href={href}
                    className="block py-4 text-xl font-bold text-white border-b border-white/20 hover:text-white hover:bg-white/10 active:bg-white/20 rounded-lg px-3 transition-all duration-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}

              <Link
                href="/promotions"
                className="flex items-center justify-between py-4 text-xl font-bold text-white border-b border-white/20 hover:bg-white/10 active:bg-white/20 rounded-lg px-3 transition-all duration-100 relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                Special Offers
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  HOT
                </span>
              </Link>

              <Link
                href="/products/all"
                className="block w-full text-center bg-yellow-400 text-[#0066B3] py-4 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-300 active:scale-95 transition-all duration-150 mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}