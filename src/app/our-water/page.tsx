import { Metadata } from "next";
import OurWaterClient from "@/components/OurWaterClient";

export const metadata: Metadata = {
  title: "Our Water | The Science of Purity at Nature Water",
  description:
    "Learn about the 14-stage purification process that makes Nature Water Pakistan's most trusted bottled water. Discover our commitment to quality, safety, and natural taste.",
  keywords: [
    "water purification process",
    "14-stage purification",
    "reverse osmosis",
    "pure bottled water",
    "Nature Water quality",
    "safe drinking water",
  ],
  openGraph: {
    title: "Our Water | The Science of Purity at Nature Water",
    description:
      "Discover the advanced 14-stage purification process behind every bottle of Nature Water.",
    url: "https://www.naturewater.com.pk/our-water",
    type: "website",
    images: [
      {
        url: "https://www.naturewater.com.pk/images/our-water-og.jpg",
        width: 1200,
        height: 630,
        alt: "A bottle of Nature Water with a background showing the purification process.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Water | The Science of Purity at Nature Water",
    description:
      "Discover the advanced 14-stage purification process behind every bottle of Nature Water.",
    images: ["https://www.naturewater.com.pk/images/our-water-og.jpg"],
  },
};

export default function OurWaterPage() {
  return <OurWaterClient />;
}