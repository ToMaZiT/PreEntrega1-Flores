let continuar = true;

//Calculadora de divisas
function resultado() {
  let resultado = 1;

  let question = prompt(`
  ¿Qué moneda quiere convertir?

  1) Pesos
  2) Dolar blue
  3) Dolar oficial
  (Ingrese el número correspondiente a la opción)
  `);
  let monto = prompt("Ingrese el monto a convertir");

  switch (question) {
    case "1":
      let convertirPesos = prompt(`
      ¿A qué moneda quiere convertir el monto?
      1) Dolar blue
      2) Dolar oficial
      (Ingrese el número correspondiente a la opción)
      `);

      if (convertirPesos == "1") {
        resultado = monto / 1020;
        alert("$" + monto + " pesos es igual a $" + resultado.toFixed(2) + " en dolar blue");
      } else if (convertirPesos == "2") {
        resultado = monto / 900;
        alert("$" + monto + " pesos es igual a $" + resultado.toFixed(2) + " en dolar oficial");
      }
      break;

    case "2":
      let convertirDolarBlue = prompt(`
      ¿A qué moneda quiere convertir el monto?
      1) Pesos
      (Ingrese el número correspondiente a la opción)
      `);

      if (convertirDolarBlue == "1") {
        resultado = monto * 1020;
        alert("$" + monto + " dólares blue es igual a $" + resultado.toFixed(2) + " en pesos");
      }
      break;

    case "3":
      let convertirDolarOficial = prompt(`
      ¿A qué moneda quiere convertir el monto?
      1) Pesos
      (Ingrese el número correspondiente a la opción)
      `);

      if (convertirDolarOficial == "1") {
        resultado = monto * 900;
        alert("$" + monto + " dólares oficiales es igual a $" + resultado.toFixed(2) + " en pesos");
      }
      break;

    default:
      alert("Opción no válida");
  }
}

while (continuar) {
  
  resultado();
  
  let opcionContinuar = prompt("¿Desea realizar otra conversión? (Sí/No)");
  continuar = (opcionContinuar === "si" || opcionContinuar === "sí" || opcionContinuar === "Si" || opcionContinuar === "Sí");
}



