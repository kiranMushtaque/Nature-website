


// src/components/ProductCard.tsx
"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { useState } from "react";
import { ShoppingCart, Plus, Minus, Check, Tag, Sparkles } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, cartItems } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const item = cartItems.find((i) => i.id === product.id);

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  const hasDiscount =
    product.discountedPrice && product.discountedPrice < product.price;
  const savings = hasDiscount ? product.price - product.discountedPrice! : 0;

  return (
    <article
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100/50"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white text-xs font-bold uppercase px-3 py-2 rounded-full shadow-lg animate-pulse">
            <Tag className="w-3.5 h-3.5" />
            <span>Save Rs {savings}</span>
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-72 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 p-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent)]"></div>
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={true} 
          className="object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          itemProp="image"
        />
      </div>

      {/* Product Info */}
      <div className="p-7 space-y-4">
        {product.category && (
          <span className="inline-block text-xs uppercase tracking-widest text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
        )}

        <h3 className="text-2xl font-light text-slate-900 leading-snug group-hover:text-blue-600 transition-colors" itemProp="name">
          {product.name}
        </h3>

        <p className="text-sm font-light text-slate-600 leading-relaxed line-clamp-2" itemProp="description">
          {product.description}
        </p>

        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5">
            {product.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="font-light">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Pricing */}
        <div className="pt-3 border-t border-slate-100" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="PKR" />
          <meta itemProp="price" content={String(product.discountedPrice || product.price)} />
          <link itemProp="availability" href="https://schema.org/InStock" />

          <div className="flex items-baseline gap-3 mb-1">
            {hasDiscount ? (
              <>
                <span className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Rs {product.discountedPrice}
                </span>
                <span className="text-base line-through text-slate-400 font-light">Rs {product.price}</span>
              </>
            ) : (
              <span className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Rs {product.price}
              </span>
            )}
          </div>

          {product.perBottlePrice && (
            <p className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-1">
              Rs {product.perBottlePrice} per bottle
            </p>
          )}
        </div>

        {/* Cart Controls */}
        {item ? (
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-3.5 shadow-inner border border-blue-100/50">
            <button
              onClick={() => addToCart(item, -1)}
              className="w-11 h-11 rounded-full bg-white shadow-md text-red-500 hover:bg-red-50 hover:text-red-600 transition-all hover:scale-110 flex items-center justify-center group"
              aria-label="Decrease quantity"
            >
              <Minus className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            <span className="text-2xl font-light text-slate-900 min-w-[3rem] text-center tabular-nums">
              {item.quantity}
            </span>

            <button
              onClick={() => addToCart(item, 1)}
              className="w-11 h-11 rounded-full bg-white shadow-md text-green-500 hover:bg-green-50 hover:text-green-600 transition-all hover:scale-110 flex items-center justify-center group"
              aria-label="Increase quantity"
            >
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            disabled={isAdding}
            className={`w-full py-4 rounded-2xl font-medium tracking-wide uppercase text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg ${
              isAdding
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-200"
                : "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white hover:from-blue-700 hover:via-cyan-700 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-200 hover:scale-[1.02]"
            }`}
          >
            {isAdding ? (
              <>
                <Check className="w-5 h-5 animate-bounce" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        )}
      </div>
    </article>
  );
}

