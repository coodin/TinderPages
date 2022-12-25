import React from "react";

interface commonHeaderProps {
  text: string;
}

export default function commonHeader({ text }: commonHeaderProps) {
  return (
    <header className="mt-5 flex flex-col flex-wrap items-start justify-between min-[768px]:mt-0  min-[768px]:flex-row">
      <h1 className="text-[32px] min-[768px]:basis-full">{text}</h1>
    </header>
  );
}
