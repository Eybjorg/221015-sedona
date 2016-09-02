var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("search-form-display");
});
