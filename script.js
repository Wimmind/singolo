// header

let menu = document.querySelector('.navigation');

menu.addEventListener('click',(event)=>{
    menu.querySelectorAll('.navigation-link').forEach(item => item.classList.remove('navigation-link_active'));
    event.target.classList.add('navigation-link_active');
});



// slider

let slideFlag = true;

let slides = document.querySelectorAll('.slide-single');

let slider=[];
for (i=0;i< slides.length;i++){
    slider[i]=slides[i].src;
    slides[i].remove();
}

let step = 0;
let offset = 0;

function draw(){
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset*1020+'px';
    document.querySelector('#slider__pictures').appendChild(img);
    if (step + 1==slider.length){
        step = 0;
    }
    else {
        step++;
    }
    offset = 1;
}

function left() {
    doTransparent();
    if (slideFlag===true){
        slideFlag=false;
        document.querySelector('#slider').style.background='#648BF0';
        document.querySelector('#slider').style.borderBottom='solid 6px rgb(58, 78, 201)';
    }
    else {
        slideFlag = true;
        document.querySelector('#slider').style.background='#f06c64';
        document.querySelector('#slider').style.borderBottom='solid 6px #ea676b';
    }
    for (i=0;i< button.length;i++){
        button[i].onclick=null;
    }
    let slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i=0; i<slides2.length; i++){
        slides2[i].style.left = offset2*1020-1020+'px';
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove();
        draw();
        for (i=0;i< button.length;i++){
            button[i].onclick=left
        }
    },1000);
}

draw();draw();

let button = document.querySelectorAll('.switch-button');
for (i=0;i< button.length;i++){
    button[i].onclick=left
}


let mobileFlag = true;
let shadowMobile = document.querySelectorAll('.picture-shadow');

function fade(){
    for (i=0;i< shadowMobile.length;i++){
        if (mobileFlag === true){
            doShadow();
        }
        else {
            doTransparent();
        }
    }
}

function doTransparent() {
    for (i=0;i< shadowMobile.length;i++){
        shadowMobile[i].style.background='transparent';
    }
    mobileFlag = true;
}

function doShadow() {
    for (i=0;i< shadowMobile.length;i++){
        shadowMobile[i].style.background='black';
    }
    mobileFlag = false;
}