import React, { ReactElement, useEffect, useState } from "react";

import Header from "../../layout/header";
import HeaderMobile from "../../layout/headerMobile";
import HeaderGhost from "../../layout/headerGhost";
import CommonButton from "../../components/commonButton";
import MySVG from "../../image/anotherSvg.svg";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import Footer from "../../layout/footer";

export default function StandOut() {
  return (
    <>
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <div className="flex items-center justify-center">
          <CommonButton
            message={"Hemen Başla"}
            addMargin={true}
            minWidth={"min-w-[160px]"}
          />
        </div>
      </main>
    </>
  );
}
