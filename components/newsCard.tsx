import { FaRegCalendarAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { News } from "@/app/[country_code]/news/const";
import { useRouter } from "next/navigation";
interface NewsComponentProps {
  news: News;
}

export const NewsCard: React.FC<NewsComponentProps> = ({ news }) => {
  const router = useRouter();

  const getColour = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-purple-600";
      case "Coming Soon":
        return "bg-purple-400";
      case "Finished":
        return "bg-gray-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div
      className=" hover:cursor-pointer max-w-5/6"
      onClick={() => {
        router.push(`/news/detail/${news.id}`);
      }}
    >
      <Card className=" lg:w-5/6 w-full content-between mb-2 shadow-2xl lg:min-h-72 items-center justify-center">
        <CardHeader
          className={`flex flex-row space-x-1 ${getColour(
            news.status
          )} justify-start items-center py-1 mb-5`}
        >
          <FaRegCalendarAlt color="white" />
          <p className=" text-white">
            {news.startTime} {news.endTime ? `- ${news.endTime}` : news.endTime}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center lg:mt-16">
          <img
            className="w-1/4 h-auto"
            src="/images/news/speaker_phone.png"
            alt="Satus_T102_Intel Banner"
          />
        </CardContent>
      </Card>
      <p className="lg:w-5/6 lg:ml-3 w-full text-gray-700 lg:px-1">
        {news.title}
      </p>
    </div>
  );
};
