import { TimelineMax } from "gsap/all";
// import { TweenMax } from "gsap/TweenMax";

export const LoaderAnimation = () => {
  const cardB = document.querySelector(".card-blue");
  const cardW = document.querySelector(".card-white");
  const tl = new TimelineMax({ play: false });

  tl.to(cardW, 0.6, {
    css: { transform: "translateY(0)" }
  })
    .to(
      cardB,
      0.6,
      {
        css: { transform: "translateY(0)" }
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
        css: { transform: "translateY(-100%)" }
      },
      "+=0.5"
    )
    .set(cardB, {
      clearProps: "all"
    });

  //   new TweenMax(span, 0.8, {
  //     css: { transform: "translateY(-100%)" }
  //   });
  //   new TweenMax(
  //     loader,
  //     0.8,
  //     {
  //       css: { transform: "translateY(0)" }
  //     },
  //     "+=0.8"
  //   );
  //   new TweenMax(
  //     loader,
  //     0.8,
  //     {
  //       css: { transform: "translateY(-100%)" }
  //     },
  //     "+=7"
  //   );
};
