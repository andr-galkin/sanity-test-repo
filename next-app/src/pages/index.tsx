import { useRouter } from "next/router";
import MainLayout from "@/Layout/MainLayout";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  // useEffect(() => {
  //   const moveCursor = (e: any) => {
  //     const x = e.clientX - 16;
  //     const y = e.clientY - 16;
  //     setCursorXY({ x, y });
  //   };
  //   window.addEventListener("mousemove", moveCursor);
  //   return () => {
  //     window.removeEventListener("mousemove", moveCursor);
  //   };
  // }, []);

  return (
    <MainLayout text="WELCOME!" additionalClasses="text-9xl">
      <Button onPush={() => router.push("/portfolio/rps")} text="Next" />
    </MainLayout>
  );
}
