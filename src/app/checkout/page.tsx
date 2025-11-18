


// src/app/checkout/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { CheckCircle, Package, Truck, Phone, Home, MessageCircle, ShoppingBag, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CustomerInfo {
  name: string;
  email?: string;
  phone: string;
  area: string;
  address: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const { clearCart } = useCart();
  const [customer, setCustomer] = useState<CustomerInfo | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const info = sessionStorage.getItem("customerInfo");
    const items = sessionStorage.getItem("cartItems");

    if (info && items) {
      setCustomer(JSON.parse(info));
      setCartItems(JSON.parse(items));
      clearCart();
      sessionStorage.removeItem("customerInfo");
      sessionStorage.removeItem("cartItems");
    }
  }, [clearCart]);

  if (!customer) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your order...</p>
        </div>
      </div>
    );
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderId = `NW${Date.now().toString().slice(-6)}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Nature Water!\n\n*New Order* 🎉\nOrder ID: ${orderId}\n\n*Items:*\n${cartItems
      .map((i) => `• ${i.name} x${i.quantity}`)
      .join("\n")}\n\n*Total: Rs ${totalPrice}*\n\n*Customer Details:*\nName: ${customer.name}\nPhone: ${
      customer.phone
    }\nArea: ${customer.area}\nAddress: ${customer.address}${
      customer.email ? `\nEmail: ${customer.email}` : ""
    }`
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-6 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Success Header */}
          {/* <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white p-8 sm:p-12 text-center relative overflow-hidden"> */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-300 text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <div className="bg-white/20 backdrop-blur-md w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
                Order Confirmed!
              </h1>
              <p className="text-lg sm:text-xl text-green-50 mb-4">
                Thank you, <span className="font-black">{customer.name}</span>!
                🎉
              </p>
              <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full">
                <p className="text-sm font-mono font-bold">
                  Order ID: {orderId}
                </p>
              </div>
            </div>
          </div>

          {/* Order Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-8 bg-gradient-to-r from-blue-50 to-cyan-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-4 sm:p-6 rounded-2xl text-center shadow-lg"
            >
              <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
                Items
              </p>
              <p className="text-2xl sm:text-3xl font-black text-blue-600">
                {totalItems}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-4 sm:p-6 rounded-2xl text-center shadow-lg"
            >
              <div className="bg-green-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
                Delivery
              </p>
              <p className="text-lg sm:text-xl font-black text-green-600">
                FREE
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-4 sm:p-6 rounded-2xl text-center shadow-lg"
            >
              <div className="bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl sm:text-3xl font-black text-purple-600">
                  ₨
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
                Total
              </p>
              <p className="text-lg sm:text-2xl font-black text-purple-600">
                {totalPrice.toLocaleString()}
              </p>
            </motion.div>
          </div>

          {/* Order Details */}
          <div className="p-4 sm:p-8 space-y-6">
            {/* Delivery Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 sm:p-6 rounded-2xl border-2 border-gray-200"
            >
              <h3 className="font-black text-lg sm:text-xl flex items-center gap-2 mb-4 text-gray-800">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />{" "}
                Delivery Address
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-700">{customer.area}</p>
                    <p className="text-gray-600">{customer.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a
                    href={`tel:${customer.phone}`}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    {customer.phone}
                  </a>
                </div>
                {customer.email && (
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a
                      href={`mailto:${customer.email}`}
                      className="text-gray-600 hover:underline"
                    >
                      {customer.email}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href={`https://wa.me/923005553186?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 text-white p-4 sm:p-5 rounded-2xl text-center font-black text-base sm:text-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Send Order on WhatsApp
              </a>
            </motion.div>

            {/* Call Confirmation Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 border-2 border-blue-200 p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm sm:text-base text-blue-900">
                We will call you within{" "}
                <span className="font-black">1 hour</span> to confirm your
                delivery details.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/"
                className="flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-4 rounded-2xl font-black text-center hover:shadow-xl transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" /> Back to Home
              </Link>
              <Link
                href="/products/all"
                className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-2xl font-black text-center hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" /> Shop More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}