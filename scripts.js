// Accessible mobile navigation and photo carousel
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const slides = [
    { src: "images/healthy-bowl.png", alt: "Colourful salad bowl with grains, chickpeas and vegetables", title: "Build a colourful plate", description: "Enjoy a variety of foods and textures." },
    { src: "images/fresh-produce.png", alt: "Fresh vegetables and fruits arranged together", title: "Choose fresh variety", description: "Try different seasonal fruits and vegetables." },
    { src: "images/hydration.png", alt: "Glass of water with lemon on a wooden surface", title: "Stay hydrated", description: "Keep water nearby throughout the day." },
    { src: "images/walking.png", alt: "Two people walking together in a leafy park", title: "Make healthy habits social", description: "Share a walk or meal with someone you enjoy." }
  ];
  const image = document.querySelector(".carousel-image");
  if (!image) return;
  const title = document.querySelector(".carousel-title");
  const description = document.querySelector(".carousel-description");
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    image.src = slides[current].src;
    image.alt = slides[current].alt;
    title.textContent = slides[current].title;
    description.textContent = slides[current].description;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
      if (i === current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }
  document.querySelector(".carousel-prev")?.addEventListener("click", () => showSlide(current - 1));
  document.querySelector(".carousel-next")?.addEventListener("click", () => showSlide(current + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));
});
