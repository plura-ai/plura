import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="sticky z-[300] border-t-2 w-full bg-secondary/30 backdrop-blur-lg px-8 md:px-12">
      <div className="absolute bottom-0 left-[-30%] right-0 top-[-30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(211,211,211,0.15),rgba(255,255,255,0))] opacity-40" />
      <div className="flex flex-col items-start gap-2 px-20 py-8">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image
            src="/images/plura-logo.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded-md"
          />
          <p className="font-bold text-xl tracking-tighter">Plura Ai</p>
          <Badge variant={"outline"} className="px-2">
            Beta
          </Badge>
        </Link>
        <p className="text-muted-foreground text-sm max-w-lg">
          {siteConfig.footer.desc}
        </p>

        <div className="flex flex-col">
          <p className="inline-flex text-secondary-foreground text-sm">
            A product by
            <Link
              href={siteConfig.links.saix}
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-muted-foreground underline cursor-pointer"
            >
              @SaidevDhal
            </Link>
          </p>
          <p className="inline-flex text-secondary-foreground text-sm">
            Made possible with
            <Link
              href={"/about#contributors"}
              className="ml-1 text-muted-foreground underline cursor-pointer"
            >
              our crazy contributors
            </Link>
          </p>
        </div>

        <div className="flex flex-row items-start border-t w-full mt-10">
          <div className="my-10 flex flex-row gap-20">
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Product</span>
              <Link
                href={"/about"}
                className="text-muted-foreground hover:text-primary"
              >
                About
              </Link>
              <Link
                href={"/features"}
                className="text-muted-foreground hover:text-primary"
              >
                Features
              </Link>
              <Link
                href={"/integrations"}
                className="text-muted-foreground hover:text-primary"
              >
                Integrations
              </Link>
              <Link
                href={"/pricing"}
                className="text-muted-foreground hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href={"/status"}
                className="text-muted-foreground hover:text-primary"
              >
                Status
              </Link>
              <Link
                href={"/contact"}
                className="text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Connect</span>
              <Link
                href={"/features"}
                className="text-muted-foreground hover:text-primary"
              >
                X (Twitter)
              </Link>
              <Link
                href={"/contact"}
                className="text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
