let mayor : number[] = [4,7,9,3,1,45,67,23,29,78,11,16]


let numMayor : number = Math.max(...mayor);


console.log(numMayor);


function parImpar(numero : number) : number{

    if (numero %2==0){
        console.log("su numero es par");
        
    }
    else{
        console.log("su numero es impar");
     }

     return numero

}

parImpar(numMayor);
