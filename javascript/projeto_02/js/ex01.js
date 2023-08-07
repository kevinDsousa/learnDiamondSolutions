//1 Escreva uma função que lê um nº inteiro de um campo e mostre uma mensagem indicando se este número é par ou ímpar.

/**
 * Verifica se é par ou impar
 * @param {number} numero 
 * @returns retorna true se for par e false se for impar
 */
function ParOuImpar(numero) {
    return numero % 2 === 0;
  }

  const input = document.getElementById("ex01");
  const validar = document.getElementById("validar");
  const mensagem = document.getElementById("resultado");

  validar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const numero = parseInt(input.value);
    const resultado = ParOuImpar(numero);
    
    if (resultado) {
      mensagem.textContent = `${numero} é um número par.`;
    } else {
      mensagem.textContent = `${numero} é um número ímpar.`;
    }
  });