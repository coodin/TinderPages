import React from "react";
import { Link } from "react-router-dom";
import CommonButton from "../../components/commonButton";

export default function about() {
  return (
    <>
      <section className="bg-li-background-color py-3 min-[896px]:py-5">
        <article className="mb-3 px-4 min-[896px]:mx-auto min-[896px]:mb-4 min-[896px]:max-w-[1024px]">
          <header className="mx-auto w-full min-[896px]:my-7 min-[896px]:w-[80%]">
            <h1 className="my-5 text-center text-[32px] font-extrabold italic text-tinder-color">
              Peki, Flört Uygulaması Olarak Neden Tinder'ı Seçmelisin?
            </h1>
            <p className="my-5 whitespace-pre-line text-xl font-normal  text-nav-item-color">
              Flört uygulaması denince, birçok seçeneğe sahipsin: Badoo, Hoop,
              Happn, Siberalem, Turkey Social, Jaumo, Bumble, Inner Circle vb.
              Gerçek aşk, birlikte takılacak bir arkadaş veya sadece sohbet
              etmek… Aradığın şey ne olursa olsun, onu senin için bulacak bir
              flört uygulamasına ihtiyacın olacak. Ayrıca flört dünyasında her
              şey siyah ve beyaz kadar net değildir. İşte bu yüzden, Tinder'daki
              dostların, sana hayatını kolaylaştıracak özellikler sunuyor.
              Online flörtleşmek hiç bu kadar kolay olmamıştı.
            </p>
            <p className="my-5 whitespace-pre-line text-xl font-normal  text-nav-item-color">
              Alanımızdaki en iyi ücretsiz platform olmakla övünecek değiliz.
              Bunun yerine, kendin karar vermen için sana Tinder'ı kısaca
              anlatmak istedik.
            </p>
          </header>
          <span className="flex w-full items-center justify-center">
            <CommonButton
              message={"Hemen Katıl"}
              minWidth={"min-w-[150px]"}
              addMargin={true}
            />
          </span>
        </article>
      </section>
      <div className="mb-3 w-full px-4 min-[896px]:mx-auto min-[896px]:mb-4  min-[896px]:max-w-[1024px]">
        {/* Mobile Side */}
        <div className=" mx-0 my-0 min-[896px]:grid min-[896px]:auto-rows-max min-[896px]:grid-cols-myGridColumn min-[896px]:grid-rows-myGridRow   min-[896px]:gap-x-16">
          <TextComponent
            text="İlgi Alanlarını Keşfet"
            message="Ortak noktalarınızı bildiğin bir eşleşmeyle sohbet etmek çok daha kolaydır. Tinder uygulaması, İlgi Alanlarını profiline eklemeni ve aynı şeylerden hoşlandığın kişilerle bağlantı kurmanı sağlar."
            order="order-1"
          />
          <ImageComponent
            imgURl="https://tinder.com/static/build/build-ssg/static/about-1-11a0e98f7f446f5f6bc3a8517c38fb05.webp"
            order="order-3"
            takeDoubleHeight={true}
          />
          <TextComponent
            text="Tinder'da Kimliğini Doğrulayabilirsin"
            message="Fotoğraf Doğrulama, fotoğraflarındaki kişinin sen olduğunu kanıtlamanı sağlar. Tinder uygulamasında mavi bir onay işareti olan profillerin, gerçek insanlar olduğundan emin olabilirsin."
            order="order-5"
          />
          {/* I will handle this text component diffrently than the others due to a link inside of it, and its name is "Seni Kimlerin Beğendiğini Gör" */}
          <div className="order-7 py-3 min-[896px]:py-5">
            <article className="my-5 min-[896px]:my-6">
              <h2 className="my-5 text-center text-[26px] font-semibold min-[896px]:my-6">
                Seni Kimlerin Beğendiğini Gör
              </h2>
              <p className="text-left text-lg text-nav-item-color">
                Flört etmeye ayıracak fazla vaktin yok. Seni çok iyi anlıyoruz.
                <span className="text-tinder-color  hover:text-nav-navigation-hover-color">
                  <Link to={""}> Tinder Gold™ </Link>{" "}
                </span>
                aboneliği, Gold Eşleşme özelliğiyle seni zaten beğenmiş olan
                insanları görmeni sağlar. Böylece zamandan tasarruf ederek, daha
                önemli konulara zaman ayırabilirsin.
              </p>
            </article>
          </div>
          {/* I will handle this text component diffrently than the others due to a link inside of it, and its name is "Her Beğenin Nokta Atışı Olsun" */}
          <div className="order-10 py-3 min-[896px]:py-5">
            <article className="my-5 min-[896px]:my-6">
              <h2 className="my-5 text-center text-[26px] font-semibold min-[896px]:my-6">
                Her Beğenin Nokta Atışı Olsun
              </h2>
              <p className="text-left text-lg text-nav-item-color">
                Flört etmeye ayıracak fazla vaktin yok. Seni çok iyi anlıyoruz.
                <span className="text-tinder-color  hover:text-nav-navigation-hover-color">
                  <Link to={""}>Tinder Platinum™ </Link>{" "}
                </span>
                abonelerine özel olan Öncelikli Beğeniler özelliği, beğendiğin
                kişilerin, profilini çok daha hızlı görmesini sağlar.
              </p>
            </article>
          </div>

          <ImageComponent
            imgURl="https://tinder.com/static/build/build-ssg/static/about-2-e02b3a2adab191d4777eaf36c35fa1ed.webp"
            order="order-12"
            takeDoubleHeight={true}
          />
          <TextComponent
            text="Sonsuz Olasılıklar"
            message="Bugüne kadar 55 milyardan fazla eşleşme sağladık. Yani bekar insanları online olarak buluşturma konusunda hiç fena değiliz. Hinge ve eharmony gibi bazı siteler uzun süreli ilişkiler için tasarlanmıştır. Ancak Tinder uygulamasında, aradığın şey ne olursa olsun sana benzersiz bir deneyim ve sonsuz olasılık sunmaya odaklanmış durumdayız."
            order="order-last"
          />
          <TextComponent
            text="Tinder'ı Her Yerde Kullanabilirsin"
            message="New York'a veya Chicago'ya gittiğinde, orada yaşayan insanlarla tanışmak istersen kullanabileceğin bir uygulama var: Tinder. Dünyanın dört bir yanındaki insanlarla eşleşmene izin veren özellikleri kullanarak, yakınındaki ve uzağındaki insanlarla sohbet edebilirsin. Tinder en sevdiğin senin seyahat arkadaşın olacak. Sana 190 ülkede hizmet veriyoruz. OKCupid veya Plenty of Fish'deki arkadaşlarımız bile bunu sana vaat edemez."
            order="order-2"
          />
          <TextComponent
            text="Yüz Yüze ile Güvenli Flört"
            message="Hepimiz gerçek hayatta yeni insanlarla tanışmak için can atıyoruz ama COVID-19 salgınında flört ederken, güvenliğimize öncelik vermeliyiz. Bir buçuk metre mesafe koymak yeterli gelmediğinde, eşleşmenle bağlantını koparmamak için Yüz Yüze özelliğini kullanarak onunla görüntülü sohbet edebilirsin."
            order="order-4"
          />
          {/* I will handle this text component diffrently than the others due to a link inside of it, and its name is "Tüm Dünya ile Bağlantı Kur" */}
          <div className="order-6 py-3  min-[896px]:py-5">
            <article className="my-5 min-[896px]:my-6">
              <h2 className="my-5 text-center text-[26px] font-semibold min-[896px]:my-6">
                Tüm Dünya ile Bağlantı Kur
              </h2>
              <p className="text-left text-lg text-nav-item-color">
                Passport™ özelliğimizi kullanarak, mesafe ayarlarının ötesine
                geçebilir ve dünyanın dört bir yanındaki insanlarla sohbet
                edebilirsin. Tek yapman gereken, dünyanın farklı yerlerinde
                eşleşme yakalamanı sağlayan
                <span className="text-tinder-color  hover:text-nav-navigation-hover-color">
                  <Link to={""}> Tinder Plus® </Link>{" "}
                </span>
                aboneliğine geçmek.
              </p>
            </article>
          </div>
          <TextComponent
            text="Yepyeni Eşleşmeler Parmaklarının Ucunda"
            message="Verebileceğin en doğru kararlardan birisi, kullandığın flört uygulamasının sana sunamadığı özelliklere sahip olan yepyeni bir flört uygulaması seçmektir. Bu durum da Badoo veya Zoosk arasında seçim yapmak kadar kolay değildir. Online ortamda yeni insanlarla tanışmak bir serüvendir. Bu yolculukta, yanında güvenebileceğin biri olmalı. Doğru eşleşmeler yakalama konusunda, Tinder uygulamasını yardımcı pilotun olarak gibi düşünebilirsin."
            order="order-8"
          />
          <TextComponent
            text="Her Zaman, Her Şey Dâhil"
            message="İnsanları kategorize etmekten hoşlanmıyoruz. Bu yüzden de sana, alışık olduğun çevrelerin dışındaki insanlarla tanışabileceğin bir flört deneyimi sunuyoruz. Bumble gibi sitelerden farklı olarak Tinder; boy, eğitim, ırk veya dini inanca göre filtreleme yapmaz. Çünkü demografinin bir kişiyi tanımlayabileceğine inanmıyoruz. Herkesin başkaları tarafından görülmeye ve kendileri nasıl tanımladıklarından bağımsız olarak ilk hamleyi yapma hakkına sahip olduğuna inanıyoruz. Uygulamamızda, herkesi seni önüne çıkarıyoruz ki sohbet etmek istediğin kişiyi kendin seçebilesin."
            order="order-9"
          />
          <ImageComponent
            imgURl="https://tinder.com/static/build/build-ssg/static/about-3-3b5e5b8aacb6fea6b2fd85fad88149c1.webp"
            order="order-11"
            takeDoubleHeight={true}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CommonButton
          addMargin={true}
          message={"Hemen Başla"}
          minWidth={"min-w-[160px]"}
        />{" "}
      </div>
    </>
  );
}

interface TextComponentProps {
  text: string;
  message: string;
  order?: string;
}

function TextComponent({ message, text, order = "" }: TextComponentProps) {
  return (
    <div className={`${order} min-h-min py-3  min-[896px]:py-5`}>
      <article className="my-5 min-[896px]:my-6">
        <h2 className="my-5 text-center text-[26px] font-semibold min-[896px]:my-6">
          {text}
        </h2>
        <p className="text-left text-lg text-nav-item-color">{message}</p>
      </article>
    </div>
  );
}

interface ImageComponentProps {
  imgURl: string;
  order?: string;
  takeDoubleHeight?: boolean;
}

function ImageComponent({
  imgURl,
  order = "",
  takeDoubleHeight = false,
}: ImageComponentProps) {
  return (
    <div
      className={`${
        takeDoubleHeight ? "row-span-2" : ""
      }   ${order} -mx-4  min-[896px]:m-0 `}
    >
      <div className="relative aspect-[750/744] min-[896px]:aspect-[750/965]">
        <img
          className="absolute top-0  left-0 h-full w-full object-cover  "
          src={imgURl}
        />
      </div>
    </div>
  );
}
