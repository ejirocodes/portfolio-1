import { gsap } from "gsap";
// import { lerp, getMousePos } from "../utils";

const lerp = (a, b, n) => (1 - n) * a + n * b;

// const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: posx, y: posy };
};

// Track the mouse position
let mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));
}

export class Cursor {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.el.style.opacity = 0;

    this.bounds = this.DOM.el.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
      scale: { previous: 1, current: 1, amt: 0.15 },
      opacity: { previous: 1, current: 1, amt: 0.1 },
    };

    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
        mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
        mouse.y - this.bounds.height / 2;
      gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }
  enter() {
    this.renderedStyles["scale"].current = 2.5;
    this.renderedStyles["opacity"].current = 0.5;
  }
  leave() {
    this.renderedStyles["scale"].current = 1;
    this.renderedStyles["opacity"].current = 1;
  }
  render() {
    this.renderedStyles["tx"].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles["ty"].current = mouse.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    this.DOM.el.style.transform = `translateX(${this.renderedStyles["tx"].previous}px) translateY(${this.renderedStyles["ty"].previous}px) scale(${this.renderedStyles["scale"].previous})`;
    this.DOM.el.style.opacity = this.renderedStyles["opacity"].previous;

    requestAnimationFrame(() => this.render());
  }
}
