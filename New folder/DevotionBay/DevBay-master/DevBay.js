console.log('hi');
let upperNavObj = document.getElementsByClassName('upper-nav')[0];//selecting the upper nav as an object.  The [0] will actually 'select it'.
let upperNav = upperNavObj.getElementsByTagName('li');
let upperNavArr = Array.from(upperNav);
let myAccount = upperNavArr[8];
let socialLinksObj = document.getElementsByClassName('socials')[0];
let socialObj = socialLinksObj.getElementsByTagName('i');
let socialArr = Array.from(socialObj)
let rightSlid = document.getElementsByClassName('rightSlid')[0];
let leftSlid = document.getElementsByClassName('leftSlid')[0];
let jumboDisp = document.getElementsByClassName('jumbodisp')[0];
rightSlid.addEventListener('click',switchR);
leftSlid.addEventListener('click',switchL);
let arr = ["https://www.hlimg.com/images/events/738X538/c_1527765363e.jpg","http://www.indiaonlinepages.com/festivals/navratri/gifs/navratri-dates.jpg","https://cdn1.newsstate.com/images/2019/04/03/navratra-21_5.jpg","https://htoindia.com/wp-content/uploads/2017/05/19-amazing-temple-of-south-india.jpg"];
let counter =0;let jhanda=0;
function switchR(e)
{
jumboDisp.style.backgroundImage=`url("${arr[counter]}")`;
counter++;
if(counter==4)counter=0;
}
function switchL(e)
{
jumboDisp.style.backgroundImage=`url("${arr[counter]}")`;
counter--;
if(counter==-1)counter=3;
}

console.log(socialArr);
console.log(myAccount);
myAccount.addEventListener('click',logIN);
function logIN(e) 
{
window.location.href='account.html';
}
