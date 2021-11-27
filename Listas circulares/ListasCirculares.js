class Stop{
    constructor(name, min){
        this.name = name;
        this.min = min;
        this.prev = null;
        this.next = null;
    }

    info(){
        return `(${this.name}) -> ${this.min}`;
    }

    inforCard(hour, min){
        return `<div>
        <p>Base: ${this.name}</p>
        <p>Hora de llegada: ${hour}</p>
        <p>Minutos restantes: ${min}</p>                                 
        </div>`;
    }
}

class Circuit{
    constructor(){
        this.start = null;
    }

    addStop(stop){
        if(this.start == null){
            this.start = stop;
            this.start.next = stop;
            this.start.prev = stop;
        } else {
            let last = this.start.prev;
            stop.next = this.start;
            stop.prev = last;
            last.next = stop;
            this.start.prev = stop;
        }
    }

    deleteStop(name){
        if(this.start == null){
            return null;
        }
        if(this.start.name == name){
            let temp = this.start;
            this.start = this.start.next;
            temp.prev.next = this.start;
            this.start.prev = temp.prev;
            temp.next = null;
            temp.prev = null;
            return temp;
        } else {
            return this._delete(this.start.next, name);
        }
    }

    _delete(ant, name){
        if(ant == this.start){
            return null;
        } else if(ant.name == name){
            let temp = ant;
            ant = ant.next;
            temp.prev.next = ant;
            ant.prev = temp.prev;
            temp.next = null;
            temp.prev = null;
            return temp;
        } else {
            return this._delete(ant.next, name);
        }
    }

    listStop(){
        let data = "";
        let temp = this.start;
        if(this.start!==null){
            do{
            data+=temp.info() + "\n";
            temp = temp.next;
            } while(temp!=this.start);
        }
        return data;
    }
//            empieza empieza termina
//regresa las bases a las que llegó, en que tiempo llego a cada una
    createCard(base, hour, min){
        let card = '';
        let minHour = 0;
        let find = this._find(base);
        if(!find){
            return `No existe la base ${base}`;
        } else{
            while(min >= 0){
                console.log(find.inforCard(hour, min))
                console.log(this.start.inforCard(this._getHour(hour, minHour), min))
                card += find.inforCard(this._getHour(hour, minHour), min) + '\n' + '============================';          
                minHour += find.next.min;
                min-= find.next.min;
                find = find._next;
            }
        return card;
        }
    }

    _find(name) {
        if(this.start.name == name){
            console.log("wtf")
            return this.start;
        }
        let stop = this.start.next;
        if(stop == null) {
            return null;
        } 
        do {
            if(stop.name == name) {
                return stop;
            } else {
                stop = stop.next;
            }
        } while(stop !== this.start);
        return null;  
    }

    _getHour(hour, minutes) {
        let htm = ((hour * 60) + minutes)/60;
        let tHours = Math.trunc(htm);
        let less = Math.round((htm - tHours)*60);

        if(less < 10) {
            return `${tHours}:0${less}`;
        } else {
            return `${tHours}:${less}`;
        }   
    }
}

let circuito = new Circuit();
let S1 = new Stop("Tiger", 20);
circuito.addStop(S1);
let S2 = new Stop("Elephan", 10);
circuito.addStop(S2);
let S3 = new Stop("Bull", 30);
circuito.addStop(S3);
let S4 = new Stop("Horse", 15);
circuito.addStop(S4);
console.log(circuito.listStop());
/*console.log(circuito.deleteStop("Bull"));
console.log(circuito.listStop())
console.log(circuito.deleteStop("Tiger"));
console.log(circuito.listStop())*/

console.log(circuito.createCard("Tiger", 6, 150));