function calcularSalarioNeto() {
  let salarioBruto = parseFloat(document.getElementById("salarioBruto").value);

  if (isNaN(salarioBruto) || salarioBruto <= 0) {
    document.getElementById("resultado").innerHTML =
      "ingrese un salario bruto valido.";
    return;
  }

  let retencion = 0;
  if (salarioBruto >= 2000000) {     retencion = salarioBruto * 0.1;
  }

  let salarioNeto = salarioBruto - retencion;

  document.getElementById("resultado").innerHTML =
    "El salario neto a pagar es: $" +
    salarioNeto.toLocaleString("es-CO", { minimumFractionDigits: 2 });
}
