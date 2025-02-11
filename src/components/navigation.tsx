import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";

const Navigation = () => {
  const sections = ["Início", "Sobre", "HortaConnect", "SenEye", "SeniorCare", "MagSmile"];
  const [section, setSection] = useState(sections[0]);

  function handleSectionChange(direction: number) {
    const currentIndex = sections.indexOf(section);
    let newIndex = direction > 0 ? currentIndex + 1 : currentIndex - 1;

    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= sections.length) {
      newIndex = sections.length - 1
    } else {
      setSection(sections[newIndex]);
    }
  }

  function handleNavClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const buttons = document.querySelectorAll(".nav button");
    buttons[0].setAttribute("disabled", "true");
    buttons[1].setAttribute("disabled", "true");

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
        });
        handleSectionChange(1)
      }, 200)
    };
    setTimeout(() => {
      buttons[0].removeAttribute("disabled");
      buttons[1].removeAttribute("disabled");
    }, 500)
  }

  return (
    <>
      <div className="fixed top-[2vh] w-full flex justify-center">
        <span className={`${section} w-[8vw] text-white text-[16px] text-center font-[600] border-b-[1px] border-b-white`}>{section}</span>
      </div>
      <div className="nav relative">
        <button className="fixed left-0 top-[48vh] pl-[1vw]" onClick={handleNavClick}>
          <MaterialSymbol icon="arrow_back_ios" size={48} fill color='white' />
        </button>
        <button className="fixed right-0 top-[48vh]" onClick={handleNavClick}>
          <MaterialSymbol icon="arrow_forward_ios" size={48} fill color='white' />
        </button>
      </div>
    </>
  );
};

export default Navigation;
