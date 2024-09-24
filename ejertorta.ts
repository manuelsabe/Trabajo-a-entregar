import * as rs from "readline-sync";


let calcularPuntaje = (sabor: number, presentacion: number, dificultad: number): number => {
  return sabor + presentacion + dificultad;
}


let determinarGanador = () : void => {
  let numParticipantes : number = rs.questionInt("Cuantos participantes hay?: ");


let puntajeMaxim : number = 0;
let ganador : string = "";
let esempate : boolean = false;


for (let i = 1; i <= numParticipantes; i++) {

  console.log("torta " + i);
  let sabor : number = rs.questionInt("Ingrese puntuacion de sabor: ");
  let presentacion : number = rs.questionInt("Ingrese puntuacion de presentacion: ");
  let dificultad : number = rs.questionInt("Ingrese puntuacion de dificultad: ");


  let puntaje : number = calcularPuntaje(sabor, presentacion, dificultad)

  if (puntaje > puntajeMaxim) {
    puntajeMaxim = puntaje;
    ganador = "torta " + i;
    esempate = false;
  } else if (puntaje == puntajeMaxim) {
    esempate = true;
  }
}

if (esempate) {
  console.log("se produjo un empate");
} else {
  console.log("La ganadora es: " + ganador);
}
}

determinarGanador();