import React from "react";
import "../App.css";

type ScrollerProps = {
  children: React.ReactNode;
};

const Scroller: React.FC<ScrollerProps> = ({ children }) => {
  return (
    <>
      <div className="peito h-screen w-container"></div>
      <div className="inline-flex flex-row h-screen overflow-y-hidden scroll">
        {children}
      </div>
    </>
  );
};

export default Scroller;
