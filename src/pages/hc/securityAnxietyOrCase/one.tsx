import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import Nav from "../../../layout/deperMainForHc/nav";
import YesOrNo from "../../../components/deperMainForHc/yesOrNo";
import LastSectionArticle from "../../../components/deperMainForHc/lastSectionArticle";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import FeedBackSection from "../../../components/deperMainForHc/feedBackSection";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";

export default function SecurityAnxietyORCaseOne() {
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
            <CommonHeader text="Kişinin uğradığı bedensel bir zararı bildirmek" />

            <section className="max-w-[100%]">
              <div className="mx-0 mt-0 mb-10 break-words leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    {" "}
                    Güvenliğin bizim için önemli. Sen veya tanıdığın birisi acil
                    bir fiziksel tehlike içindeyse, lütfen en kısa sürede yardım
                    almak için yerel yetkililerle iletişime geç.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Bildirime başlamak için lütfen sayfanın altındaki
                    <strong> Bize Ulaş</strong> düğmesini kullan. Eğer sakinsen,
                    bize ne olduğunu kendi kelimelerinle anlatmanı istiyoruz.
                    Lütfen hatırlayabildiğin kadar ayrıntıyı ver ve ilgili
                    olabileceğini düşündüğün ekran görüntülerini veya
                    fotoğrafları yükle. Bu bilgi, konuyu senin adına mümkün olan
                    en kısa sürede incelememize yardımcı olur.
                  </p>
                  <h4 className="mb-[21px] text-base">
                    Şikayet Sonrası Başvurabileceğin Kaynaklar
                  </h4>
                  <p className="my-[15px]">
                    Bu sorunu bize iletmeye zaman ayırdığın için teşekkür
                    ederiz. Bildirimin, herkes için güvenli bir yer
                    oluşturmamıza yardımcı olacak. Tinder olarak, platformumuzun
                    içinde ve dışında meydana gelen olayların bildirimlerini çok
                    ciddiye alıyoruz ve iyileşmen için ihtiyacın olabilecek
                    kaynakları sana sunmak istiyoruz:{" "}
                  </p>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li className="">
                      <span className="">
                        {" "}
                        Cinsel şiddet ile ilgili kaynaklar için{" "}
                        <a
                          href=""
                          className="text-[#d6002f] visited:text-[#700019] hover:underline"
                        >
                          {" "}
                          RAINN'
                        </a>{" "}
                        i ziyaret et
                      </span>
                    </li>
                    <li className="">
                      <span className="">
                        {" "}
                        Ruh sağlığı ile ilgili bir sorun yaşıyorsan{" "}
                        <a
                          href=""
                          className="text-[#d6002f] visited:text-[#700019] hover:underline"
                        >
                          {" "}
                          Kriz SMSYardım Hattı
                        </a>{" "}
                        veya
                        <a
                          href=""
                          className="text-[#d6002f] visited:text-[#700019] hover:underline"
                        >
                          {" "}
                          Siyahi Duygusal Ve Ruh Sağlığı Kolektifi
                        </a>{" "}
                      </span>
                    </li>
                    <li className="">
                      <span className="">
                        {" "}
                        LGBTQIA+ topluluğunun üyesiysen ve yardıma ihtiyacın
                        varsa{" "}
                        <a
                          href=""
                          className="text-[#d6002f] visited:text-[#700019] hover:underline"
                        >
                          {" "}
                          Trevor Projesi
                        </a>{" "}
                        'ne göz at
                      </span>
                    </li>
                    <li className="">
                      <span className="">
                        {" "}
                        ABD dışındaysanız faaliyet gösterdiğimiz birçok ülkede
                        ek kaynaklar için{" "}
                        <a
                          href=""
                          className="text-[#d6002f] visited:text-[#700019] hover:underline"
                        >
                          {" "}
                          buraya tıklayın
                        </a>{" "}
                        'ne göz at
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <Footer contactUs={true} />
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
