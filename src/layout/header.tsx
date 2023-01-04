import React from "react";
import TinderLogo from "../image/tinder-wordmark-1.svg";
import CommonButton from "../components/commonButton";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header
        className={
          "sticky top-0 left-0 z-50 hidden h-[76px] w-full items-center justify-between border-b  bg-white  min-[900px]:flex "
        }
      >
        <div className=" mx-3 flex items-center lg:mx-7 ">
          <a className={"ml-0 text-tinder-color "} href={"asd"}>
            <img
              src={TinderLogo}
              className={" my-0 ml-0  h-[35px]  w-[150px]   md:mr-3 lg:mr-6"}
            />
          </a>
          <nav
            className={
              "flex justify-around space-x-10  text-nav-item-color md:max-lg:space-x-2 max-[900px]:hidden "
            }
          >
            <LinkElement
              href={""}
              text={"Ürünler"}
              includeList={true}
              textList={[
                ["Ayrıcalıklı Özellikler", "/"],
                ["Abonelik Kategorileri", ""],
                ["Swipe Night", ""],
              ]}
              innerTextList={[
                { text: "Tinder Plus®", href: "" },
                { text: "Tinder Gold™", href: "" },
                { text: "Tinder Platinum™", href: "" },
              ]}
            />
            <LinkElement href={"about"} text={"Keşfet"} />
            <LinkElement
              href={""}
              text={"Güvenlik"}
              includeList={true}
              textList={[
                ["Topluluk Kuralları", ""],
                ["Güvenlik İpuçları", ""],
                ["Güvenlik ve Politika", ""],
                ["Güvenlik ve Bildirme", ""],
                ["Güvenlik", ""],
              ]}
            />
            <LinkElement href={""} text={"Destek"} />
            <LinkElement href={"plus"} text={"İndir"} />
          </nav>
        </div>
        <div className={"mx-7 max-[900px]:hidden"}>
          <CommonButton message={"Oturum aç"} />
        </div>
      </header>
    </>
  );
}

interface LinkElementProps {
  href: string;
  text: string;
  includeList?: boolean;
  textList?: [text: string, href: string][];
  innerTextList?: { text: string; href: string }[];
}

function LinkElement({
  href = "",
  text,
  includeList = false,
  textList = [],
  innerTextList = undefined,
}: LinkElementProps) {
  return (
    <div className={"group relative"}>
      <Link
        className={
          " text-xl font-medium hover:text-nav-navigation-hover-color hover:underline hover:decoration-nav-navigation-hover-color "
        }
        to={href}
      >
        {text}
      </Link>
      {includeList ? (
        <div
          className={"absolute hidden group-hover:flex   group-hover:flex-col"}
        >
          <ul
            className={
              " -translate-x-5 bg-white px-5 pt-10 pb-[10px] text-nav-item-color"
            }
          >
            {textList.map((upperValue) => {
              return (
                <li key={upperValue[0]} className={"w-[213px] py-1"}>
                  <Link
                    className="  flex cursor-pointer text-left text-xl font-semibold hover:text-nav-navigation-hover-color "
                    to={upperValue[1]}
                  >
                    {upperValue[0]}
                  </Link>
                  {innerTextList != undefined &&
                  upperValue[0] === "Abonelik Kategorileri" ? (
                    <ul className="pl-10">
                      {innerTextList.map((innerValue) => {
                        return (
                          <li key={innerValue.text} className="py-1">
                            <a
                              href={innerValue.href}
                              className="text-xl font-semibold text-nav-item-color hover:text-nav-navigation-hover-color"
                            >
                              {innerValue.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
