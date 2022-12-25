import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  textList: { text: string; url: string }[];
}

export default function nav({ textList }: NavProps) {
  return (
    <>
      <nav className="mb-[30px] flex min-h-[50px] flex-col justify-between pb-[15px] min-[768px]:flex-row min-[768px]:items-baseline">
        <ol className="mb-[15px] p-0 min-[768px]:m-0">
          {textList.map((value) => {
            return (
              <li className="inline max-w-[450px] text-base font-light text-[#454545] before:my-0 before:mx-2 before:content-['>'] first:before:hidden">
                <Link className="hover:underline" to={value.url}>
                  {value.text}
                </Link>
              </li>
            );
          })}
        </ol>
        <form className=" relative ">
          <FontAwesomeIcon
            className="absolute top-2/4 left-[15px] -translate-y-1/2 bg-[#fff] text-lg text-[#ddd]"
            icon={solid("magnifying-glass")}
          />
          <input
            type={"search"}
            name={"query"}
            id={"query"}
            placeholder="Arama"
            className="h-10 w-full min-w-[300px] appearance-none rounded-[30px] border border-[#dcd9d9] pl-10 pr-5 text-[#656e7b] outline-none"
          />
        </form>
      </nav>
    </>
  );
}
