"use client";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import newsJSON from "../../news.json";
import { News, ParseJSONToNewsClass } from "../../const";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

const findArticle = (countryCode: string, articleId: number) => {
  const inArticle = countryCode in newsJSON;
  if (!inArticle) {
    return null;
  }

  const arr = ParseJSONToNewsClass(newsJSON[countryCode]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === articleId) {
      return arr[i];
    }
  }
  return null;
};

const isImageFile = (fileName: string): boolean => {
  // Define a list of valid image file extensions
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".tiff",
    ".svg",
    ".ico",
  ];

  // Convert the file name to lowercase to make the check case-insensitive
  const lowerCaseFileName = fileName.toLowerCase();

  // Check if the file name ends with any of the valid image extensions
  return imageExtensions.some((extension) =>
    lowerCaseFileName.endsWith(extension)
  );
};

const renderBody = (key: number, text: string) => {
  if (isImageFile(text)) {
    return <img key={key} src={text} alt="image" />;
  } else {
    return (
      <p key={key} className="text-gray-600 mb-4">
        {text}
      </p>
    );
  }
};

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const [article, setArticle] = useState(new News(0, "", [], "", "", ""));
  const locale = useLocale();

  useEffect(() => {
    const article = findArticle(locale, params.id);
    if (article == null) {
      router.push("/news");
    } else {
      setArticle(article);
    }
  }, []);

  return (
    <div className="w-5/6 mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-purple-700">Events</h1>
        <div className="flex items-center space-x-3">
          <span className="text-gray-500">Share:</span>
          <div className="flex space-x-2">
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <FaTwitter color="purple" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <FaFacebook color="purple" />
            </Link>
          </div>
        </div>
      </div>

      {/* Date and Badge */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <i className="far fa-calendar-alt"></i> {/* Calendar Icon */}
          <span>
            {article.startTime}
            {article.endTime ? ` - ${article.endTime}` : ""}
          </span>
        </div>
        <span className="bg-purple-600 text-white text-sm py-1 px-3 rounded-lg">
          {article.status}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {article.title}
      </h2>

      {/* Description */}
      {article.body.map((val: string, index: number) => {
        return renderBody(index, val);
      })}
    </div>
  );
}
