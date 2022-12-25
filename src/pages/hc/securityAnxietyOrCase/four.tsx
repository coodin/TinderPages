import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function SecurityAnxietyORCaseFour() {
  return (
    <>
      <div className="mb-5 border-t border-[#ddd]"></div>
      <div className="my-0 mx-auto max-w-[1160px] py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <Nav
          textList={[
            { text: "Tinder ", url: "" },
            { text: "Güvenlik ve Şikayet ", url: "" },
            { text: "Bir Güvenlik Kaygını ve Olayı Bildir", url: "" },
          ]}
        />
        <div className="flex flex-col  min-[1024px]:flex-row">
          <article className=" flex-shrink-0 flex-grow basis-auto min-[1024px]:min-w-[640px] min-[1024px]:max-w-[66%] min-[1024px]:flex-shrink-0  min-[1024px]:basis-[66%]">
            <CommonHeader text="Başka bir kullanıcının güvenliği konusunda endişeliyim" />
            <section className="max-w-full">
              <div className="mb-10 break-all leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    Birinin anlık tehlike içinde olduğunu düşünüyorsan, lütfen
                    derhal yardım için yerel emniyet yetkilileriyle iletişime
                    geç.{" "}
                  </p>{" "}
                  <p className="my-[15px] text-[15px]">
                    Kendinin veya tanıdığın bir başka kişinin intihar riskiyle
                    karşı karşıya olduğunu düşünüyorsan, yardım edebilecek,
                    dinleyebilecek, destek verebilecek ve yönlendirme
                    yapabilecek kişilerin mevcut olduğunu lütfen unutma.{" "}
                  </p>{" "}
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li className="">
                      ABD'de bulunuyorsan, 1-800-273-TALK (8255) numarasından 24
                      saat boyunca ücretsiz olarak, konuşmaların gizli tutulduğu
                      intihar önleme hattı olan National Suicide Prevention
                      Lifeline'a ulaşabilirsin.{" "}
                    </li>
                    <li className="">
                      ABD'de değilsen, dünyanın çeşitli yerlerindeki kaynakları
                      ve kriz merkezlerini tespit etmek için lütfen Uluslararası
                      İntihar Önleme Derneği'nin (The International Association
                      for Suicide Prevention){" "}
                      <a href="" className="text-[#d6002f] hover:underline">
                        web sitesini{" "}
                      </a>
                      ziyaret et.
                    </li>
                  </ul>
                  <p className="my-[15px] text-[15px]">
                    Güvenlikle ilgili bir endişeyi doğrudan bize bildirmek
                    istersen, lütfen bize{" "}
                    <a href="" className="text-[#d6002f] hover:underline">
                      buradan
                    </a>
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
