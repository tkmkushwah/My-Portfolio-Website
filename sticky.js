//sticky navigation menu in js
let nav=document.querySelector('nav');
let scrollbtn=document.querySelector('.scroll-arrow');
let val;
window.onscroll=function(){
if(document.documentElement.scrollTop > 20){
    nav.classList.add('sticky');
    scrollbtn.style.display="block";
}else{
    nav.classList.remove('sticky');
    scrollbtn.style.display="none";
}
}
// side navigation menu js
let body=document.querySelector('body');
let navbar=document.querySelector('.navbar');
let menubtn=document.querySelector('.menu-btn');
let canclebtn=document.querySelector('.cancel-btn');
menubtn.onclick=function() {
    navbar.classList.add('active');
    menubtn.style.opacity='0';
    menubtn.style.pointerEvents='none';
    body.style.overflowX='hidden';
    scrollbtn.style.pointerEvents='none';
}
canclebtn.onclick=function() {
    navbar.classList.remove('active');
    menubtn.style.opacity='1';
    menubtn.style.pointerEvents='auto';
    body.style.overflowX='auto';
    scrollbtn.style.pointerEvents='auto';
}
//side navigation bar close while we click on navigation links
let navLinks=document.querySelectorAll('.menu a');
for(var i=0; i < navLinks.length; i++){
    navLinks[i],addEventListener<"click">("click",function(){
        navbar.classList.remove('active');
        menubtn.style.opacity='1';
        menubtn.style.pointerEvents='auto';
    });
}