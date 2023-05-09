import React, { useState } from "react";
import MainLayout from "@/Layout/MainLayout";
import RpsGame from "@/components/RPSGame";

const RPSContainer = (props) => {
  const [gameStart, setGameStart] = useState(false);

  return gameStart ? (
    <RpsGame data={props} />
  ) : (
    <MainLayout
      buttonText="Start"
      additionalClasses="text-5xl text-center"
      text="BEFORE SEEING MY PORTFOLIO, WIN IN ROCK & PAPER & SCISSORS"
    >
      <button
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-main w-[200px] text-[white] rounded-[5px] h-12"
        onClick={() => setGameStart(true)}
      >
        Let's go
      </button>
    </MainLayout>
  );
};

export default RPSContainer;
