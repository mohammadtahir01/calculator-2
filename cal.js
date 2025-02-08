function calcul(val){
    document.querySelector("#display").value += val;
}

function clr(){
    document.querySelector("#display").value = " ";
}

function DE(){
    document.querySelector("#display").value = document.querySelector("#display").value.slice(0,-1);
}

function solve(){
   let x= document.querySelector("#display").value;
   let y = eval(x);
   document.querySelector("#display").value = y;
}