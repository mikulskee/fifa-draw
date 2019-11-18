import { TimelineMax as Timeline, Power1 } from "gsap";

const getHomeEnterTimeline = node => {
  const timeline = new Timeline({ paused: true });
  timeline.from(node, 0.35, {
    autoAlpha: 0,
    scale: 1.1,
    ease: Power1.easeOut
  });
  return timeline;
};

export const play = (node, pathname) => {
  let timeline;

  timeline = getHomeEnterTimeline(node);

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (node, pathname) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, scale: 0.9, ease: Power1.easeOut });
  timeline.play();
};
