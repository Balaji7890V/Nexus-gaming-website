// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 10) + 'px';
    cursor.style.top = (e.clientY - 10) + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.7)');
document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');

// ==========================================
// PAGE NAVIGATION
// ==========================================
let currentPage = 1;

function goToPage(n) {
    document.getElementById('page' + currentPage).classList.remove('active');
    document.getElementById('nav' + currentPage).classList.remove('active');

    currentPage = n;

    document.getElementById('page' + n).classList.add('active');
    document.getElementById('nav' + n).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// LB tabs
document.querySelectorAll('.lb-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Sidebar items
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// ==========================================
// VIDEO SLIDER
// ==========================================
let currentSlide = 0;
const totalSlides = 5;
const slider = document.getElementById('videoSlider');
const dots = document.querySelectorAll('.vdot');
let autoplayInterval;

function goToSlide(n) {
    currentSlide = n;
    slider.style.transform = `translateX(-${n * 20}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === n));
}

function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
    resetAutoplay();
}

function prevSlide() {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
    resetAutoplay();
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 4500);
}

autoplayInterval = setInterval(nextSlide, 4500);

// ==========================================
// STARS BACKGROUND (Page 1 Slide 1)
// ==========================================
const starsContainer = document.getElementById('starsContainer');
for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --d: ${1 + Math.random() * 3}s;
      width: ${Math.random() > 0.8 ? 3 : 2}px;
      height: ${Math.random() > 0.8 ? 3 : 2}px;
      animation-delay: ${Math.random() * 3}s;
    `;
    starsContainer.appendChild(star);
}

// ==========================================
// TYPING ANIMATION FOR HERO BADGE
// ==========================================
// Contact form
document.querySelector('.form-submit').addEventListener('click', function () {
    this.textContent = '✓ MESSAGE SENT!';
    this.style.background = 'linear-gradient(90deg, var(--neon-green), #00aa00)';
    setTimeout(() => {
        this.textContent = 'SEND MESSAGE ›';
        this.style.background = '';
    }, 3000);
});