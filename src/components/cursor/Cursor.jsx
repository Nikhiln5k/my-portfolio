import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
}

export default Cursor;
