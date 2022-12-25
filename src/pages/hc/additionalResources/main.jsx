import React from "react";
import Nav from "../../../layout/deperMainForHc/nav";
import OneDeperMain from "../../../layout/deperMainForHc/oneDeperMain";

export default function MainForAdditionalResource() {
  return (
    <>
      <div className="mb-5 border-t border-[#ddd]"></div>
      <div className="my-0 mx-auto max-w-[1160px] py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <Nav
          textList={[
            { text: "Tinder ", url: "" },
            { text: "Güvenlik ve Şikayet ", url: "" },
            { text: "Ek Kaynaklar ", url: "" },
          ]}
        />
        <OneDeperMain
          text={"Ek Kaynaklar"}
          listText={[
            {
              text: "Topluluk Kuralları",
              url: "/securityAndComplaint/AdditionalResource/One",
            },
            {
              text: "Güvenlik İpuçları",
              url: "/securityAndComplaint/AdditionalResource/Two",
            },
            {
              text: "Emniyet yetkilileri için bilgi",
              url: "/securityAndComplaint/AdditionalResource/Three",
            },
            {
              text: "Tinder'ın bir destek hattı var mı?",
              url: "/securityAndComplaint/AdditionalResource/Four",
            },
            {
              text: "Tinder Güvenlik Merkezi",
              url: "/securityAndComplaint/AdditionalResource/Five",
            },
            {
              text: "Telif Hakkı Kaldırma Talepleri",
              url: "/securityAndComplaint/AdditionalResource/Six",
            },
          ]}
        />
      </div>
    </>
  );
}
