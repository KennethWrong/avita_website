import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 space-x-4 space-y-4 px-3 py-6 w-3/4 justify-items-center">
        <Card className=" lg:w-5/6 w-full">
          <CardHeader>
            <CardTitle className=" text-lg">
              Update Notices for Changes in Repair Terms and Conditions
            </CardTitle>
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
        <Card className=" lg:w-5/6 w-full">
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lmao</p>
          </CardContent>
        </Card>
        <Card className=" lg:w-5/6 w-full">
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lmao</p>
          </CardContent>
        </Card>
        <Card className=" lg:w-5/6 w-full">
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lmao</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
