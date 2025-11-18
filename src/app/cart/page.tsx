


// src/app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Plus, Minus, Trash2, Truck, Shield, Phone, Package } from "lucide-react";
import CheckoutForm from "@/components/CheckoutForm";

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            Add premium water bottles to start your order
          </p>
          <Link
            href="/products/all"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <Package className="w-5 h-5" />
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-6 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            {getTotalItems()} {getTotalItems() === 1 ? "Item" : "Items"} in Cart
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-900 mb-3">
            Your Cart
          </h1>
          <p className="text-base sm:text-lg text-gray-600">Review your order before checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-4 sm:p-6 transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2 sm:p-3"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-base sm:text-lg text-gray-800 mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.perBottlePrice
                        ? `Rs ${item.perBottlePrice} per bottle`
                        : `Rs ${item.price} each`}
                    </p>
                    {item.discountedPrice && (
                      <p className="text-xs sm:text-sm text-green-600 font-bold mt-1">
                        Save Rs {item.price - item.discountedPrice}!
                      </p>
                    )}
                  </div>

                  {/* Price & Quantity Controls - Desktop */}
                  <div className="hidden sm:flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xl sm:text-2xl font-black text-blue-700">
                        Rs {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1">
                      <button
                        onClick={() => addToCart(item, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="w-10 h-10 rounded-lg bg-white shadow hover:bg-red-50 hover:text-red-600 transition-all flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-black text-lg">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="w-10 h-10 rounded-lg bg-white shadow hover:bg-green-50 hover:text-green-600 transition-all flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Price & Quantity Controls - Mobile */}
                <div className="flex sm:hidden items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                    <button
                      onClick={() => addToCart(item, -1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="w-9 h-9 rounded-lg bg-white shadow hover:bg-red-50 hover:text-red-600 transition-all flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-base">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item, 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="w-9 h-9 rounded-lg bg-white shadow hover:bg-green-50 hover:text-green-600 transition-all flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-black text-blue-700">
                      Rs {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Order Summary Card */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
                <h2 className="text-xl sm:text-2xl font-black mb-6 text-center">Order Summary</h2>
                
                <div className="space-y-4 text-sm sm:text-base">
                  <div className="flex justify-between items-center pb-4 border-b border-white/30">
                    <span className="text-blue-100">Subtotal</span>
                    <span className="font-black text-lg">Rs {getTotalPrice().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-white/30">
                    <span className="text-blue-100">Delivery Fee</span>
                    <span className="font-black text-green-300 text-lg">FREE</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xl font-black">Total</span>
                    <span className="text-3xl font-black">Rs {getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/30 flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-100">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Secure Checkout • Cash on Delivery</span>
                </div>
              </div>

              {/* Checkout Form */}
              <CheckoutForm />
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-3 text-gray-700 p-3 sm:p-0 bg-green-50 sm:bg-transparent rounded-xl sm:rounded-none">
              <div className="bg-green-100 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm sm:text-base">Free Delivery</p>
                <p className="text-xs text-gray-500">All across Karachi</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700 p-3 sm:p-0 bg-blue-50 sm:bg-transparent rounded-xl sm:rounded-none">
              <div className="bg-blue-100 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm sm:text-base">Need Help?</p>
                <a href="tel:03005553186" className="text-xs text-blue-600 hover:underline break-all">
                  0300-555-3186
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700 p-3 sm:p-0 bg-purple-50 sm:bg-transparent rounded-xl sm:rounded-none">
              <div className="bg-purple-100 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm sm:text-base">100% Safe</p>
                <p className="text-xs text-gray-500">Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
