import Main from "@/components/main";
import Sidebar from "@/components/sidebar";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <Main />
    </div>
  );
}
