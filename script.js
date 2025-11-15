function addComment() {
    const input = document.getElementById("commentInput");
    const commentsDiv = document.getElementById("comments");

    if (input.value.trim() === "") return;

    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerText = input.value;

    commentsDiv.prepend(newComment); // aparece primeiro
    input.value = "";
}
