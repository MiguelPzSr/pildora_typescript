//funciones

//o lo haces o lo haces
function datosSujeto (nombre:string, codigo:number, culpabilidad:boolean):string{
    return 'el nombre del sujeto es ' + nombre + ' con el codigo ' + codigo + ' y es  ' + culpabilidad;
};
let sujeto = datosSujeto ("Rodolfo mascarpone",12943726,true);
console.log(sujeto);

//Funciones con opciones
function compraLibro (titulo:string, regalico?:boolean):string{
    if (regalico){
        return titulo + ' con un regalito'
    }else{
        return titulo;
    };
};
let libro = compraLibro("Mi libro, luna de pluton");
console.log(libro);

//Todos lo pensamos
function  animalejos (especie:string, esAdorable:boolean = true):string{
    return "¿la especie " + especie + " es es adorable? Respuesta: " + esAdorable;
}
let animal = animalejos("perros");
console.log(animal);

//ufff...mucho parametro
function muchasCosas (nombre:string, ...masNombres:string[]):string{
    return nombre + " " + masNombres.join(" ");
};
let nombre1 = muchasCosas("Rodolfo", "La Mari");
let nombre2 = muchasCosas("Marco", "Bosé");
let nombre3 = muchasCosas("Polo", "Maripili");
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

//Mejor las cosas de una en una
function dosMasDos (a:number, b:number):number{
    return a + b;
}
function holis (saludo:string):string{
    return "Este es un saludo de " + saludo;
}
let loQueQuieroDesi: (x:number, y:number) => number;
 loQueQuieroDesi = dosMasDos;
 console.log(loQueQuieroDesi(2,2));
// loQueQuieroDesi = holis;
// console.log(loQueQuieroDesi("Pepe Mollera"));