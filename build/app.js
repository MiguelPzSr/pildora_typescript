var protagonista1 = {
    nombre: "cloud Strife",
    arma: "Mandoble",
    poder: 1200,
    vida: 4700
};
var protagonista2 = {
    nombre: "Squall leonheart",
    arma: "Sable-Pistola",
    poder: 1000,
    vida: 3000
};
var protagonista3 = {
    nombre: "Yitan Zydane",
    arma: "Daga",
    poder: 500,
    vida: 2000
};
var villano1 = {
    nombre: "Sephiroth",
    arma: "Katana",
    poder: 2000,
    vida: 6000
};
var villano2 = {
    nombre: "Artemisa",
    arma: "Magia temporal",
    poder: 1500,
    vida: 5000
};
var villano3 = {
    nombre: "Kuja",
    arma: "Magia negra",
    poder: 1100,
    vida: 5200
};
var villano4 = {
    nombre: "Caos",
    arma: "Poder divino",
    poder: 3000,
    vida: 9999
};
function battle1(villano, heroe) {
    var combatiente1 = villano.vida;
    var combatiente2 = heroe.poder;
    return combatiente1 - combatiente2;
}
function battle2(villano, heroe) {
    var combatiente1 = villano.poder;
    var combatiente2 = heroe.vida;
    return combatiente2 - combatiente1;
}
function resultadoBatalla(villano, heroe) {
    return "El heroe " + heroe.nombre + " ataca con su " + heroe.arma + " haciendo " + heroe.poder + " dejando al villano " + villano.nombre + " con " + battle1(villano, heroe) + ".\nEl villano " + villano.nombre + " contraataca con su " + villano.arma + " provocando " + villano.poder + " quedandose nuestro heroe con " + battle2(villano, heroe);
}
/// <reference path="prueba_tocha/personajes.ts" />
/// <reference path="prueba_tocha/funciones.ts" />
console.log(battle1(villano1, protagonista1));
console.log(battle2(villano1, protagonista1));
console.log(resultadoBatalla(villano1, protagonista1));
