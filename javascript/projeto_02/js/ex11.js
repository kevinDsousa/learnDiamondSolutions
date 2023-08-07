//11 Escreva uma função que recebe uma string e mostre na tela o seu inverso. Não vale usar a função reverse :)

/**
 * Capaz de receber um valor em string e retornar o inverso
 * @param {string} str 
 * @returns retorna o inverso do digitado
 */
function inverterString(str) {
    let inverso = "";
    for (let i = str.length - 1; i >= 0; i--) {
        inverso += str[i];
    }
    return inverso;
}

function exibirInverso(event) {
    event.preventDefault();
    const valor11 = document.getElementById("valor11");
    const resultado11 = document.getElementById("resultado11");
    resultado11.innerHTML = "";

    try {
        const texto = valor11.value;
        const textoInvertido = inverterString(texto);
        resultado11.innerHTML = `<p>Inverso: ${textoInvertido}</p>`;
    } catch (error) {
        resultado11.innerHTML = `<p>${error.message}</p>`;
    }
}

const validar11 = document.getElementById("validar11");
validar11.addEventListener("click", exibirInverso);
