
// gsap.to('.parralax-img.img-1', {top:'50%',})
// gsap.to('h1', {position: 'fixed', left:'50%', duration: 1})
gsap.registerPlugin(ScrollTrigger); 
gsap.to('.img-container', {scrollTrigger: {scrub: 1},top:'-50px', stagger: .5, duration: 3})

gsap.to('.navbar h1', {scrollTrigger: {
    
}, position: 'fixed'})