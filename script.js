let slideFlag = true;

function slider(){
    if (slideFlag===true){
        slideFlag=false;
        document.getElementById('slider').style.background='#648BF0';
        document.getElementById('slider').style.borderBottom='solid 6px rgb(58, 78, 201)';
        document.getElementById('slide_one').style.display='none';
        document.getElementById('slide_two').style.display='block';
    }
    else {
        slideFlag = true;
        document.getElementById('slider').style.background='#f06c64';
        document.getElementById('slider').style.borderBottom='solid 6px #ea676b';
        document.getElementById('slide_one').style.display='block';
        document.getElementById('slide_two').style.display='none';
    }
}