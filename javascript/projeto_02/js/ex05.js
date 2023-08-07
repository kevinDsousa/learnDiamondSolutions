//5 Escreva uma função que leia um número inteiro de 1 a 7 e informe o dia da semana correspondente, sendo domingo o dia de número 1. Se o número não corresponder a um dia da semana, mostre uma mensagem de erro.

/**
 * Função que converte um numero de 1 a 7 em dias da smeana
 * @param {number} dia Dia da semana
 * @returns Retorna o dia correspondente a aquele numero passado
 */
function diaDaSemana(dia) {
  switch (dia) {
    case 1:
      return "segunda-feira";
    case 2:
      return "terça-feira";
    case 3:
      return "quarta-feira";
    case 4:
      return "quinta-feira";
    case 5:
      return "sexta-feira";
    case 6:
      return "sábado";
    case 7:
      return "domingo";
    default:
      throw new Error(
        "Valor inválido. Por favor, insira um número entre 1 e 7."
      );
  }
}

const valor5 = document.getElementById("valor5");
const validar05 = document.getElementById("validar05");
const resultdo05 = document.getElementById("resultado05");

validar05.addEventListener("click", (evento) => {
  evento.preventDefault();
  const numero = parseInt(valor5.value);

  try {
    const diaSemana = diaDaSemana(numero);
    resultado05.textContent = `O dia da semana correspondente é: ${diaSemana}`;
  } catch (error) {
    resultado05.textContent = error.message;
  }
});
