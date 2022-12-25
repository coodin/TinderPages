import React from "react";
import CommonButton from "../../components/commonButton";

export default function sectionOne() {
  return (
    <section className={` w-full bg-li-background-color py-3 min-[896px]:py-5`}>
      <div className="mx-auto mb-4 flex h-full w-full flex-col min-[896px]:max-w-[1024px] min-[896px]:flex-row">
        <div className="order-2 h-full w-full flex-1 ">
          <article className="px-4 py-3 text-center">
            <header className="w-full text-center font-extrabold italic">
              <h1 className="my-1 text-[32px] text-tinder-color">
                {" "}
                Vitesi Yükselt
              </h1>
            </header>
            <p className="my-6 text-xl font-normal text-nav-item-color">
              Tinder®'dan en iyi şekilde yararlanmaya hazır olduğunda,
              Beğenilerini yükseltmek ve deneyimini üst seviyeye taşımak için
              ayrıcalıklı özelliklerimizi keşfet.
            </p>
            <span className="flex justify-center">
              <CommonButton message={"Hemen katıl"} addMargin={true} />
            </span>
          </article>
        </div>
        <div className="order-1 h-full w-full flex-1">
          <div className="relative aspect-[4/3]">
            <div className="absolute left-0 top-0 h-full w-full">
              <CardComponent
                text="Eşleşme şansın 3 kat daha fazla!"
                headText=" Super Like ile ön plana çık"
              />
              <CardComponent
                text="Daha fazla eşleşme yakalamak için 30 dakika boyunca bölgendeki en popüler profillerden biri ol."
                headText="Sıra Bekleme"
                first={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardComponentProp {
  first?: boolean;
  text: string;
  headText: string;
  svg?: React.SVGProps<Element>;
}

function CardComponent({ first = true }: CardComponentProp) {
  return (
    <div
      className={`absolute top-[50%] left-[50%] w-[80%] max-w-[375px] ${
        first ? "translate-x-[calc(-54%)]" : "translate-x-[calc(-46%)]"
      }  ${
        first ? "translate-y-[calc(-60%)]" : "translate-y-[calc(-40%)]"
      }   transform rounded-lg ${
        first ? "bg-fisrstRadialGradient" : "bg-secondRadialGradient"
      }  px-7  py-6`}
    >
      <div className="mx-auto my-4 flex h-11 w-11 items-center justify-center rounded-full border-[1px] bg-white p-2 shadow-myShadow">
        {first ? (
          <svg
            role="presentation"
            viewBox="0 0 24 24"
            className="h-full w-full text-tinder-color"
          >
            <path
              d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"
              fill="#3dc3f8"
            ></path>
          </svg>
        ) : (
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="h-full w-full text-tinder-color"
          >
            <path
              d="M15.979 14.018c.637-.638.51-1.275-.192-1.722l-1.275-.765c-.638-.383-1.148-1.275-.956-2.104L15.15 2.73c.191-.765-.128-.956-.765-.446L6.414 9.937c-.638.638-.51 1.275.19 1.722l1.276.765c.638.382 1.148 1.275.957 2.168l-1.658 6.632c-.191.829.191 1.02.765.446l8.035-7.652z"
              fill="#b13df1"
            ></path>
          </svg>
        )}
      </div>
      <div className="text-center ">
        <h3 className="m-[5px] text-[18px] font-semibold">
          Super Like ile ön plana çık
        </h3>
        <p className="text-nav-item-color">Eşleşme şansın 3 kat daha fazla!</p>
      </div>
    </div>
  );
}
