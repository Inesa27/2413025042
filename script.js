document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a.disabled-link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Fitur ini masih dalam pengembangan!");
    });
  });
});
