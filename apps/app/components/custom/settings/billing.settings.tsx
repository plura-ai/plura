import React from "react";
import SectionLabel from "../section/section.label";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Plus } from "lucide-react";

export default function BillingSettings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <SectionLabel
          label="Billing Settings"
          msg="Add payment information, upgrade or modify your plan."
        />
      </div>
      <div className="lg:col-span-2 flex justify-start lg:justify-center ">
        <Card className="border-dashed border-muted-foreground w-[350px] h-[200px] cursor-pointer flex justify-center items-center">
          <CardContent className="flex gap-2 items-center">
            <div className="rounded-full border-2 p-1">
              <Plus className="text-muted-fborder-muted-foreground" />
            </div>
            <CardDescription className="font-semibold">
              Upgrade Plan
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
        <p className="text-sm font-semibold">Freemium</p>
        <div className="flex gap-2 flex-col mt-2">
          <div className="flex gap-2">
            <CheckCircle2 className="text-muted-foreground" />
            <p className="text-muted-foreground">200 Credits</p>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="text-muted-foreground" />
            <p className="text-muted-foreground">2 Domains</p>
          </div>
        </div>
      </div>
    </div>
  );
}
