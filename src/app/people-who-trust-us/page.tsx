import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "People Who Trust Us | Nature Water – Trusted Hydration Partner in Karachi",
  description:
    "Over the years, Nature Water has earned the trust of leading organizations, hotels, restaurants, and institutions across Karachi with uncompromised purity and 25 years of trusted quality.",
};

export default function PeopleWhoTrustUsPage() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
          People Who Trust Us
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            Over the years, <strong>Nature Water</strong> has earned the trust
            of leading organizations, hotels, restaurants, and institutions
            across Karachi.
          </p>
          <p>
            From corporate offices to hospitality partners, our clients rely on
            us for <strong>uncompromised purity</strong>,{" "}
            <strong>dependable service</strong>, and{" "}
            <strong>25 years of trusted quality</strong>.
          </p>
          <p>
            We’re proud to be the <strong>hydration partner of choice</strong>{" "}
            for Karachi’s most respected brands.
          </p>
        </div>
      </div>
    </section>
  );
}
