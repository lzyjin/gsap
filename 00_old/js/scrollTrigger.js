gsap.registerPlugin(ScrollTrigger);

gsap.to('.c', {
	// scrollTrigger: '.c',
	scrollTrigger: {
		trigger: '.c',

		toggleActions: 'restart pause reverse pause',
		// options: play, pause, resume, reverse, restart, reset, complete, none

    markers: true,

     
	},
	x: 400,
	rotation: 360,
	duration: 3
});