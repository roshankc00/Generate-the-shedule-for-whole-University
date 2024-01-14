import React from "react";
import {
  BarChart,
  Compass,
  Globe2,
  HelpCircle,
  Layout,
  List,
  Timer,
} from "lucide-react";
import SidebarItem from "./sidebar-item";

type Props = {};

function SidebarRoutes({}: Props) {
  const routes = [
    {
      icon: Timer,
      label: "Create Shedule",
      href: "/dashboard/routine",
    },
    {
      icon: Globe2,
      label: "Browse routine",
      href: "/dashboard/browse",
    },
    {
      icon: HelpCircle,
      label: "FAQS",
      href: "/dashboard/faqs",
    },
  ];
  return (
    <div className="flex flex-col w-full">
      {routes?.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}

export default SidebarRoutes;
