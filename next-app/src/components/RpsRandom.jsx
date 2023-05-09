import React, { useEffect, useState } from "react";
import { randomNumberGenerate } from "../../functions/randomNumberGenerate";
import Paper from "../../public/Images/Paper";
import Scissors from "../../public/Images/Scissors";
import Image from "next/image";

const RpsRandom = ({ data, setRandomOption }) => {
  const [animation, setAnimation] = useState(false);
  const [randomIndex, setRandomIndex] = useState(() =>
    randomNumberGenerate(data.list)
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
      setRandomOption(data.list[randomIndex]);
    }, 1000);
  }, []);

  const currentImage = (text) => {
    if (text === "Paper") {
      return <Paper />;
    } else if (text === "Scissors") {
      return <Scissors />;
    } else {
      return <Image
          src="/Images/rock.png"
          width={70}
          height={32}
          className="h-[70px] rounded-md"
          alt="rock"
      />;
    }
  };

  return (
    <div className="flex w-[50%] h-full items-center justify-center">
      <span
        className={`flex flex-col items-center  ${
          animation && "text-indigo-500 scale-150 ease-in duration-500"
        }  absolute text-[white] cursor-pointer`}
      >
        {currentImage(data.list[randomIndex].title)}
        <span>{data.list[randomIndex].title}</span>
      </span>
    </div>
  );
};

export default RpsRandom;
