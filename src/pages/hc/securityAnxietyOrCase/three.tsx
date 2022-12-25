import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function SecurityAnxietyORCaseThree() {
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
            <CommonHeader text="Taklit Hesaplar" />
            <section className="max-w-full">
              <div className="mb-10 break-words leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    Tinder, Üyelerin başka herhangi bir kişi veya tüzel kişi
                    kimliğine bürünmesine ve bu kişiyle olan bağlantısını veya
                    ortaklığını yanıltıcı şekilde sunmasına izin vermez.
                    Politikalarımız hakkında daha fazla bilgi için lütfen
                    <a href="" className="text-[#d6002f] hover:underline">
                      {" "}
                      Kullanım Koşullarımızı{" "}
                    </a>
                    ve
                    <a href="" className="text-[#d6002f] hover:underline">
                      {" "}
                      Topluluk Kurallarımızı ziyaret et.{" "}
                    </a>
                  </p>
                  <h3 className="mb-[18px] text-lg font-extrabold">
                    Biri Beni Taklit Ediyor
                  </h3>
                  <p className="my-[15px] text-[15px]">
                    Güvenliği bizim için öncelikli bir konu. Senmişsin gibi
                    davranan bir Tinder hesabı görürsen, lütfen{" "}
                    <a href="" className="text-[#d6002f] hover:underline">
                      {" "}
                      bu formu{" "}
                    </a>
                    kullan ve açılır menüdeki "Biri beni taklit ediyor" başlığı
                    altından bize bildirimde bulun. Kimliğine bürünen kişinin
                    profili hakkında sahip olduğun tüm ayrıntılar da dâhil olmak
                    üzere, istenen tüm bilgileri eklediğinden emin ol.
                  </p>
                  <h3 className="mb-[18px] text-lg font-extrabold">
                    Tanıdığım Bir Kişi Taklit Ediliyor
                  </h3>
                  <p className="my-[15px] text-[15px]">
                    Taklit edilen kişi eğer tanıdığın biriyse, doğrudan o
                    kişiyle iletişim kurmamız gerekiyor. Lütfen taklit edilen
                    kişiyi, yukarıdaki form bağlantısını kullanarak ekibimizle
                    iletişime geçmesi için teşvik et. Bu kişi bizimle iletişime
                    geçerken, sen de taklitçi profili doğrudan Tinder'dan bize
                    bildirebilirsin.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Eğer tanıdığın bu kişi, temsil etme hakkının olduğunun
                    biriyse (ör. çocuğun, müşterin, vs.) lütfen yukarıda talep
                    edilen bilgilerle birlikte bize ulaş.
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
