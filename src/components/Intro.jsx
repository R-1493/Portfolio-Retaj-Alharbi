import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Intro = () => {
  useGSAP(() => {
    gsap.to("#intro", {
      opacity: 1,
      delay: 1.5,
      color: "white",
      y: 0,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <h1 id="intro" className="intro-title">
          CREATIVE MIND
        </h1>
      </div>
    </section>
  );
};

export default Intro;
