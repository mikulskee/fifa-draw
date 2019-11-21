import { TimelineMax } from "gsap/all";

export const LoaderAnimation = () => {
  const tl = new TimelineMax({ paused: true });
  const cardB = document.querySelector(".card-black");
  const cardW = document.querySelector(".card-white");

  tl.set(cardB, { css: { zIndex: 999999 } })
    .set(cardW, { css: { zIndex: 999998 } })
    .to(cardW, 0.6, {
      css: { transform: "translatey(0)" }
    })
    .to(
      cardB,
      0.6,
      {
        css: { transform: "translatey(0)" }
      },
      "-=0.4"
    )
    .set(cardW, { clearProps: "all" })
    .to(cardB, 0.6, {
      css: { transform: "translatey(-100%)" },
      delay: 1
    });

  tl.play();
};
