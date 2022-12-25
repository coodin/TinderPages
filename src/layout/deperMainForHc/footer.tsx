import React from "react";
import FeedBackSection from "../../components/deperMainForHc/feedBackSection";

interface footerProps {
  contactUs?: boolean;
}

export default function footer({ contactUs = false }: footerProps) {
  return (
    <footer className="">
      <div className="flex items-center justify-center pb-5">
        {contactUs ? (
          <a
            href=""
            className="order-none m-0 flex h-12 w-[288px] max-w-[288px] flex-none flex-grow flex-row items-center  justify-center rounded-3xl bg-contactUsLinearGradient py-3 px-5 text-base font-black uppercase text-[#fff] shadow-contactUsBoxShadow hover:bg-hoverContactUsLinearGradient hover:shadow-hovercontactUsBoxShadow"
          >
            Bize Ulaş
          </a>
        ) : null}
      </div>
      <FeedBackSection />
    </footer>
  );
}
