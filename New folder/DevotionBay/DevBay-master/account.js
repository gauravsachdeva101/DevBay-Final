console.log('hi');
let register = document.getElementById('register');
let login = document.getElementById('login');
let circle = document.getElementsByClassName('circle')[0];
let loginP = document.getElementsByClassName('middlecontent')[0];
let registerP = document.getElementsByClassName('lowercontent')[0];

login.addEventListener('click',flipO);
register.addEventListener('click',flipP);

function flipO(e){
login.style.color='black';
register.style.color='grey';
circle.style.transform='rotate(180deg)';
loginP.style.display='block';
registerP.style.display='none';
}
function flipP(e){
register.style.color='black';
login.style.color='grey';
circle.style.transform='rotate(0deg)';
loginP.style.display='none';
registerP.style.display='block';
}