import React from "react";

import Nav from "../../../layout/deperMainForHc/nav";
import OneDeperMain from "../../../layout/deperMainForHc/oneDeperMain";

export default function MainForSecurityAnxietyORCase() {
  return (
    <>
      <div className="mb-5 border-t border-[#ddd]"></div>
      <div className="my-0 mx-auto max-w-[1160px] py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <Nav
          textList={[
            { text: "Tinder ", url: "" },
            { text: "Güvenlik ve Şikayet ", url: "" },
            { text: "Bir Güvenlik Kaygını ve Olayı Bildir ", url: "" },
          ]}
        />
        <OneDeperMain
          text={"  Bir Güvenlik Kaygını ve Olayı Bildir"}
          listText={[
            {
              text: "Kişinin uğradığı bedensel bir zararı bildirmek",
              url: "/securityAndComplaint/SecurityAnxietyORCase/One",
            },
            {
              text: "Uygulamada gerçekleşen bir olayı bildirme",
              url: "/securityAndComplaint/SecurityAnxietyORCase/Two",
            },
            {
              text: "Taklit Hesaplar",
              url: "/securityAndComplaint/SecurityAnxietyORCase/Three",
            },
            {
              text: "Başka bir kullanıcının güvenliği konusunda endişeliyim",
              url: "/securityAndComplaint/SecurityAnxietyORCase/Four",
            },
          ]}
        />
      </div>
    </>
  );
}
