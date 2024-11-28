"use client";
import { useState } from "react";
import { Button } from "./ui/button";

// const language = {
//     hk: ["en", "中"],
//     tw: ["en", "中"],
//     th: ["ภาษาไทย", "en"],
//     ph: ["en"],
// };

export const LanguageToggler = () => {
  const [click, setClick] = useState(0);

  const getLanguage = () => {
    switch (click % 3) {
      case 0:
        return "中";
      case 1:
        return "en";
      case 2:
        return "ภาษาไทย";
      default:
        return "中";
    }
  };

  return (
    <div className="flex flex-row mb-8 min-w-16 align-middle justify-center">
      <Button
        variant={"languageSelect"}
        style={{ maxHeight: 25, fontFamily: "--font-geist-sans" }}
        onClick={() => {
          setClick(click + 1);
        }}
      >
        <h1 className=" text-center"> {getLanguage()}</h1>
      </Button>
    </div>
  );
};
