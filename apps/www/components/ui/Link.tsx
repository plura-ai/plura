import Link from "next/link";
import { ScrollArea } from "./scroll-area";

export default function SidebarContent() {
  return (
    <div className="w-64 border-l border-border bg-background p-6 h-full -mt-10">
      <ScrollArea className="h-full w-full m-2">
        <div className="space-y-4">
          <h2
            className="text-lg font-semibold text-foreground mt-10"
            id="toc-heading"
          >
            On This Page
          </h2>
          <nav className="space-y-3" aria-labelledby="toc-heading">
            <Link
              className="block text-muted-foreground hover:text-foreground"
              href="#installation"
            >
              Installation
            </Link>
            <Link
              className="block text-muted-foreground hover:text-foreground"
              href="#structure"
            >
              Structure
            </Link>
            <Link
              className="block text-muted-foreground hover:text-foreground"
              href="#usage"
            >
              Usage
            </Link>
            <Link
              className="block text-muted-foreground hover:text-foreground"
              href="#your-first-sidebar"
            >
              Your First Sidebar
            </Link>
            <Link
              className="block text-muted-foreground hover:text-foreground"
              href="#components"
            >
              Components
            </Link>

            <div className="pl-4 space-y-3">
              <h3 className="text-sm font-medium text-foreground">
                SidebarProvider
              </h3>
              <div className="space-y-2 text-sm">
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#props"
                >
                  Props
                </Link>
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#width"
                >
                  Width
                </Link>
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#keyboard-shortcut"
                >
                  Keyboard Shortcut
                </Link>
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#persisted-state"
                >
                  Persisted State
                </Link>
              </div>

              <h3 className="text-sm font-medium text-foreground">Sidebar</h3>
              <div className="space-y-2 text-sm">
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#sidebar-props"
                >
                  Props
                </Link>
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#side"
                >
                  side
                </Link>
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#variant"
                >
                  variant
                </Link>
                <Link
                  className="block text-muted-foreground/70 hover:text-foreground"
                  href="#collapsible"
                >
                  collapsible
                </Link>
              </div>

              <Link
                className="block text-muted-foreground hover:text-foreground"
                href="#use-sidebar"
              >
                useSidebar
              </Link>
              <Link
                className="block text-muted-foreground hover:text-foreground"
                href="#sidebar-header"
              >
                SidebarHeader
              </Link>
              <Link
                className="block text-muted-foreground hover:text-foreground"
                href="#sidebar-footer"
              >
                SidebarFooter
              </Link>
              <Link
                className="block text-muted-foreground hover:text-foreground"
                href="#sidebar-content"
              >
                SidebarContent
              </Link>
              <Link
                className="block text-muted-foreground hover:text-foreground"
                href="#sidebar-group"
              >
                SidebarGroup
              </Link>
              <Link
                className="block text-muted-foreground hover:text-foreground"
                href="#collapsible-sidebar-group"
              >
                Collapsible SidebarGroup
              </Link>
            </div>
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}
