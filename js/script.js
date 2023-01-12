/*
Las "llaves" de encriptación son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"
*/

const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");

const btnEncriptar = document.querySelector("#encripta");
const btnDesencriptar = document.querySelector("#desencripta");
const btnCopiar = document.querySelector("#copiar");

function encriptar (){
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = textoEncriptado;

  document.getElementById("texto").value = '';

}

function desencriptar (){
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = '';

}

function copiar () {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;