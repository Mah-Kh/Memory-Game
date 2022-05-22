import React, { useContext } from "react";
import { ICard } from "../types";
import { CardsContext } from "../context/CardsContext";

const Card: React.FC<ICard> = ({ id, image, clicked, found }) => {
  const { handleSelectedCard, seconds } = useContext(CardsContext);

  return (
    <>
      {seconds !== 0 ? (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#98c1d9",
          }}
          onClick={() => {
            return;
          }}
        ></div>
      ) : (
        <div
          className="w-full h-full cursor-pointer"
          style={{
            backgroundImage: found || clicked ? `url(${image})` : "none",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#98c1d9",
          }}
          onClick={() => {
            handleSelectedCard(id, image);
          }}
        ></div>
      )}
    </>
  );
};

export default Card;
