import React, { useEffect, useState } from "react";
import Paper from "../../public/Images/Paper";
import Scissors from "../../public/Images/Scissors";
import Image from "next/image";

const RpsGameItems = ({
  onClick,
  currentOption,
  data,
  readyForOpponentChoice,
}) => {
  const [animation, setAnimation] = useState(false);
  const [currentList, setCurrentList] = useState(data.list);

  useEffect(() => {
    if (currentOption.user !== null) {
      setTimeout(() => {
        const selectedOption = currentList.filter(
          (item) => item.title === currentOption.user
        );
        setCurrentList(selectedOption);
      }, 900);

      setTimeout(() => {
        setAnimation(true);
        readyForOpponentChoice(true);
      }, 1400);
    }
  }, [currentOption]);

  const currentImage = (text) => {
    if (text === "Paper") {
      return <Paper />;
    } else if (text === "Scissors") {
      return <Scissors />;
    } else {
      return "";
    }
  };

  return (
    <>
      <ul className="flex w-full justify-evenly h-full items-center relative">
        {currentList.map((el, index) => (
          <li
            id={el.key}
            key={el.key}
            onClick={onClick}
            className={`flex flex-col items-center ${
              currentOption.user === null && "animate-shake"
            }  ${
              currentOption.user !== null &&
              (currentOption.user === el.title
                ? "transition-all ease-in-out duration-500"
                : "animate-text")
            } ${
              animation && "text-indigo-500 scale-150 ease-in duration-500"
            } ${currentList.length > 1 && index === 0 && "left-[25%]"} ${
              currentList.length > 1 && index === 2 && "right-[22%]"
            }  absolute text-[white] cursor-pointer`}
          >
            {currentImage(el.title)}
            {el.title === "Rock" && (
              <Image
                src="/Images/rock.png"
                width={70}
                height={32}
                className="h-[70px] pointer-events-none rounded-md"
                alt="rock"
              />
            )}
            <span className="pointer-events-none">{el.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RpsGameItems;
