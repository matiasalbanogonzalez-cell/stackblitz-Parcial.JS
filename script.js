// EJERCICIO 1
function evaluarNota(nota){

  if(nota >= 6){
    return "Aprobado";
  }else{
    return "Desaprobado";
  }

}

function mostrarNota(){

  let nota = document.getElementById("nota").value;

  let resultado = evaluarNota(nota);

  document.getElementById("resultadoNota").innerHTML = resultado;

}

// EJERCICIO 2
function tablaMultiplicar(numero){

  let tabla = "";

  for(let i = 1; i <= 10; i++){

    tabla += numero + " x " + i + " = " + (numero * i) + "<br>";

  }

  return tabla;

}

function mostrarTabla(){

  let numero = document.getElementById("numeroTabla").value;

  let resultado = tablaMultiplicar(numero);

  document.getElementById("resultadoTabla").innerHTML = resultado;

}

// EJERCICIO 3
function analizarNumero(numero){

  let resultado = "";

  if(numero % 2 === 0){
    resultado = "El número es par";
  }else{
    resultado = "El número es impar";
  }

  if(numero >= 0){
    resultado += " y positivo";
  }else{
    resultado += " y negativo";
  }

  return resultado;

}

function mostrarAnalisis(){

  let numero = document.getElementById("numeroAnalizar").value;

  let resultado = analizarNumero(numero);

  document.getElementById("resultadoAnalisis").innerHTML = resultado;

}