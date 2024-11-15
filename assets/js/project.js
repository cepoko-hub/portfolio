document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".close");

    popups.forEach(popup => {
        popup.style.display = "none";
    });

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const popupId = category.getAttribute("data-popup");
            const link = category.getAttribute("data-link");

            if (popupId) {
                document.getElementById(popupId).style.display = "block";
            } else if (link) {
                window.location.href = link;
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        popups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    });
});