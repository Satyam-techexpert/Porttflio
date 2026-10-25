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


const cursor = document.querySelector(".cursor-glow");

if (cursor && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const smoothness = 1 - Math.pow(0.00001, 1 / 60);

        cursorX += (mouseX - cursorX) * smoothness;
        cursorY += (mouseY - cursorY) * smoothness;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.querySelectorAll("a, button, input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("hovering");
        });

        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("hovering");
        });
    });
}