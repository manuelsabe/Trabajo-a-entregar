import * as r from "readline-sync"; 

const letras : string[] = ["a", "b", "c", "d"]

console.log(letras);

const names : string[] = ["Manuel", "Bruno", "Juan", "Esteban", "Julia"]; 

const nameToFind: string = r.question("Ingrese nombre a buscar: ");

let result : string = "No encontrado!"; 

for (let i= 0; i < names.length; i++)  {
    if (names[i].toLowerCase() === nameToFind.toLowerCase()) {        
        result = "Encontrado!"; 
        }
    }    
    
    
    console.log(result);
    console.log(names);
    
    