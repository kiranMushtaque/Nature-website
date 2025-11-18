import { Metadata } from "next";
import ReviewsClient from "@/components/ReviewsClient";

export const metadata: Metadata = {
  title: "Nature Water Customer Reviews | Trusted by Thousands",
  description:
    "Read genuine customer reviews for Nature Water. See why thousands of families, offices, and hospitals trust our pure bottled water for their daily hydration needs in Karachi.",
  keywords: [
    "nature water reviews",
    "customer testimonials",
    "bottled water karachi",
    "water delivery reviews",
    "pure water pakistan",
  ],
  openGraph: {
    title: "Nature Water Customer Reviews | Trusted by Thousands",
    description:
      "See why thousands trust Nature Water for pure, safe, and reliable bottled water.",
    url: "https://www.naturewater.com.pk/reviews",
    type: "website",
    images: [
      {
        url: "https://www.naturewater.com.pk/images/reviews-og.jpg",
        width: 1200,
        height: 630,
        alt: "Customer Reviews for Nature Water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Water Customer Reviews | Trusted by Thousands",
    description:
      "See why thousands trust Nature Water for pure, safe, and reliable bottled water.",
    images: ["https://www.naturewater.com.pk/images/reviews-og.jpg"],
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
