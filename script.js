// Menambahkan efek scaling saat mouse hover pada elemen dengan kelas 'hover-scale'
document.addEventListener("DOMContentLoaded", () => {
    const hoverElements = document.querySelectorAll(".hover-scale");

    hoverElements.forEach(el => {
        el.style.transition = "transform 0.3s ease";

        el.addEventListener("mouseover", () => {
            el.style.transform = "scale(1.02)";
        });

        el.addEventListener("mouseout", () => {
            el.style.transform = "scale(1)";
        });
    });
});
