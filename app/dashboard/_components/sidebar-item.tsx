"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const SidebarItem: React.FC<Props> = ({ href, icon: Icon, label }) => {
  const pathName = usePathname();
  const router = useRouter();
  const isActive =
    (pathName === "/dashboard/routine" && href === "/dashboard/routine") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slat e-500 text-sm font-[500] pl-6 transition-all hover:text-slate-500 hover:bg-slate-300/20",
        isActive && "text-slate-700 bg-slate-200/20"
      )}
    >
      <span className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </span>
      <span
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItem;
