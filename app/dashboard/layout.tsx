import React from "react";
import { Sidebar } from "./_components/sidebar";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-52 flex-col fixed inset-y-0 z-5">
        <Sidebar />
      </div>
      <main className="md:pl-52 h-full pt-[80px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
