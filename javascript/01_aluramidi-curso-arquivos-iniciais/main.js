// Pom ----------------------------------------
function tocaSom(idElemento) {
  const elemento = document.querySelector(idElemento);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  tecla.onclick = () => {
    tocaSom(idAudio);
  };
  tecla.onkeydown = (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = () => {
    tecla.classList.remove("ativa");
  };
}
