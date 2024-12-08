"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Main: React.FC = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
  );
};

export default Main;
