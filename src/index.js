// header
document.addEventListener('scroll',onscroll);

let nav = document.querySelector('.navigation');

function onscroll(){
 let curPos = window.scrollY;
 let sections = document.querySelectorAll('#main>section');
 let links = document.querySelectorAll('.navigation-link');

 sections.forEach((element)=>{
    if (element.offsetTop <= curPos+95 && (element.offsetTop+element.offsetHeight) > curPos+95){
        links.forEach((a)=>{
            a.classList.remove('navigation-link_active');
            if (element.getAttribute('id') === a.getAttribute('href').substring(1)){
                a.classList.add('navigation-link_active');
            }
        })
    }
 });
 if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
    links.forEach((a)=>{
        a.classList.remove('navigation-link_active');
    })
    links[links.length-1].classList.add('navigation-link_active');
 }
}


// slider

document.querySelector('#next-slide').addEventListener('click', ()=> {
    if (!slideFlag) {
        removeSlide('to-right'); 
        changeSlide(currentSlide-1);    
        showSlide('from-left'); 
    }
});

document.querySelector('#prev-slide').addEventListener('click',()=> {
    if (!slideFlag) {
        removeSlide('to-left'); 
        changeSlide(currentSlide+1);   
        showSlide('from-right'); 
    }
});

let mobiles = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideFlag = false;  

function changeSlide (n) {
    currentSlide = ( n + mobiles.length ) % mobiles.length; 
    document.querySelector('#slider').classList.toggle('slide_second-background');   
}

function removeSlide(direction) {
    slideFlag = true;
    mobiles[currentSlide].classList.add(direction);
    mobiles[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('slide_show', direction);
    })
}

function showSlide(direction) {
    mobiles[currentSlide].classList.add('next-slide', direction); 
    mobiles[currentSlide].addEventListener('animationend', function() { 
        this.classList.remove('next-slide', direction); 
        this.classList.add('slide_show');
        slideFlag = false;
    })
}


//portfolio

let tags = document.querySelectorAll('.tag')
for (let i=0;i<tags.length;i++){
    tags[i].addEventListener('click', mixPicture);
}
function mixPicture() {
    let gallery = document.querySelector('.portfolio__picture-example');
    let pictures = Array.from(document.querySelectorAll('.picture'));
    gallery.innerHTML="";
pictures.splice(-1).concat(pictures).forEach(item=>gallery.append(item));
    //pictures.forEach(item=>gallery.append(item));
    tags.forEach(item => item.classList.remove('tag_active'));
    event.target.classList.add('tag_active');
}
let pictures = document.querySelector('.portfolio__picture-example');

pictures.addEventListener('click', event=>{
    if (event.target.tagName==='img'.toUpperCase()){
        pictures.querySelectorAll('img').forEach(item =>{item.classList.remove('picture_active');});
        event.target.classList.add('picture_active');
    }
});


//form

let form = document.querySelector('#form');

form.addEventListener('submit',  event => {
    let subject = document.querySelector('#form-subject').value;
    let describe = document.querySelector('#form-describe').value;
    let them = document.querySelector('#subject-message');
    let description = document.querySelector('#describe-message');
    event.preventDefault();
    if (form.checkValidity()) {
        if (subject){
            them.innerHTML ='<i class="message-title">Subject:</i> '+subject;
        }
        else {
            them.innerHTML='<i class="message-title">Without subject</i>';
        }
        if (describe){
            description.innerHTML ='<i class="message-title">Description:</i> '+describe;
        }
        else {
            description.innerHTML='<i class="message-title">Without description</i>'; 
        }
        document.getElementById('message-block').classList.remove('hidden');
    }
});

document.querySelector('#button-close').addEventListener('click', event=> {
    document.querySelector('#message-block').classList.add('hidden');
    form.reset();
});


