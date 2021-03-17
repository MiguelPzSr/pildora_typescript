//Tipos 

//Los tres mosqueteros
let verdadVerdadera:Boolean = true;

let edadDeMarco:number = 21;

let ColorDelCaballoDeSantiago:string = "blanco";

//la variable poderosa...ANY
let poderCosmico:any = "Esto puede ser cualquier cosa";
let otroPoderCosmico:any = 123321;
let noSeSiEsThanos:any = false;

//las clasicas arrays
let lapicesDeColores:string[] = ["Azul","Rojo","Verde","Negro"];
let numericos:number[] = [1,2,3,4,5,6,7,8,9];

//el tuplas...o algo asi...
let tuPlato: [string,number] = ["Galletas fontaneda",150];

//Categoricemos los valores con un enunciado
enum Dificultad{
    muyBaja = 5,  
    baja = 10,
    media = 15,
    alta = 20,
    muyAlta = 25,
    pesadilla = 30
}

//el abismo...void
function elVacioSideral():void{
    console.log("No hay nada...")
}

//hmmm...como puedo sacar otras caracteristicas?
let unaCosita:any = "¿y que cosita es?";
let caracteresDeCosita:number = (<string>unaCosita).length;

//no hay regalos en navidad
let aquiNohayNa:undefined = undefined;
let aquiTampoco:null = null;

//ups,esto no deberia ocurrir...
function aviso(mensaje:any):never{
    throw new Error(mensaje);
}
aviso("Ojo cuidao que esto no deberia pasar");
