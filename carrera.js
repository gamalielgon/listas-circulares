class Race{
    race(){
        let playerA=0;
        let playerB=0;
        let dado=0;
        let scoreA=[];
        let scoreB=[];

        while(playerA<100 || playerB<100){
            dado = Math.floor(Math.random()*6 + 1);
            if(dado<3){
                playerA=1;
            } else if(dado==3){
                playerA=3;
            } else {
                playerA=2;
            }
            dado = Math.floor(Math.random()*6 + 1);
            if(dado<3){
                playerB=1;
            } else if(dado==3){
                playerB=3;
            } else {
                playerB=2;
            }
            scoreA.push(playerA);
            scoreB.push(playerB);
        }

        if(playerA>=100 && playerB>=100){
            return "Es un empate";
        } else if(playerA>=100){
            return "El ganador es el jugador A";
        } else {
            return "El ganador es el jugador B";
        }
    }
}
