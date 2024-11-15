document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".menu .icon");
    const indicator = document.querySelector(".indicator");
    const contentItems = document.querySelectorAll(".content-item");

    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            const iconRect = icon.getBoundingClientRect();
            const menuRect = icon.parentElement.getBoundingClientRect();

            const indicatorPosition = iconRect.left - menuRect.left + (iconRect.width / 2) - (indicator.offsetWidth / 2);

            indicator.style.left = `${indicatorPosition}px`;

            const category = icon.getAttribute("data-category");
            contentItems.forEach(item => {
                item.classList.toggle("active", item.id === category);
            });

            icons.forEach(icon => icon.classList.remove("active"));
            icon.classList.add("active");
        });
    });
});
