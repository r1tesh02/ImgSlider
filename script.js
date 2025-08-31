// Gallery quote logic remains unchanged
    const scrollContainer = document.querySelector(".gallery");
    const nextbtn = document.getElementById("nextbtn");
    const backbtn = document.getElementById("backbtn");
    const quoteText = document.getElementById("quote");
    const quotes = [
      "Art washes away from the soul the dust of everyday life.",
      "Art can permeate the very deepest part of us, where no words exist.",
      "Art is a wound turned into light.",
      "Art enables us to find ourselves and lose ourselves at the same time.",
      "Art speaks where words are unable to explain.",
      "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
      "Art is the highest expression of the human spirit.",
      "When words fail, art speaks.",
      "The work of the artist is to heal the soul.",
      "Art is my cure to all this madness, sadness and loss of belonging in the world & through it I'll walk myself home.",
    ];

    let currentIndex = 0;
    function updateQuote(delta) {
      currentIndex = (currentIndex + delta + quotes.length) % quotes.length;
      quoteText.textContent = `"${quotes[currentIndex]}"`;
    }
    
    scrollContainer.addEventListener("wheel", e => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
      scrollContainer.style.scrollBehavior = "auto";
    });
    
    nextbtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 810;
      updateQuote(1);
    });
    
    backbtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 810;
      updateQuote(-1);
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    const galleryImages = document.querySelectorAll('.gallery img');

    // Add click event to all gallery images
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });
    });

    // Close lightbox function
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'hidden'; // Restore original overflow
      setTimeout(() => {
        lightboxImg.src = '';
      }, 300);
    }

    // Close button event
    closeBtn.addEventListener('click', closeLightbox);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });

 if (window.innerWidth <= 480) {
  const images = [...document.querySelectorAll('.gallery img')];
  let current = 0;

  function scrollToImage(index) {
    current = Math.max(0, Math.min(images.length - 1, index));
    images[current].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }

  nextbtn.addEventListener('click', () => scrollToImage(current + 1));
  backbtn.addEventListener('click', () => scrollToImage(current - 1));

  // Update index when user manually scrolls
  document.querySelector('.gallery').addEventListener('scroll', () => {
    const index = images.findIndex(img => {
      const rect = img.getBoundingClientRect();
      return rect.left >= 0 && rect.right <= window.innerWidth + 1;
    });
    if (index !== -1) current = index;
  });
}



    // Initialize Vanta Birds
    VANTA.BIRDS({
      el: "#vanta-birds-background",
      mouseControls: true,
      touchControls: true,
      backgroundColor: 0x1a222c,
      color1: 0x294372,
      color2: 0xd1ff,
      speed: 1.2,
      quantity: 4.0,
      birdSize: 0.6,
      separation: 60.0,
    });