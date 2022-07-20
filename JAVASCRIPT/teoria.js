//Para mostrar el valor de una variable en html

let nombresGatos = "Cuco";
document.getElementById("demo1").innerHTML= nombresGatos;

//Se pueden declarar varias en una sola declaración

let nombresGatos2= "Cuco", segundoGato = "Greta";

//o indefinida

let gatos;   

// con signo +  cadenas se concatenan y números se suman

let x = "Cuco" + "Greta";
let y = 15 + 15; 
let z = "15" + 15 + 15; // si la primera es cadena toma las demás como cadena 
let zz = 15 + 15 + "15"; //se suman primero y luego se concatenan

// para constantes

// se pueden agregar,quitar o cambiar elementos de un arreglo pero no reasignarles valores nuevos. 
const cats = ["michi", "michi2", "michi3"];

cats[2] = "michi4";

cats.push("michi5");

//se pueden cambiar o agregar propiedades de un objeto pero no reasignarle nuevas

const cat = {type:"animal", kind:"felin", color:"gray"};

cat.color = "white";
cat.owner = "me";

// HOISTING 
/* Las declaraciones de variables se elevan al principio, pero no sus elementos,
por lo que se deben declarar y asignarle valor desde un principio*/

let xx = 5;
let yy = 7;

elem = document.getElementById("dem");
elem.innerHTML = xx +""+ yy;

// Dará error puesto así
/*
let xx = 5;

elem = document.getElementById("demo");
elem.innerHTML = x + " " + y;

yy = 7;
*/

//Operador Ternario Condicional

let voteable = (age < 18) ? "Too young " : "Old enought";

function myFunction() {
let age = document.getElementById("age").value;
let voteable = (age < 18) ? "Too young " : "Old enought";
document.getElementById("demo2").innerHTML = voteable + "to vote";

}

/* Comparar dos números strings puede no dar el resultado esperado
ejemplo: "2" > "12" porque alfabeticamente 1 es menor que dos.
Para evitar esto se debe convertir el valor a número*/

function myFunction2(){
    let voteable;
    let age = document.getElementById("age").value;
    if (isNaN(age)) { voteable = "Please enter a number"}
    else { voteable= (age < 18) ? "Too young": "Old enough";}
    document.getElementById("demo2").innerHTML = voteable + "to vote";
}


//FUNCIONES 

//El ejemplo llama a una función primero, luego calcula el valor y lo retorna.
let xxx = myFunction3(2,2);
document.getElementById("demo3").innerHTML = xxx;

function myFunction3(a,b){
    return a*b;
}

// Usar una funcion como variable

let ab = toCelsius(77);
let text= "La temperatura es " + ab + " Celsius";

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}
console.log(text);

//En lugar de declarar la función, se puede usar directamente como una variable

text = "La temperatura es " + toCelsius(77) + " grados celsius.";

console.log(text);

// También se puede declarar como variable

const xxxx = function (a,b) {return a*b};  //Ya que usa el nombre de la variable la función no necesita nombre.
//document.getElementById("demooo").innerHTML = xxxx (3,3);

// También se puede definir una función con el constructor Function()

const myFunction4 = new Function("a", "b", "return a * b"); //Casi no se usa

// Las funciones son objetos, ya que tienen propiedades y métodos

function myFunction5 (a,b) {
    return arguments.length;
}

function myFunction6 (a,b) {
    return a * b;
}
let text2 = myFunction6.toString();

/*En esta función se calcula la temperatura celsius a partir de
un número ingresado en input que será la temperatura farenheit.
Poniendo 100 grados farenheit, se retorna sus grados en celsius.*/

function funciontemperatura() { 
    let temperaturafarenheit = document.getElementById("temp").value;
    document.getElementById("temp2").innerHTML= (5/9) * (temperaturafarenheit-32);
   
}

//Función anónima autoinvocada

/*(function (){
    document.getElementById("demoo").innerHTML = "Autoinvocado";
}) ();
*/

//Funciones flecha

const xxxxx = (a,b) => a * b ;  // Pueden escribirse sin las palabras function,return ni corchetes, siempre que sea una declaración

const xxxxxx = (a,b) => {return x * y } ;

//Parámetros 

function myFunction7 (a,b) {    // Se asigna un valor default cuando los argumentos dados son menos que los parámetros establecidos en la función
    if (y === undefined) {
        y = 2;
    }
    return a * b;
}
//document.getElementById("demoooo")innerHTML = myFunction7(2); // Otra forma de escribirlo más actual

function myFunction8 (a, b = 2) {
    return a * b;
}

// Arguments object  

//Encontrar el número más grande

x = findMax (1, 100, 500, 110, 50);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {  
        if (arguments[i] > max) {
        max = arguments[i];
        }
    }
}

//Sumar todos los argumentos dados 

function sumAll() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index];
    }
    return sum;
}

//THIS

//En un método de objeto
const person = {
    firstName: "Jimin",
    lastName: "Park",
    id: 5566,
    fullName :function () {
        return this.firstName + " " + this.lastName;
        
    }
};
document.getElementById("person").innerHTML = person.fullName();


//Como Objeto global

let person2 = this; 
console.log(person2);

//En un evento

//button onclick="this.styke.display='none'">Click to remove me</button>

//Metodo call

const person3= {
    fullName: function() {
        return this.firstName + this.lastName;
    }
}

const person4 = {
    firstName:"Nam",
    lastName: "Joon"
}
const person5 = {
    firstName: "Seok",
    lastName: "Jin"
}

console.log(person3.fullName.call(person4));

//Metodo apply


const person6 = {
    firstName: "Tae",
    lastName: "Hyung"
}

console.log(person3.fullName.apply(person6));

//Metodo bind

//Ya que aplica métodos de otros objetos. puede usarse para aplicar this fuera de la función.

const person7 = {
    firstName: "Jung",
    lastName: "Kook",
    display: function(){
        let x = document.getElementById("demoooo"); 
        x.innerHTML = this. firstName + this.lastName;
    }
}

let display = person7.display.bind(person7);
setTimeout(display,3000);

//Closures

const add = (function (){
    let counter = 0;
    return function () {counter += 1; return counter}
}) ();

function myFunction9 () {
    document.getElementById("demooooo").innerHTML = add ();
}