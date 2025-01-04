import React from "react";
import "../App.css";
import Navigation from "./navigation";

type ScrollerProps = {
  children: React.ReactNode;
};

const Scroller: React.FC<ScrollerProps> = ({ children }) => {
  return (
    <>
      <div className="peito h-screen w-container"></div>
      <Navigation />
      <div className="inline-flex flex-row flex-none h-screen overflow-y-hidden scroll">
        {children}
      </div>
    </>
  );
};

export default Scroller;
