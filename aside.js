document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector("aside button");
  const aside = document.querySelector("aside");

  closeButton.addEventListener("click", function () {
    aside.style.display = "none";
  });
});
