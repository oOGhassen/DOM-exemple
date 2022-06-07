const checkBox =  document.getElementsByClassName("check");
//console.log(checkBox)
const btnPlus = document.getElementsByClassName("plus");
for (let i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click",increment);
    checkBox[i].addEventListener("click",totalPrice);
}
function increment(event){ 
const btn=event.target;
//console.log(btn)
const divElt = btn.parentElement;
//console.log(divElt)
var countTag=divElt.querySelector("p");
//console.log(countTag)
var contValue =Number(countTag.innerHTML);
//console.log(contValue)
contValue++
countTag.innerHTML = contValue
var trElt = divElt.parentElement.parentElement
//console.log(trElt)
var priceTag = trElt.querySelector(".price")
//console.log(priceTag)
const unitPriceValue = Number(trElt.querySelector(".unitprice").innerHTML)
priceValue = unitPriceValue*contValue
priceTag.innerHTML=priceValue
}
const btnMinus = document.getElementsByClassName("minus");
for (let i=0;i<btnMinus.length;i++){
    btnMinus[i].addEventListener("click",decrement)
}
function decrement(event){ 
const btn=event.target;
//console.log(btn)
const divElt = btn.parentElement;
//console.log(divElt)
var countTag=divElt.querySelector("p");
//console.log(countTag)
var contValue =Number(countTag.innerHTML);
//console.log(contValue)
contValue-- ;
//countTag.innerHTML = contValue
if (contValue >= 0) {
    countTag.innerHTML = contValue; 
    }else{
         contValue = 0 ;
    }
    var trElt = divElt.parentElement.parentElement
//console.log(trElt)
var priceTag = trElt.querySelector(".price")
//console.log(priceTag)
const unitPriceValue = Number(trElt.querySelector(".unitprice").innerHTML)
priceValue = unitPriceValue*contValue
priceTag.innerHTML=priceValue
}

    
function totalPrice(e){
var checkOne=e.target;
//console.log(checkOne)
var tdElt=checkOne.parentElement;
var trElt=tdElt.parentElement
var priceValue = Number(trElt.querySelector(".price").innerHTML)
//console.log(priceValue)
var totalTag=document.getElementById("total")
var totalValue =Number(totalTag.innerHTML)
//console.log(totalValue)
if ( checkOne.checked == true){
    totalValue +=priceValue
    }else if(checkOne.checked == false){
        totalValue -=priceValue
}
totalTag.innerHTML = totalValue
}
