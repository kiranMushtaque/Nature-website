



import { Metadata } from "next";
import PromotionsClient from "@/components/PromotionsClient";

export const metadata: Metadata = {
  title: "Nature Water Promotions | Exclusive Offers & Deals on Bottled Water",
  description:
    "Discover Nature Water's limited-time exclusive offers and promotions on pure bottled water for homes, offices, and corporate clients in Karachi. Grab your deal now!",
};

export default function PromotionsPage() {
  return <PromotionsClient />;
}
