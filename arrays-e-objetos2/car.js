class Car {
    constructor (doors, motor, model) {
        this.doors= doors;
        this.motor=motor;
        this.model=model;
        this.audio="merma merda pra geral";
    }

    ligarOSom(musica) {
        console.log(`Está tocando ${musica}`);
    }
    ligarOAr() {
        console.log(`O Ar está ligado`);
    }

}

const car = new Car (4, 2.0, "Batima");
const car2= new Car (2, 1.0, "Uno");

console.log(car.model);

car2.audio="Radinho de pilha";

console.log(car2);

car.ligarOAr();
car2.ligarOSom("Dust in The Wind");



class KarroDoOvo extends Car {
    constructor (door, motor, model, qntOvos) {
        super(door, motor, model);
        this.qntOvos=qntOvos;
    }

    musicaDeVendas () {
        console.log("Chegou o carro do ovo !");
    }

    ligarOAr() {
        console.log("Ar ? hauhauauha");
    }
}

const kombi = new KarroDoOvo(3, 0.5,"Komboza", 100);

kombi.audio;
kombi.ligarOAr();


// DRY - Dont Repeat Yourself.
// KISS - Keep It Simple Stupid.


