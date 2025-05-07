function calcularIntereses() {
  let capital = parseFloat(document.getElementById("capital").value);
  let tasaInteres = parseFloat(document.getElementById("tasaInteres").value);

  if (
    isNaN(capital) ||
    capital <= 0 ||
    isNaN(tasaInteres) ||
    tasaInteres <= 0
  ) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese valores válidos para el capital y la tasa de interés.";
    return;
  }

  let intereses = (capital * tasaInteres) / 100;

  if (intereses <= 7000) {
    capital += intereses;
    document.getElementById(
      "resultado"
    ).innerHTML = `Los intereses generados son $${intereses.toFixed(
      2
    )}. Se han reinvertido, y el total en la cuenta es $${capital.toFixed(2)}.`;
  } else {
    document.getElementById(
      "resultado"
    ).innerHTML = `Los intereses generados son $${intereses.toFixed(
      2
    )}. No se han reinvertido, y el total en la cuenta sigue siendo $${capital.toFixed(
      2
    )}.`;
  }
}
