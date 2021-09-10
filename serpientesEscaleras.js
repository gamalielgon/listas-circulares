class Jugador{
    constructor(name){
        this.name = name;
        this.place = 0;
        this.dado = new Dice()
    }

    getPlace(){
        return this.place;
    }

    setPlace(n){
        this.place = n;
    }

    throw(){
        this.place += this.dado.roll();
    }
}

class Tablero{
    constructor(playerA, playerB){
        this.tablero=[0,1,9,3,4,5,6,7,8,9,3,11,12,13,14,15,16,17,18,
        19,20,31,12,23,95,25,26,27,28,29,20,31,32,33,47,35,36,37,38,39,
        40,41,42,43,44,45,46,47,39,49,37,60,52,53,54,86,56,57,75,59,60,
        61,62,47,64,65,66,84,68,69,70,71,90,73,60,75,76,77,78,79,80,81,82,83,
        84,65,86,97,88,73,90,91,92,93,94,95,96,97,38,99,100];
        this.playerA = playerA;
        this.playerB = playerB;
    }

    play(){

        while(this.playerA.getPlace()<=100 && this.playerB.getPlace()<=100){
            this.playerA.throw();
            this.playerB.throw();
            if(this.playerA.getPlace()>= 100 || this.playerB.getPlace() >= 100){
                break;
            }
            else {
                this.playerA.setPlace(this.tablero[this.playerA.getPlace()]);
                this.playerB.setPlace(this.tablero[this.playerB.getPlace()]);
            }
        }
        console.log(this.playerA.getPlace());
        console.log(this.playerB.getPlace());
        if(this.playerA.getPlace()>=100 && this.playerB.getPlace()>=100){
            return `Es un empate`;
        } else if(this.playerA.getPlace()>=100){
            return `El ganador es el jugador A`;
        } else {
            return `El ganador es el jugador B`;
        }
    }
}

class Dice{
    constructor(){
        this.dice = 0;
    }
    roll(){
        this.dice = Math.floor(Math.random()*6 + 1);
        return this.dice;
    }
}


let dice = new Dice();
let A = new Jugador("A");
let B = new Jugador("B");
let jugar = new Tablero(A,B);
console.log(jugar.play());

