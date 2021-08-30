class Ciclos{
    e(n){
        //e=1+1/1!+1/2!.....
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

    s(){
        //S= 4-(4/3)+(4/5)-(4/7)+(4/9)-(4/11)+(4/13)-(4/15)+(4/17)...

    }
}

let esta = new Ciclos();
console.log(esta.e(100));