"use client";

import SidebarRoutes from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white">
      <div className="p-6">
        <h1 className="text-2xl text-sky-700 text-center">OPTIMUS</h1>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
