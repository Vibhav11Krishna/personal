document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('Smooth section scroll ready.');

window.onload = function() {
    showSection('home');

    // Add animate class to home section after small delay
    const homeSection = document.getElementById('home');
    setTimeout(() => {
        homeSection.classList.add('animate');
    }, 50);
};

window.onload = function() {
    // Show the home section on page load and trigger animation
    showSection('home');

    const homeSection = document.getElementById('home');
    setTimeout(() => {
        homeSection.classList.add('animate');  // Add animation class to home section
    }, 50);  // Small delay to ensure display:block is applied first
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';  // Hide all sections
        section.classList.remove('animate');  // Remove the animation class
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';  // Show the target section
        setTimeout(() => {
            target.classList.add('animate');  // Trigger animation on the shown section
        }, 50);  // Small delay to trigger the animation after display change
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showSection(targetId);  // Show the clicked section
    });
});