"use client";

import Image from "next/image";
import "./page.css";
import Nav from "@/components/nav/Nav";
import { playfair, openSans } from "./fonts";
import bg from "@/images/bg.png";

const Home = () => {
  return (
    <div>
      <Nav />
      <section className="first">
        <Image src={bg} alt="background image" className="bg-img" />
        <div className={`${playfair.className}`}>
          <p>
            <span>CLEAN</span>
            <span>ENERGY</span>
          </p>
          <p>
            <span>INFINITE</span>
            <span>POSSIBILITIES</span>
          </p>
          <div className={`${openSans.className}`}>
            <button>OUR TECHNOLOGY</button>
            <button>CONTACT US</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
