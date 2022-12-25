import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function AgeVerificationsTwo() {
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
            <CommonHeader text="Yaş doğrulama nasıl çalışır?" />
            <section className="max-w-full">
              <div className="mb-10 break-all leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    Tinder için en az 18 yaşında olmak gerekmektedir. Bulunduğun
                    konuma bağlı olarak, 18 veya üzeri yaşta olduğunu ve
                    Kullanım Şartları'mıza uyduğunu kanıtlamak için yaşını
                    doğrulaman gerekebilir.
                  </p>
                  <h3 className="mb-[18px] text-lg font-extrabold">
                    Yaşımı nasıl doğrularım?
                  </h3>
                  <ol className="my-5 ml-5 list-outside list-disc pl-5">
                    <li> Tinder'ı aç</li>
                    <li>
                      {" "}
                      <strong>
                        Sohbet için yaş doğrulamanın gerekli olduğu konumlar
                        için:
                      </strong>
                      Eşleşme listene git ve bir eşleşmeye dokun (herhangi bir
                      eşleşme); kimliğini hazır tut ve Yaşımı Doğrula'ya dokun
                    </li>
                    <li>
                      {" "}
                      <strong>Diğer tüm durumlar için:</strong>
                      Ana ekranda bir istem görünür; kimliğini hazır bulundur ve
                      Yaşını Doğrula'ya dokun
                    </li>
                  </ol>
                  <p className="my-[15px] text-[15px]">
                    Yaş doğrulama isteğini tamamlamak için talimatları
                    uygulayacağın ve kimliğini göndereceğin bir web sayfasına
                    yönlendirilirsin. Kimliğin doğrulanana kadar inceleme
                    altında kalacaksın, bu genellikle birkaç saat sürer.
                    Kimliğin incelendikten sonra sana haber veririz ve
                    sonuçlarını uygulamada kontrol edebilirsin.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Daha fazla yardıma mı ihtiyacın var? Yaşını nasıl
                    doğrulayacağına dair adım adım kılavuz için lütfen bu
                    <a href="" className="text-[#d6002f] hover:underline">
                      makaleyi ziyaret edin.{" "}
                    </a>
                  </p>
                  <h3 className="mb-[18px] text-lg font-extrabold">
                    Hangi kimlik formları desteklenmektedir?
                  </h3>
                  <p className="my-[15px] text-[15px]">
                    Aşağıdakiler geçerli kimlik formları olarak kabul edilir ve
                    yaş doğrulama için kabul edilir:
                  </p>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li>Sürücü Belgesi </li>
                    <li>Passport </li>
                    <li>Sağlık Sigortası Kartı (yalnızca Japonya) </li>
                  </ul>
                  <h3 className="mb-[18px] text-lg font-extrabold">
                    Hangi kimlik kartı formları desteklenmemektedir?
                  </h3>
                  <p className="my-[15px] text-[15px]">
                    Aşağıdaki tanımlama biçimleri sık sık gönderilir ancak
                    doğrulama sürecinde kabul edilmez:
                  </p>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li>Emeklilik Kitabı </li>
                    <li>İkamet Kartı</li>
                    <li>Geçici Sürücü Belgesi </li>
                    <li>Öğrenci Kimlik Kartları</li>
                  </ul>
                  <h3 className="mb-[18px] text-lg font-extrabold">
                    Yaş doğrulama ne kadar sürer?
                  </h3>
                  <p className="my-[15px] text-[15px]">
                    Tüm süreç birkaç saatten az sürmelidir!
                  </p>
                  <h3 className="mb-[18px] text-lg font-extrabold">
                    Tinder kimliğimdeki bilgileri ne kadar süre saklar?
                  </h3>
                  <p className="my-[15px] text-[15px]">
                    Üyelerimizin gizliliği önceliklidir. Kimliğin yaşını
                    doğrulamak için kullanılacaktır. Doğrulamadan sonra kimliğin
                    veya kimliğinle ilgili bilgiler (gönderdiğin kimlik türü
                    gibi) Japonya'da bulunuyorsan 90 güne kadar, diğer tüm
                    konumlarda ise 30 güne kadar saklanır. Bu, gerektiğinde ilk
                    doğrulamayı onaylamamızı sağlar. Bu süre zarfından sonra,
                    yalnızca doğrulama sonuçlarını saklayacağız.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Veri uygulamalarımız hakkında daha fazla bilgi için lütfen{" "}
                    <a href="" className="text-[#d6002f] hover:underline">
                      gizlilik politikamıza{" "}
                    </a>
                    bakın.
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
