//funciones
//o lo haces o lo haces
function datosSujeto(nombre, codigo, culpabilidad) {
    return 'el nombre del sujeto es ' + nombre + ' con el codigo ' + codigo + ' y es  ' + culpabilidad;
}
;
var sujeto = datosSujeto("Rodolfo mascarpone", 12943726, true);
console.log(sujeto);
//Funciones con opciones
function compraLibro(titulo, regalico) {
    if (regalico) {
        return titulo + ' con un regalito';
    }
    else {
        return titulo;
    }
    ;
}
;
var libro = compraLibro("Mi libro, lunba de pluton");
console.log(libro);
//Todos lo pensamos
function animalejos(especie, esAdorable) {
    if (esAdorable === void 0) { esAdorable = true; }
    return "¿la especie " + especie + " es es adorable? Respuesta: " + esAdorable;
}
var animal = animalejos("perros");
console.log(animal);
//ufff...mucho parametro
function muchasCosas(nombre) {
    var masNombres = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        masNombres[_i - 1] = arguments[_i];
    }
    return nombre + " " + masNombres.join(" ");
}
;
var nombre1 = muchasCosas("Rodolfo", "La Mari");
var nombre2 = muchasCosas("Marco", "Bosé");
var nombre3 = muchasCosas("Polo", "Maripili");
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
//Mejor las cosas de una en una
function dosMasDos(a, b) {
    return a + b;
}
function holis(saludo) {
    return "Este es un saludo de " + saludo;
}
var loQueQuieroDesi;
// loQueQuieroDesi = dosMasDos;
// console.log(loQueQuieroDesi(2,2));
loQueQuieroDesi = holis;
console.log(loQueQuieroDesi("Pepe Mollera"));
