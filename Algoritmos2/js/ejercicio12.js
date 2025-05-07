function verificarEstatura() {
  let estatura = parseFloat(document.getElementById("estatura").value);

  if (isNaN(estatura) || estatura <= 0) {
    document.getElementById("resultado").innerHTML =
      "Ingrese una estatura valida.";
    return;
  }

  if (estatura > 1.70) {
    document.getElementById("resultado").innerHTML =
      "Eres alto";
  } else {
    document.getElementById("resultado").innerHTML =
      "Eres un minion";
  }
}