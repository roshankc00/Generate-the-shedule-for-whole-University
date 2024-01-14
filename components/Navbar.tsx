import React from "react";
import MobileSidebar from "./smallScreenSidebar";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <div className="ml-auto pr-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
