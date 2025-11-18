



// src/components/CheckoutForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { MapPin, Phone, User, Mail, Home, ChevronDown, AlertCircle, ShieldCheck, Truck, CreditCard } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

const karachiAreas: Option[] = [
  { value: "Clifton", label: "Clifton" },
  { value: "DHA", label: "Defence Housing Authority (DHA)" },
  { value: "Gulshan-e-Iqbal", label: "Gulshan-e-Iqbal" },
  { value: "Gulistan-e-Johar", label: "Gulistan-e-Johar" },
  { value: "Korangi", label: "Korangi" },
  { value: "Landhi", label: "Landhi" },
  { value: "Malir", label: "Malir" },
  { value: "Nazimabad", label: "Nazimabad" },
  { value: "North Nazimabad", label: "North Nazimabad" },
  { value: "North Karachi", label: "North Karachi" },
  { value: "Orangi Town", label: "Orangi Town" },
  { value: "PECHS", label: "PECHS" },
  { value: "Saddar", label: "Saddar" },
  { value: "Shah Faisal Colony", label: "Shah Faisal Colony" },
  { value: "Surjani Town", label: "Surjani Town" },
  { value: "Lyari", label: "Lyari" },
  { value: "Baldia Town", label: "Baldia Town" },
  { value: "Federal B Area", label: "Federal B Area" },
  { value: "Gulberg", label: "Gulberg" },
  { value: "Kemari", label: "Kemari" },
  { value: "Other", label: "Other Location" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  address: string;
  customArea: string;
}

export default function CheckoutForm() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    area: "",
    address: "",
    customArea: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleProceed = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.match(/^\d{11}$/))
      newErrors.phone = "Please enter valid 11-digit mobile number";
    if (!formData.area) newErrors.area = "Please select your delivery area";
    if (formData.area === "Other" && !formData.customArea.trim())
      newErrors.customArea = "Please specify your area";
    if (!formData.address.trim()) newErrors.address = "Complete delivery address is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const selectedArea = karachiAreas.find((a) => a.value === formData.area);
    const finalArea = formData.area === "Other" ? formData.customArea : selectedArea?.label || formData.area;

    const itemsText = cartItems
      .map(
        (item) =>
          `• ${item.name} × ${item.quantity} = Rs ${(item.price * item.quantity).toLocaleString()}`
      )
      .join("%0A");

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const whatsappMessage = `*NATURE WATER - NEW ORDER*%0A%0A` +
      `*CUSTOMER INFORMATION*%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email || 'N/A'}%0A%0A` +
      `*DELIVERY ADDRESS*%0A` +
      `Area: ${finalArea}%0A` +
      `Address: ${encodeURIComponent(formData.address)}%0A%0A` +
      `*ORDER DETAILS*%0A${itemsText}%0A%0A` +
      `*PAYMENT SUMMARY*%0A` +
      `Subtotal: Rs ${total.toLocaleString()}%0A` +
      `Delivery Charges: FREE%0A` +
      `*Total Amount: Rs ${total.toLocaleString()}*%0A%0A` +
      `Payment Method: Cash on Delivery%0A` +
      `Order Time: ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })}`;

    const whatsappUrl = `https://wa.me/923005553186?text=${whatsappMessage}`;

    sessionStorage.setItem("lastOrderPlaced", "true");
    window.open(whatsappUrl, "_blank");

    if (clearCart) clearCart();

    router.push("/order-success");
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 sm:p-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Secure Checkout</h2>
          </div>
          <p className="text-center text-blue-100 text-sm sm:text-base">
            Complete your order details below. All information is encrypted and secure.
          </p>
        </div>
      </div>

      {/* Order Summary Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-y border-gray-200 py-6 px-6 sm:px-8">
        <div className="max-w-2xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Order Total</p>
            <p className="text-4xl font-bold text-gray-900">
              Rs {total.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-200">
              <Truck className="w-4 h-4" />
              <span className="text-sm font-semibold">FREE Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg border border-blue-200">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm font-semibold">Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-6 sm:p-8 md:p-10">
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Section: Personal Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              Personal Information
            </h3>
            <div className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label htmlFor="customer-name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-blue-600" /> Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="customer-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all focus:outline-none focus:ring-3 text-base ${
                    errors.name
                      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-600 focus:ring-blue-100"
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1.5 mt-2 text-red-600 text-sm font-medium">
                    <AlertCircle className="w-4 h-4" /> {errors.name}
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="customer-email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 text-blue-600" /> Email Address 
                  <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="customer-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all text-base focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="customer-phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 text-blue-600" /> Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="customer-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="03XX XXXXXXX"
                  maxLength={11}
                  autoComplete="tel"
                  className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all focus:outline-none focus:ring-3 text-base ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-600 focus:ring-blue-100"
                  }`}
                />
                {errors.phone && (
                  <div className="flex items-center gap-1.5 mt-2 text-red-600 text-sm font-medium">
                    <AlertCircle className="w-4 h-4" /> {errors.phone}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section: Delivery Address */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              Delivery Address
            </h3>
            <div className="space-y-5">

              {/* Area Selection */}
              <div>
                <label htmlFor="delivery-area" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> Select Area <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="delivery-area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    autoComplete="address-level2"
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all focus:outline-none focus:ring-3 appearance-none text-base ${
                      errors.area
                        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                        : "border-gray-300 focus:border-blue-600 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Choose your area</option>
                    {karachiAreas.map((area) => (
                      <option key={area.value} value={area.value}>
                        {area.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                {errors.area && (
                  <div className="flex items-center gap-1.5 mt-2 text-red-600 text-sm font-medium">
                    <AlertCircle className="w-4 h-4" /> {errors.area}
                  </div>
                )}
              </div>

              {/* Custom Area Input */}
              {formData.area === "Other" && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label htmlFor="custom-area" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> Specify Your Area <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="custom-area"
                    name="customArea"
                    value={formData.customArea}
                    onChange={handleChange}
                    placeholder="e.g., Model Colony, Scheme 33"
                    autoComplete="off"
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all focus:outline-none focus:ring-3 text-base ${
                      errors.customArea
                        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                        : "border-gray-300 focus:border-blue-600 focus:ring-blue-100"
                    }`}
                  />
                  {errors.customArea && (
                    <div className="flex items-center gap-1.5 mt-2 text-red-600 text-sm font-medium">
                      <AlertCircle className="w-4 h-4" /> {errors.customArea}
                    </div>
                  )}
                </div>
              )}

              {/* Complete Address */}
              <div>
                <label htmlFor="delivery-address" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Home className="w-4 h-4 text-blue-600" /> Complete Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="delivery-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  placeholder="House/Flat number, Building name, Street/Block, Sector, Nearby landmark"
                  autoComplete="street-address"
                  className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all focus:outline-none focus:ring-3 resize-none text-base ${
                    errors.address
                      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-600 focus:ring-blue-100"
                  }`}
                />
                {errors.address && (
                  <div className="flex items-center gap-1.5 mt-2 text-red-600 text-sm font-medium">
                    <AlertCircle className="w-4 h-4" /> {errors.address}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handleProceed}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                Processing Order...
              </>
            ) : (
              <>
                <ShieldCheck className="w-6 h-6" />
                Place Order via WhatsApp
              </>
            )}
          </button>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="font-medium">Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}