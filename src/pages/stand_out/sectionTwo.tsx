import React from "react";
import ImageComponent from "../../components/stand_out/imageComponent";
import TextAndLogoComponent from "../../components/stand_out/textAndLogoComponent";

export default function sectionTwo() {
  return (
    <>
      <section className={"py-3 text-center min-[896px]:py-5"}>
        <div className=" mx-auto    mb-3 flex h-full w-full flex-col min-[896px]:max-w-[1024px] min-[896px]:flex-row min-[896px]:items-center">
          <ImageComponent
            imageUrl={
              "https://tinder.com/static/build/build-ssg/static/superlike-731b20206c4f22ec80fbb7e180e65749.webp"
            }
          />
          <TextAndLogoComponent
            headerText="Super Like™ ile Ön Plana Çık"
            patagraph="Eşleşme şansını 3 kat artır ve %70 daha uzun süren sohbetlere katıl. Tüm aboneler ayda 1 kere ücretsiz Super Like™ gönderme hakkına sahip olur."
          />
        </div>
      </section>
    </>
  );
}

// function ImageComponent() {
//   return (
//     <div className=" h-full  flex-1 min-[896px]:order-2 ">
//       <div className="my-6 mx-auto max-w-[300px] px-8 min-[896px]:max-w-[400px]">
//         <div className="relative">
//           <div className="relative aspect-[600/1244]">
//             <img
//               src={`https://tinder.com/static/build/build-ssg/static/superlike-731b20206c4f22ec80fbb7e180e65749.webp`}
//               className="absolute top-0 left-0  h-full w-full "
//             />
//           </div>
//           <div className="absolute bottom-0 top-0 left-0 right-0 scale-110">
//             <div className="relative aspect-[600/1200]">
//               <img
//                 className="absolute top-0 left-0"
//                 src="https://tinder.com/static/build/build-ssg/static/phone-frame-4b7178071dd47f185c13d14c95f05b24.webp"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function TextAndLogoComponent() {
//   return (
//     <div className=" h-full   flex-1 min-[896px]:order-1">
//       <article className="flex max-w-full flex-col  items-center justify-center px-4 py-3 min-[896px]:mx-auto    min-[896px]:max-w-[400px] min-[896px]:px-2 min-[896px]:py-0 min-[896px]:text-left  lg:px-0">
//         <header className="w-full">
//           <h2 className="mb-2 text-[26px]   font-semibold text-tinder-color min-[896px]:text-[32px]">
//             <div className="my-4 mx-auto h-12 w-12 rounded-full border-[1px] border-[#d4d8de] bg-white p-2 shadow-[0_2px_6px_0_rgba(101,110,123,0.12)] min-[896px]:ml-3 min-[896px]:h-[60px] min-[896px]:w-[60px]">
//               <svg
//                 focusable="false"
//                 aria-hidden="true"
//                 role="presentation"
//                 viewBox="0 0 24 24"
//                 className="h-full w-full"
//               >
//                 <path
//                   d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"
//                   fill="#3ccaf8"
//                 ></path>
//               </svg>
//             </div>
//             Super Like™ ile Ön Plana Çık
//           </h2>
//         </header>
//         <p className="text my-2 text-xl font-normal text-nav-item-color">
//           Eşleşme şansını 3 kat artır ve %70 daha uzun süren sohbetlere katıl.
//           Tüm aboneler ayda 1 kere ücretsiz Super Like™ gönderme hakkına sahip
//           olur.
//         </p>
//       </article>
//     </div>
//   );
// }
