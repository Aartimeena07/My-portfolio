document.addEventListener('DOMContentLoaded', function() {
    const slideInElements = document.querySelectorAll('.slide-in');

    const slideInOptions = {
        threshold: 0.2, // Trigger animation when 20% of the element is in view
        rootMargin: '0px 0px -50px 0px' // Adjust as needed
    };

    const slideInOnScroll = new IntersectionObserver(function(entries, slideInOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                slideInOnScroll.unobserve(entry.target);
            }
        });
    }, slideInOptions);

    slideInElements.forEach(element => {
        slideInOnScroll.observe(element);
    });
});
