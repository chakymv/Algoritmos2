function verificarMayorDeEdad() {
  let edad = parseInt(document.getElementById("edad").value);

  if (isNaN(edad) || edad < 0) {
    document.getElementById("resultado").innerHTML = "Ingrese una edad valida";
    return;
  }

  if (edad >= 18) {
    document.getElementById("resultado").innerHTML = "Eres un viejo";
  } else {
    document.getElementById("resultado").innerHTML = "No eres mayor de edad.";
  }
}
