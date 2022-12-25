import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function AgeVerificationsOne() {
  return (
    <>
      <div className="mb-5 border-t border-[#ddd]"></div>
      <div className="my-0 mx-auto max-w-[1160px] py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <Nav
          textList={[
            { text: "Tinder ", url: "" },
            { text: "Güvenlik ve Şikayet ", url: "" },
            { text: "Yaş Doğrulama", url: "" },
          ]}
        />
        <div className="flex flex-col  min-[1024px]:flex-row">
          <article className=" flex-shrink-0 flex-grow basis-auto min-[1024px]:min-w-[640px] min-[1024px]:max-w-[66%] min-[1024px]:flex-shrink-0  min-[1024px]:basis-[66%]">
            <CommonHeader text="Yaş doğrulaması için neden kamera erişimini etkinleştirmem gerekiyor?" />
            <section className="max-w-full">
              <div className="mb-10 break-all leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    Yaş doğrulama işlemi, Tinder uygulamasının dışında mobil
                    tarayıcınızda tamamlanır. İnternet tarayıcınızın kameranıza
                    erişmesine izin vermeniz gerekir, böylece kimliğinizin
                    fotoğraflarını gönderebilir ve yaşınızı başarıyla
                    doğrulayabilirsiniz. Yaş doğrulamasının nasıl çalıştığı
                    hakkında daha fazla bilgi arıyorsanız, lütfen{" "}
                    <a href="" className="text-[#d6002f] hover:underline">
                      bu makaleyi{" "}
                    </a>
                    ziyaret edin.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Kamera erişimini etkinleştirmek için:
                  </p>

                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li>
                      {" "}
                      <strong>iOS'ta: </strong>Telefonunuzun Ayarlar'ına gidin{" "}
                      {">"} Safari (veya tercih ettiğiniz web tarayıcısı) {">"}{" "}
                      Kamera {">"} İzin Ver
                    </li>
                    <li>
                      {" "}
                      <strong>Android'de: </strong>Telefonunuzun Ayarlar'ına
                      gidin {">"} Chrome (veya tercih ettiğiniz web tarayıcısı){" "}
                      {">"} İzin {">"} Kamera {">"} İzin ver (veya "Uygulamayı
                      kullanırken izin ver")
                    </li>
                  </ul>
                  <p className="my-[15px] text-[15px]">
                    Erişim izni verdikten sonra, doğrulama işlemine devam etmek
                    için yaş doğrulama web sayfasına geri dönün.
                    <strong>Not: </strong>Bu işlemi tamamladıktan sonra kamera
                    erişimini iptal edebilirsiniz.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    İşlem tamamlandıktan sonra Tinder'a geri yönlendirilirsiniz.
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
