import React, { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import MoveCounts from "./MoveCounts";
import StartView from "./StartView";

const TopComponent = () => {
  const { seconds, finish } = useContext(CardsContext);
  return (
    <>
      {!finish && (
        <div className="w-full h-[130px] flex text-white bg-primary">
          {seconds !== 0 ? <StartView seconds={seconds} /> : <MoveCounts />}
        </div>
      )}
    </>
  );
};

export default TopComponent;
