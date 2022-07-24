$(function(){
    // 2. GSAP(TweenMax) 애니메이션 오브젝트 생성
    const tween = TweenMax.to('#animate', 0.5, {
        backgroundColor: '#6431ff',
        scale: 2.5,
        rotation: 360,
        x: 600,
        y: 500
    });

    // 1. ScrollMagic 컨트롤러 생성
    const controller = new ScrollMagic.Controller();


    // 3. Scene 오브젝트 생성
    const scene = new ScrollMagic.Scene({
        triggerElement: '#trigger1', // 애니메이션 시작 지점 설정
        duration: '100%', // 애니메이션 재생 시간을 100%로 설정하면 화면 높이에 따라 유동적으로 end 위치가 정해짐

        // 4. Scene 오브젝트(3번)에 GSAP(TweenMax) 애니메이션 오브젝트(2번)를 추가
    }).setTween(tween)
        .addTo(controller) // 5. Controller(1번)에 Scene 오브젝트를 추가
        .addIndicators();

});
// $(function(){
//     const controller = new ScrollMagic.Controller();	// 1. ScrollMagic 컨트롤러 생성
//
//     const tween = TweenMax.to('#animate', 0.5, {	//2. animation object 생성
//         backgroundColor: "#6431ff",
//         scale: 2.5,
//         rotation: 360,
//         x: 600,
//         y: 500
//     });
//
//     const scene = new ScrollMagic.Scene({	//3. Scene object 생성
//         triggerElement: '#trigger1',	//스크롤 애니메이션 시작 지점 설정
//         duration: '100%',	//애니메이션 재생 시간 '100%'지정하면 화면 높이에 따라 유동적으로 end위치가 정해짐
//     })
//         .setTween(tween)	//4. 2번을 3번에 추가
//         .addTo(controller)	//5. 1번(controller)을 3번에 추가
//         .addIndicators();
// });

/*
기본 동작 원리
1. ScrollMagic 컨트롤러 생성
2. animation object 생성
3. Scene object 생성
4. 2번을 3번에 추가
5. 1번(controller)을 3번에 추가
*/
