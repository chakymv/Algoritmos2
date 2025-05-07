function calcularCuboSiMayor() {
  let numero = parseFloat(document.getElementById("numero").value);

  if (isNaN(numero)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese un número válido.";
    return;
  }

  if (numero >= 10) {
    let cubo = Math.pow(numero, 3); 
    document.getElementById("resultado").innerHTML =
      `El cubo de ${numero} es: ${cubo}.`;
  } else {
    document.getElementById("resultado").innerHTML =
      "El numero es meno 10.";
  }
}