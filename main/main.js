function copiarTexto() {
  // Obtém o texto a partir do elemento <p> pelo id
  var texto = document.getElementById("texto").innerText;

  // Cria um campo de texto temporário para copiar o conteúdo
  var campoTemporario = document.createElement("textarea");
  campoTemporario.value = texto;
  document.body.appendChild(campoTemporario);

  // Seleciona o texto no campo temporário e o copia
  campoTemporario.select();
  document.execCommand("copy");

  // Remove o campo temporário
  document.body.removeChild(campoTemporario);

  // Alerta de sucesso
  alert("Texto copiado para a área de transferência!");
}
