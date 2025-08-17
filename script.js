let navbar = document.querySelector('.navbar')
let menu = document.querySelector('.menu')
let form = document.querySelector('form')

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});