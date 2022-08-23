const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width =  1024;
canvas.height = 576;
let pathSize=640;
let stop = false;
let round=0;
let start=0;
let sono=0;
let totalApostadoNow=[0,0,0,0,0];
let thePlayer={
    nomeJogador: "The Player",
    goldPlayer: 1000,
    tartarugaAtual: "Sem Tartaruga"    
};
let positionLines={
    x:193,
    y:100
}
let positionBackground={
    x:0,
    y:0
}

const backGround= new Sprite({
    position: {
        x:0,
        y:0
    }, 
    imgSource: './images/Designsemnome.png'
});

c.fillRect(0, 0, canvas.width, canvas.height);


turtle1.draw();

turtle2.draw();

function setZeroGold () {
    let buttonZero=document.querySelectorAll("#inputsGold input");
    for (let i=0;i<5;i++){
        buttonZero[i].valueAsNumber=0;
        buttonZero[i].value="0";
    }
}

function updatePlayer() {
    let goldPlace=document.querySelector('#gold');
    let namePlace=document.querySelector('#nome');
    let tartaruguinha=document.querySelector('#tartaruguinha');
    namePlace.innerText=`${thePlayer.nomeJogador}`;
    goldPlace.innerText=`Gold ${thePlayer.goldPlayer}`;
    tartaruguinha.innerText=`${thePlayer.tartarugaAtual}`;
}

function updateNameTurtle() {
    let name1=document.querySelector('#turtle01');
    let name2=document.querySelector('#turtle02');
    let name3=document.querySelector('#turtle03');
    let name4=document.querySelector('#turtle04');
    let name5=document.querySelector('#turtle05');
    name1.innerText=`${turtle1.nameTurtle.nome}`;
    name2.innerText=`${turtle2.nameTurtle.nome}`;
    //name3.innerText=`${turtle3.nameTurtle.nome}`;
    //name4.innerText=`${turtle4.nameTurtle.nome}`;        Ligar ao inserir o resto das Tartarugas
    //name5.innerText=`${turtle5.nameTurtle.nome}`;
}

function somarGold (){
    let totalApostado=0;
    let buttonZero=document.querySelectorAll("#inputsGold input");
    for (let i=0; i<5; i++){
        //console.log(buttonZero[i].valueAsNumber);
        //console.log(totalApostadoNow[i]);
        if(buttonZero[i].valueAsNumber!==totalApostadoNow[i]) {
            totalApostado+=(buttonZero[i].valueAsNumber-totalApostadoNow[i]);
            console.log(`papanapapapapa ${totalApostado}`)
            thePlayer.goldPlayer-=totalApostado;
            totalApostadoNow[i]=buttonZero[i].valueAsNumber;
        }
    }
}
    
function totalDasApostas() {
    let totalApostado=0;
    let buttonZero=document.querySelectorAll("#inputsGold input")
    for (let i=0; i<5; i++){
        totalApostado+=buttonZero[i].valueAsNumber;
}
    return totalApostado;
}

function animarTartarugas() {
    window.requestAnimationFrame(animarTartarugas);
    c.fillStyle="black";
    if (stop) { return }
    //c.fillRect(0,0,canvas.width,canvas.height);
    
    drawingArena();
    updatePlayer();
    somarGold();
    console.log(totalDasApostas());
//    backGround.update();
    turtle1.update();
    turtle2.update();
    //turtle3.update();
}

starteando.addEventListener("click",()=>turtle1.reset());

localizando=document.querySelectorAll("#inputsGold input")
localizando[0].value="0";

setZeroGold();
updateNameTurtle();
console.log(turtle1.positionX());
animarTartarugas();























// let i=0; 
// for (let i=0; i<=4; i++) {
//     const ajuste=i*48;
//     console.log (ajuste*10000);
//     c.fillStyle="yellow";
//     c.fillRect(positionLines.x, positionLines.y+ajuste, pathSize, 48);
//     c.fillStyle="black";
//     c.fillRect(positionLines.x+1, positionLines.y+ajuste+1, pathSize-2, 46);
// }

// c.fillStyle="yellow"
// let nomeJogador=c.fillRect(100,400,50,60);
// c.fillText("Nome", 100,400,50,50);
// let posXturtle1=turtle1.positionX()
// c.fillText(`${(posXturtle1)}`,160,400,50,50);