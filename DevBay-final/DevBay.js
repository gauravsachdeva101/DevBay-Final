let upperNavObj = document.getElementsByClassName('upper-nav')[0];//selecting the upper nav as an object.  The [0] will actually 'select it'.
let upperNav = upperNavObj.getElementsByTagName('li');
let upperNavArr = Array.from(upperNav);
// let myAccount = upperNavArr[8];
let socialLinksObj = document.getElementsByClassName('socials')[0];
let socialObj = socialLinksObj.getElementsByTagName('i');
let socialArr = Array.from(socialObj)
// let rightSlid = document.getElementsByClassName('rightSlid')[0];
// let leftSlid = document.getElementsByClassName('leftSlid')[0];
// let jumboDisp = document.getElementsByClassName('jumbodisp')[0];
// rightSlid.addEventListener('click',switchR);
// leftSlid.addEventListener('click',switchL);
let arr = ["https://www.hlimg.com/images/events/738X538/c_1527765363e.jpg","http://www.indiaonlinepages.com/festivals/navratri/gifs/navratri-dates.jpg","https://cdn1.newsstate.com/images/2019/04/03/navratra-21_5.jpg","https://htoindia.com/wp-content/uploads/2017/05/19-amazing-temple-of-south-india.jpg"];
let counter =3;let jhanda=0;
// myAccount.addEventListener('click',logIN);

//FOR THE OVERLAY HERE

//THIS IS FOR THE ACCOUNT OVERLAY
let mainDisp = document.getElementsByClassName('maindivaccount')[0];
let croSS = document.getElementById('cross');
let register = document.getElementById('register');
let login = document.getElementById('login');
let circle = document.getElementsByClassName('circle')[0];
let iTag = circle.getElementsByTagName('i')[0];
let loginP = document.getElementsByClassName('middlecontent')[0];
let registerP = document.getElementsByClassName('lowercontent')[0];

login.addEventListener('click',flipO);
register.addEventListener('click',flipP);

function flipO(e){
login.style.color='white';
register.style.color='grey';
circle.style.transform='rotate(180deg)';
loginP.style.display='block';
registerP.style.display='none';
}
function flipP(e){
register.style.color='white';
login.style.color='grey';
circle.style.transform='rotate(0deg)';
loginP.style.display='none';
registerP.style.display='block';
}
//EOS
let flagger=0;
let accButt = upperNavArr[8];
accButt.addEventListener('click',function(){

if(!flagger)
    {
    mainDisp.style.display='block';
    flagger=1;
    
    }
else
    {
    mainDisp.style.display='none';
    flagger=0;
    
    }
});
croSS.addEventListener('click',function(){
mainDisp.style.display='none'; 
});
//EOS


//navbar responsive click.
let threeLines = document.getElementsByClassName('miniLines')[0];
let smallerNav = document.getElementsByClassName('respNav')[0];
let upperNavResp = document.getElementsByClassName('upper-nav-resp')[0];
let flag =0;
let flagTwo =0;
threeLines.addEventListener('click',()=>{
if(!flag)
    {
    smallerNav.style.display='block';
    smallerNav.style.width='100%';
    upperNavResp.style.width='100%';
    console.log('hhi')
    flag=1;
    }
else if(flag)
    {
    smallerNav.style.display='none';
    smallerNav.style.width='0px';
    console.log('lmao')
    flag=0;
    }
})
//end

//below code is mainly for setting onClicks links for the Sliders.
var lol = document.getElementsByClassName('sliderRB')[0];
var collec = lol.getElementsByTagName('div');
var ays=[];
var lols = document.getElementsByClassName('sliderPG')[0];
var collecs = lols.getElementsByTagName('div');
var ars=[];


//setting up onClick links for sliders.
for(var i=0;i<collec.length;i+=2)
{
var tem = collec[i];
ays.push(tem);
}
ays.forEach(nums=>nums.addEventListener('click',(nums)=>{window.location.href='productdescription.html';}))

