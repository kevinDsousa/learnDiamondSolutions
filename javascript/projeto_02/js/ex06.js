//6 Escreva uma função que recebe um número inteiro positivo, e mostre na tela todos os números até chegar ao seu valor.

/**
 * Função que mostra a sequencia de numeros ate chegar no numero informado
 * @param {number} numero numero a ser passado
 */
function mostrarosNumerosAte(numero) {
  if (numero < 1 || !Number.isInteger(numero)) {
    throw new Error("Insira um número inteiro que seja positivo.");
  }

  for (let i = 1; i <= numero; i++) {
    resultado06.innerHTML += `<p>${i}</p>`
  }
}

const valor6 = document.getElementById("valor6");
const validar06 = document.getElementById("validar06");
const resultado06 = document.getElementById("resultado06");

validar06.addEventListener("click", (evento) => {
  evento.preventDefault();
  const numero = parseInt(valor6.value);

  try {
    resultado06.innerHTML = "";
    mostrarosNumerosAte(numero);
  } catch (error) {
    resultado06.textContent = error.message;
  }
});
