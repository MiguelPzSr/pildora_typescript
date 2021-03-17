//objetos

//Objeticos...pero con cosicas y bien ordenas
let heroes: { heroe:string, valor:number, titulos:string[]} = {
    heroe: "Saitama",
    valor: 103043,
    titulos: ["El ser mas poderoso", "Heroe por hobbie"]
}

//Y si lo hacemos mejor?
type ciudadano = {
    nombre:string,
    edad:number,
    multas:any[]
};
let Carlos:ciudadano = {
    nombre: "Carlos mutierrez",
    edad: 42,
    multas: ["Saltarse un stop", 33, true]
};
let thanos:ciudadano = {
    nombre: "Thanos Maretinez",
    edad: 240,
    multas: ["no dar de comer a los gansos"]
};

//ho boy,hora de las multiclases, barbaro-mago allevoy
let personajeDyD: string | ciudadano | number = "Orlando, el destructor de truchas";

//oye,pero de que clase era?
console.log(typeof personajeDyD);

if ( typeof personajeDyD === "string"){
    console.log("parece que esto es un string");
}else{
    console.log("pue va a ser que no lo es");
}