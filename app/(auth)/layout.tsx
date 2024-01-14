import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex mt-[5%] justify-center">{children}</div>
  );
};

export default Authlayout;
