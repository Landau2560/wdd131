document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            hamburger.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
            hamburger.textContent = isOpen ? 'x' : '=';
        });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
    const lastEl = document.getElementById('lastModified');
    if (lastEl) {
        lastEl.textContent = document.lastModified || 'Unknown';
    }
});