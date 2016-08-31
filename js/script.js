var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
link.addEventListener("click", function (event) {
  event.preventDefault();
  if (form.classList.contains("search-form-display")) {
    form.classList.remove("search-form-display");
  } else {
    form.classList.add("search-form-display");
  }
});
