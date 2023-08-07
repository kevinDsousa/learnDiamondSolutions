//4 Escreva uma função para ler o salário mensal atual de um funcionário e o percentual de reajuste. Mostre uma mensagem indicando o valor do novo salário.

/**
 * Função que reajusta o salário com base no valor de porcentagem
 * @param {number} salario salario a ser passado
 * @param {number} reajuste porcentagem do reajuste
 * @returns Com base nos parametros retorna um valor ajustado em cima do porcento passado
 */
function reajustarSalario(salario, reajuste) {
  if (salario < 0 || reajuste < 0) {
    throw new Error("Os valores não podem ser negativos");
  }

  const porcentagem = salario * (reajuste / 100);
  const novoSalario = salario + porcentagem;

  return novoSalario;
}

const valor4 = document.getElementById("valor4");
const reajuste = document.getElementById("reajuste");
const validar04 = document.getElementById("validar04");

validar04.addEventListener("click", (evento) => {
  evento.preventDefault();
  const salarioAtual = parseFloat(valor4.value);
  const percentualReajuste = parseFloat(reajuste.value);

  try {
    const novoSalario = reajustarSalario(salarioAtual, percentualReajuste);
    resultado04.textContent = `O novo salário é: R$ ${novoSalario.toFixed(2)}`;
  } catch (error) {
    resultado04.textContent = error.message;
  }
});
