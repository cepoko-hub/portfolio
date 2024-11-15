document.addEventListener("DOMContentLoaded", () => {
    const competencesLink = document.getElementById("competences-link");
    const popup = document.getElementById("confirmation-popup");
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    competencesLink.addEventListener("click", (event) => {
        event.preventDefault(); 
        popup.style.display = "flex"; 
    });

    yesButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    noButton.addEventListener("click", () => {
        window.location.href = "laoding-compétence.html"; 
    });
});