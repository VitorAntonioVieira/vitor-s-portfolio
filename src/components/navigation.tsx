import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";

const Navigation = () => {
  const sections = ["Início", "Sobre", "HortaConnect", "SenEye"];
  const [section, setSection] = useState(sections[0]);

  function handleSectionChange(direction: number) {
    const currentIndex = sections.indexOf(section);
    let newIndex
  }

  function handleNavClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const buttons = document.querySelectorAll(".nav button");
    console.log(e.currentTarget)
    if (e.currentTarget == buttons[0]) {
      e.preventDefault();
      setTimeout(() => {
        window.scrollBy({
          left: window.innerWidth * -1,
          behavior: "smooth",
        });
        handleSectionChange(-1)
      }, 200)
    } else if (e.currentTarget == buttons[1]) {
      e.preventDefault();
      setTimeout(() => {
        window.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        })
      }, 200)
    }
    ;
  }

  return (
    <>
      <div className="fixed top-[2vh] w-full flex justify-center">
        <span className=" w-[8vw] text-white text-[18px] text-center font-[600] border-b-2 border-b-white">{section}</span>
      </div>
      <div className="nav fixed w-full h-full flex items-center justify-between">
        <button className="pl-[1vw]" onClick={handleNavClick}>
          <MaterialSymbol icon="arrow_back_ios" size={48} fill color='white' />
        </button>
        <button onClick={handleNavClick}>
          <MaterialSymbol icon="arrow_forward_ios" size={48} fill color='white' />
        </button>
      </div>
    </>
  );
};

export default Navigation;
