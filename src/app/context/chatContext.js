"use client";
import React, { createContext, useState } from "react";

export const dataContext = createContext();

function ChatContext({ children }) {
  // let value = {
  //   item: "Hello from use Conext!!!!",
  // };

  const [component, setCompnent] = useState("home");
    const [showSidebar, setShowSidebar] = useState(true);
  
  return (
    <div>
      <dataContext.Provider value={{  component, setCompnent ,showSidebar,setShowSidebar}}>
        {children}
      </dataContext.Provider>
    </div>
  );
}

export default ChatContext;
