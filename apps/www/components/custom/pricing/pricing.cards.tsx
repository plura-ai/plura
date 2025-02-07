"use client";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextMorph } from "../text-morph";
import { AnimatedNumber } from "../anim-numb";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { PolarEmbedCheckout } from "@polar-sh/checkout/embed";
import { useEffect } from "react";

const inProduction = process.env.NODE_ENV === "production";

export interface PCards {
  isYearly: boolean;
  items: Array<{
    name: string;
    isFeatured: boolean;
    isFree: boolean;
    currency: string;
    btn: string;
    priceMonthly: number;
    priceYearly: number;
    beforePriceMonthly: number;
    beforePriceYearly: number;
    discountYearly: number;
    discountMonthly: number;
    benifits: string[];
    monthlyCheckoutLink: string;
    yearlyCheckoutLink: string;
    development: {
      monthlyCheckoutLink: string;
      yearlyCheckoutLink: string;
    };
    production: {
      monthlyCheckoutLink: string;
      yearlyCheckoutLink: string;
    };
  }>;
}

export default function PricingCards({ isYearly, items }: PCards) {
  useEffect(() => {
    PolarEmbedCheckout.init();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((item, index) => (
        <Card
          key={index}
          className="bg-secondary/30 backdrop-blur-lg rounded-2xl p-2 max-w-sm"
        >
          <CardHeader className="rounded-2xl border-t-2 border-r border-[#333] border-opacity-80 m-3 bg-gradient-to-br from-secondary/30 to-[#262829]">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              {item.isFeatured && (
                <Badge className="rounded-xl hover:bg-primary">Featured</Badge>
              )}
            </div>
            <p className="text-xs inline-flex gap-1">
              Billed
              <TextMorph>{isYearly ? "Yearly" : "Monthly"}</TextMorph>
            </p>
            <div className="flex flex-row items-center gap-2 pt-4 pb-6">
              <span className="text-7xl font-bold tracking-tight">
                <span className="text-xl align-bottom">{item.currency}</span>
                <AnimatedNumber
                  springOptions={{
                    bounce: 0,
                    duration: 2000,
                  }}
                  value={isYearly ? item.priceYearly : item.priceMonthly}
                />
              </span>
              <div className="flex flex-col text-lg gap-2 font-semibold">
                <span className="line-through">
                  {item.currency}
                  <AnimatedNumber
                    springOptions={{
                      bounce: 0,
                      duration: 2000,
                    }}
                    value={
                      isYearly
                        ? item.beforePriceYearly
                        : item.beforePriceMonthly
                    }
                  />
                </span>
                <Badge className="bg-background hover:bg-background text-primary">
                  <AnimatedNumber
                    springOptions={{
                      bounce: 0,
                      duration: 2000,
                    }}
                    value={
                      isYearly ? item.discountYearly : item.discountMonthly
                    }
                  />
                  % OFF
                </Badge>
              </div>
            </div>

            <Link
              href={
                inProduction
                  ? isYearly
                    ? item.production.yearlyCheckoutLink
                    : item.production.monthlyCheckoutLink
                  : isYearly
                    ? item.development.yearlyCheckoutLink
                    : item.development.monthlyCheckoutLink
              }
              data-polar-checkout
              data-polar-checkout-theme="dark"
              className={buttonVariants({ variant: "default" })}
            >
              {item.btn}
            </Link>
          </CardHeader>
          <CardContent className="space-y-6 mt-14">
            <ul className="space-y-2.5">
              {item.benifits.map((benifits, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <IconCheck
                    stroke={4}
                    className="h-4 w-4 mt-0.5 shrink-0 bg-[#404040] rounded-full font-bold p-0.5 text-primary"
                  />
                  <span>{benifits}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          {/* <CardFooter>
            <Button
              variant="link"
              className="w-full text-gray-400 hover:text-white"
            >
              Questions? Chat with us.
            </Button>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
