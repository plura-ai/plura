import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { pricingCardConfig } from "@/config/pricing.config";

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 px-4 gap-4">
      {/* Basic Plan */}
      <Card className="bg-[#171717] rounded-2xl p-2">
        <CardHeader className="rounded-2xl border-t-2 border-r border-[#333] border-opacity-80 m-3 bg-gradient-to-br from-[#262626] to-[#262829]">
          <h3 className="text-xl font-semibold">
            {pricingCardConfig.basic.name}
          </h3>
          <p className="text-xs">{pricingCardConfig.basic.tier}</p>
          <div className="flex flex-row items-center gap-2 pt-4 pb-6">
            <span className="text-7xl font-bold tracking-tight">
              {/* <span className="text-xl align-bottom">$</span> */}
              {pricingCardConfig.basic.price}
            </span>
            {/* <div className="flex flex-col text-lg gap-2 font-semibold">
            <span className="line-through">$199</span>
            <Badge className='bg-background text-primary'>
            35% OFF
            </Badge>
          </div> */}
          </div>

          <Button className="w-full bg-white text-black hover:bg-gray-200">
            Get Plura Basic
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 mt-14">
          <ul className="space-y-2.5">
            {[
              "1 year access to all the premium component packs and templates",
              "1 year of updates and new features",
              "1 year access to new templates and components",
              "Access to private discord community",
              "48 hours turnaround time for support",
              "Copy and paste, no complexity",
              "Built with Next.js and React",
              "Styled with Tailwind CSS and Framer Motion",
              "Available in TypeScript and JavaScript",
              "Cancel anytime",
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="w-full text-gray-400 hover:text-white"
          >
            Questions? Chat with us.
          </Button>
        </CardFooter>
      </Card>

      {/* Lifetime Plan */}
      <Card className="bg-[#171717] rounded-2xl p-2">
        <CardHeader className="rounded-2xl border-t-2 border-r border-[#333] border-opacity-80 m-3 bg-gradient-to-br from-[#262626] to-[#262829]">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-semibold">
              {pricingCardConfig.plus.name}
            </h3>
            <Badge className="rounded-xl hover:bg-primary">Featured</Badge>
          </div>
          <p className="text-xs">{pricingCardConfig.plus.tier}</p>

          <div className="flex flex-row items-center gap-2 pt-4 pb-6">
            <span className="text-7xl font-bold tracking-tight">
              <span className="text-xl align-bottom">
                {pricingCardConfig.plus.currency}
              </span>
              {pricingCardConfig.plus.price}
            </span>
            <div className="flex flex-col text-lg gap-2 font-semibold">
              <span className="line-through">
                {pricingCardConfig.plus.currency}
                {pricingCardConfig.plus.beforePrice}
              </span>
              <Badge className="bg-background hover:bg-background text-primary">
                {pricingCardConfig.plus.discount}
              </Badge>
            </div>
          </div>

          <Button className="w-full bg-white text-black hover:bg-gray-200">
            Get Plura Plus
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 mt-14">
          <ul className="space-y-2.5">
            {[
              "Lifetime access to all the premium component packs",
              "Lifetime access to all the premium templates",
              "Lifetime access to updates and new features",
              "Lifetime access to new templates and components",
              "Access to Figma Kit for all components and templates",
              "Access to private discord community",
              "Copy and paste, no complexity",
              "Built with Next.js and React",
              "Styled with Tailwind CSS and Framer Motion",
              "Available in TypeScript and JavaScript",
              "Priority support",
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="w-full text-gray-400 hover:text-white"
          >
            Questions? Chat with us.
          </Button>
        </CardFooter>
      </Card>

      {/* Team Plan */}
      <Card className="bg-[#171717] rounded-2xl p-2">
        <CardHeader className="rounded-2xl border-t-2 border-r border-[#333] border-opacity-80 m-3 bg-gradient-to-br from-[#262626] to-[#262829]">
          <h3 className="text-xl font-semibold">
            {pricingCardConfig.pro.name}
          </h3>
          <p className="text-xs">{pricingCardConfig.pro.tier}</p>
          <div className="flex flex-row items-center gap-2 pt-4 pb-6">
            <span className="text-7xl font-bold tracking-tight">
              <span className="text-xl align-bottom">
                {pricingCardConfig.pro.currency}
              </span>
              {pricingCardConfig.pro.price}
            </span>
            <div className="flex flex-col text-lg gap-2 font-semibold">
              <span className="line-through">
                {pricingCardConfig.pro.currency}
                {pricingCardConfig.pro.beforePrice}
              </span>
              <Badge className="bg-background text-primary">
                {pricingCardConfig.pro.discount}
              </Badge>
            </div>
          </div>

          <Button className="w-full bg-white text-black hover:bg-gray-200">
            Get Plura Pro
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 mt-14">
          <ul className="space-y-2.5">
            {[
              "10 team members",
              "Lifetime access to all the component packs and templates",
              "Lifetime access to updates and new features",
              "Lifetime access to new templates and components",
              "Access to private discord community",
              "Copy and paste, no complexity",
              "Built with Next.js and React",
              "Styled with Tailwind CSS and Framer Motion",
              "Available in TypeScript and JavaScript",
              "Priority support",
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="w-full text-gray-400 hover:text-white"
          >
            Questions? Chat with us.
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
