function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmeFavorito.value;
  if (filmeFavorito.endsWith('.jpg')) {
     listarFilmesNaTela(filmeFavorito);
  } else {
    alert("Opção inválida")
  }
 campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
} 


// document.write("<img src=" + filmeFavorito + ">");
// # (faz referência ao "id")