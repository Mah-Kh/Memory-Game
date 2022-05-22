import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

const MoveCounts = () => {
  const { clickNumbers, pairFounds } = useContext(CardsContext);
  return (
    <div className="w-full flex justify-between p-4 text-xl">
      <p>
        Moves: <span>{clickNumbers}</span>
      </p>
      <p className="ml-2">
        Found: <span>{pairFounds}</span>
      </p>
    </div>
  );
};

export default MoveCounts;
