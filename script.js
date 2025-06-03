document.addEventListener("DOMContentLoaded", () => {
    const disabledLinks = document.querySelectorAll(".disabled-link");
    disabledLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Fitur ini masih dalam pengembangan!");
        });
    });
});
