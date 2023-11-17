document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselList = document.getElementById('carousel-list');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    // Set up event listeners for navigation
    prevBtn.addEventListener('click', function () {
        navigateCarousel(-1);
    });

    nextBtn.addEventListener('click', function () {
        navigateCarousel(1);
    });

    // Automatic sliding
    const autoSlideInterval = 4000; // 4 seconds
    let autoSlideTimer;

    function startAutoSlide() {
        autoSlideTimer = setInterval(function () {
            navigateCarousel(1);
        }, autoSlideInterval);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideTimer);
    }

    // Start automatic sliding on page load
    startAutoSlide();

    // Pause automatic sliding on hover
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);

    // Function to navigate the carousel
    function navigateCarousel(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        } else if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        updateCarousel();
    }

    // Function to update the carousel position
    function updateCarousel() {
        const itemWidth = items[0].offsetWidth; // Get the width of the first item
        const newPosition = -currentIndex * itemWidth;
        carouselList.style.transform = `translateX(${newPosition}px)`;

        // Show the shop-now-box for the current item
        items.forEach((item, index) => {
            const shopNowBox = item.querySelector('.shop-now-box');
            shopNowBox.style.display = index === currentIndex ? 'block' : 'none';
        });
    }
});