import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { Link } from "react-router-dom";

export default function mainSide() {
  return (
    <>
      <main className="">
        <section className="mb-10 h-auto w-full bg-none  px-5 text-center min-[768px]:mb-5 min-[768px]:h-[300px]">
          <div className="relative mx-auto my-0 max-w-[610px]">
            <h1 className="mb-10 pl-3 text-[44px] font-extrabold min-[768px]:mt-[50px] min-[768px]:pl-0">
              Merhaba. Nasıl yardımcı olabiliriz?
            </h1>
            <form className="relative">
              <FontAwesomeIcon
                className="absolute top-2/4 left-[15px] -translate-y-1/2 bg-[#fff] text-lg text-[#ddd]"
                icon={solid("magnifying-glass")}
              />
              <input
                className="h-10 w-full max-w-full appearance-none rounded-none border-b-2 border-b-[#DEDEDE] py-[1px] pl-10 pr-5 text-base font-normal text-[#616161]
              outline-none transition-[border] duration-[0.12] ease-in-out focus:border-b-[#fe5466] "
                type={"search"}
                name={"query"}
                id={"query"}
                placeholder={"Arama"}
                autoComplete={"off"}
              />
            </form>
          </div>
        </section>
        <div className="min-[]: mx-auto my-0 max-w-[1160px] p-0 min-[768px]:py-0 min-[768px]:px-[5%]">
          <section className="mb-10 min-[768px]:mb-5">
            <section className="">
              <ul className="min-[768px]:flex min-[768px]:flex-row min-[768px]:flex-nowrap min-[768px]:justify-start">
                <ShortCut text="Tinder Kılavuzu" color="bg-[#fd267d]" />
                <ShortCut text="Sorun Giderme" color="bg-[#fe5466]" />
                <ShortCut text="Güvenlik ve Gizlilik" color="bg-[#ff7b58]" />
                <ShortCut
                  text="Güvenlik ve Şikayet"
                  color="bg-[#f65068]"
                  href="securityAndComplaint"
                />
              </ul>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

interface ShortCutProps {
  text: string;
  color: string;
  href?: string;
}

function ShortCut({ text, color, href = "" }: ShortCutProps) {
  return (
    <li
      className={`m-0 flex min-[768px]:hover:z-10 min-[768px]:hover:origin-bottom min-[768px]:hover:scale-110 ${color} max-w-full flex-1 flex-shrink-0 basis-1/4 flex-col justify-center border-none text-center text-white transition-all duration-200 ease-in-out min-[768px]:mb-[30px]`}
    >
      <Link to={href} className="py-5 px-[30px] ">
        <h4 className="mb-0 text-base text-[#FFF] ">{text}</h4>
      </Link>
    </li>
  );
}
