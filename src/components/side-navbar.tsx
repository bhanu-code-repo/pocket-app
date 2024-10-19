"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

interface SidebarProps {
  defaultCollapsed?: boolean;
}

export default function SideNavbar({ defaultCollapsed = false }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  /**
   * Function that toggles the value of isCollapsed state.
   */
  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative min-w-[80px] border-r border-slate-200 px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-8">
          <Button
            variant="secondary"
            onClick={toggleCollapsed}
            className="rounded-full p-3"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Users",
            label: "",
            icon: UserRound,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            label: "",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Settings",
            label: "",
            icon: Settings,
            variant: "ghost",
            href: "/settings",
          },
        ]}
      />
    </div>
  );
}
