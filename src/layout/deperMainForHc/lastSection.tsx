import React from "react";
import LastSectionArticle from "../../components/deperMainForHc/lastSectionArticle";

interface lastSectionProps {
  textOne: string;
  textTwo: string;
  listObjectOne: { text: string; url: string }[];
  listObjectTwo: { text: string; url: string }[];
}

export default function lastSection({
  textOne,
  textTwo,
  listObjectOne,
  listObjectTwo,
}: lastSectionProps) {
  return (
    <section className="flex flex-col border-t border-t-[#ddd] py-5 min-[768px]:flex-row">
      <LastSectionArticle
        textList={listObjectOne}
        textHeadline={textOne}
        margin={"mr-0 min-[768px]:mr-5"}
      />
      <LastSectionArticle
        textHeadline={textTwo}
        margin="m-0"
        textList={listObjectTwo}
      />
    </section>
  );
}
