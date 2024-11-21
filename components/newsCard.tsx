import { FaRegCalendarAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const NewsCard = ({ news: News }) => {
  return (
    <Card className=" lg:w-5/6 w-full">
      <CardHeader>
        <CardTitle className=" text-lg">{news.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <img
          className="w-1/4 h-auto"
          src="/images/news/speaker_phone.png"
          alt="Satus_T102_Intel Banner"
        />
      </CardContent>
      <CardFooter className="flex flex-row space-x-1 bg-purple-600 justify-start items-center py-0.5">
        <FaRegCalendarAlt color="white" />
        <p className=" text-white"> 2023.11.06</p>
      </CardFooter>
    </Card>
  );
};
