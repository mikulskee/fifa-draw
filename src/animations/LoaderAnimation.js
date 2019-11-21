import { TimelineMax } from "gsap/all";

export const LoaderAnimation = () => {
  const tl = new TimelineMax({ paused: true });
  const cardB = document.querySelector(".card-blue");
  const cardW = document.querySelector(".card-white");

  tl.to(cardW, 0.6, {
    css: { transform: "translateY(-100%)" }
  })
    .to(
      cardB,
      0.6,
      {
        css: { transform: "translateY(-100%)" }
      },
      "-=0.3"
    )
    .set(cardW, {
      clearProps: "all"
    })
    .to(
      cardB,
      0.6,
      {
        css: { transform: "translateY(-200%)" }
      },
      "+=0.5"
    )
    .set(cardB, {
      clearProps: "all"
    });

  tl.play();
};
