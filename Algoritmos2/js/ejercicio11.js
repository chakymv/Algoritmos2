function calcularPromedio() {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);

  if (
    isNaN(nota1) ||
    isNaN(nota2) ||
    isNaN(nota3) ||
    isNaN(nota4) ||
    nota1 < 0 ||
    nota2 < 0 ||
    nota3 < 0 ||
    nota4 < 0
  ) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese notas válidas (números mayores o iguales a 0).";
    return;
  }

  let promedio = (nota1 + nota2 + nota3 + nota4) / 4;

  if (promedio < 3.5) {
    document.getElementById(
      "resultado"
    ).innerHTML = `El promedio es ${promedio.toFixed(2)}. Has reprobado.`;
  } else {
    document.getElementById(
      "resultado"
    ).innerHTML = `El promedio es ${promedio.toFixed(2)}. Has aprobado.`;
  }
}
