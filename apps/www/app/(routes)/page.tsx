"use client";
import AboutSection from "@/components/custom/hero/about.sec";
import AgentsSec from "@/components/custom/hero/agents.sec";
import WidgetsSec from "@/components/custom/hero/widgets.sec";
import { TextShimmer } from "@/components/custom/text-shimmer";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/custom/text-wrappers";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import posthog from "posthog-js";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:items-start justify-center overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(211,211,211,0.15),rgba(255,255,255,0))] opacity-40" />
      {posthog.isFeatureEnabled('test-ff') ? "Welcome to Plura Ai": "Welcome"}
      <div className="px-8 md:px-12">
        <PageHeader>
          <BlurFade delay={0.2} inView>
            <PageHeaderHeading>{siteConfig.homePage.heading}</PageHeaderHeading>
          </BlurFade>

          <BlurFade delay={0.2 * 2} inView>
            <PageHeaderDescription>
              {siteConfig.homePage.description}
            </PageHeaderDescription>
          </BlurFade>

          <BlurFade delay={0.2 * 3} inView>
            <PageActions>
              <Link href="/auth">
                <Button size={"lg"} className="rounded-xl">
                  {siteConfig.homePage.startBtn}
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size={"lg"}
                  variant={"secondary"}
                  className="rounded-xl"
                >
                  <TextShimmer duration={3}>
                    {siteConfig.homePage.premBtn}
                  </TextShimmer>
                </Button>
              </Link>
            </PageActions>
          </BlurFade>
        </PageHeader>
      </div>

      <section id="about" className="flex flex-1 items-center justify-center">
        <AboutSection />
      </section>

      <section id="agents" className="flex flex-1 items-center justify-center">
        <AgentsSec />
      </section>

      <section id="widgets" className="flex flex-1 items-center justify-center">
        <WidgetsSec />
      </section>
    </div>
  );
}
