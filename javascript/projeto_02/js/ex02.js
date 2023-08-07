//2 Escreva uma função que lê dois nº inteiros diferentes e mostre uma mensagem indicando qual é o maior.

/**
 * Verifica qual numero é maior entre os dois passados
 * @param {number} numero1
 * @param {number} numero2
 * @returns Retorna o numero maior entre os dois
 */
function qualMaior(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else if (numero2 > numero1) {
    return numero2;
  }
}

const validar02 = document.getElementById("validar02");

validar02.addEventListener("click", (evento) => {
  evento.preventDefault();

  const valor1 = document.getElementById("valor1");
  const valor2 = document.getElementById("valor2");
  const numero1 = parseInt(valor1.value);
  const numero2 = parseInt(valor2.value);

  const resultado = document.getElementById("resultado02");

  if (isNaN(numero1) || isNaN(numero2)) {
    resultado.textContent = "Por favor, insira dois números válidos.";
  } else if (numero1 === numero2) {
    resultado.textContent = "Os números são iguais.";
  } else {
    const maior = qualMaior(numero1, numero2);
    resultado.textContent = `O maior número é: ${maior}`;
  }
});
