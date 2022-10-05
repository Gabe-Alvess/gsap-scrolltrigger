import React, { useRef, useEffect } from "react";
import "./App.css";
import workout from "./workout.svg";
import greenSockLogo from "./greenSockLogo.svg";
import happy from "./happy.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const parentRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray("#panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector(".scrollTrigger-title"),
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "75% center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".first-paragraph"),
          start: "100px 50px",
          end: "600px center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector("#workout-logo"),
      {
        opacity: 0,
        scale: 0.2,
        y: -20,
      },
      {
        rotation: -360,
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector("#workout-logo"),
          start: "-50px 100px",
          end: "450px center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector(".bird-title"),
      {
        x: "100vw",
      },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".second"),
          start: "-50px 100px",
          end: "450px center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector(".second-paragraph"),
      {
        y: "100vh",
      },
      {
        y: 0,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: element.querySelector(".second"),
          start: "10% 10%",
          end: "60% center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector("#happy-logo"),
      {
        x: "-100vw",
        rotation: -360,
      },
      {
        x: 0,
        rotation: 360,
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".second"),
          start: "-50% top",
          end: "55% center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector(".gsap-title"),
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".third"),
          start: "-20% top",
          end: "45% center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector(".third-paragraph"),
      {
        y: "-6vh",
        scale: 0,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".third"),
          start: "-5% top",
          end: "50% center",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    gsap.fromTo(
      element.querySelector("#gsap-logo"),
      {
        y: "100vh",
      },
      {
        y: 0,
        ease: "back.out(3)",
        scrollTrigger: {
          trigger: element.querySelector(".third"),
          start: "-50% top",
          end: "50% center",
          scrub: 2,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="App" ref={parentRef}>
      <div id="panel" className="first">
        <div className="title-container">
          <h1 className="scrollTrigger-title">ScrollTrigger</h1>
          <span className="first-paragraph">
            is the coolest GreenSock plugin.🥳
          </span>
        </div>
        <div className="logo-main">
          <img src={workout} alt="workout" id="workout-logo" />
        </div>
      </div>

      <div id="panel" className="second">
        <div className="title-container">
          <h1 className="bird-title">Some Random SVG Bird</h1>
          <span className="second-paragraph">Don't ask me why</span>
        </div>
        <div className="logo-main">
          <img src={happy} alt="happy" id="happy-logo" />
        </div>
      </div>

      <div id="panel" className="third">
        <div className="title-container">
          <h1 className="gsap-title">Super GreenSock</h1>
          <span className="third-paragraph">At your service</span>
        </div>
        <div className="logo-main">
          <img src={greenSockLogo} alt="greenSockLogo" id="gsap-logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
