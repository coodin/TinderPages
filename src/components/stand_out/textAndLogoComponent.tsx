import React from "react";

interface TextAndLogoComponentProps {
  headerText: string;
  patagraph: string;
  first?: boolean;
}

export default function TextAndLogoComponent({
  headerText,
  patagraph,
  first = true,
}: TextAndLogoComponentProps) {
  return (
    <div className={`${first ? "min-[896px]:order-1" : ""}  h-full   flex-1 `}>
      <article className="flex max-w-full flex-col  items-center justify-center px-4 py-3 min-[896px]:mx-auto    min-[896px]:max-w-[400px] min-[896px]:px-2 min-[896px]:py-0 min-[896px]:text-left  lg:px-0">
        <header className="w-full">
          <h2 className="mb-2 text-[26px]   font-semibold text-tinder-color min-[896px]:text-[32px]">
            <div className="my-4 mx-auto h-12 w-12 rounded-full border-[1px] border-[#d4d8de] bg-white p-2 shadow-[0_2px_6px_0_rgba(101,110,123,0.12)] min-[896px]:ml-3 min-[896px]:h-[60px] min-[896px]:w-[60px]">
              {first ? (
                <svg
                  focusable="false"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 24 24"
                  className="h-full w-full"
                >
                  <path
                    d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"
                    fill="#3ccaf8"
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
                  className="h-full w-full"
                >
                  <path
                    d="M15.979 14.018c.637-.638.51-1.275-.192-1.722l-1.275-.765c-.638-.383-1.148-1.275-.956-2.104L15.15 2.73c.191-.765-.128-.956-.765-.446L6.414 9.937c-.638.638-.51 1.275.19 1.722l1.276.765c.638.382 1.148 1.275.957 2.168l-1.658 6.632c-.191.829.191 1.02.765.446l8.035-7.652z"
                    fill="#ab30ee"
                  ></path>
                </svg>
              )}
            </div>
            {headerText}
          </h2>
        </header>
        <p className="text my-2 text-xl font-normal text-nav-item-color">
          {patagraph}
        </p>
      </article>
    </div>
  );
}
