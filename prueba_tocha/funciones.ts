function battle1 (villano:any, heroe:any):number {
    let combatiente1:number = villano.vida;
    let combatiente2:number = heroe.poder;

    return combatiente1-combatiente2
}

function battle2 (villano:any, heroe:any):number {
    let combatiente1:number = villano.poder;
    let combatiente2:number = heroe.vida;

    return combatiente2-combatiente1
}

function resultadoBatalla(villano:any, heroe:any):string {
    
    return  `El heroe ${heroe.nombre} ataca con su ${heroe.arma} haciendo ${heroe.poder} dejando al villano ${villano.nombre} con ${battle1(villano, heroe)}.
El villano ${villano.nombre} contraataca con su ${villano.arma} provocando ${villano.poder} quedandose nuestro heroe con ${battle2(villano, heroe)}`

}