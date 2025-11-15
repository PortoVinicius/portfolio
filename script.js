function addComment() {
    const comment = document.getElementById("commentInput").value;

    if (comment.trim() === "") {
        alert("Digite algo no comentário.");
        return;
    }

    // Salva o depoimento para usar na outra página
    localStorage.setItem("ultimoDepoimento", comment);

    // Abre a página do GIF
    window.location.href = "depoimento.html";
}
