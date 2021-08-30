class Ciclos{
    e(n){
        let e = 1;
        for(let i = 1; i<n;i++){
            e += 1 / this.factorial(i);
        }
        return e;
    }

    factorial(n){
        let total = 1;
        for(let i = 1;i<=n; i++){
            total *= i;
        }
        return total;
    }

    s(n){
        let s = 0;
        let secuencia = 1;
        for(let i = 0; i < n; i++){
            s += (4/secuencia) - (4/ (secuencia + 2));
            secuencia += 4;
            
        }
        return s;
    }
}

let ciclo = new Ciclos();
console.log(ciclo.e(100));
console.log(ciclo.s(3));