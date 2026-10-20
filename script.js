// 1) Coloca o ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// 2) Botão "Copiar e-mail"
const botaoCopiar = document.getElementById("copiar");
const aviso = document.getElementById("aviso");

botaoCopiar.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("edson.vaz159@gmail.com");
    aviso.textContent = "E-mail copiado.";
  } catch (erro) {
    aviso.textContent = "Não consegui copiar. O e-mail é edson.vaz159@gmail.com";
  }
});
