"use client";
import {
  Webhook,
  ChevronDown,
  Layers2,
  Waypoints,
  Mails,
  Settings,
  Brain,
  BrainCircuit,
  FlaskConical,
  ArchiveRestore,
  Codepen,
  Workflow,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import QuickActionButton from "./quick-action-btn";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Layers2,
  },
  {
    title: "Integrations",
    url: "/integrations",
    icon: Waypoints,
  },
  {
    title: "Workflows",
    url: "/workflows",
    icon: Workflow,
  },
  {
    title: "Events",
    url: "/events",
    icon: Webhook,
  },
  {
    title: "Mails",
    url: "/mails",
    icon: Mails,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

// Playground items.
const IntelItems = [
  {
    title: "Agents",
    url: "/agents",
    icon: Brain,
  },
  {
    title: "Memory",
    url: "/memory",
    icon: BrainCircuit,
  },
  {
    title: "Playground",
    url: "/playground",
    icon: FlaskConical,
  },
  {
    title: "Components",
    url: "/components",
    icon: Codepen,
  },
  {
    title: "Archives",
    url: "/archives",
    icon: ArchiveRestore,
  },
];

export function AppSidebar() {
  const path = usePathname();
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col md:flex-row gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Switch Account
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={path.includes(item.url)}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Intelligence</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {IntelItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <QuickActionButton collapse={state} />
      </SidebarFooter>
    </Sidebar>
  );
}
