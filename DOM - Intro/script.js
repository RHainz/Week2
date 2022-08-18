console.log("Hello world");
console.log(document);

// Seletores

const title= document.getElementsByTagName("h1");
console.log(title);

// ById (Um)
    
    const span = document.getElementById("text");
    span.innerText="Mudei pelo JS";

    console.log(span);

// ByCLassName (Varios)

const blocks=document.getElementsByClassName("block");
console.log("blocks");
for (let i=0; i<blocks.length;i++) {
    blocks[i].innetText= `index ${i}`
}

// ByTagName (Varios)

    const divs=document.getElementsByTagName("div");
    console.log(divs);


// QuerySelector(Um)

    const span2=document.querySelector("#text");
    const civ= document.querySelector("div");

    console.log (civ);
// QuerySelectorAll (Vários)

const divs2= document.querySelectorAll("div");