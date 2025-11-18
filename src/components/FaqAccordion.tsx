"use client";

import { useState } from "react";
import {
  ChevronDown,
  Droplet,
  Shield,
  Award,
  Baby,
  Leaf,
  TestTube,
  Thermometer,
  Package,
  Phone,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const faqs: FAQItem[] = [
    {
        question: "Where does Nature Water come from?",
        answer:
          "Nature Water is sourced from approved and safe local water supplies in Pakistan. Each drop goes through a rigorous multi-step purification process, including reverse osmosis (RO), UV treatment, and microfiltration to ensure every bottle meets the highest standards of purity and safety.",
        icon: Droplet,
      },
      {
        question:
          "What makes Nature Water the best choice for pure drinking water in Pakistan?",
        answer:
          "Nature Water is committed to delivering 100% purified and safe bottled water that meets international and PSQCA standards. Every batch undergoes strict quality testing so you enjoy the same pure taste and freshness in every sip.",
        icon: Award,
      },
      {
        question: "What is reverse osmosis (RO), and why is it important?",
        answer:
          "Reverse osmosis is an advanced filtration process that removes dissolved salts, heavy metals, and other impurities from water. This process guarantees the purity of Nature Water, keeps it low in Total Dissolved Solids (TDS), and makes it perfect for daily consumption.",
        icon: Shield,
      },
      {
        question:
          "Is Nature Water safe for babies, pregnant women, and the elderly?",
        answer:
          "Yes, Nature Water is completely safe for all age groups, including infants and expecting mothers. Our purification process guarantees water that is free from bacteria, chemicals, and harmful substances. For specific medical advice, please consult your healthcare provider.",
        icon: Baby,
      },
      {
        question:
          "What is the difference between mineral water and purified water?",
        answer:
          "Mineral water comes from underground sources and naturally contains minerals. Purified water, like Nature Water, is treated with advanced technology such as RO and UV filtration to remove all impurities while maintaining a clean, neutral taste. Our focus is purity, safety, and consistency—ensuring water that's perfect for every home, office, or outdoor activity.",
        icon: TestTube,
      },
      {
        question: "How does Nature Water ensure quality and safety?",
        answer:
          "Every bottle of Nature Water is processed and sealed in state-of-the-art facilities under strict hygienic conditions. Our quality team conducts regular laboratory tests for microorganisms, heavy metals, and TDS levels to meet international quality benchmarks.",
        icon: Shield,
      },
      {
        question: "What is TDS, and why does it matter?",
        answer:
          "TDS (Total Dissolved Solids) measures the amount of minerals and salts in water. Nature Water maintains a low and balanced TDS level (under 50 ppm)—ideal for maintaining a clean taste and healthy hydration.",
        icon: Thermometer,
      },
      {
        question: "How should I store Nature Water bottles?",
        answer:
          "Keep your bottles in a cool, dry place, away from direct sunlight or strong odors. Once opened, consume the water within 24 hours for best taste and quality. Always check the 'Best Before' date on the label before drinking.",
        icon: Package,
      },
      {
        question: "What bottle sizes are available in Nature Water?",
        answer:
          "Nature Water is available in multiple sizes: 500 ml and 600 ml bottles for travel; 1.5 L for family use; and 19-liter bottles for homes, offices, and corporate clients. Same purity, quality, and taste across every size.",
        icon: Package,
      },
      {
        question: "Is Nature Water eco-friendly?",
        answer:
          "Yes! Nature Water bottles are 100% recyclable, and we continuously work on sustainable packaging initiatives to protect the environment. We encourage customers to recycle responsibly.",
        icon: Leaf,
      },
      {
        question: "How can I order or subscribe for home and office delivery?",
        answer:
          "Call our UAN 111-628-873 or message on WhatsApp. We offer monthly subscription plans for 19-liter bottles with doorstep delivery across Karachi and major cities.",
        icon: Phone,
      },
];



export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const Icon = faq.icon;
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`bg-white rounded-3xl shadow-lg border-2 transition-all duration-500 ease-in-out ${
              isOpen
                ? "border-blue-500 shadow-2xl"
                : "border-gray-100 hover:border-blue-200"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start gap-4 p-6 text-left transition-all"
            >
              <div
                className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                  isOpen
                    ? "bg-gradient-to-br from-blue-600 to-cyan-600"
                    : "bg-blue-50"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-6 h-6 ${
                      isOpen ? "text-white" : "text-blue-600"
                    }`}
                  />
                )}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-lg md:text-xl font-light transition-colors ${
                    isOpen ? "text-blue-600" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>
              <ChevronDown
                className={`flex-shrink-0 w-6 h-6 text-blue-600 transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="pl-16">
                  <p className="text-base font-light text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
