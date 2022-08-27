
gsap.fromTo('.right-container', {opacity:0, x:100}, {opacity:1, x:0, duration: 1})
gsap.fromTo('.card-container', {opacity:0, y:-100}, {opacity:1, y:0, duration: 1})
gsap.fromTo('.section2 .container .right-container', {opacity:0, x:-100}, {opacity:1, x:0, duration: 1})

// gsap.fromTo('.process-card1', {opacity:-1, x:-100}, {opacity:1, x:0, duration: 1})
// gsap.fromTo('.process-card2', {opacity:-1, y:-100}, {opacity:1, y:0, duration: 1})
// gsap.fromTo('.process-card3', {opacity:-1, x:100}, {opacity:1, x:0, duration: 1})

document.getElementById('nav-links').style.left = '100%';
document.getElementById('nav-toggler').addEventListener('click', ()=>{
    let box = document.getElementById('nav-links');
    if (box.style.left === '100%'){
        box.style.left = 0;
    }
    else{
        box.style.left = '100%';
    }
})

document.addEventListener('scroll', ()=>{
    let nav = document.querySelector('#navbar');
    if(window.scrollY === 0){
        nav.style.backgroundColor = 'transparent';
        nav.style.borderBottom = 'none';
    }
    else{
        nav.style.backgroundColor = 'white';
        
        nav.style.borderBottom = 'solid 2px';
    }
})