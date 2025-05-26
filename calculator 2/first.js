
let count1='';
const sendData=(e)=>{
    count1+=e;
    const imp = document.querySelector("#inp");
    imp.innerHTML=count1;
    
}

let clr=()=>{
    count1=""
    document.querySelector("#inp").innerHTML=""
}

let del=()=>{
    let del1 = document.querySelector("#inp");
    count1=count1.slice(0,-1);
    del1.innerHTML=count1;
}

let solve=()=>{

    let inp1 = document.querySelector("#inp");
    count1 = eval(count1).toString();
    inp1.innerHTML=count1
}