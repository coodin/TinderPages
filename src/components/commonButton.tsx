import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  message: String;
  addMargin?: boolean;
  minWidth?: string;
  link?: string;
  addLetterSpacing?: boolean;
}
export default function CommonButton({
  message,
  addMargin = false,
  minWidth = "min-w-[136px]",
  link = "",
  addLetterSpacing = false,
}: ButtonProps) {
  return (
    <Link
      className={`${
        addMargin ? "my-6 min-[896px]:my-10" : ""
      }  relative flex h-11 ${minWidth}  items-center justify-center rounded-full bg-gradient-to-r from-[#fd306d]  to-[#ff5543]  font-bold ${
        addLetterSpacing ? "tracking-widest" : ""
      }  text-white no-underline after:absolute after:h-full after:w-full after:rounded-full hover:after:bg-myButton-background/[0.16]`}
      to={link}
    >
      {message}
    </Link>
  );
}
