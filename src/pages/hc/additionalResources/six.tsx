import React from "react";
import CommonHeader from "../../../layout/deperMainForHc/commonHeader";
import Footer from "../../../layout/deperMainForHc/footer";
import LastSection from "../../../layout/deperMainForHc/lastSection";
import Nav from "../../../layout/deperMainForHc/nav";

export default function AdditionalResourcesSix() {
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
            <CommonHeader text="Telif Hakkı Kaldırma Talepleri" />
            <section className="max-w-full">
              <div className="mb-10 break-all leading-[1.6]">
                <div className="">
                  <p className="my-[15px] text-[15px]">
                    Tinder telif hakkını ihlal eden hiçbir içeriğe izin vermez.
                    Telif hakkıyla korunan materyallerin izinsiz kullanılması
                    Tinder'ın politikalarını ihlal eder.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Telif hakkıyla korunan bir çalışman izinsiz olarak Tinder'da
                    yayınlandıysa, telif hakkı nedeniyle yayından kaldırma
                    talebi gönderebilirsin.
                  </p>
                  <p className="my-[15px] text-[15px]">
                    Bir kaldırma talebi göndermeden önce lütfen aşağıdakileri
                    göz önünde bulundur:
                  </p>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li className="">
                      Kaldırma talebini geçersiz kılacak, adil kullanım veya
                      adil anlaşma gibi bir telif hakkı istisnasının geçerli
                      olup olmadığını lütfen kontrol et{" "}
                    </li>
                    <li className="">
                      Talepler telif hakkı sahibi veya yasal bir temsilci
                      tarafından sunulmalıdır
                    </li>
                    <li className="">
                      Yanlış iddialar veya kaldırma formunun kötüye kullanılması
                      Tinder hesabının askıya alınmasına veya diğer yasal
                      sonuçlara neden olabilir
                    </li>
                  </ul>
                  <p className="my-[15px] text-[15px]">
                    Dijital Binyıl Telif Hakkı Yasası (DMCA) uyarınca, Tinder'ın
                    iletişim formu aracılığıyla gönderilen tüm yayından kaldırma
                    talepleri aşağıdakilerin onaylanmasını ve kabul edilmesini
                    gerektirir:
                  </p>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li className="">Talep iyi niyetle yapılmıştır</li>
                    <li className="">Talepte yer alan bilgiler doğrudur</li>
                    <li className="">
                      Yeminli ifade dayanarak, talebi dosyalayan kişi telif
                      hakkı sahibi veya telif hakkı sahibinin yetkili
                      temsilcisidir
                    </li>
                  </ul>
                  <p className="my-[15px] text-[15px]">
                    Son olarak, lütfen talebini göndermeden önce aşağıdaki
                    bilgilerin tümünü hazır bulundur:
                  </p>
                  <ul className="my-5 ml-5 list-outside list-disc pl-5">
                    <li className="">Telif hakkı sahibinin adı ve soyadı </li>
                    <li className="">Telif hakkı sahibinin e-posta adresi</li>
                    <li className="">Telif hakkı sahibinin telefon numarası</li>
                    <li className="">Telif hakkı sahibinin açık adresi</li>
                    <li className="">
                      İçeriğin açıklaması ve Tinder'da bulunduğu yer dâhil olmak
                      üzere ihlal edilen içeriğin türü
                    </li>
                  </ul>
                  <p className="my-[15px] mb-[63px] text-[15px]">
                    Telif hakkı kaldırma talebinde bulunmak için lütfen
                    <a href="" className="text-[#d6002f] hover:underline">
                      {" "}
                      iletişim formumuzu kullan.{" "}
                    </a>
                  </p>
                  <p className="my-[15px] text-[15px]">
                    E-posta, posta veya telefon ile talepte bulunmayı tercih
                    ediyorsan, lütfen talep edilen tüm bilgileri şu adrese
                    gönder:
                  </p>
                  <p className="">
                    <a href="" className="text-[#d6002f] hover:underline">
                      {" "}
                      copyright@match.com{" "}
                    </a>
                  </p>
                  <p className="my-[15px] text-[15px]">214-576-3272</p>
                  <p className="my-[15px] text-[15px]">
                    Copyright Compliance Department c/o Match Group Legal
                  </p>
                  <p className="my-[15px] text-[15px]">
                    8750 N. Central Expressway, Suite 1400, Dallas, Texas 75231
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
