import React from "react";
import CardsProvider from "./context/CardsContext";
import CardsContainer from "./components/CardsContainer";
import TopComponent from "./components/TopComponent";
import BottomComponent from "./components/BottomComponent";

const App = () => {
  return (
    <CardsProvider>
      <div className="relative container font-Montserrat flex flex-wrap items-start p-2 min-h-screen mx-auto bg-primary">
        {" "}
        <TopComponent />
        <CardsContainer />
        <BottomComponent />
      </div>
    </CardsProvider>
  );
};

export default App;
