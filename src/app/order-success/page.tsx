// src/app/order-success/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle, Package, Truck, Phone, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

export default function OrderSuccessPage() {
  // Optional: Clear cart after showing thank you (good practice)
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("customerInfo");
      sessionStorage.removeItem("cartItems");
      localStorage.removeItem("cart"); 
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-10 text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
              Order Confirmed!
            </h1>
            <p className="text-xl text-green-50">
              Aapka order successfully receive ho gaya hai
            </p>
          </div>

          {/* Body */}
          <div className="p-8 sm:p-12 text-center space-y-8">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-gray-800">
                Shukriya aapka trust dikhane ke liye!
              </p>
              <p className="text-lg text-gray-600">
                Humara team aapko WhatsApp pe order details aur delivery update
                bhej raha hai.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <Truck className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold">Free Delivery</p>
                  <p className="text-sm text-gray-600">Karachi mein</p>
                </div>
                <div>
                  <Package className="w-10 h-10 text-green-600 mx-auto mb-2" />
                  <p className="font-bold">Cash on Delivery</p>
                  <p className="text-sm text-gray-600">100% Safe</p>
                </div>
                <div>
                  <Phone className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                  <p className="font-bold">Support</p>
                  <a
                    href="tel:03005553186"
                    className="text-purple-600 font-bold"
                  >
                    0300-555-3186
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="/products/all"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <ShoppingBag className="w-6 h-6" />
                Continue Shopping
              </Link>

              <div className="text-sm text-gray-500">
                <p>Koi sawal ho to WhatsApp ya call kar sakte hain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/923005553186"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-.917-1.401-.079-1.778.197-.099.347-.223.644-.373.297-.149.446-.224.644-.373.198-.149.297-.297.297-.596 0-.298-.074-.595-.297-.893-.223-.298-.596-.447-1.041-.447-.446 0-.893.074-1.338.223-.446.149-1.189.597-1.338 1.49-.149.893.074 1.786.595 2.827.521 1.041 1.487 1.933 2.455 2.383.968.45 1.936.374 2.605.149.67-.225 1.264-.596 1.487-1.041.223-.446.297-.893.223-1.338-.074-.446-.297-.67-.596-.893zM12 2C6.48 2 2 6.48 2 12c0 2.136.67 4.124 1.8 5.76L2 22l4.36-1.76C8.012 21.34 9.986 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
