class Turtle {
    constructor ({position, velocidade, rndNumber}) {
        this.position = position;
        this.velocidade = velocidade;
        this.rndNumber = rndNumber;
        this.stop=false;
    }

    draw () {
        c.fillStyle="red";
        c.fillRect(this.position.x, this.position.y, 32, 32);
        c.fillStyle="white";
        c.fillText(`${this.position.x}`,this.position.x,this.position.y);
    }

    update () {
        this.draw()
        this.rndNumber=randomizer();
        //console.log(this.rndNumber);
        round=round+1;
        console.log(round);
        this.position.x +=this.velocidade.x+this.rndNumber;
        if (this.position.x >=(pathSize+192)) {
            console.log("vencedora");
            this.velocidade.x=0;
            this.position.x-=this.rndNumber;
            return stop=true;
        }
    }
    
    positionX() {
        return this.position.x;
    }

    }

// class DisplayJogador{
//     constructor ({nome}){
//         this.nome=nome;
//     }

//     ()
// }



const turtle1= new Turtle ({
    position: {
        x:194,
        y:108
    },
    velocidade: {
        x:+0.0001,
        y:0
    },
    rndNumber: {
        x:0,
        y:0
    }
});

console.log(turtle1);

const turtle2= new Turtle ({
    position: {
    x:194,
    y:156
    },
    velocidade: {
        x:+0.0009,
        y:0
    },
    rndNumber: {
        x:0,
        y:0
    }
});

function randomizer() {
    return (Math.floor(Math.random()*100+1)/200);
}

function drawingArena () {
    for (let i=0; i<=4; i++) {
        const ajuste=i*48;
        c.fillStyle="yellow";
        c.fillRect(positionLines.x, positionLines.y+ajuste, pathSize, 48);
        c.fillStyle="black";
        c.fillRect(positionLines.x+1, positionLines.y+ajuste+1, pathSize-2, 46);
    }

}
