//7 Escreva uma função que recebe um número inteiro positivo, e exiba mostre soma de todos os números menores que ele

/**
 * Função que soma os numeros menores que ele
 * @param {number} numero
 */
function somaNumerosMenores(numero) {
    if (!Number.isInteger(numero) || numero <= 0) {
      throw new Error("O número deve ser um inteiro positivo.");
    }
    let soma = 0;

    for (let i = 1; i < numero; i++) {
      soma += i;
    }
    return soma;
  }

  function calcularSoma() {
    const valorInput = document.getElementById('valor7').value;
    const numeroInteiro = parseInt(valorInput, 10);

    try {
      const soma = somaNumerosMenores(numeroInteiro);
      document.getElementById('resultado07').innerText = `A soma de todos os números menores que ${numeroInteiro} é: ${soma}`;
    } catch (error) {
      document.getElementById('resultado07').innerText = error.message;
    }
  }

  const validar07 = document.getElementById('validar07');
  validar07.addEventListener('click', (e) => {
    e.preventDefault()
    calcularSoma()
  });
