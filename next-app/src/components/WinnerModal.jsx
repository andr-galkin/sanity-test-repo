import React from "react";

const WinnerModal = ({ winner, onClick, gameCounter }) => {
  const textForButtons = () => {
    if (winner === "YOU WIN") {
      return [1, "NEXT"];
    } else if (winner === "DRAW") {
      return [0, "Try again"];
    } else {
      return [-1, "Try again"];
    }
  };

  return (
    <div className="backdrop-blur-sm fixed inset-0 bg-modal_overlay bg-opacity-30 flex justify-center z-0 items-center transition-all ease-in-out duration-500">
      <div className="bg-indigo-500 w-[300px] h-[100px] animate-modal scale-150 rounded-md p-4 ">
        <h3 className="text-white text-center">{winner}</h3>
        <div className="mt-4 flex items-center justify-evenly">
          <button
            onClick={() => onClick(textForButtons())}
            className="text-sm	shadow-modalBtn rounded-md text-white w-32 h-7"
          >
            {textForButtons()[1]}
          </button>
          {gameCounter === 1 && winner !== "YOU WIN" && (
            <button
              onClick={() => onClick([1, null])}
              className="text-sm shadow-modalBtn rounded-md text-white w-32 h-7"
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;
