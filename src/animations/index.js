import { TimelineMax as Timeline, Power1 } from "gsap";

const getHomeEnterTimeline = node => {
  const timeline = new Timeline({ paused: true });
  const cards = node.querySelectorAll(".stats-tournament-card");
  const basketTeamLogo = node.querySelectorAll(".basket--team-logo");
  const results = node.querySelectorAll(".result-table--result");

  timeline
    .from(node, 0.35, {
      autoAlpha: 0,
      scale: 1.1,
      ease: Power1.easeOut
    })
    .staggerFrom(
      cards,
      0.3,
      { autoAlpha: 0, x: -25, ease: Power1.easeOut },
      0.1
    )
    .staggerFrom(
      basketTeamLogo,
      0.275,
      { autoAlpha: 0, x: -25, ease: Power1.easeOut },
      0.1
    )
    .staggerFrom(
      results,
      0.3,
      { autoAlpha: 0, x: -25, ease: Power1.easeOut },
      0.1
    );

  return timeline;
};

export const play = node => {
  let timeline;

  timeline = getHomeEnterTimeline(node);

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = node => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, scale: 0.9, ease: Power1.easeOut });
  timeline.play();
};
