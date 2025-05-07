function verificarNumero() {
  let numero = parseFloat(document.getElementById("numero").value);

  if (isNaN(numero)) {
    document.getElementById("resultado").innerHTML =
      "ingrese un número válido.";
    return;
  }

  if (numero < 0) {
    document.getElementById("resultado").innerHTML =
      "Has ingresado un numeero negativo.";
  } else {
    document.getElementById("resultado").innerHTML =
      "Has ingresado un numero positivo.";
  }
}