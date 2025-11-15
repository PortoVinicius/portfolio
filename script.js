function addComment() {
    const comment = document.getElementById("commentInput").value;

    if (comment.trim() === "") {
        alert("Digite algo no comentário.");
        return;
    }

    // Abre a página do GIF
    window.location.href = "depoimento.html";
}
