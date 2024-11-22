"use client";

import Image from "next/image";
import "./page.css";
import Nav from "@/components/nav/Nav";
import bgImage from "@/images/bg.png";

const Home = () => {
  return (
    <div>
      <Nav />
      <Image src={bgImage} alt="background image" className="bg-img" />
    </div>
  );
};

export default Home;
