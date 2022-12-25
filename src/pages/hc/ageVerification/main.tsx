import React from "react";
import Nav from "../../../layout/deperMainForHc/nav";
import OneDeperMain from "../../../layout/deperMainForHc/oneDeperMain";

export default function MainAgeVerification() {
  return (
    <>
      <div className="mb-5 border-t border-[#ddd]"></div>
      <div className="my-0 mx-auto max-w-[1160px] py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <Nav
          textList={[
            { text: "Tinder ", url: "" },
            { text: "Güvenlik ve Şikayet ", url: "" },
            { text: "Yaş Doğrulama ", url: "" },
          ]}
        />
        <OneDeperMain
          text={"Yaş Doğrulama"}
          listText={[
            {
              text: "Yaş doğrulaması için neden kamera erişimini etkinleştirmem gerekiyor?",
              url: "/securityAndComplaint/AgeVerification/One",
            },
            {
              text: "Yaş doğrulama nasıl çalışır?",
              url: "/securityAndComplaint/AgeVerification/Two",
            },
          ]}
        />
      </div>
    </>
  );
}
