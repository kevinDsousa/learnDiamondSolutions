//3 Escreva uma função que lê o ano de nascimento de uma pessoa. Mostre uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

/**
 * Verifica com base o ano de nascimento se a pessoa é maior de idade
 * @param {number} nascimento
 * @returns Retorna uma string informando se é maior de idade ou não
 */
function eMaiorDe18(nascimento) {
  let data = new Date();
  let anoAtual = data.getFullYear();

  if (anoAtual - nascimento > 18) {
    return "é maior de idade";
  } else {
    return "é menor de idade";
  }
}

const valor3 = document.getElementById("valor3");
const validar03 = document.getElementById("validar03");
const resultado03 = document.getElementById("resultado03");

validar03.addEventListener("click", (evento) => {
  evento.preventDefault();
  const anoNascimento = parseInt(valor3.value);

  if (isNaN(anoNascimento)) {
    resultado03.textContent = "Por favor, insira um ano de nascimento válido.";
  } else {
    const mensagem = eMaiorDe18(anoNascimento);
    resultado03.textContent = `Esta pessoa ${mensagem}.`;
  }
});
