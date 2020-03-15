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
        document.querySelector('#slider').classList.toggle('slide_second-background');
        sliderOffset = false;
        let slides2 = document.querySelectorAll('.slide');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.left = offset2*1020 - 1020 +'px';
            offset2++;
        }
        current++;
        if (current >= slides.length) {
            current = 0;
        }
    }   
}
document.querySelector('#next-slide').addEventListener('click', leftShift);

function rightShift() {
    if (sliderOffset) {
        document.querySelector('#slider').classList.toggle('slide_second-background');
        sliderOffset = false;
        let slides2 = document.querySelectorAll('.slide');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.left = offset2*1020 + 1020 +'px';
            offset2++;
        }
        current++;
        if (current >= slides.length) {
            current = 0;
        }
    } 
}
document.querySelector('#prev-slide').addEventListener('click', rightShift);

createSlide();

slider.addEventListener('transitionend', function () {
    createSlide();
    sliderOffset = true;
});

document.querySelector('.vertical-mobile-button').addEventListener('click', doShadow1);
function doShadow1() {
    document.querySelector('.vertical-mobile-shadow').classList.toggle('mobile-shadow');
}

document.querySelector('.horizont-mobile-button').addEventListener('click', doShadow2);
function doShadow2() {
    document.querySelector('.horizont-mobile-shadow').classList.toggle('mobile-shadow');
}

//portfolio

let tags = document.querySelectorAll('.tag')
for (let i=0;i<tags.length;i++){
    tags[i].addEventListener('click', mixPicture);
}
function mixPicture() {
    let gallery = document.querySelector('.portfolio__picture-example');
    let pictures = Array.from(document.querySelectorAll('.picture'));
    let newGallery = pictures.sort(function() {return Math.random() - 0.5});
    gallery.innerHTML="";
    newGallery.forEach(item=>gallery.append(item));
    tags.forEach(item => item.classList.remove('tag_active'));
    event.target.classList.add('tag_active');
}

pictures = document.querySelector('.portfolio__picture-example');

pictures.addEventListener('click', event=>{
    if (event.target.tagName==='img'.toUpperCase()){
        pictures.querySelectorAll('img').forEach(item =>{item.classList.remove('picture_active');});
        event.target.classList.add('picture_active');
    }
});


//form

let form = document.querySelector('#form');

document.querySelector('#form-button').addEventListener('click',  event => {
    let subject = document.querySelector('#form-subject').value;
    let describe = document.querySelector('#form-describe').value;
    let them = document.querySelector('#subject-message');
    let description = document.querySelector('#describe-message');
    event.preventDefault();
    if (form.checkValidity()) {
        if (subject){
            them.innerHTML ='<i class="message-title">Тема:</i> '+subject;
        }
        else {
            them.innerHTML='<i class="message-title">Без темы</i>';
        }
        if (describe){
            description.innerHTML ='<i class="message-title">Описание:</i> '+describe;
        }
        else {
            description.innerHTML='<i class="message-title">Без описания</i>'; 
        }
        document.getElementById('message-block').classList.remove('hidden');
    }
    form.reset();
    return false;
});

document.querySelector('#button-close').addEventListener('click', event=> {
    document.querySelector('#message-block').classList.add('hidden');
});


