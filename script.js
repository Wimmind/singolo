// header

let menuHeader = document.querySelector('.navigation');

menuHeader.addEventListener('click',(event)=>{
    menuHeader.querySelectorAll('.navigation-link').forEach(item => item.classList.remove('navigation-link_active'));
    event.target.classList.add('navigation-link_active');
});


// slider
let slider = document.querySelector('#slider-show');
let slides = document.querySelectorAll('.slide');
let current = 0;
let sliderOffset = true;
let slideBackgroundFlag = true;

function createSlide() {
    let offset = 0;
    slider.innerHTML = '';
    let slide;
    if (current === 0) {
        slide = 1;
    }
    else {
        slide = 0;
    }
    let element = slides[slide].cloneNode(true);
    element.style.left = offset*1020 - 1020 + 'px';
    slider.appendChild(element);
    
    slides[current].style.left = offset*1020 + 'px';
    slider.appendChild(slides[current]);

    offset++;
    slides[slide].style.left = offset*1020 + 'px';
    slider.appendChild(slides[slide]);
}

function leftShift() {
    if (sliderOffset) {
        if (slideBackgroundFlag === true) {
            slideBackgroundFlag=false;
            document.querySelector('#slider').classList.add('slide_second-background');
        } 
        else {
            slideBackgroundFlag=true;
            document.querySelector('#slider').classList.remove('slide_second-background');
        }
        sliderOffset = false;
        let slides2 = document.querySelectorAll('.slide');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*1020 - 1020 +'px';
            offset2++;
        }
        current++;
        if (current >= slides.length) {
            current = 0;
        }
    }   
}
document.getElementById('next-slide').addEventListener('click', leftShift);

function rightShift() {
    if (sliderOffset) {
        if (slideBackgroundFlag === true) {
            slideBackgroundFlag=false;
            document.querySelector('#slider').classList.add('slide_second-background');
        } 
        else {
            slideBackgroundFlag=true;
            document.querySelector('#slider').classList.remove('slide_second-background');
        }
        sliderOffset = false;
        let slides2 = document.querySelectorAll('.slide');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*1020 + 1020 +'px';
            offset2++;
        }
        current++;
        if (current >= slides.length) {
            current = 0;
        }
    } 
}
document.getElementById('prev-slide').addEventListener('click', rightShift);

createSlide();

slider.addEventListener('transitionend', function () {
    createSlide();
    sliderOffset = true;
});




//portfolio

let menuPortfolio = document.querySelector('.portfolio__tags');
menuPortfolio.addEventListener('click',(event)=>{
    picture = document.querySelectorAll('.picture');
    let picture1 = Array.prototype.slice.call(picture);

    shuffle(picture1);




    menuPortfolio.querySelectorAll('.tag').forEach(item => item.classList.remove('tag_active'));
    event.target.classList.add('tag_active');
});

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

