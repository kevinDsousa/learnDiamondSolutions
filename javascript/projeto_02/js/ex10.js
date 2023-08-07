//10 Escreva uma função que recebe um lista de 5 números inteiros em forma de string separada por “/”, converta para array mostre quantidades de valores maior que 50

/**
 * Funcao capaz de separar os numeros que sao maiores que 50
 * @param {string} lista Lista de numeros separadas por /
 * @returns retorna quantos numeros sao maiores que 50
 */
function maioresQ50(lista) {
    const numeros = lista.split("/").map(numero => parseInt(numero));
    const maioresQue50 = numeros.filter(numero => numero > 50);
    return maioresQue50.length;
}

function exibirQuantidadeMaioresQue50(event) {
    event.preventDefault();
    const valor10 = document.getElementById("valor10");
    const resultado10 = document.getElementById("resultado10");
    resultado10.innerHTML = "";

    try {
        const lista = valor10.value;
        const quantidadeMaioresQue50 = maioresQ50(lista);
        resultado10.innerHTML = `<p>Quantidade de valores maiores que 50: ${quantidadeMaioresQue50}</p>`;
    } catch (error) {
        resultado10.innerHTML = `<p>${error.message}</p>`;
    }
}

const validar10 = document.getElementById("validar10");
validar10.addEventListener("click", exibirQuantidadeMaioresQue50);