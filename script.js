const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const reservationForm = document.querySelector(".reservation-form");
const formStatus = document.querySelector(".form-status");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thank you! Your reservation request has been received.";
  reservationForm.reset();
});