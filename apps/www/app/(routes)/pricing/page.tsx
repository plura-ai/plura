"use client";
import {
  PageHeader,
  PageHeaderDescription,
} from "@/components/custom/text-wrappers";
import PricingCards from "@/components/custom/pricing/pricing.cards";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader className="gap-2">
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-4xl md:leading-tight">
          Get instant access to all components and templates
        </h2>
        <PageHeaderDescription className="max-w-3xl mx-auto tracking-tight ">
          For a one-time payment, you get access to all components and
          templates, including future updates and new templates.
        </PageHeaderDescription>
      </PageHeader>

      <section id="pricing" className="flex items-center justify-center">
        <PricingCards />
      </section>
    </div>
  );
}
