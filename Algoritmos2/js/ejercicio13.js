function calcularPrecioFinal() {
  let precioBase = parseFloat(document.getElementById("precio").value);

  if (isNaN(precioBase) || precioBase <= 0) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese un precio válido.";
    return;
  }

  let descuento = 0;
  if (precioBase >= 1000000) {
    descuento = precioBase * 0.1;
  }

  let precioConDescuento = precioBase - descuento;
  let iva = precioConDescuento * 0.19;
  let precioFinal = precioConDescuento + iva;

  document.getElementById("resultado-lista").innerHTML = `
    Precio base: $${precioBase.toFixed(2)}<li class="lista>
    Descuento: $${descuento.toFixed(2)}<li class="lista>
    IVA (19%): $${iva.toFixed(2)}<li class="lista>
    <li> Precio final: $${precioFinal.toFixed(2)}</li>
  `;
}
