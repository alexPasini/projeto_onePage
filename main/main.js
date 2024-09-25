function copiarTexto() {
  var texto = document.getElementById("texto").innerText;

  var campoTemporario = document.createElement("textarea");
  campoTemporario.value = texto;
  document.body.appendChild(campoTemporario);

  campoTemporario.select();
  document.execCommand("copy");

  document.body.removeChild(campoTemporario);
}
