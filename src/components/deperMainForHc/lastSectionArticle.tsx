import React from "react";

interface LastSectionArticleProps {
  textHeadline: string;
  textList: { text: string; url: string }[];
  margin: string;
}

export default function LastSectionArticle({
  textHeadline,
  textList,
  margin,
}: LastSectionArticleProps) {
  return (
    <section className={`${margin} flex-shrink-0 flex-grow basis-auto `}>
      <h3 className="my-5 mx-0 text-[15px] font-semibold">{textHeadline}</h3>
      <ul>
        {textList.map((value) => {
          return (
            <li key={value.text} className="mb-[15px]">
              <a
                href={value.url}
                className="text-[15px] text-[#d6002f] hover:underline"
              >
                {value.text}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
