"use client";

import { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./nav.css";
import { philosopherFont } from "@/app/fonts";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [barIsOpen, setBarIsOpen] = useState(false);

  const openBar = () => setBarIsOpen(true);
  const closeBar = () => setBarIsOpen(false);

  return (
    <>
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
        <i onClick={openBar}>
          <MenuIcon style={{ color: "inherit", fontSize: "inherit" }} />
        </i>
      </nav>
      {barIsOpen && <Navbar closeBar={closeBar} />}
    </>
  );
};

export default Nav;
