import { useEffect } from "react";
// @ts-ignore
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function useScroll() {
  useEffect(() => {
    // if (!start) return;
    const el = document.getElementById("scroll");

    const scroll = new LocomotiveScroll({
      el,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, []);
}
