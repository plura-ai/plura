import { SiteFooter } from "@/components/custom/site/footer";
import { SiteHeader } from "@/components/custom/site/header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col items-center w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
