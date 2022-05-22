import React, { useState, useEffect, useMemo } from "react";
import { Images } from "../Images";
import { shuffle } from "lodash";
import { ICard } from "../types";
export const CardsContext = React.createContext<any>(null);

const CardsProvider: React.FC<any> = ({ children }: any) => {
  const [seconds, setSeconds] = useState<number | null>();
  const [cards, setCards] = React.useState<ICard[]>([]);
  const [click, setClick] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(0);
  const [clickNumbers, setClickNumbers] = useState<number>(0);
  const [pairFounds, setPairFounds] = useState<number>(0);
  const [lastSelected, setLastSelected] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<boolean>(false);
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem("bestScore") || "0")
  );
  const [finish, setFinish] = useState<boolean>(false);

  const images: string[][] = Images;
  const timer: number = 11;

  const resetCards = () => {
    setCards([]);
    setClickNumbers(0);
    setPairFounds(0);
    setLastSelected(null);
    setLastMove(false);
    cards.map((card) => {
      card.found = false;
      card.clicked = false;
    });
  };

  const createGame = () => {
    setSeconds(10);
    resetCards();
    // create cards
    (function (inputs: string[][]) {
      console.log("create Cards");
      // shuffle images and create cards
      // First select a category of images from Image array by shuffle
      const shuffleCategories =
        inputs[Math.floor(Math.random() * inputs.length)];
      // Then shuffle images of that selected array item
      // Create a pair of images, 2 image from each image
      const shuffleImages = shuffle([
        ...shuffleCategories,
        ...shuffleCategories,
      ]);
      let cardsArray: ICard[] = [];
      shuffleImages.map((input, index) => {
        const card: ICard = {
          id: index,
          image: input,
          clicked: false,
          found: false,
          handleClick: (id, input) => handleSelectedCard(id, input),
        };
        cardsArray.push(card);
      });
      setCards(cardsArray);
    })(images);
  };

  // create cards in first load
  useEffect(() => {
    createGame();
  }, []);

  // start count down
  useEffect(() => {
    const startTimer = window.setInterval(() => {
      if (seconds) {
        if (seconds < timer && seconds > 0) {
          setSeconds((s) => s! - 1);
        } else {
          window.clearInterval(startTimer);
        }
      }
    }, 1000);
    return () => window.clearInterval(startTimer);
  }, [seconds]);

  // Find pair images by click on each card
  const handleSelectedCard = (id: number, image: string) => {
    // reset clicked property for all cards
    cards.forEach((card) => {
      card.clicked = false;
    });
    setClick(!click);
    // collect click number to show it as game results
    setClickNumbers((c) => c + 1);
    // set clicked property as true for the current card to show the front
    const index = cards.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      cards[index].clicked = true;
    }
    // at the first round, set current clicked card as the last card for the next compare
    if (lastSelected === null) {
      setLastSelected(image);
      setCardId(id);
    }
    // if there are just 2 cards remain, by click on one card the other one will be shown
    if (lastMove) {
      cards.map((card) => (card.found = true));
      setPairFounds((f) => f + 1);
    }
    // if pair cards found, reset last selected and show the front of cards
    if (lastSelected === image) {
      setLastSelected(null);
      setPairFounds((f) => f + 1);
      showPairs(cardId, id);
    } else {
      setLastSelected(image);
      setCardId(id);
    }
  };

  const compareCards = useMemo(() => {
    if (pairFounds === cards.length / 2 - 1) {
      setLastMove(true);
    } else if (pairFounds !== 0 && pairFounds === cards.length / 2) {
      if (!bestScore) {
        setBestScore(clickNumbers);
      } else {
        if (bestScore > clickNumbers) {
          setBestScore(clickNumbers);
        }
      }
      setTimeout(() => {
        setFinish(true);
      }, 1500);
    }
  }, [pairFounds]);

  // show cards front for both founded pair cards
  const showPairs = (first: number, second: number) => {
    const index = cards.findIndex((object) => {
      return object.id === first;
    });
    if (index !== -1) {
      cards[index].found = true;
    }
    const index2 = cards.findIndex((object) => {
      return object.id === second;
    });
    if (index2 !== -1) {
      cards[index2].found = true;
    }
  };

  const setScoreToStorage = useMemo(() => {
    // set best score if there is the first game
    if (finish) {
      localStorage.setItem("bestScore", "" + bestScore);
      setTimeout(() => {
        setFinish(false);
        createGame();
      }, 2500);
    }
  }, [finish]);

  const value = {
    cards,
    lastSelected,
    handleSelectedCard,
    seconds,
    timer,
    finish,
    clickNumbers,
    pairFounds,
    bestScore,
    createGame,
  };
  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
