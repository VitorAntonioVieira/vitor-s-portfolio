import React from "react";

const { useState } = React;

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [section, setSection] = useState<string>("Início");

  return (
    <div className="fixed w-[70vw] z-20">
      <div className="top_nav flex justify-evenly items-center">
        <button
          className="justify-center align-center bg-white rounded-3xl"
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
        >
          {section}
          {/* <span className="material-symbols-outlined">keyboard_arrow_down</span> */}
        </button>
        {open && (
          <div className="menu w-[100vw] h-20 bg-white">
            <ul className="flex">
              <li className="item">oi</li>
              <li className="item">oi</li>
              <li className="item">oi</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
