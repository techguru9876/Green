
const m=document.querySelector('.menu'), l=document.querySelector('.links');
if(m){m.onclick=()=>l.classList.toggle('open');}
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>l.classList.remove('open'));
