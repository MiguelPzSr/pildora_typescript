//objetos
//Objeticos...pero con cosicas y bien ordenas
var heroes = {
    heroe: "Saitama",
    valor: 103043,
    titulos: ["El ser mas poderoso", "Heroe por hobbie"]
};
var Carlos = {
    nombre: "Carlos mutierrez",
    edad: 42,
    multas: ["Saltarse un stop", 33, true]
};
var thanos = {
    nombre: "Thanos Maretinez",
    edad: 240,
    multas: ["no dar de comer a los gansos"]
};
//ho boy,hora de las multiclases, barbaro-mago allevoy
var personajeDyD = "Orlando, el destructor de truchas";
//oye,pero de que clase era?
console.log(typeof personajeDyD);
if (typeof personajeDyD === "string") {
    console.log("parece que esto es un string");
}
else {
    console.log("pue va a ser que no lo es");
}
