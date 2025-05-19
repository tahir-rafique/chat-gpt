"use client";
import React, { createContext, useState } from "react";

export const dataContext = createContext();

function ChatContext({ children }) {
  let value = {
    item: "Hello from use Conext!!!!",
  };

  const [component, setCompnent] = useState("home");
  return (
    <div>
      <dataContext.Provider value={{ value, component, setCompnent }}>
        {children}
      </dataContext.Provider>
    </div>
  );
}

export default ChatContext;
