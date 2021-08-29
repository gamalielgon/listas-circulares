class Race{
    constructor(){
        this.playerA=0;
        this.playerB=0;
        this.scoreA= new Array();
        this.scoreB= new Array();
    }
    race(){
        while(this.playerA<100 && this.playerB<100){
            this.playA();
            this.playB();
        }
        console.log(this.scoreA);
        console.log(this.scoreB);
        if(this.playerA>=100 && this.playerB>=100){
            return `Es un empate`;
        } else if(this.playerA>=100){
            return `El ganador es el jugador A`;
        } else {
            return `El ganador es el jugador B`;
        }
    }

    playA(){
        let dado = Math.floor(Math.random()*6 + 1);
        if(dado < 3){
            this.playerA += 1;
        } else if(dado==3){
            this.playerA += 3;
        } else {
            this.playerA += 2;
        }
        this.scoreA.push(this.playerA);
        
        return this.playerA;
    }

    playB(){
        let dado = Math.floor(Math.random()*6 + 1);
        if(dado < 3){
            this.playerB += 1;
        } else if(dado==3){
            this.playerB += 3;
        } else {
            this.playerB += 2;
        }
        this.scoreB.push(this.playerB);
        return this.playerB;
    }
}

let carrera = new Race();
console.log(carrera.race());

