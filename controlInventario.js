class Storage{
    constructor(){
        this.storage = [];
    }

    addItem(item){
        if(this.storage.length<20){
            this.storage.push(item);
        } else {
            return null;
        }
    }

    findById(id){
        for(let i = 0; i<this.storage.length; i++){
            if(id==this.storage[i].getCode()){
                return this.storage[i];
            }
            else{
                return null;
            }
        }
    }

    list(){

    }

    listReverse(){

    }

    addHere(here){

    }
}

class Item{
    constructor(code, product, quantity, cost){
        this.code = code;
        this.product = product;
        this.quantity = quantity;
        this.cost = cost;
        this.value = quantity * cost;
    }

    getCode(){
        return this.code;
    }

    getProduct(){
        return this.product;
    }

    getQuantity(){
        return this.quantity;
    }

    getCost(){
        return this.cost;
    }

    getValue(){
        return this.value;
    }

    infoHtml(){
        return `<div>
        <h3>${this.code}</h3>
        <p>${this.product} ${this.quantity} ${this.cost} ${this.value} </p>
        </div>`;
    }
}


let almacen = new Storage();
let btnAdd=document.getElementById(`btnAdd`);
btnAdd.addEventListener(`click`, ()=>{
    let codigo = parseInt(document.getElementById(`txtCode`).value);
    let nombre = document.getElementById(`txtProduct`).value;
    let cantidad = parseInt(document.getElementById(`txtQuantity`).value);
    let costo = parseInt(document.getElementById(`txtCost`).value);
    let producto=new Item(codigo, nombre, cantidad, costo);
    almacen.addItem(producto);
    document.getElementById(`detalles`).innerHTML += `<p>Se agregó
     el objeto ${producto.getCode()} correctamente</p>`;
})

let btnSearch=document.getElementById(`btnSearch`);
btnSearch.addEventListener(`click`, ()=>{
    let id = document.getElementById(`txtCode`).value;
    let buscando=almacen.findById(id);
    let detalles= document.getElementById(`detalles`);
    if(buscando==null){
        detalles.innerHTML+=`<p>No se encontró</p>`;
    } else {
        detalles.innerHTML+= buscando.infoHtml();
    }
})