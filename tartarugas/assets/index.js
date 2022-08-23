const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width =  1024;
canvas.height = 576;
let pathSize=640;
let stop = false;
let round=0;
let positionLines={
    x:193,
    y:100
}

c.fillRect(0, 0, canvas.width, canvas.height);


turtle1.draw();

turtle2.draw();

function animarTartarugas() {
    window.requestAnimationFrame(animarTartarugas);
    c.fillStyle="black";
    if (stop) { return }
    //c.fillRect(0,0,canvas.width,canvas.height);
    drawingArena();
    turtle1.update();
    turtle2.update();
}

let i=0; 
for (let i=0; i<=4; i++) {
    const ajuste=i*48;
    console.log (ajuste*10000);
    c.fillStyle="yellow";
    c.fillRect(positionLines.x, positionLines.y+ajuste, pathSize, 48);
    c.fillStyle="black";
    c.fillRect(positionLines.x+1, positionLines.y+ajuste+1, pathSize-2, 46);
}

c.fillStyle="yellow"
let nomeJogador=c.fillRect(100,400,50,60);
c.fillText("Nome", 100,400,50,50);
let posXturtle1=turtle1.positionX()
c.fillText(`${(posXturtle1)}`,160,400,50,50);

console.log(turtle1.positionX());
animarTartarugas();
