"use client";

import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import SectionLabel from "../section/section.label";
import { SystemMode } from "@/components/icons/themes/system";
import { LightMode } from "@/components/icons/themes/light";
import { DarkMode } from "@/components/icons/themes/dark";
import BlurFade from "@/components/ui/blur-fade";

export default function Component() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <SectionLabel
          label="Interface Settings"
          msg="Select or customize your interface theme."
        />
      </div>
      <BlurFade
        delay={0.25}
        className="lg:col-span-4 flex lg:flex-row flex-col items-center gap-5"
      >
        {theme ? (
          <>
            <div
              className={cn(
                "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
                theme == "system" && "border-border",
              )}
              onClick={() => setTheme("system")}
            >
              <SystemMode />
            </div>
            <div
              className={cn(
                "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
                theme == "light" && "border-border",
              )}
              onClick={() => setTheme("light")}
            >
              <LightMode />
            </div>
            <div
              className={cn(
                "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
                theme == "dark" && "border-border",
              )}
              onClick={() => setTheme("dark")}
            >
              <DarkMode />
            </div>
          </>
        ) : (
          <div className="flex lg:flex-row flex-col gap-5">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-[280px] h-[190px] rounded-xl">
                <div className="h-3 flex items-center gap-1.5 p-4">
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <div className="w-3 h-3 rounded-full bg-muted" />
                </div>
              </Skeleton>
            ))}
          </div>
        )}
      </BlurFade>
    </div>
  );
}
