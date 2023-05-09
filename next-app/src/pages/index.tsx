import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "@/Layout/MainLayout";

export default function Home() {
  const router = useRouter();
  const [showText, setShowText] = useState<boolean>(true);

  const onMouseEnter = () => {
    setShowText(false);
  };
  const onMouseleave = () => {
    setShowText(true);
  };

  return (
    <MainLayout
      text="WELCOME!"
      additionalClasses={`${!showText && "opacity-20"} text-9xl`}
    >
      <button
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-main w-[200px] text-[white] rounded-[5px] h-12"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseleave}
        onClick={() => router.push("/portfolio/rps")}
      >
        Next
      </button>
    </MainLayout>
  );
}
