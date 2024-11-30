"use client";

import Image from "next/image";
import "./page.css";
import Nav from "@/components/nav/Nav";
import { playfair, openSans } from "./fonts";
import bg from "@/images/bg.png";
import bgSm from "@/images/bg-sm.png";
import question from "@/images/wastequestion.png";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <main>
      <Nav />
      <section className="first">
        <Image src={bg} alt="background image" className="bg-img bg-img-lg" />
        <Image src={bgSm} alt="background image" className="bg-img bg-img-sm" />
        <div className={`${playfair.className}`}>
          <p>
            <span>CLEAN</span>
            <span className="highlighted">ENERGY</span>
          </p>
          <p>
            <span className="highlighted">INFINITE</span>
            <span>POSSIBILITIES</span>
          </p>
          <div className={`${openSans.className}`}>
            <button>OUR TECHNOLOGY</button>
            <button>CONTACT US</button>
          </div>
        </div>
      </section>
      <section className="second">
        <Image
          src={question}
          alt="A boy thinking 'waste??'"
          className="question"
        />
        <div className="waste-cards">
          <div>
            <p>
              We create <span className="highlighted"> value </span> from waste,
              to improve the quality of lives.
            </p>
          </div>
          <div>
            <p>
              Waste is a <span className="highlighted">“resource”</span> driving
              a <span className="highlighted">circular economy</span> and a{" "}
              <span className="highlighted">sustainable future.</span>
            </p>
          </div>
        </div>
        <p>
          {`RESUS’  WASTE-TO-ENERGY PROCESS PROVIDES AN ENERGY EFFICIENT PATHWAY FOR BIO-DEGRADABLE  AND 
NON-BIODEGRADABLE WASTE OF VARIOUS CLASSIFICATIONS, TO BE COMPLETELY TRANSFORMED INTO A STABLE AND ENVIRONMENTALLY FRIENDLY MEANS OF ENERGY AND NATURAL FERTILIZER FOR CROPS.`}
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
