// alert permet d'afficher un pop-up
// permet d'afficher un message.
console.log("le java, c'est ouf");
console.log(22);
console.log("false");
// permet d'afficher le type d'une variable.
console.log(typeof("bonjour"));
// kfvdrsjovgfihnjsogihoiszghoisz

// let vegetable = "Concombre";

// permet d'initialiser une variable
// let myNumber = 10; // ======> 10

// permet d'afficher le contenu de cette variable
// console.log(myNumber);

// Je modifie le contenu de ma variable
// myNumber = 5;
// Je modifie encore le contenu de ma variable
// myNumber = 200;

//console.log(myNumber); // =========> 200
// console.log(vegetable);

let myNumber = 10;

let test = 10;

let myString = "chaîne caractérielle";

let myBool =true ;

let isAlived = true;

//let list = ["tomatoes", "potatoes", 50, "false", "bonjour", 20.5, "true"];
//list.push("chicken", "cats", "dogs");
//list.splice(1,list.length);

// let fruit = "brownie";
let add = "avec chantilly";
let heat = "servi bien chaud";

// console.log(`Mon fruit préféré est :(${fruit} ${add} ${heat}`);



// let;

// let;

/* LEs différents types vus :

"Blabla" = string = chaîne caractérielle;
10 = integer = nombre entier (en JS, ce sera un "number")
11.5 = float = nombre à virgule flottante (en JS, ce sera un "number")
true / false = boolean = booléen
[] = array = tableau (en JS, ce sera un "object")

*/

// Le Scope

function sayHi() {
    sayTchao ()
    let message="deux plus deux égale 4";
    console.log("message")
}
 function sayTchao() {
    console.log("Sayonara") 
}

function showMessage(message) {
    console.log(message)
}
showMessage("Bonsoir");

function calcul(Chiffre) {
    console.log(10);
}
calcul(10)

function popUp () {
    alert("Vous venez de me créditer de 200 000$, merci bien!");
}
function popUp2 () {
    let=prompt(nombre)
    if(nombre)œ
    alert("Retour à la case Départ")
}
function popUp3 () {
    alert("C'est le début d'une nouvelle aventure!")
}
function popUp4 () {
    alert("Es-tu prêt(e) ?")
}

//let fruit = "citron";

//if(fruit == "citron") {
  console.log("super, moi aussi j'adore le citron !");  
//}

//let number = prompt("Devine le bon nombre ou chiffre !");

//if (number != 10) {
    console.log ("Sheh !")
//}

//let cake = prompt("Quel est ton dessert favori ?");

//if (cake !== "Charlotte") {
    console.log ("Ah, Dégueulasse");
//}

//let animal = prompt("Ton animal préféré ?");

//if (animal == "Lion") {
    console.log ("Tu es le roi de la jungle !")
//}
//else {
    console.log ("C'est original")
//}

//let color = prompt("Préfères-tu le Blanc ou le Noir ?");

//if (color == "Blanc") {
    console.log ("Ton âme est pure")
//}
//else if (color == "Noir") {
    console.log("Ton âme s'obscurcit peu à peu...")
//} else {
    console.warn("Ne réponds pas à côté !")
//}

//for (let bonbons = 0; bonbons <= 10; bonbons++) {
//    console.log(`Ma variable est égale à ${bonbons}`);
//    bonbons++;
//}

//console.log("Fin de la boucle.");

//for (let crêpes = 0; crêpes <= 15; crêpes++) {
//    console.log (`${crêpes}`)
//}

//let list = ["Océane", "Quentin", "Orkun", "Lasmy",
// "Norhen", "Lucas", "Benoît", "Elisabeth", "Soline",
//"Said", "Adam", "Angiolino", "Claire", "Quentin"];

//console.log ("Voici les DWM12 :");
//list.forEach(function(student) {
//    console.log(student);
//});

//let emmerdeur = prompt("Quand est-ce qu'on arrive ?");
//while (emmerdeur.toLowerCase() !="oui") {
//    emmerdeur = prompt("Allez, stp; stp, stp, stp, on peux y aller ?"); 
//}   
//    console.log("génial, tu as dit oui et on va à Dysneyland.");

//let title = document.querySelector("h1");

//let thirdli = document.querySelectorAll
//("listelement") [1];

//document.querySelectorAll("li")[1].style.setProperty("color", "gold");

/*document.querySelector(".title").addEventListener("click", function(){
    document.querySelector(".title").classList.toggle("modified-title");
});
title.addEventListener("mouseover", function() {
    title.classList.toggle("modified-title");
});
title.addEventListener("mouseout", function() {
    title.classList.toggle("modified-title");
});
document.querySelector("button").addEventListener("click", function(){
    document.querySelector("button").classList.toggle("button");
});    
//document.querySelector("button").addEventListener("click", function(){;
 //   console.log(document.querySelector("input").value);
});
*/
//Correction :
//document.querySelector("#myButton").addEventListener("click", () => {
//    console.log(document.querySelector("input").value);
//});
//(En ayant un <button>, par exemple, qui possèdera l'ID "myButton" ainsi qu'un <input type="text" pour recueillir les données écrites)

let starter = document.querySelector("ul");

starter.addEventListener("mouseover", function() {
    starter.classList.toggle("ullu");
});
starter.addEventListener("mouseout", function() {
    starter.classList.toggle("ullu");
});

let button = document.querySelector("#button2");

button.addEventListener("click", function() {
    document.querySelectorAll("p")[0].classList.toggle("special");
});

/* let Show = document.querySelector("#button");

Show.addEventListener("click", function() {
    Show.classList.toggle("special");
}); */

// Github