import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  additionalSection?: ReactNode;
}

export default function footer({ additionalSection = null }: FooterProps) {
  return (
    <footer className="mx-auto w-full items-center px-3 pb-5 min-[896px]:mx-auto min-[896px]:w-[90%] min-[896px]:p-5">
      {/* Legit, Career, Social */}
      <div className="mt-5 mb-[10px] flex flex-wrap border-b border-solid min-[896px]:my-3">
        <FooterComponent
          head="Yasal"
          list={[
            ["Gizlilik", ""],
            ["Koşullar", ""],
            ["Çerez Politikası", ""],
            ["Fikri Mülkiyet", ""],
          ]}
        />
        <FooterComponent
          head="KARİYER"
          list={[
            ["Kariyer Portalı", ""],
            ["Teknoloji Blogu", ""],
          ]}
        />
        <FooterComponent head="SOSYAL" />
        <FooterComponent
          list={[
            ["SSS", ""],
            ["Varış Noktaları", ""],
            ["Basın Odası", ""],
            ["Bize Ulaşın", ""],
            ["Promosyon Kodu", ""],
          ]}
        />
      </div>
      {/* Download App */}
      <section className="my-3 flex  min-[896px]:my-4">
        <h1 className="mr-3 flex  items-center justify-center text-lg font-extrabold  text-tinder-color min-[896px]:text-xl">
          UYGULAMAYI İNDİR!
        </h1>
        <div>
          <div className="mr-auto flex justify-center">
            <Link
              to={""}
              className="mr-4 inline-block basis-[50%] px-2 py-4 max-[896px]:hidden"
            >
              <img
                src="https://tinder.com/static/build/build-ssg/static/apple-e447daaf89a7ccae3d031dcc44a0311d.webp"
                className="h-12 max-w-full object-contain"
              />
            </Link>
            <Link to={""} className="mr-4 inline-block basis-[50%]">
              <img
                className="h-20  max-w-full object-contain"
                src="data:image.webp;base64,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"
              />
            </Link>
          </div>
        </div>
      </section>
      {additionalSection}
      {/* Accessibility Links */}
      <section className="border-t-[1px] py-3">
        <div className=" text-center text-xs min-[896px]:flex min-[896px]:justify-between min-[896px]:text-[14px]">
          <div className="my-2 flex w-full flex-wrap justify-center min-[896px]:justify-start">
            <a
              href=""
              className=" text-nav-item-color hover:text-nav-navigation-hover-color"
            >
              SSS
            </a>
            <span className="mx-2  text-nav-item-color">/</span>
            <a
              href=""
              className=" text-nav-item-color hover:text-nav-navigation-hover-color"
            >
              Güvenlik İpuçları
            </a>
            <span className="mx-2  text-nav-item-color">/</span>
            <a
              href=""
              className=" text-nav-item-color hover:text-nav-navigation-hover-color"
            >
              Koşullar
            </a>
            <span className="mx-2  text-nav-item-color">/</span>
            <a
              href=""
              className=" text-nav-item-color hover:text-nav-navigation-hover-color"
            >
              Çerez Politikası
            </a>
            <span className="mx-2  text-nav-item-color">/</span>
            <a
              href=""
              className=" text-nav-item-color hover:text-nav-navigation-hover-color"
            >
              Gizlilik Ayarları
            </a>
          </div>
          <div className=" my-2 w-full  text-center text-nav-item-color min-[896px]:text-right">
            © 2022 Match Group, LLC, Tüm Hakları Saklıdır.
          </div>
        </div>
      </section>
    </footer>
  );
}

interface FooterComponentProps {
  head?: string;
  list?: [text: string, url: string][];
}

function FooterComponent({ list, head }: FooterComponentProps) {
  const listOfSvg: [ReactNode, string][] = [
    [
      <svg
        focusable="false"
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 24 24"
        width="28px"
        height="28px"
        fill="currentcolor"
      >
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
      </svg>,
      "",
    ],
    [
      <svg
        focusable="false"
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 24 24"
        width="28px"
        height="28px"
        fill="currentcolor"
      >
        <path d="M12.205 2.039h3.407s-.19 4.376 4.73 4.684v3.382s-2.625.165-4.73-1.442l.036 6.984a6.314 6.314 0 11-6.314-6.313h.886v3.458a2.87 2.87 0 102.016 2.741l-.031-13.494z"></path>
      </svg>,
      "",
    ],
    [
      <svg
        focusable="false"
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 24 24"
        width="28px"
        height="28px"
        fill="currentcolor"
      >
        <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
      </svg>,
      "",
    ],
    [
      <svg
        focusable="false"
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 24 24"
        width="28px"
        height="28px"
        fill="currentcolor"
      >
        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
      </svg>,
      "",
    ],
    [
      <svg
        focusable="false"
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 24 24"
        width="28px"
        height="28px"
        fill="currentcolor"
      >
        <path d="M16.563 8.424h-3.12V6.378c0-.769.51-.948.868-.948h2.202V2.05l-3.033-.012c-3.366 0-4.132 2.52-4.132 4.133v2.252H7.4v3.482h1.947v9.852h4.095v-9.852h2.763l.357-3.482z"></path>
      </svg>,
      "",
    ],
  ];
  return (
    <section className="mb-4 basis-[33.3333%] pr-2 min-[896px]:mb-2 min-[896px]:basis-[20%] min-[896px]:pr-3">
      {head != undefined ? (
        <h2 className="mb-3  text-[18px] font-extrabold uppercase text-tinder-color">
          {head}
        </h2>
      ) : null}

      <ul className="my-2">
        {list == undefined
          ? listOfSvg.map((both) => {
              return (
                <li className="inline-block h-[42px] w-[42px]">
                  <a
                    href={both[1]}
                    className="text-sm text-tinder-color duration-200 hover:text-nav-navigation-hover-color "
                  >
                    {both[0]}
                  </a>
                </li>
              );
            })
          : list.map((both) => {
              return (
                <li className="leading-[26px] min-[896px]:leading-8">
                  <a
                    href={both[1]}
                    className="text-sm text-tinder-color hover:text-nav-navigation-hover-color min-[896px]:text-[16px]"
                  >
                    {both[0]}
                  </a>
                </li>
              );
            })}
      </ul>
    </section>
  );
}
