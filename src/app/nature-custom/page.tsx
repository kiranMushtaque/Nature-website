import { Metadata } from "next";
import NatureCustomClient from "@/components/NatureCustomClient";

export const metadata: Metadata = {
  title: "Nature Custom | Your Brand, Our Bottle - Private Label Water",
  description:
    "Create custom-branded bottled water with Nature Water. Perfect for corporate clients, events, hotels, and promotions. Showcase your brand with premium purity and high-quality labels.",
  keywords: [
    "private label water",
    "custom branded water",
    "personalized water bottles",
    "corporate branded water",
    "event water bottles",
    "nature water custom",
  ],
  openGraph: {
    title: "Nature Custom | Your Brand, Our Bottle",
    description:
      "Elevate your brand with custom-labeled bottled water from Nature Water.",
    url: "https://www.naturewater.com.pk/nature-custom",
    type: "website",
    images: [
      {
        url: "https://www.naturewater.com.pk/images/custom-og.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Branded Water Bottles by Nature Water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Custom | Your Brand, Our Bottle",
    description:
      "Elevate your brand with custom-labeled bottled water from Nature Water.",
    images: ["https://www.naturewater.com.pk/images/custom-og.jpg"],
  },
};

export default function NatureCustomPage() {
  return <NatureCustomClient />;
}