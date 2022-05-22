import { CSSProperties } from "react";

import { Fireworks, useFireworks } from "fireworks-js/dist/react";

const FinalView = () => {
  useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
    },
  });

  const style: CSSProperties = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#000",
  };

  return (
    <Fireworks>
      <div className="w-full flex flex-wrap items-center justify-center"></div>
    </Fireworks>
  );
};

export default FinalView;
