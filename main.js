document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact form validation (optional)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting immediately

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Message sent successfully!');
        form.reset(); // Clear the form fields
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}












document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.classList.add('visible');

    // Reset form fields (optional)
    this.reset();

    // Hide success message after 3 seconds (optional)
    setTimeout(() => {
        successMessage.classList.remove('visible');
    }, 3000);
});





let currentSlide = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel img');
  
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}






const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

// Apply the observer to each section
sections.forEach(section => {
    observer.observe(section);
});






let index = 0;

function slideImages() {
  const slides = document.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  
  index++;

  if (index >= images.length) {
    index = 0;
  }

  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Automatically slide every 4 seconds
setInterval(slideImages, 4000);










document.addEventListener('DOMContentLoaded', function() {
  
  function startSlider(sliderId, interval) {
    const sliderContainer = document.getElementById(sliderId);
    const slides = sliderContainer.querySelectorAll('.fade-slide');
    let currentSlide = 0;

    function showNextSlide() {
      slides[currentSlide].classList.remove('slider-active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('slider-active');
    }

    setInterval(showNextSlide, interval); // Change slides after `interval` milliseconds
  }

  // Start sliders with different intervals for each
  startSlider('slider1', 3000); // Slider 1 moves every 3 seconds
  startSlider('slider2', 4000); // Slider 2 moves every 4 seconds
  startSlider('slider3', 5000); // Slider 3 moves every 5 seconds

});








let independentSlides = document.querySelectorAll('#independent-slider .independent-slide');
let currentIndependentIndex = 0;

function startIndependentSlider() {
  independentSlides[currentIndependentIndex].classList.remove('active');
  currentIndependentIndex = (currentIndependentIndex + 1) % independentSlides.length;
  independentSlides[currentIndependentIndex].classList.add('active');
}

setInterval(startIndependentSlider, 5000); // Slide changes every 5 seconds





















