import * as rs from "readline-sync";
let arr1 : number [] = new Array (6);

let arr2 : number [] = new Array (6);

console.log( `        
    Creacion del priner arreglo:   `);

for (let i : number = 0; i < arr1.length; i++){
    arr1 [i] = rs.questionInt("Ingrese el numero que desea: ")
    console.log(arr1[i]);
}

console.log( `
        
    Creacion del segundo arreglo:   `);

for (let i : number = 0; i < arr2.length; i++){
    arr2 [i] = rs.questionInt("Ingrese el numero que desea: ")
    console.log(arr2[i]);
}

console.log("primer array: " + arr1);
console.log("segundo array: " + arr2);

let suma : number [] = new Array (arr1.length);

for (let i: number = 0; i < arr1.length;i++){
    suma[i] = arr1[i] + arr2[i];
}
console.log( ` 
    Nuevo array:  ${suma}` );