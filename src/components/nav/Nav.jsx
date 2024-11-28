"use client";

import "./nav.css";
import { philosopherFont } from "@/app/fonts";

const Nav = () => {
  return (
    <nav>
      <div>
        <div className={`${philosopherFont.className}`}>
          <span>R</span>
          <span>e</span>
          <span>S</span>
          <span>u</span>
          <span>S</span>
        </div>
        <span>waste</span>
      </div>
      <div>
        <div>
          <a href="#">Services</a>
          <a href="#">Impact</a>
          <a href="#">About us</a>
        </div>
        <button>Contact us</button>
      </div>
    </nav>
  );
};

export default Nav;
