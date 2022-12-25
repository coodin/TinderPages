import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function AdditionalResourcesFour() {
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
            <CommonHeader text="Tinder'ın bir destek hattı var mı?" />
            <section className="max-w-full">
              <div className="mb-10 break-all leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    Bir müşteri destek hattı sunmasak da, özel ekibimiz sana
                    yardımcı olmak için her zaman çevrimiçidir! Aldığımız
                    taleplerin çoğu teknik niteliktedir ve yazılı olarak daha
                    kolay açıklanabilir. İstediğin zaman{" "}
                    <a href="" className="text-[#d6002f] hover:underline">
                      {" "}
                      yardım merkezimiz{" "}
                    </a>
                    vasıtasıyla Tinder desteğe ulaşabilirsin.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    İlgili bir notta, lütfen hiçbiri Tinder'a bağlı olmayan
                    çeşitli web sitelerinde yayınlanan sahte müşteri destek
                    numaralarına dikkat et. Tinder desteği her zaman ücretsiz
                    olarak sunulur.{" "}
                    <a href="" className="text-[#d6002f] hover:underline">
                      {" "}
                      Teknik destek{" "}
                    </a>
                    sorularını yanıtlamak veya güvenlik endişeleri konusunda
                    yardım almak için asla ödeme yapmamalısın. Tinder, destekle
                    ilgili herhangi bir istek için asla bilgisayarına uzaktan
                    bağlanmayı istemez.
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
