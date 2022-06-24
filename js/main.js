let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountain3=document.getElementById('mountain3');
let mountain4=document.getElementById('mountain4');
let river=document.getElementById('river');
let boat6=document.getElementById('boat');
let Ebrahim=document.getElementById('Ebrahim');
window.onscroll=function () {
    let value =scrollY;
    stars.style.left=value+'px';   
    moon.style.top=value *4 +'px'; 
    mountain3.style.top=value *2 +'px'; 
    mountain4.style.top=value *1.5 +'px'; 
    river.style.top=value  +'px'; 
    boat6.style.top=value  +'px'; 
    boat6.style.left=value*3+'px';
    Ebrahim.style.fontSize=value+'px';
    if(scrollY >=72){
        Ebrahim.style.fontSize=72+'px';
        Ebrahim.style.position='fixed';
    }
    if(scrollY >=459){
        Ebrahim.style.display='none';
    }else{
        Ebrahim.style.display='block';
    }
    if(scrollY >=50){
       document.getElementById("div2").style.background='linear-gradient(#6786b5,#10001f) '
    }else{
        document.getElementById("div2").style.background='linear-gradient(#200016,#10001f)'
    }
}   