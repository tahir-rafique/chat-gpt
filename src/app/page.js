import Main from "@/components/main";
import Sidebar from "@/components/sidebar";
import React from "react";
import ChatContext from "./context/chatContext";

export default function Home() {
  return (
    <ChatContext>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <Main />
      </div>
    </ChatContext>
  );
}
