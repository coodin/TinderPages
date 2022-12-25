import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function securityAndComplaint() {
  return (
    <main className="min-[1160px]:min-h-[65vh]">
      <div className="mb-5 border-t border-[#ddd]"></div>
      <div className="my-0 mx-auto max-w-[1160px] py-0 px-[5%] min-[1160px]:w-[90%] min-[1160px]:p-0">
        <nav className="mb-[30px] flex min-h-[50px] flex-col justify-between pb-[15px] min-[768px]:flex-row min-[768px]:items-baseline">
          <ol className="mb-[15px] p-0 min-[768px]:m-0">
            <li className="inline max-w-[450px] text-base font-light text-[#454545]">
              <Link className="hover:underline" to={""}>
                Tinder
              </Link>
            </li>
            <li className="inline max-w-[450px] text-base font-light text-[#454545] before:my-0 before:mx-2 before:content-['>']">
              Güvenlik ve Şikayet
            </li>
          </ol>
          <form className=" relative ">
            <FontAwesomeIcon
              className="absolute top-2/4 left-[15px] -translate-y-1/2 bg-[#fff] text-lg text-[#ddd]"
              icon={solid("magnifying-glass")}
            />
            <input
              type={"search"}
              name={"query"}
              id={"query"}
              placeholder="Arama"
              className="h-10 w-full min-w-[300px] appearance-none rounded-[30px] border border-[#dcd9d9] pl-10 pr-5 text-[#656e7b] outline-none"
            />
          </form>
        </nav>
        <div className="flex justify-end">
          <div className="flex-1 min-[1024px]:flex-shrink-0 min-[1024px]:flex-grow-0 min-[1024px]:basis-[80%]">
            <header className=" my-[10px] mx-0 flex flex-col flex-wrap justify-between min-[768px]:m-0 min-[768px]:flex-row min-[768px]:items-baseline">
              <h1 className="mb-[10px] flex-grow text-[32px]">
                Güvenlik ve Şikayet
              </h1>
            </header>
            <div className="flex flex-col flex-wrap justify-between min-[768px]:flex-row">
              <Section
                list={[
                  {
                    text: "Kişinin uğradığı bedensel bir zararı bildirmek",
                    href: "/securityAndComplaint/SecurityAnxietyORCase/One",
                  },
                  {
                    text: "Uygulamada gerçekleşen bir olayı bildirme",
                    href: "/securityAndComplaint/SecurityAnxietyORCase/Two",
                  },
                  {
                    text: "Taklit Hesaplar",
                    href: "/securityAndComplaint/SecurityAnxietyORCase/Three",
                  },
                  {
                    text: "Başka bir kullanıcının güvenliği konusunda endişeliyim",
                    href: "/securityAndComplaint/SecurityAnxietyORCase/Four",
                  },
                ]}
                titleArgs={{
                  text: "Bir Güvenlik Kaygını Veya Olayı Bildir",
                  href: "/securityAndComplaint/SecurityAnxietyORCase",
                }}
              />
              <Section
                list={[
                  {
                    text: "Yaş doğrulaması için neden kamera erişimini etkinleştirmem gerekiyor?",
                    href: "/securityAndComplaint/AgeVerification/One",
                  },
                  {
                    text: "Yaş doğrulama nasıl çalışır?",
                    href: "/securityAndComplaint/AgeVerification/Two",
                  },
                ]}
                titleArgs={{
                  text: "Yaş Doğrulama",
                  href: "/securityAndComplaint/AgeVerification",
                }}
              />
              <Section
                list={[
                  {
                    text: "Topluluk Kuralları",
                    href: "/securityAndComplaint/AdditionalResource/One",
                  },
                  {
                    text: "Güvenlik İpuçları",
                    href: "/securityAndComplaint/AdditionalResource/Two",
                  },
                  {
                    text: "Emniyet yetkilileri için bilgi",
                    href: "/securityAndComplaint/AdditionalResource/Three",
                  },
                  {
                    text: "Tinder'ın bir destek hattı var mı?",
                    href: "/securityAndComplaint/AdditionalResource/Four",
                  },
                  {
                    text: "Tinder Güvenlik Merkezi",
                    href: "/securityAndComplaint/AdditionalResource/Five",
                  },
                  {
                    text: "Telif Hakkı Kaldırma Talepleri",
                    href: "/securityAndComplaint/AdditionalResource/Six",
                  },
                ]}
                titleArgs={{
                  text: "Ek Kaynaklar",
                  href: "/securityAndComplaint/AdditionalResource",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface SectionProps {
  titleArgs: { text: string; href: string };
  list: { text: string; href: string }[];
}

function Section({ list, titleArgs }: SectionProps) {
  return (
    <section className="mb-10 flex-[initial] flex-shrink-0 flex-grow-0 min-[768px]:mb-5 min-[768px]:basis-[45%] ">
      <h3 className="mb-0 text-lg font-semibold">
        <Link
          className="bg-transparent text-[#000000] hover:underline"
          to={titleArgs.href}
        >
          {titleArgs.text}
        </Link>
      </h3>
      <ul className="hidden min-[768px]:block">
        {list.map((value) => {
          return (
            <li
              key={value.href}
              className={"border-b border-[#ddd] py-[15px] px-0 text-base "}
            >
              <Link
                to={value.href}
                className={"bg-transparent text-[#000000] hover:underline"}
              >
                {value.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
