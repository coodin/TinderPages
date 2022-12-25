import React, { useState } from "react";
import { Outlet } from "react-router";

export default function hc() {
  const [stateOfNavBar, setStateOfNavBar] = useState(false);
  return (
    <div className="">
      <header className="relative my-0 mx-auto  flex h-[71px] max-w-[1160px] items-center justify-between py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <div className="my-0  mx-auto flex items-center  min-[768px]:m-0 min-[768px]:w-[inherit]  min-[768px]:pl-0">
          <a href="" className="inline-block  text-nav-navigation-hover-color">
            <img
              src="https://theme.zdassets.com/theme_assets/302164/e2bd933724b7744350510577cef454a487f069ce.png"
              className="hidden max-h-[37px] border-0 min-[768px]:inline"
            />
            <img
              src="https://theme.zdassets.com/theme_assets/302164/e2c4486b408ebdc36ef1b653cae4c173c0ca9d24.svg"
              className="inline cursor-pointer border-0 min-[768px]:hidden"
            />
          </a>
        </div>
        <div className="mr-[10px] basis-5">
          <span
            onClick={() => {
              console.log("Hello");
              setStateOfNavBar(!stateOfNavBar);
            }}
            className="inline-block aspect-[1] w-full text-[#D60093] before:block before:h-full before:w-full before:content-['\2630'] min-[768px]:hidden"
          ></span>
          <nav
            className={`absolute  inline-block whitespace-nowrap  ${
              stateOfNavBar
                ? "right-0 left-0 top-[71px] z-10 border border-[#ddd] bg-white  shadow-mainPageNavBoxShadow "
                : ""
            }  min-[768px]:relative`}
          >
            <a
              href=""
              className={`${
                stateOfNavBar ? "m-5 block pr-5" : "hidden"
              } w-auto border-0 text-sm text-[#D6002F] min-[768px]:inline-block`}
            >
              Back To Tinder
            </a>
          </nav>
        </div>
      </header>
      <Outlet />
      <div className="w-full bg-white pb-[10px] text-center">
        <a
          href=""
          className="text-[15px] text-nav-navigation-hover-color hover:underline"
        >
          Privacy
        </a>
      </div>
    </div>
  );
}
