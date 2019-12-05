import { TimelineMax, Power1 } from "gsap/all";

export const scalingBrowser = () => {
  const browser = document.querySelector(".browser-icon");
  const asideR = document.querySelector(".aside-right");
  const asideL = document.querySelector(".aside-left");
  const asideM = document.querySelector(".aside-middle");
  const svg = document.querySelector(".aside-middle svg");
  const tl = new TimelineMax({ repeat: -1 });

  tl.set(browser, {
    visibility: "visible"
  })
    .to(browser, 0.35, {
      css: { opacity: 1 },
      ease: Power1.easeOut
    })
    .to(browser, 1, {
      css: { transform: "rotate(90deg)" },
      ease: Power1.easeOut,
      delay: 1
    })
    .to(asideR, 0.35, {
      css: { transform: "translate(0)", opacity: 1 },
      ease: Power1.easeOut
    })
    .to(
      asideL,
      0.35,
      {
        css: { transform: "translate(0)", opacity: 1 },
        ease: Power1.easeOut
      },
      "-=0.35"
    )
    .to(asideM, 0.35, {
      css: { opacity: 1 },
      ease: Power1.easeOut
    })
    .to(
      svg,
      0.25,
      {
        css: { opacity: 1 },
        ease: Power1.easeOut
      },
      "-=0.25"
    )
    .to(browser, 0.35, {
      css: { opacity: 0 },
      delay: 1.2,
      ease: Power1.easeOut
    })
    .to(browser, 0.4, {
      css: { opacity: 0 }
    });
};
