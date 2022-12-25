import React from "react";
import YesOrNo from "./yesOrNo";

export default function feedBackSection() {
  return (
    <div className="border-t border-t-[#ddd] py-[30px] px-0 text-center">
      <span className="">Bu makale yardımcı oldu mu?</span>
      <div className="">
        <YesOrNo text="Evet" changeIcon={true} />
        <YesOrNo text="Hayır" changeIcon={false} />
      </div>
    </div>
  );
}
