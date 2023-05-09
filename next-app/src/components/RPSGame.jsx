import React, { useEffect, useState } from "react";
import RpsGameItems from "@/components/RpsGameItems";
import RpsRandom from "@/components/RpsRandom";
import { rms } from "../../functions/rms";
import WinnerModal from "@/components/WinnerModal";
import { useRouter } from "next/router";

const RpsGame = ({ data }) => {
  const router = useRouter();
  const [timer, setTimer] = useState(2);
  const [gameStart, setGameStart] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [currentOption, setCurrentOption] = useState({
    user: null,
    random: null,
  });
  const [createChoice, setCreateChoice] = useState(false);
  const [winner, setWinner] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [gameCounter, setGameCounter] = useState(0);

  const handleResetValues = () => {
    setTimer(2);
    setGameStart(false);
    setShowGame(false);
    setCurrentOption({ user: null, random: null });
    setCreateChoice(false);
    setWinner("");
    setShowResult(false);
  };
  const startTimer = () => setGameStart(true);

  useEffect(() => {
    const counter =
      timer > 0 && gameStart && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counter);
  }, [timer, gameStart]);

  useEffect(() => {
    if (timer === 0) setShowGame(true);
  }, [timer]);

  const handleCurrentOption = (event) => {
    event.preventDefault();
    const currentItem = data.list.filter((el) => el.key === event.target.id)[0];
    setCurrentOption({ ...currentOption, user: currentItem.title });
  };
  const handleRandomOption = (option) => {
    setCurrentOption({ ...currentOption, random: option.title });
    setTimeout(() => {
      setShowResult(true);
    }, 1300);
  };

  useEffect(() => {
    if (showResult) setWinner(rms(currentOption.user, currentOption.random));
  }, [showResult]);

  const handleNextStep = (info) => {
    const currentIndex = info[0];
    if (currentIndex === -1 || currentIndex === 0) {
      handleResetValues();
      setGameCounter((prevState) => prevState + 1);
    } else router.push("/portfolio/home");
  };

  return (
    <div className="flex w-full justify-between h-screen">
      {!gameStart && (
        <div className="flex w-full h-full items-center justify-center">
          <button
            onClick={startTimer}
            className="transition ease-in-out hover:scale-110 bg-[white] h-[80px] w-[80px] rounded-[50%]"
          >
            Start
          </button>
        </div>
      )}
      {!showGame && gameStart && (
        <div className="flex w-full h-full items-center justify-center">
          <span
            className="text-9xl text-[white] mb-8 font-semibold
            bg-gradient-to-r bg-clip-text text-transparent
            from-indigo-500 via-purple-500 to-indigo-500
            animate-main"
          >
            {timer}
          </span>
        </div>
      )}
      {showGame && (
        <div className="flex w-6/12 border-r-[white] border-r border-solid flex-col">
          <RpsGameItems
            onClick={handleCurrentOption}
            currentOption={currentOption}
            data={data}
            readyForOpponentChoice={(boolean) => setCreateChoice(boolean)}
          />
        </div>
      )}
      {createChoice && (
        <RpsRandom data={data} setRandomOption={handleRandomOption} />
      )}
      {showResult && (
        <WinnerModal
          winner={winner}
          onClick={handleNextStep}
          gameCounter={gameCounter}
        />
      )}
    </div>
  );
};

export default RpsGame;
