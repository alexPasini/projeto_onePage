function copiarTexto(button) {
  var walletDiv = button.closest(".wallet1, .wallet2, .wallet3");

  var texto = walletDiv.getAttribute("data-value");

  var campoTemporario = document.createElement("textarea");
  campoTemporario.value = texto;
  document.body.appendChild(campoTemporario);

  campoTemporario.select();
  document.execCommand("copy");

  document.body.removeChild(campoTemporario);

  alert("Wallet copiada para a área de tranferência: " + texto);
}
