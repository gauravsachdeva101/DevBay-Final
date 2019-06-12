let grid = document.getElementsByClassName('shopnav')[0];
let list = document.getElementsByClassName('shopnav')[1];
let sliderRBArr = Array.from(document.getElementsByClassName('sliderRB'));
let productListView = document.getElementsByClassName('productslistview')[0];

let listViewArr = Array.from(document.getElementsByClassName('itemimage pooja'));
var sizes = document.getElementsByClassName('product');
var sizesArr = Array.from(sizes);

grid.addEventListener('click',function(){
productListView.style.display='none';
sliderRBArr.forEach(nums=>nums.style.display='flex');

});
list.addEventListener('click',function(){
productListView.style.display='block';
sliderRBArr.forEach(nums=>nums.style.display='none');

});
let slider = document.getElementById('slider');
let val = document.getElementById('value');
let thumb = slider.getElementsByClassName('-webkit-slider-thumb')[0];

slider.addEventListener('input',xor)

function xor(e)
{
val.textContent=`Max Price: Rs.${slider.value}/-`
}

sizesArr.forEach(nums=>nums.addEventListener('click',()=>{window.location.href='productdescription.html'}));


listViewArr.forEach(nums=>nums.addEventListener('click',()=>{window.location.href='productdescription.html'}));
