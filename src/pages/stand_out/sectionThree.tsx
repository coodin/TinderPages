import React from "react";
import ImageComponent from "../../components/stand_out/imageComponent";
import TextAndLogoComponent from "../../components/stand_out/textAndLogoComponent";

export default function sectionThree() {
  return (
    <>
      <section className={"py-3 text-center min-[896px]:py-5"}>
        <div className=" mx-auto    mb-3 flex h-full w-full flex-col min-[896px]:max-w-[1024px] min-[896px]:flex-row min-[896px]:items-center">
          <ImageComponent
            first={false}
            imageUrl={
              "https://tinder.com/static/build/build-ssg/static/boost-d3b04a74c63742474c5959974bdb15d1.webp"
            }
          />
          <TextAndLogoComponent
            first={false}
            headerText="Boost'la Zirveye Yerleş"
            patagraph="Zamanını en iyi şekilde kullanmak ve eşleşme potansiyelini zirveye çıkarmak için tek bir dokunuşla 10 kata kadar daha fazla profil görüntülenmesi elde et."
          />
        </div>
      </section>
    </>
  );
}
