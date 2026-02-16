document.getElementById("formContacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("mensajeOK").innerText =
      "¡Gracias! Tu mensaje fue enviado (simulación).";
});
