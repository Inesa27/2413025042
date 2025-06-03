// Script untuk menonaktifkan hanya link yang belum aktif
document.addEventListener("DOMContentLoaded", function () {
    const disabledLinks = document.querySelectorAll("a.disabled-link");

    disabledLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Fitur ini masih dalam pengembangan!");
        });
    });
});
