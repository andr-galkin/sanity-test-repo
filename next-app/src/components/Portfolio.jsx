import React from "react";
import Link from "next/link";
import JSIcon from "../../public/Images/JSIcon";
import ReactIcon from "../../public/Images/ReactIcon";
import Arrow from "../../public/Images/Arrow";

const Portfolio = ({ list }) => {
  const currentTitle = (title) => {
    const newTitle = title.split(" ");
    return newTitle.slice(0, newTitle.length - 1).join(" ");
  };

  const currentSection = (text) => {
    const newArray = text.split(" ");
    if (newArray[newArray.length - 1] === "(JS)") {
      return <JSIcon />;
    } else return <ReactIcon />;
  };

  return (
    <div className="mt-6 flex flex-col items-center w-full">
      <ul className="flex justify-around w-full mb-20 flex-wrap	gap-3">
        {list?.map(({ title, description, key }) => (
          <li key={key} className="mb-14">
            <Link target="_blank" href={description}>
              <div className="letter-image">
                <span className="tech">{currentSection(title)}</span>
                <div className="animated-mail">
                  <div className="back-fold" />
                  <div className="letter">
                    <div className="letter-border" />
                    <span className="text-xs text-indigo-500 font-bold pl-2">
                      {currentTitle(title)}
                    </span>
                  </div>
                  <div className="body" />
                  <div className="left-fold" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="items-center flex text-4xl text-[white] font-semibold
            bg-gradient-to-r bg-clip-text text-transparent
            from-indigo-500 via-purple-500 to-indigo-500
            animate-main"
        href="https://github.com/andrushi69?tab=repositories"
      >
        <span className="mr-3 animate-shake">
          <Arrow />
        </span>{" "}
        {"  "} Other content you can find here
      </Link>
    </div>
  );
};

export default Portfolio;
