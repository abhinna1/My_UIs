console.log(document.querySelector('#nav-links'))
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
    }
    else{
        nav.style.backgroundColor = '#eeee';
    }
})