for(var j=0;j<collecs.length;j+=2)
{
var tems = collecs[j];
ars.push(tems);
}
ars.forEach(num=>num.addEventListener('click',()=>{window.location.href='productdescription.html';}))
//end

//fnctions here.
function switchR(e)
    {
    counter++;
    if(counter==4)counter=0;
    jumboDisp.style.backgroundImage=`url("${arr[counter]}")`;
    } 
function switchL(e)
    {
    counter--;
    if(counter==-1)counter=3;
    jumboDisp.style.backgroundImage=`url("${arr[counter]}")`;
    }
function logIN(e) 
    {
    window.location.href='account.html';
    }

//JUST THE SLIDER STUFF FOR FIRST SECTION
let mainSlider = document.getElementsByClassName('sliderPG')[0];
let slide = document.getElementsByClassName('items')[0];
let leftButton = document.getElementsByClassName('lbutton')[0];
let rightButton = document.getElementsByClassName('rbutton')[0];

//to Set Number of Slides on Display
let num = 3;//so, you want to display num amnt.The total is given by varsObjArr size.  
//subtract num from it and pass that instead.



let varsObj = mainSlider.getElementsByTagName('div');
let varsObjAr = Array.from(varsObj);
let varsObjArr =varsObjAr.filter(temp => temp.className=='items')
flag=1;
// console.log(varsObjArr);
let counterR=varsObjArr.length-1;
// let difference = counterR-num;
setDisplay();//setting display initially;
//Selecting how many items to display.
function setDisplay()
{
if(flag)
    {
    for(let i =(varsObjArr.length-1);i>=num;i--)
        {
        mainSlider.removeChild(varsObjArr[i]);
        }
    flag=0;
    }
// console.log(mainSlider);
}
//EOS

//adding events to left and right buttons
rightButton.addEventListener('click',function(){
let firstChild = mainSlider.getElementsByTagName('div')[0];
//Code to select the last element only
// let arrObj = mainSlider.getElementsByTagName('div');
// let arr = Array.from(arrObj);
// let lastChild = arr[arr.length-1];
//EOS
let sample = varsObjArr[num+(counterR-varsObjArr.length)+1].cloneNode(1);
counterR++;
if((num+(counterR-varsObjArr.length)+1)==varsObjArr.length)
    {
    counterR=varsObjArr.length-num-1;
    }
firstChild.className='itemsTS';
setTimeout(()=>{mainSlider.removeChild(firstChild);
    sample.className='itemsTS';
    mainSlider.appendChild(sample);
    // mainSlider.insertBefore(sample,lastChild)
    //The only reason there is another timeout here:  I think chaning the class name to
    //SlideTS has taken 300ms to do as there is a transition tag on it.  Now,
    //if we set a timeout of 300ms, it lets that process so there is no clash.
    setTimeout(()=> {sample.className='items';},300);
    },300)
});

leftButton.addEventListener('click',function(){
    let first = mainSlider.getElementsByTagName('div')[0];
    //Code to select the last element only
    let arrObj = mainSlider.getElementsByTagName('div');
    let ar = Array.from(arrObj);
    let arr =ar.filter(temp => temp.className=='items')
    let firstChild = arr[arr.length-1];
    //EOS
    if(counterR>(varsObjArr.length-1))
        {
        counterR=varsObjArr.length-1;
        }
    let sample = varsObjArr[counterR].cloneNode(1);
    counterR--;
    if(counterR==-1)
        {
        counterR=varsObjArr.length-1;
        }
    firstChild.className='itemsTS';
    setTimeout(()=>{mainSlider.removeChild(firstChild);
        sample.className='itemsTS';
        mainSlider.appendChild(sample);
        mainSlider.insertBefore(sample,first)
        //The only reason there is another timeout here:  I think chaning the class name to
        //SlideTS has taken 300ms to do as there is a transition tag on it.  Now,
        //if we set a timeout of 300ms, it lets that process so there is no clash.
        setTimeout(()=> {sample.className='items';},300);
        },300)
    });
