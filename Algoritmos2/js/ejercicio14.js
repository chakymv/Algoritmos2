function calcularSumaSiMayor() {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese números válidos.";
    return;
  }

  if (numero1 > numero2) {
    let suma = numero1 + numero2;
    document.getElementById(
      "resultado"
    ).innerHTML = `La suma de ${numero1} y ${numero2} es: ${suma}.`;
  } else {
    document.getElementById("resultado").innerHTML =
      "El primer número no es mayor que el segundo.";
  }
}
