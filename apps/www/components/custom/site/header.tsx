"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MainNav } from "../navbar/navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site.config";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export function SiteHeader() {

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "l" || e.key === "L") {
        e.preventDefault();
        redirect("/auth")
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="sticky top-5 w-5/6 z-50 border border-border/60 bg-secondary/30 backdrop-blur-lg supports-[backdrop-filter]:bg-secondary/50 dark:border-border rounded-2xl">
      <div className="container flex h-12 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <MainNav />
        </div>
        <nav className="flex items-center gap-2">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hidden md:flex">
            <div
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "h-8 w-8 px-0"
              )}
            >
              <Icons.gitHub className="h-5 w-5 fill-current" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "h-8 w-8 px-0"
              )}
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "h-8 w-8 px-0"
              )}
            >
              <Icons.discord className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </div>
          </Link>
          <Link href={"/auth"} className="hidden md:flex">
          <Button variant={"secondary"} className="h-8 px-3">Log in
            <Badge className="px-2">L</Badge>
          </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
