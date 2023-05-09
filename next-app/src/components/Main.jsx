import React from "react";
import Portfolio from "./Portfolio";
import { useRouter } from "next/router";
import RPSContainer from "@/components/RPSContainer";
import { Button } from "@/components/Button";

const Main = (props) => {
  const router = useRouter();
  const { title, name, categories, authorImage } = props.portfolioData;

  return (
    <>
      {title === "RPS" ? (
        <RPSContainer list={categories} />
      ) : (
        <div className="flex items-center flex-col">
          <Portfolio name={name} list={categories} image={authorImage} />
          <Button onPush={() => router.push("/")} text="Return to main page" />
        </div>
      )}
    </>
  );
};

export default Main;
