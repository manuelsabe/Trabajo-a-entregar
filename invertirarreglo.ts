import * as rs from "readline-sync";

console.log( `        
    Creacion del arreglo:   `);

let dimension : number = rs.questionInt("Ingrese que dimension quiere para el arreglo: ");

let arr : number [] = new Array (dimension);

for (let i : number = 0; i < arr.length; i++){
    arr [i] = rs.questionInt("Ingrese el numero que desea: ")
    console.log(arr[i]);
}

for(let i : number = dimension -1; i>=0; i--){     
        console.log( `     
            ${arr[i]}  `); 
}