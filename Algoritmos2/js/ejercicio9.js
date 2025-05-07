function verificarMultiploDeCinco() {
  let numero = parseFloat(document.getElementById("numero").value);

  if (isNaN(numero)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese un número válido.";
    return;
  }

  if (numero % 5 === 0) {
    document.getElementById(
      "resultado"
    ).innerHTML = `El número ${numero} es múltiplo de 5.`;
  } else {
    document.getElementById(
      "resultado"
    ).innerHTML = `El número ${numero} no es múltiplo de 5.`;
  }
}
