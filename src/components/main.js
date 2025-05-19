"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { RiVoiceAiLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { GoLightBulb } from "react-icons/go";
import { IoTelescopeOutline } from "react-icons/io5";
import { RiBrushAiFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { GoArrowUp } from "react-icons/go";
import { dataContext } from "@/app/context/chatContext";

const Main = () => {
  const { component, setCompnent } = useContext(dataContext);

  const [inputValue, setInputValue] = useState();
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  console.log(
    inputValue,
    " : this is the vlaue we get from input.............."
  );

  const [showUpgradBox, setShowUpgradBox] = useState(false);
  const upgradRef = useRef();

  const handleOutSideClick = (event) => {
    event.stopPropagation();
    if (
      upgradRef &&
      upgradRef.current &&
      upgradRef.current.contains(event.target)
    ) {
      console.log("cliked!!!!!!!");
    } else {
      setShowUpgradBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [showUpgradBox]);

  return (
    <div className="w-[calc(100%_-_270px)] p-5  flex flex-col gap-4">
      {/* ...............top-bar................ */}
      <div
        className="flex justify-between  relative "
        onClick={() => setShowUpgradBox((prev) => !prev)}
      >
        <div className="flex items-center  gap-2  cursor-pointer  hover:bg-gray-100 rounded-md p-2 px-3 relative">
          <p className="font-[300] text-xl">ChatGPT</p>
          <FaAngleDown className="text-gray-300" />
        </div>

        {/* ......upgrade-box.......... */}
        <div
          ref={upgradRef}
          className={`absolute z-[999] top-11.5 left-1 shadow-md rounded-xl p-2 border border-gray-300 max-w-[350px] bg-white ${
            showUpgradBox ? "" : "hidden"
          }`}
        >
          <div className="flex gap-4 justify-between items-center hover:bg-gray-100 cursor-pointer rounded-lg p-2">
            <div className="flex items-center gap-1 ">
              <BsStars size={20} />
              <div>
                <p> ChatGPT Plus</p>
                <p className="text-gray-600 text-xs ">
                  Our smartest model & more{" "}
                </p>
              </div>
            </div>

            <span className="border border-gray-300 rounded-full px-2 py-1  hover:bg-gray-100 cursor-pointer ">
              Upgrade
            </span>
          </div>

          <div className="flex gap-4 justify-between items-center hover:bg-gray-100 cursor-pointer rounded-lg p-2">
            <div className="flex items-center gap-1 ">
              <Image alt="no" src="/icons/fusion.png" width={20} height={20} />
              <div>
                <p> ChatGPT </p>
                <p className="text-gray-600 text-xs ">Great for every tasks</p>
              </div>
            </div>

            <AiOutlineCheck />
          </div>
        </div>

        {/* ...... */}
        {/* <div>profile</div> */}
      </div>

      {/* ..........................chat.......................... */}

      <div className="w-full h-[calc(100%_-_44px)] fllex justify-center relative">
        {/* -----------chat-started----------- */}
        {component === "chat-started" && (
          <div className="h-full max-w-[1000px] mx-auto">
            {/* ...............user-chat................. */}
            <div className="flex justify-end">
              <p className="p-2 bg-[#F4F4F4] rounded-[50px] px-4 text-sm ">
                {inputValue}
              </p>
            </div>

            {/* ...............model-response.................... */}
            <div>
              <p className="p-2 text-sm ">
                Hey! I'm ChatGPT 😄, I'm here to help you with anything you
                need. What's up?
              </p>
            </div>
          </div>
        )}

        {/*  ------------default chat UI-------------*/}
        <div
          className={`${
            component === "chat-started"
              ? " absolute bottom-0 left-[50%] translate-x-[-50%] min-w-[800px]"
              : "max-w-[800px] mx-auto flex flex-col gap-4 h-full justify-center"
          } `}
        >
          {component === "chat-started" ? (
            ""
          ) : (
            <p className="text-black text-2xl text-center">
              What can I help with?
            </p>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="px-4 py-3 rounded-[30px] border-1 border-gray-300 shadow-md flex flex-col gap-4 "
          >
            <input
              placeholder="Ask anything"
              className="w-full outline-none placeholder:text-gray-600 font-light"
              name={inputValue}
              value={inputValue}
              onChange={handleInputValue}
            />
            <div className="flex items-center justify-between gap-4 2xl:gap-25">
              {/* ......... */}
              <div className="flex items-center gap-2">
                <FiPlus
                  size={36}
                  className="border border-gray-300 rounded-full p-1 hover:bg-gray-100 cursor-pointer"
                />
                <div className="border border-gray-300 rounded-full p-2  hover:bg-gray-100 cursor-pointer flex items-center gap-1">
                  <TbWorld size={20} className="text-gray-600" />
                  <span className="text-gray-600 text-sm">Search</span>
                </div>

                <div className="border border-gray-300 rounded-full p-2  hover:bg-gray-100 cursor-pointer flex items-center gap-1">
                  <GoLightBulb size={20} className="text-gray-600" />
                  <span className="text-gray-600 text-sm">Reason</span>
                </div>

                <div className="border border-gray-300 rounded-full p-2  hover:bg-gray-100 cursor-pointer flex items-center gap-1">
                  <IoTelescopeOutline size={20} className="text-gray-600" />
                  <span className="text-gray-600 text-sm">Deep research</span>
                </div>

                <div className="border border-gray-300 rounded-full p-2  hover:bg-gray-100 cursor-pointer flex items-center gap-1">
                  <RiBrushAiFill size={20} className="text-gray-600" />
                  <span className="text-gray-600 text-sm">Create image</span>
                </div>

                <BsThreeDots
                  size={36}
                  className="border border-gray-300 rounded-full p-1 hover:bg-gray-100 cursor-pointer"
                />
              </div>

              {/*..........  */}
              <div className="flex items-center gap-2">
                <HiOutlineMicrophone
                  size={35}
                  className="border border-gray-300 rounded-full p-1  hover:bg-gray-100 cursor-pointer"
                />

                {inputValue ? (
                  <GoArrowUp
                    className=" bg-black rounded-full p-1  hover:bg-[#00000068]  cursor-pointer"
                    fill="#fff"
                    size={35}
                    onClick={() => {
                      setCompnent("chat-started");
                    }}
                  />
                ) : (
                  <RiVoiceAiLine
                    fill="#fff"
                    size={35}
                    className=" bg-black rounded-full p-1  hover:bg-[#00000068]  cursor-pointer"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