//EOS
/*-----------------------------------------------------------------------------------------------------*/
//JUST THE SLIDER STUFF FOR SECOND SECTION
let mainSliderTwo = document.getElementsByClassName('sliderRB')[0];
let slideTwo = document.getElementsByClassName('itemsTwo')[0];
let leftButtonTwo = document.getElementsByClassName('lbuttonTwo')[0];
let rightButtonTwo = document.getElementsByClassName('rbuttonTwo')[0];

//to Set Number of Slides on Display
let numTwo = 3;//so, you want to display num amnt.The total is given by varsObjArr size.  
//subtract num from it and pass that instead.



let varsObjTwo = mainSliderTwo.getElementsByTagName('div');
let varsObjArTwo = Array.from(varsObjTwo);
let varsObjArrTwo =varsObjArTwo.filter(temp => temp.className=='itemsTwo')
flagTwo=1;
// console.log(varsObjArr);
let counterRTwo=varsObjArrTwo.length-1;
// let difference = counterR-num;
setDisplayTwo();//setting display initially;
//Selecting how many items to display.
function setDisplayTwo()
{
if(flagTwo)
    {
    for(let i =(varsObjArrTwo.length-1);i>=numTwo;i--)
        {
        mainSliderTwo.removeChild(varsObjArrTwo[i]);
        }
    flagTwo=0;
    }
// console.log(mainSlider);
}
//EOS

//adding events to left and right buttons
rightButtonTwo.addEventListener('click',function(){
let firstChildTwo = mainSliderTwo.getElementsByTagName('div')[0];
//Code to select the last element only
// let arrObj = mainSlider.getElementsByTagName('div');
// let arr = Array.from(arrObj);
// let lastChild = arr[arr.length-1];
//EOS
let sampleTwo = varsObjArrTwo[numTwo+(counterRTwo-varsObjArrTwo.length)+1].cloneNode(1);
counterRTwo++;
if((numTwo+(counterRTwo-varsObjArrTwo.length)+1)==varsObjArrTwo.length)
    {
    counterRTwo=varsObjArrTwo.length-numTwo-1;
    }
firstChildTwo.className='itemsTSTWO';
setTimeout(()=>{mainSliderTwo.removeChild(firstChildTwo);
    sampleTwo.className='itemsTSTWO';
    mainSliderTwo.appendChild(sampleTwo);
    // mainSlider.insertBefore(sample,lastChild)
    //The only reason there is another timeout here:  I think chaning the class name to
    //SlideTS has taken 300ms to do as there is a transition tag on it.  Now,
    //if we set a timeout of 300ms, it lets that process so there is no clash.
    setTimeout(()=> {sampleTwo.className='itemsTwo';},300);
    },300)
});

leftButtonTwo.addEventListener('click',function(){
    let firstTwo = mainSliderTwo.getElementsByTagName('div')[0];
    //Code to select the last element only
    let arrObjTwo = mainSliderTwo.getElementsByTagName('div');
    let arTwo = Array.from(arrObjTwo);
    let arrTwo =arTwo.filter(temp => temp.className=='itemsTwo')
    let firstChildTwo = arrTwo[arrTwo.length-1];
    //EOS
    if(counterRTwo>(varsObjArrTwo.length-1))
        {
        counterRTwo=varsObjArrTwo.length-1;
        }
    let sampleTwo = varsObjArrTwo[counterRTwo].cloneNode(1);
    counterRTwo--;
    if(counterRTwo==-1)
        {
        counterRTwo=varsObjArrTwo.length-1;
        }
    firstChildTwo.classNameTwo='itemsTSTWO';
    setTimeout(()=>{mainSliderTwo.removeChild(firstChildTwo);
        sampleTwo.className='itemsTSTWO';
        mainSliderTwo.appendChild(sampleTwo);
        mainSliderTwo.insertBefore(sampleTwo,firstTwo)
        //The only reason there is another timeout here:  I think chaning the class name to
        //SlideTS has taken 300ms to do as there is a transition tag on it.  Now,
        //if we set a timeout of 300ms, it lets that process so there is no clash.
        setTimeout(()=> {sampleTwo.className='itemsTwo';},300);
        },300)
    });
//EOS
