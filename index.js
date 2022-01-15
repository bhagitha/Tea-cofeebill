


function getBill(){
selectElement=document.getElementById("select1");
price=selectElement.value;
document.getElementById("price").innerText=price;
item= selectElement.options[selectElement.selectedIndex].text;
document.getElementById("item").innerText=item;

qty=(document.getElementById("qty").value)? document.getElementById("qty").value:prompt("Enter Quantity  :")
if(qty){
console.log(qty)
document.getElementById("Quantity").innerText=price*qty
}else{
    alert("please enter quantity !!!!")
}


}