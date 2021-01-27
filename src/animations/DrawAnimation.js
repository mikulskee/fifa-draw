import { TimelineMax, Power1 } from 'gsap/all';

export const DrawAnimation = () => {
	const wrapper = document.querySelector('.drawing-animation-card');
	const logo = document.querySelector('.drawing-animation-card--team-logo');
	const league = document.querySelector('.drawing-animation-card--league-logo');
	const title = document.querySelector('.drawing-animation-card--team-title');
	const group = document.querySelector('.drawing-animation-card--group-name');
	const bg = document.querySelector('.tournament');
	const tl = new TimelineMax({ play: false });

	tl.set(bg, { css: { overflow: 'hidden' } }).set(bg, { clearProps: 'all' });

	tl.set(bg, { css: { overflow: 'hidden' } })
		.set(wrapper, { css: { zIndex: 99999999, display: 'flex' } })

		.to(wrapper, 0.35, {
			opacity: 1,
		})
		.to(group, 5, {
			css: { transform: 'translate(-50%,-50%) scale(20)' },
			ease: Power1.easeOut,
		})
		.to(group, 1, {
			css: { opacity: 1 },
			ease: Power1.easeOut,
			delay: -5,
		})
		.to(group, 0.25, {
			css: { opacity: 0 },
			ease: Power1.easeOut,
			delay: -4.15,
		})

		.to(league, 0.85, {
			css: { opacity: 1, transform: 'translate(-50%, -50%)' },
			ease: Power1.easeOut,
			delay: -3.75,
		})
		.to(league, 0.85, {
			css: { opacity: 0 },
			ease: Power1.easeOut,
			delay: -2.75,
		})
		.to(logo, 0.85, {
			css: { opacity: 1, transform: 'translatey(0)' },
			ease: Power1.easeOut,
			delay: -1.9,
		})
		.to(title, 0.85, {
			css: { opacity: 1, transform: 'translatey(0)' },
			ease: Power1.easeOut,
			delay: -1.4,
		})
		.to(wrapper, 0.35, { opacity: 0, delay: 0 })
		.set(wrapper, { clearProps: 'all' })
		.set(group, { clearProps: 'all' })
		.set(logo, { clearProps: 'all' })
		.set(league, { clearProps: 'all' })
		.set(title, { clearProps: 'all' })
		.set(bg, { clearProps: 'all' });
};
