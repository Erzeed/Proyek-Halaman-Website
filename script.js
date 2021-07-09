const btn = document.querySelector('.mode input');
const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const main = document.querySelector('main');
const about = document.querySelector('aside#me .aboutMe');
const nav = document.querySelectorAll('nav ul li');
const li = document.querySelectorAll('nav ul li i');
const img = document.querySelectorAll('.slider .img');
const btnRight = document.querySelector('.slider .right');
const btnLeft = document.querySelector('.slider .left');


btn.addEventListener('click',checked);
nav.forEach((el,i) => {
    el.addEventListener('click', () => {
        navigasi(el,i);
    });
});
btnRight.addEventListener('click',slider);
btnLeft.addEventListener('click',slider);


function slider() {
    let currentIndex = 0;
    for (let i = 0; i < img.length; i++) {
        if (img[i].classList.contains('activated')){
            img[i].classList.remove('activated');
            currentIndex = i+1;
        } else {
            img[currentIndex].classList.add('activated');
        }
    }
}

function navigasi(e,i) {
    const current = document.querySelectorAll('.btn');
    if (current.length != 0) {
        nav.forEach((el,i) => {
            el.classList.remove('btn');
            li[i].classList.remove('li');
        });
    }
    li[i].classList.add('li');
    e.classList.add('btn');
}

function checked() {
    ball.classList.toggle('active');
    body.classList.toggle('activeBody');
    main.classList.toggle('activeMain');
    about.classList.toggle('activeMe');
}