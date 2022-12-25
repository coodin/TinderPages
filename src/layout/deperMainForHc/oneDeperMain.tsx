import React from "react";
import { Link } from "react-router-dom";

interface OneDeperMainProps {
  text: String;
  listText: { text: string; url: string }[];
}

export default function OneDeperMain({ text, listText }: OneDeperMainProps) {
  return (
    <div className="flex justify-end ">
      <section className="flex-1 min-[1024px]:shrink-0 min-[1024px]:grow-0 min-[1024px]:basis-[80%]">
        <header className="my-[10px] mx-0 flex flex-col flex-wrap justify-between min-[768px]:m-0 min-[768px]:flex-row min-[768px]:items-baseline">
          <h1 className="mb-[10px] flex-grow text-[32px]">{text}</h1>
        </header>
        <ul className="">
          {listText.map((value) => {
            return (
              <li className="border-b border-b-[#ddd] px-0 py-[15px] text-base">
                <Link to={value.url} className="text-[#000000] hover:underline">
                  {value.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
