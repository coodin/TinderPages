import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function SecurityAnxietyORCaseTwo() {
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
          <article className="flex-shrink-0 flex-grow basis-auto min-[1024px]:min-w-[640px] min-[1024px]:max-w-[66%] min-[1024px]:flex-shrink-0  min-[1024px]:basis-[66%]">
            <CommonHeader text="Uygulamada gerçekleşen bir olayı bildirme" />
            <section className=" max-w-full ">
              <div className="mb-10 break-words leading-[1.6]">
                <div className="">
                  <h3 className="mb-[18px] text-lg font-semibold">
                    <span className="">Uygulamada bildir</span>
                  </h3>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li className="">
                      <strong className="">
                        <em className="">Kaydırırken: </em>
                      </strong>
                      <span className="text-[15px]">
                        {" "}
                        kullanıcı profilini aç {">"} aşağı kaydır ve Bildir'e
                        dokun
                      </span>
                    </li>
                    <li className="">
                      <strong className="">
                        <em className="">Eşleşme listenden: </em>
                      </strong>
                      <span className="text-[15px]">
                        mesaj ekranını açmak için kullanıcıyı seç {">"}{" "}
                        profilini açmak için kullanıcının fotoğrafına dokun{" "}
                        {">"} aşağı kaydır ve Bildir'i seç
                      </span>
                    </li>
                  </ul>
                  <h3 className="mb-[18px] text-lg font-semibold">
                    <span className="">E-posta ile bildir </span>
                  </h3>
                  <p className="my-[15px] text-[15px]">
                    Güvenlik en önemli önceliktir ve politikalarımızı ya da
                    <a href="" className="text-[#d6002f] hover:underline">
                      <span> Topluluk Kurallarımızı </span>{" "}
                    </a>
                    ihlal eden
                    <a href="" className="text-[#d6002f]  hover:underline">
                      <span> davranışları hemen bize bildirmelisin. </span>{" "}
                    </a>
                    E-posta ile rapor göndermek için lütfen
                    <a href="" className="text-[#d6002f]  hover:underline">
                      {"  "}
                      buradan iletişime geç{"  "}
                    </a>
                    ve aşağıdaki bilgileri ekle:
                  </p>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li className="">Bildirim gerekçen</li>
                    <li className="">
                      Bildirdiğin profilde görünen ad, yaş ve fotoğraflar
                      (mümkünse ekran görüntüleriyle birlikte)
                    </li>
                    <li className="">
                      Kullanıcının konumu, telefon numarası veya e-posta adresi
                      (biliniyorsa)
                    </li>
                  </ul>
                  <p className="my-[15px]">
                    {" "}
                    Bize ne kadar ayrıntılı bilgi sağlarsan, şüpheli profili
                    veya kullanıcıyı o kadar hızlı tespit edip
                    araştırabileceğiz.{" "}
                  </p>
                  <h3 className="my-[18px]">Daha fazla kaynak</h3>
                  <p className="mt-[15px]"></p>
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
