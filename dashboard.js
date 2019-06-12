
 let subSideBar = Array.from(document.getElementsByClassName('subSideBar'));
 subSideBar[1].style.opacity='1';

 let arr=[];
 for(let i=1;i<5;i++)
    {
    arr.push(subSideBar[i].dataset.name);
    }

 subSideBar.forEach(nums=>nums.addEventListener('click',function()
 {

  for(let i=0;i<subSideBar.length;i++)
    {
    subSideBar[i].style.opacity='0.6';
    }
for(let i=0;i<arr.length;i++)
    {
    let dummyElem = document.getElementsByClassName(arr[i])[0];
    dummyElem.style.display='none';
    }
    subSideBar[0].style.opacity='1';
    nums.style.opacity='1';
let temp = nums.dataset.name;
let elem = document.getElementsByClassName(temp)[0];
elem.style.display='block';
 }));

 
