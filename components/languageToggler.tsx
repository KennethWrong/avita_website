import { Button } from "./ui/button";

const language = {
  hk: ["en", "中"],
  tw: ["en", "中"],
  th: ["ภาษาไทย", "en"],
  ph: ["en"],
};

export const LanguageToggler = () => {
  return (
    <div className="mb-8">
      <Button
        variant={"languageSelect"}
        style={{ maxHeight: 25, fontFamily: "--font-geist-sans" }}
      >
        <h1> ภาษาไทย</h1>
      </Button>
    </div>
  );
};
