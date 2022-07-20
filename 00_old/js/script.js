gsap.to('.box100', {
	x: 200,
	y: 50,

	// rotation: 45,

	// duration은 0.5가 default
	duration: 2.5,

	// opacity: 1,

	// delay: 2,
	// scale: 0.3,

	// ease: 'back.out(1.5)'
	// ease: 'elastic.out(1, 0.3)'
	// ease: 'bounce.out'
	// ease: "rough({ strength: 1, points: 20, template: none.out, taper: out, randomize: false, clamp: false })"
	// ease: "slow(0.7, 0.7, false)"
	// ease: "steps(7)"
	// ease: 'circle.out'
	// ease: 'expo.out'
	// ease: 'sine.out'
});



gsap.to('.box1', {
	x: 200,
	opacity: 0.5,
	duration: 3,
	ease: 'steps(10)'
});
gsap.to('.box2', {
	x: 300,
	duration: 2,
	ease: 'elastic.out',
	scale: 1.5
});
gsap.to('.box3', {
	x: 400,
	duration: 3,
	backgroundColor: 'black',
	width: 300,
	height: 100,
	color: 'white'
});


gsap.from('.box4', {
	x: 200,
	opacity: 0.3,
	duration: 3,
	ease: 'steps(10)',
	width: 300
});
gsap.fromTo('.box5', {
	x: 100,
	fontSize: 60
	}, {
		duration: 3,
		x: 400,
		fontSize: 10
	}
);



let tween = gsap.to('.box7', {
	x: 500,
	duration: 5,
	paused: true
});

document.querySelector('.btn.play').onclick = () => tween.play(); 
document.querySelector('.btn.pause').onclick = () => tween.pause(); 
document.querySelector('.btn.resume').onclick = () => tween.resume(); 
document.querySelector('.btn.reverse').onclick = () => tween.reverse(); 
document.querySelector('.btn.restart').onclick = () => tween.restart(); 


// bad example
gsap.to('.box8', {
	x: 300,
	ease: 'elastic.out',
	duration: 1
});
gsap.to('.box8', {
	y: 150,
	duration: 2,
	opacity: 0.3,
	delay: 1 // wait 1 second
});
gsap.to('.box8', {
	x: 100,
	duration: 3,
	opacity: 1,
	width: 150,
	backgroundColor: 'red',
	delay: 3, // wait 3 second
});
gsap.to('.box8', {
	y: 0,
	duration: 1,
	backgroundColor: 'purple',
	ease: 'steps(5)',
	delay: 6, // wait 6 second
});

// good example
var tl = gsap.timeline();
tl.to('.box9', {
	x: 300,
	ease: 'elastic.out',
	duration: 1
});
tl.to('.box9', {
	y: 150,
	duration: 2,
	opacity: 0.3
});
tl.to('.box9', {
	x: 100,
	duration: 3,
	opacity: 1,
	width: 150,
	backgroundColor: 'red'
});
tl.to('.box9', {
	y: 0,
	duration: 1,
	backgroundColor: 'purple',
	ease: 'steps(5)'
});
