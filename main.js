function parameter(){
    let parameter = prompt ("Hola mundo!")
}

//2//

function point2(value1, value2) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
         console.log("No Es posible realizar esta accion")
    } else {
         console.log("Adicción:" + (Number(value1) + Number(value2)));
    }
}
point2()


//3//


function point3(value1, value2) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
         console.log("No Es posible realizar esta accion")
    } else {
         console.log("Sustraccion:" + (Number(value1) - Number(value2)));
    }
}
point3(33, 98)


//4//

function point4(value1, value2) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
         console.log("No Es posible realizar esta accion")
    } else {
         console.log("Multiplicacion:" + (Number(value1) * Number(value2)));
    }
}
point4(2, 11)


//5//

function point5(value1, value2) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number' || value1 == null || value2 == null) {
         console.log("No Es posible realizar esta accion")
    } else {
         console.log("Division:" + (Number(value1) / Number(value2)).toFixed(2));
    }
}
point5(6, 8)


//6//

function circleArea(radio) {
    const pi=Math.PI
    if(typeof radio != 'number'){
    }
    else{
    console.log("El area medida:: " + (pi * Math.pow(radio,2)));
    }
}


//7//


function metrosAKilometros(numero1){
    if (typeof(numero1)!="number"){
        console.log("Valor numerico");
    }
    else{
    resultado = Number (numero1) / 1000;
    console.log(resultado.toFixed(2));
    }
        
}


//8//


function point8(num1) {

    try {
        let vale1 = prompt("grados Celsius", num1)
        let resut = ((Number(vale1) * 9 / 5) + 32).toFixed(2)
        if (isNaN(vale1) || isNaN(resut)) {
            throw "no es posible realizar la operación"
        }
        console.log("grados Fahrenheit ", resut);
    }
    catch (error) {
        alert("Error: " + error)
    }

}


//9//

function point9(lista) {
    var menor = 0;
    var mayor = 999999;
    for (var index = 0; index < lista.length; index++) {

if (lista[index] >= menor) {
 menor = lista[index];
} else if (lista[index] <= mayor) {
mayor = lista[index];}}
console.log("Valor menor: " + mayor + " Valor mayor: " + menor)}
const list1 = [10, 4, 2, 20, 5];
const list2 = [0, 0, 0, 1, 0];
const list3 = [-13, 10, 9, 8, 0, 2000, -1]
point9(list1);
point9(list2);
point9(list3);


//10//


function exponencial(base,exponente){
    resultado=0;
    if (typeof (base) != "number" || typeof (exponente) != "number"){
        console.log("solo recibo numeros")
    }
    else{
        resultado=base**exponente;
        console.log("base: "+base)
        console.log("exponente: "+exponente)
        console.log("resultado: "+resultado)
}
}
