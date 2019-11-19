import { TimelineMax, Power1 } from "gsap/all";

export const DrawAnimation = () => {
  const wrapper = document.querySelector(".drawing-animation-card");
  const logo = document.querySelector(".drawing-animation-card--team-logo");
  const title = document.querySelector(".drawing-animation-card--team-title");
  const tl = new TimelineMax({ play: false });

  tl.set(wrapper, { css: { zIndex: 99999999 } })
    .to(wrapper, 0.35, {
      opacity: 1
    })
    .to(logo, 0.85, {
      css: { opacity: 1, transform: "translatey(0)" },
      ease: Power1.easeOut
    })
    .to(
      title,
      0.85,
      {
        css: { opacity: 1, transform: "translatey(0)" },
        ease: Power1.easeOut
      },
      "-=0.25"
    )
    .to(wrapper, 0.35, { opacity: 0, delay: 2 })
    .set(wrapper, { clearProps: "all" })
    .set(logo, { clearProps: "all" })
    .set(title, { clearProps: "all" });

  //   tl.to(cardW, 0.6, {
  //     css: { transform: "translateY(0)" }
  //   })
  //     .to(
  //       cardB,
  //       0.6,
  //       {
  //         css: { transform: "translateY(0)" }
  //       },
  //       "-=0.3"
  //     )
  //     .set(cardW, {
  //       clearProps: "all"
  //     })
  //     .to(
  //       cardB,
  //       0.6,
  //       {
  //         css: { transform: "translateY(-100%)" }
  //       },
  //       "+=0.5"
  //     )
  //     .set(cardB, {
  //       clearProps: "all"
  //     });
};
