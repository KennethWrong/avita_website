"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Main: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/hk/home" on component load
    router.push("/");
  }, [router]);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* Additional content can go here if needed */}
    </main>
  );
};

export default Main;
