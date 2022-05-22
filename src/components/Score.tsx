import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

const Score = () => {
  const { bestScore, createGame } = useContext(CardsContext);
  return (
    <>
      <div className="w-full p-4 text-xl flex flex-nowrap bg-primary">
        <p>
          Best score:<span className="ml-2">{bestScore}</span>
        </p>
      </div>
      <button
        onClick={createGame}
        className="p-0.5 text-black bg-secondary py-2 px-4 rounded hover:text-white"
      >
        New Game
      </button>
    </>
  );
};

export default Score;
