import { TimelineMax, Power1 } from "gsap/all";

export const scalingBrowser = () => {
  const browser = document.querySelector(".browser-icon");
  const tl = new TimelineMax({ repeat: -1 });

  tl.to(browser, 1.2, {
    css: { transform: "scalex(1.1)" },
    ease: Power1.easeOut
  }).to(browser, 1.2, {
    css: { transform: "scalex(0.9)" },
    ease: Power1.easeOut
  });
};
