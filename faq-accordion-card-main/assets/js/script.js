const questions = document.querySelector(".faq-questions");
const container = document.querySelectorAll(".faq-question .container");

questions.addEventListener("click", (e) => {
  container.forEach((element) => {
    element.parentNode.classList.remove("active");
  });

  if (e.target) {
    if (e.target.nodeName === "DIV") {
      e.target.parentNode.classList.toggle("active");
    } else if (e.target.nodeName === "H3" || e.target.nodeName === "IMG") {
      e.target.parentNode.parentNode.classList.toggle("active");
    }
  }
});
