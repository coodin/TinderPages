import React, { ReactNode, useEffect, useState } from "react";
import TinderLogo from "../image/tinder-wordmark-1.svg";

interface headerMobileProp {
  modalActive: boolean;
  clickHandler: (value: boolean) => void;
}

export default function headerMobile({
  clickHandler,
  modalActive,
}: headerMobileProp) {
  return (
    <header
      className={
        "sticky top-0 left-0 z-50 flex h-[56px] w-full  items-center  justify-between border-b bg-white  min-[900px]:hidden"
      }
    >
      <a className={"ml-0 "} href={"asd"}>
        <img
          src={TinderLogo}
          className={
            "my-4 ml-5 h-[24px] w-[100px] fill-tinder-color text-tinder-color  "
          }
        />
      </a>
      <div
        className="mr-5 cursor-pointer min-[900px]:hidden"
        onClick={() => {
          console.log("Hamburger clicked");
          clickHandler(!modalActive);
        }}
        role={"button"}
      >
        <svg
          focusable="false"
          aria-hidden="true"
          role="presentation"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          className="fill-nav-item-color"
        >
          <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"></path>
        </svg>
      </div>
    </header>
  );
}
