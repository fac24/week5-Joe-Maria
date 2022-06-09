import React from "react";
import potato from "./images/potato.png";

export default function Header() {
  return (
    <header className="flex">
      <img
        src={potato}
        alt="Smiling cartoon potato, kawaii style"
        className="potato"
      ></img>
      <div>
        <h1>Couch Potato</h1>
        <p className="subtitle">
          The pub quiz you can do...<br></br> from your settee!
        </p>
      </div>
    </header>
  );
}
