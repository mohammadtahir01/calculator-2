

let btn=()=>{
    let inp = document.querySelector("#text1").value;
    let inp3 = document.querySelector("#show")


   inp3.innerHTML+=`
   <tr>
   <td>${inp}</td>
   <td><button onclick="edit(this)">Edit</button></td>
   <td><button onclick="del(this)">Delete</button></td>
    </tr>` 
   document.querySelector("#text1").value=""
}

let del=(element)=>{
   element.parentElement.parentElement.remove();

}

let edit=(element)=>{

    let inp = document.querySelector("#text1");
   
    inp.value = element.parentElement.previousElementSibling.innerHTML;
    console.log(inp.value);
    element.parentElement.parentElement.remove();
}

