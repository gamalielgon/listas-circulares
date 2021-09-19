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

    verificar(){
        if(this.storage.length==0){
            return true;
        } else {
            return false;
        }
    }

    findPos(item){
        for(let i = 0; i<this.storage.length; i++){
            if(item.getCode()==this.storage[i].getCode()){
                return i;
            }
        }
        return null;
    }

    findById(id){
        for(let i = 0; i<this.storage.length; i++){
            if(id==this.storage[i].getCode()){
                return this.storage[i];
            }
        }
        return null;
    }

    list(){
        let texto = "";
        for(let i = 0; i<this.storage.length; i++){
            texto += this.storage[i].infoHtml();
        }
        return texto;
    }

    listReverse(){
        let texto = "";
        for(let i = this.storage.length; i>0; i--){
            texto += this.storage[i-1].infoHtml();
        }
        return texto;
    }

    addHere(item, here){
        here--;
        console.log(here);
        let placeholder = [];
        if(this.storage.length-1 > here){
            this.storage.push(item);
        } else {
            for(let i = 0;i<here;i++){
                placeholder.push(this.storage[i]);
            }

            placeholder.push(item);

            for(let i = here + 1; i<this.storage.length; i++){
                placeholder.push(this.storage[i]);
            }
            this.storage = placeholder;
        }
    }

    delete(item){
        let placeholder = [];
        let pos = this.findPos(item);
        for(let i = 0;i<pos;i++){
            placeholder.push(this.storage[i]);
        }

        for(let i = pos + 1; i<this.storage.length; i++){
            placeholder.push(this.storage[i]);
        }
        this.storage = placeholder;
        return true;
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
        <h3>ID:${this.code}</h3>
        <p>Nombre:${this.product} Cantidad:${this.quantity} Costo:${this.cost} Valor:${this.value} </p>
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

let btnList=document.getElementById(`btnList`);
btnList.addEventListener(`click`, ()=>{
    let detalles = document.getElementById(`detalles`);
    if(almacen.verificar()){
        detalles.innerHTML+=`<p>No hay objetos</p>`
    } else {
        detalles.innerHTML+=`<p> ${almacen.list()} </p>`;
    }
})

let btnListInv=document.getElementById(`btnListInv`);
btnListInv.addEventListener(`click`, ()=>{
    let detalles = document.getElementById(`detalles`);
    if(almacen.verificar()){
        detalles.innerHTML+=`<p>No hay objetos</p>`
    } else {
        detalles.innerHTML+=`<p> ${almacen.listReverse()} </p>`;
    }
})

let btnAddHere=document.getElementById(`btnAddHere`);
btnAddHere.addEventListener(`click`, ()=>{
    let here = parseInt(document.getElementById(`txtAddHere`).value);
    let codigo = parseInt(document.getElementById(`txtCode`).value);
    let nombre = document.getElementById(`txtProduct`).value;
    let cantidad = parseInt(document.getElementById(`txtQuantity`).value);
    let costo = parseInt(document.getElementById(`txtCost`).value);
    let producto=new Item(codigo, nombre, cantidad, costo);
    almacen.addHere(producto, here);
    document.getElementById(`detalles`).innerHTML += `<p>Se agregó
     el objeto ${producto.getCode()} correctamente</p>`;
})

let btnDelete=document.getElementById(`btnDelete`);
btnDelete.addEventListener(`click`, ()=>{
    let id = document.getElementById(`txtCode`).value;
    let buscando=almacen.findById(id);
    let detalles= document.getElementById(`detalles`);
    console.log(buscando);
    console.log(id);
    if(buscando==null){
        detalles.innerHTML+=`<p>No se encontró</p>`;
    } else {
        detalles.innerHTML+= `<p>El producto ${buscando.infoHtml()} fue eliminado</p>`;
        almacen.delete(buscando);
    }
})