import React from "react";
import "../App.css";

type ScrollerProps = {
  children: React.ReactNode;
};

const Scroller: React.FC<ScrollerProps> = ({ children }) => {
  return (
    <div className={`scroll flex flex-col w-[300vw]`}>
      <div className="peito h-screen w-full"></div>
      <div className="scroll inline-flex flex-row flex-none h-screen overflow-x-scroll snap-x snap-mandatory">
        {children}
      </div>
    </div>
  );
};

export default Scroller;
