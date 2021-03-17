//Tipos 
//Los tres mosqueteros
var verdadVerdadera = true;
var edadDeMarco = 21;
var ColorDelCaballoDeSantiago = "blanco";
//la variable poderosa...ANY
var poderCosmico = "Esto puede ser cualquier cosa";
var otroPoderCosmico = 123321;
var noSeSiEsThanos = false;
//las clasicas arrays
var lapicesDeColores = ["Azul", "Rojo", "Verde", "Negro"];
var numericos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//el tuplas...o algo asi...
var tuPlato = ["Galletas fontaneda", 150];
//Categoricemos los valores con un enunciado
var Dificultad;
(function (Dificultad) {
    Dificultad[Dificultad["muyBaja"] = 5] = "muyBaja";
    Dificultad[Dificultad["baja"] = 10] = "baja";
    Dificultad[Dificultad["media"] = 15] = "media";
    Dificultad[Dificultad["alta"] = 20] = "alta";
    Dificultad[Dificultad["muyAlta"] = 25] = "muyAlta";
    Dificultad[Dificultad["pesadilla"] = 30] = "pesadilla";
})(Dificultad || (Dificultad = {}));
//el abismo...void
function elVacioSideral() {
    console.log("No hay nada...");
}
//hmmm...como puedo sacar otras caracteristicas?
var unaCosita = "¿y que cosita es?";
var caracteresDeCosita = unaCosita.length;
//no hay regalos en navidad
var aquiNohayNa = undefined;
var aquiTampoco = null;
//ups,esto no deberia ocurrir...
function aviso(mensaje) {
    throw new Error(mensaje);
}
aviso("Ojo cuidao que esto no deberia pasar");
