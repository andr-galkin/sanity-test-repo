import React, { useState } from "react";
import MainLayout from "@/Layout/MainLayout";
import RpsGame from "@/components/RPSGame";

const RPSContainer = (props) => {
  const [gameStart, setGameStart] = useState(false);
  const [showText, setShowText] = useState(true);

  const onMouseEnter = () => {
    setShowText(false);
  };
  const onMouseleave = () => {
    setShowText(true);
  };

  return gameStart ? (
    <RpsGame data={props}/>
  ) : (
    <MainLayout
      buttonText="Start"
      additionalClasses={`${!showText && "opacity-20"} text-5xl`}
      text="BEFORE SEEING MY PORTFOLIO, WIN IN ROCK & PAPER & SCISSORS"
    >
      <button
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-main w-[200px] text-[white] rounded-[5px] h-12"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseleave}
        onClick={() => setGameStart(true)}
      >
        Let's go
      </button>
    </MainLayout>
  );
};

export default RPSContainer;
