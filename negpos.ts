import * as rs from "readline-sync";

let longitud : number = rs.questionInt("ingrese longitud del arreglo: ")
let negativos : number = 0
let positivos : number = 0
let ceros : number = 0
let arreglosnumeros : number [] = new Array(longitud);

for (let i : number = 0; i < longitud; i++){
        arreglosnumeros[i] = rs.questionInt("ingrese numero para el arreglo: ");
        if (arreglosnumeros[i] > 0){
            positivos++; //positivos = positivos + 1
        }
        else if (arreglosnumeros[i] < 0){
            negativos++
        }
        else{
            ceros++;
        }
}
console.log( ` Hay ${positivos} positivos, ${negativos} negativos, ${ceros} ceros`);