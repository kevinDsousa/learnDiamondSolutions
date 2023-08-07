//8 Escreva uma função que recebe um número inteiro positivo, e mostre todos os números ímpares até chegar ao seu valor.

/**
 * Com base no numero fornecido, retorna todos seus impares ate chegar nele
 * @param {number} numero 
 */
function imparesAteONumero(numero) {
    if (!Number.isInteger(numero) || numero <= 0) {
        throw new Error("O número deve ser um inteiro positivo");
    }

    let impares = '';
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 1) {
            impares += `<p>${i}</p>`;
        }
    }
    resultado08.innerHTML = impares;
}

const validar08 = document.getElementById("validar08")
const resultado08 = document.getElementById('resultado08')

validar08.addEventListener("click", (evento) => {
    evento.preventDefault()
    const valor8 = document.getElementById("valor8");
    const numero = parseInt(valor8.value);

    try {
        resultado08.innerHTML = ""
        imparesAteONumero(numero);
    } catch (error) {
        resultado08.textContent = error.message;
    }
})