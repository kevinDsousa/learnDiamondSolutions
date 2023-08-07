//9 Escreva uma função que recebe um lista de 5 números inteiros em forma de string separada por “-”, converta para array e mostre a soma de todos os números que são menores que 30.

/**
 * funcao que realiza a soma dos numeros que estao separados por -
 * @param {string} lista lista de numeros separados por -
 * @returns retora a soma dos valores
 */
function somarMaioresQue30(lista) {
    const numeros = lista.split("-").map((numero) => parseInt(numero));
  
    const numerosMenores30 = numeros.filter((num) => num < 30);
    const soma = numerosMenores30.reduce((acc, numero) => acc + numero, 0);
    return soma;
  }
  
  function realizarSoma(event) {
    event.preventDefault();
    const valor9 = document.getElementById("valor9");
    const resultado09 = document.getElementById("resultado09");
    resultado09.innerHTML = "";
  
    try {
      const lista = valor9.value;
      const resultado = somarMaioresQue30(lista);
      resultado09.innerHTML = `<p>Resultado: ${resultado}</p>`;
    } catch (error) {
      resultado09.innerHTML = `<p>${error.message}</p>`;
    }
  }
  
  const validar09 = document.getElementById("validar09");
  validar09.addEventListener("click", realizarSoma);
