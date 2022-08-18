let titulo = document.getElementsByClassName("titulo");
titulo.innerText="nanana";

let container=document.querySelector(".container h1");
container.innerText="nanana";
//container.hidden="false";
container.style.backgroundColor="yellow";
const novoElemento=document.createElement("button");
novoElemento.innerHTML="botão";
container.appendChild(novoElemento);