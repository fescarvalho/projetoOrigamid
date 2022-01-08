const toggle = document.querySelector(".toogle");

toggle.addEventListener("click", () => {
  const btnshare = document.querySelector(".social-media");
  btnshare.classList.toggle("active");
});
