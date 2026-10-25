const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
  nav.classList.remove("active");
  
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";
});
