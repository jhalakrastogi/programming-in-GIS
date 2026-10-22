// Function to switch between navigation tabs
function switchTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all nav buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show target tab content
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // Set target nav button to active
    const activeBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Close mobile nav menu if open
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }

    // Scroll back to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listeners once DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to nav buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Mobile menu toggle button functionality
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});