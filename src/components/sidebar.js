"use client";
import React, { useContext, } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { dataContext } from "@/app/context/chatContext";
const Sidebar = () => {
  const { setCompnent, showSidebar, setShowSidebar } = useContext(dataContext);

  const data = [
    { chat: "Today" },
    { chat: "Yesterday" },
    { chat: "Previous 30 days" },
  ];
  return (
    <div
      className={` ${
        showSidebar ? "" : "hidden"
      } min-w-[270px] bg-secondary h-full px-3 py-5 flex flex-col gap-6
     overflow-y-auto  [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full`}
    >
      {/*....... icons........... */}
      <div className="flex  items-center justify-between py-1 px-2">
        <GoSidebarCollapse
          size={25}
          className="cursor-pointer text-gray-600"
          onClick={() => setShowSidebar(false)}
        />
        <div className="flex gap-3 items-center">
          <FiSearch size={25} className="cursor-pointer  text-gray-600" />
          <FaRegEdit size={25} className="cursor-pointer text-gray-600" />
        </div>
      </div>

      {/* .......start-chat...... */}
      <di
        onClick={() => {
          setCompnent("home");
        }}
        className="flex items-center gap-2 hover:bg-gray-100 rounded-md py-1 px-2 cursor-pointer"
      >
        <Image
          src="chatgpt-logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="bg-white p-1 rounded-full"
        />
        <p>ChatGPT</p>
      </di>

      {/*...... prev-chats........ */}
      {data.map((item, index) => (
        <div className="flex flex-col gap-2 px-2 py-1" key={index}>
          <p className="font-medidum text-lg capitalize ">{item.chat}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between p-2 hover:bg-gray-100  rounded-md">
              <p className="text-sm">new chat</p>
              <BsThreeDots className="cursor-pointer" />
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-100  rounded-md">
              <p className="text-sm">my chat</p>
              <BsThreeDots className="cursor-pointer" />
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-100  rounded-md">
              <p className="text-sm">my chat</p>
              <BsThreeDots className="cursor-pointer" />
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-100  rounded-md">
              <p className="text-sm">my chat</p>
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
