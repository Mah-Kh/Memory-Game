import React, { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import FinalView from "./FinalView";
import Score from "./Score";

const BottomComponent = () => {
  const { seconds, finish } = useContext(CardsContext);
  return (
    <>
      {!finish ? (
        <div className="w-full h-[130px] flex flex-wrap justify-center items-start bg-primary text-white">
          {seconds === 0 && <Score />}
        </div>
      ) : (
        <FinalView />
      )}
    </>
  );
};

export default BottomComponent;
