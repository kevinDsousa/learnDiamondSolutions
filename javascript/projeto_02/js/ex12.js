//12 Escreva uma função que receberá uma string composta de letras minúsculas e mostre seu resultado com a primeira e a última letra maiúsculas.

/**
 * Capaz de receber uma palavra e alterar para maiuscula a primeira e ultima letra
 * @param {string} str 
 * @returns retorna a palavra com primeira e ultima letra maiuscula
 */
function primeiraUltimaMaiusculas(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new Error("A entrada deve ser uma string valida (não vazia)");
    }

    const primeiraLetra = str.charAt(0).toUpperCase();
    const ultimaLetra = str.charAt(str.length - 1).toUpperCase();

    return primeiraLetra + str.slice(1, -1) + ultimaLetra;
}

function exibirResultado(event) {
    event.preventDefault();
    const valor12 = document.getElementById("valor12");
    const resultado12 = document.getElementById("resultado12");
    resultado12.innerHTML = "";

    try {
        const texto = valor12.value;
        const resultado = primeiraUltimaMaiusculas(texto);
        resultado12.innerHTML = `<p>Resultado: ${resultado}</p>`;
    } catch (error) {
        resultado12.innerHTML = `<p>${error.message}</p>`;
    }
}

const validar12 = document.getElementById("validar12");
validar12.addEventListener("click", exibirResultado);