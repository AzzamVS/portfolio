/* =========================
   EMAIL COPY FUNCTION
   ========================= */
function copyEmail() {
  const email = "alazzam.daaboul@gmail.com"; // your email address
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1500);
  }).catch(err => {
    console.error("Failed to copy email: ", err);
  });
}


/* =========================
   IMAGE CAROUSEL FUNCTION
   ========================= */
document.querySelectorAll('.image-carousel').forEach(carousel => {
  const slides = carousel.querySelectorAll('.carousel-img');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const isActive = i === index;
      slide.classList.toggle('active', isActive);

      // Pause video if this slide contains one and it's not active
      const video = slide.querySelector('video');
      if (video && !isActive) {
        video.pause();
      }
    });
  }

  // Button listeners
  carousel.querySelector('.prev-btn').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  carousel.querySelector('.next-btn').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // Initialize
  showSlide(current);
});
