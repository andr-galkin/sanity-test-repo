import React from "react";
import Portfolio from "./Portfolio";
import { useRouter } from "next/router";
import RPSContainer from "@/components/RPSContainer";

const Main = (props) => {
  const router = useRouter();
  const { title, name, categories, authorImage } = props.portfolioData;

  console.log(props)

  return (
    <div>
      {title === "RPS" ? (
        <RPSContainer list={categories} />
      ) : (
        <div className="flex items-center flex-col">
          <Portfolio name={name} list={categories} image={authorImage} />
          <button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-main w-[200px] text-[white] rounded-[5px] h-12 mt-12"
            onClick={() => router.push("/")}
          >
            Return to main page
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
