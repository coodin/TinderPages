import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function AdditionalResourcesThree() {
  return (
    <>
      <div className="mb-5 border-t border-[#ddd]"></div>
      <div className="my-0 mx-auto max-w-[1160px] py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <Nav
          textList={[
            { text: "Tinder ", url: "" },
            { text: "Güvenlik ve Şikayet ", url: "" },
            { text: "Ek Kaynaklar", url: "" },
          ]}
        />
        <div className="flex flex-col  min-[1024px]:flex-row">
          <article className=" flex-shrink-0 flex-grow basis-auto min-[1024px]:min-w-[640px] min-[1024px]:max-w-[66%] min-[1024px]:flex-shrink-0  min-[1024px]:basis-[66%]">
            <CommonHeader text="Emniyet yetkilileri için bilgi" />
            <section className="max-w-full">
              <div className="mb-10 break-all leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    Bir emniyet yetkilisiysen ve ekibimizle irtibata geçmen
                    gerekiyorsa, lütfen legaldept@gotinder.com adresine e-posta
                    gönder.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Not: Emniyet yetkilisi olmayanlar tarafından yukarıdaki
                    adrese gönderilen e-postalara yanıt vermeyeceğiz.
                  </p>
                </div>
              </div>
            </section>
            <Footer />
            <LastSection
              textOne="Yakında görüntülenen makaleler"
              textTwo="İlgili makaleler"
              listObjectOne={[
                { text: "Topluluk Kuralları", url: "" },
                {
                  text: "Yaş doğrulaması için neden kamera erişimini etkinleştirmem gerekiyor?",
                  url: "",
                },
                { text: "Emniyet yetkilileri için bilgi", url: "" },
                { text: "Güvenlik İpuçları", url: "" },
                {
                  text: "Başka bir kullanıcının güvenliği konusunda endişeliyim",
                  url: "",
                },
              ]}
              listObjectTwo={[
                {
                  text: "Uygulamada gerçekleşen bir olayı bildirme",
                  url: "",
                },
                { text: "Taklit Hesaplar", url: "" },
                { text: "Cihaz Konumuna Erişim İzni Ver", url: "" },
                {
                  text: "Başka bir kullanıcının güvenliği konusunda endişeliyim",
                  url: "",
                },
                {
                  text: "Kişisel verilerimin bir kopyasını nasıl talep edebilirim?",
                  url: "",
                },
              ]}
            />
          </article>
        </div>
      </div>
    </>
  );
}
