gsap.registerPlugin(ScrollTrigger);

gsap.to('.b', {
	// scrollTrigger: '.c',
	scrollTrigger: {
		trigger: '.c',
		// toggleActions: 'play none none none'
		toggleActions: 'restart none none none'
		// options: play, pause, resume, reverse, restart, reset, complete, none
	},
	x: 400,
	rotation: 360,
	duration: 3
});