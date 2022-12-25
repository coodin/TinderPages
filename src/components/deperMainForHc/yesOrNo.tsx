import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface YesOrNoProps {
  text: string;
  changeIcon: boolean;
}

export default function YesOrNo({ text, changeIcon }: YesOrNoProps) {
  return (
    <a
      title={text}
      className={`group relative my-[10px] mx-[5px] inline-block w-auto min-w-[90px] cursor-pointer select-none whitespace-nowrap rounded border border-[#a5a5a5] bg-transparent px-5 text-[12px] leading-[2.34] text-[#a5a5a5] transition-all duration-[120ms]  after:-mr-2 after:content-[attr(title)] hover:bg-[#a5a5a5] hover:text-[#ffffff]`}
    >
      <span className="absolute left-5 top-1/2 -translate-y-1/2">
        {changeIcon ? (
          <FontAwesomeIcon
            icon={solid("check")}
            className="text-xs text-[#a5a5a5] group-hover:text-[#ffffff]  "
          />
        ) : (
          <FontAwesomeIcon
            icon={solid("xmark")}
            className="text-xs text-[#a5a5a5] group-hover:text-[#ffffff]"
          />
        )}
      </span>
    </a>
  );
}
