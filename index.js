document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and executed.");
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the "fade-in" class when an element is in the viewport
    function fadeInElements() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('fade-in-visible'); // Change 'visible' to 'fade-in-visible'
            }
        });
    }

    // Trigger the fade-in effect on page load
    fadeInElements();

    // Event listener for scrolling to trigger fade-in on scroll
    window.addEventListener('scroll', function () {
        fadeInElements();
    });
});
