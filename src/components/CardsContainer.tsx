import { useState, useRef, useMemo, useContext } from "react";
import Card from "../components/Card";
import { ICard } from "../types";
import { CardsContext } from "../context/CardsContext";

const CardsContainer = () => {
  const { cards, finish } = useContext(CardsContext);
  const [cardWidth, setCardWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  // extract width of each card in any screen to apply that as height of the card to make square card
  const getCardWidth = useMemo(() => {
    if (ref.current) {
      setCardWidth(ref.current?.offsetWidth / 5);
    }
  }, [ref.current]);

  return (
    <>
      {!finish && (
        <div
          ref={ref}
          className="w-full flex flex-wrap items-center justify-center"
        >
          {cards &&
            cards.map((card: ICard, index: number) => (
              <div
                className="border-2 border-primary border-solid w-full h-full p-1 bg-secondary md:p-4"
                style={{
                  width: cardWidth,
                  height: cardWidth,
                }}
                key={index}
              >
                <Card
                  id={card.id}
                  image={card.image}
                  clicked={card.clicked}
                  found={card.found}
                  handleClick={card.handleClick}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CardsContainer;
