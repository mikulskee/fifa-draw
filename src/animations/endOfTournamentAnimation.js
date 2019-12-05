import { TimelineMax } from "gsap/all";
export const showResults = () => {
  const ul = document.querySelector("ul.results");

  const tl = new TimelineMax();
  tl.set(ul, {
    css: { display: "flex", opacity: 0 },
    delay: 0.3
  }).to(ul, 0.15, { opacity: 1 });
};

export const showWinnerAnimation = () => {
  const tl = new TimelineMax();

  const winner = document.querySelector(".tournament-winner");
  tl.set(winner, {
    css: { display: "block", opacity: 0 },
    delay: 0.3
  }).to(
    winner,
    0.25,
    { css: { opacity: 1, transform: "translate(0, 0)" } },
    "+=0.5"
  );
};
