import React from "react";

interface ImageComponentProps {
  imageUrl: string;
  first?: boolean;
}

export default function ImageComponent({
  imageUrl,
  first = true,
}: ImageComponentProps) {
  return (
    <div className={`${first ? "min-[896px]:order-2" : ""} h-full  flex-1 `}>
      <div className="my-6 mx-auto max-w-[300px] px-8 min-[896px]:max-w-[400px]">
        <div className="relative">
          <div className="relative aspect-[600/1244]">
            <img
              src={imageUrl}
              className="absolute top-0 left-0  h-full w-full "
            />
          </div>
          <div className="absolute bottom-0 top-0 left-0 right-0 scale-110">
            <div className="relative aspect-[600/1200]">
              <img
                className="absolute top-0 left-0"
                src="https://tinder.com/static/build/build-ssg/static/phone-frame-4b7178071dd47f185c13d14c95f05b24.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
