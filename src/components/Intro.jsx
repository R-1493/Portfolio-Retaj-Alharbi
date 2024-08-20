import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const mytext1 = new SplitType("#intro1");
  gsap.to(mytext1.chars, {
    y: 0,
    stagger: 0.1,
    delay: 0.2,
    duration: 0.1,
  });
  useEffect(() => {
    const mytext2 = new SplitType("#intro2");
    gsap.to(mytext2.chars, {
      y: 0,
      stagger: 0.1,
      delay: 0.2,
      duration: 0.1,
      scrollTrigger: {
        trigger: "#intro2",
        start: "top center",
        end: "bottom 20%",
      },
    });
  }, []);

  return (
    <div className="mt-20 w-full h-screen">
      <section className="w-full text-center nav-height bg-black relative ">
        <div className="h-1/6 w-full flex-center flex-col">
          <h1 id="intro1" className="intro-title">
            CREATIVE MIND
          </h1>
        </div>
      </section>
      <section className="w-full text-center nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <h1 id="intro2" className="intro-title">
            Developer and Designer
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Intro;
