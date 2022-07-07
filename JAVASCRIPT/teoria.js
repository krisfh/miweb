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
elem.innerHTML = x + " " + y;

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

