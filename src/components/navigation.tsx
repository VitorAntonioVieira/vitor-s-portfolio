import React from "react";

const { useState } = React;

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [section, setSection] = useState<string>("Início");

  return (
    <div className="flex">
      <div className="top_nav flex justify-evenly items-center">
        <button
          className="flex align-center"
          onFocus={() => {
            setOpen(true);
            console.log(open);
          }}
        >
          {section}
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </button>
        {open && (
          <div className="menu">
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
