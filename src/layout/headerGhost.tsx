import React, { ReactNode, useEffect, useState } from "react";
import TinderLogo from "../image/tinder-wordmark-1.svg";

import CommonButton from "../components/commonButton";

interface headerGhostProp {
  modalActive: boolean;
  clickHandler: (value: boolean) => void;
}

export default function headerGhost({
  clickHandler,
  modalActive,
}: headerGhostProp) {
  return (
    <div
      className={`${
        modalActive ? "translate-x-[100%]" : ""
      } fixed top-0 z-50 flex h-screen w-full  flex-col justify-between bg-white transition-transform duration-200  min-[900px]:hidden  `}
    >
      <header
        className={`flex h-[56px] w-full    items-center  justify-between  bg-white `}
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
          className="mr-5 "
          onClick={() => {
            console.log("Close clicked");
            clickHandler(!modalActive);
          }}
          role="button"
        >
          {" "}
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className={" fill-colse-svg-color p-1 "}
          >
            <path d="m15.44 12 4.768 4.708c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L12 15.52l-4.713 4.605c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417L8.47 12 3.874 7.271c-1.138-.976-1.138-2.44 0-3.417a1.973 1.973 0 0 1 3.25 0L12 8.421l4.713-4.567c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417L15.44 12Z"></path>
          </svg>
        </div>
      </header>
      <div className="z-50 flex-1 ">
        <ul className={`my-4`}>
          <GostParentLi
            text={"Ürünler"}
            listText={[
              ["Ayrıcalıklı Özellikler", "href"],
              ["Swipe Night", "href2"],
            ]}
          />
          <GostParentLi text={"Keşfet"} />
          <GostParentLi
            text={"Güvenlik"}
            listText={[
              ["Topluluk Kuralları", ""],
              ["Güvenlik İpuçları", ""],
              ["Güvenlik ve Politikat", ""],
              ["Güvenlik ve Bildirme", ""],
              ["Güvenlik", ""],
            ]}
          />
          <GostParentLi text={"Destek"} />
          <GostParentLi text={"İndir"} />
        </ul>
      </div>
      <div className="p-7">
        <CommonButton message={"Oturum aç"} />
      </div>
    </div>
  );
}

interface GhostParentLiProps {
  text: string;
  listText?: [text: string, href: string][];
}

function GostParentLi({ text, listText = [] }: GhostParentLiProps) {
  return (
    <li className="mb-5  px-[10px]">
      <details className="group ">
        <summary
          className={`relative  cursor-pointer bg-li-background-color p-[10px] text-base   `}
        >
          <span className={"font-extrabold text-tinder-color"}>{text}</span>{" "}
          {listText.length != 0 ? <UpDownArrow /> : null}
        </summary>
        <ul>
          {listText.map((both, index) => {
            return (
              <li key={index} className="p-[10px]">
                <a
                  className="size font-extrabold  text-nav-item-color"
                  href={both[1]}
                >
                  {both[0]}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </li>
  );
}

function UpDownArrow() {
  return (
    <span className="absolute right-[10px] top-[10px] h-5 w-5 -rotate-90 transition-transform duration-300 group-open:-rotate-[270deg] ">
      <svg
        focusable="false"
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        fill="currentcolor"
        className="h-full w-full text-nav-item-color"
      >
        <path d="M13.98 20.717a1.79 1.79 0 0 0 2.685 0 1.79 1.79 0 0 0 0-2.684l-7.158-6.62 7.158-6.8a1.79 1.79 0 0 0 0-2.684 1.79 1.79 0 0 0-2.684 0L5.929 9.98a1.79 1.79 0 0 0 0 2.684l8.052 8.052z"></path>
      </svg>
    </span>
  );
}
