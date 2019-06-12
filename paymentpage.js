
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
let button = document.getElementById('tac');
let para = document.getElementById('tnc');
let flag = 0;
button.addEventListener('click',function()
{
if(!flag)
  {
    para.style.display='block';
    flag=1;

  }
else
  {
  para.style.display='none';
  flag=0;
  }
});
