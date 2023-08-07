async function BuscaEndereco(cep) {
  let mensagemErro = document.getElementById("error");
  mensagemErro.innerHTML = "";
  try {
    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaConvertida = await consultaCep.json();
    if (consultaConvertida.error) {
      throw Error("Cep não existente!");
    }
    let cidade = document.getElementById("cidade");
    let logradouro = document.getElementById("endereco");
    let estado = document.getElementById("estado");

    cidade.value = consultaConvertida.localidade;
    logradouro.value = consultaConvertida.logradouro;
    estado.value = consultaConvertida.uf;
    return consultaConvertida;
  } catch (error) {
    mensagemErro.innerHTML = `<p>CEP inválido, tente novamente</p>`
  }
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => BuscaEndereco(cep.value));

// let ceps = ['60866190', '60866451']
// let conjuntoCeps = ceps.map(valores => BuscaEndereco(valores))
// Promise.all(conjuntoCeps).then(resp => console.log(resp))
