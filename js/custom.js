const toggleButton = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');

// Mencegah default behavior
toggleButton.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (navbarCollapse.classList.contains('show')) {
        closeNavbar();
    } else {
        openNavbar();
    }
});

// Fungsi untuk membuka navbar
function openNavbar() {
    const overlay = createOverlay();
    document.body.appendChild(overlay);

    // Memberikan delay kecil untuk memastikan transisi berjalan
    setTimeout(() => {
        navbarCollapse.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Mencegah scroll
    }, 50);
}

// Fungsi untuk menutup navbar
function closeNavbar() {
    const overlay = document.querySelector('.navbar-overlay');
    navbarCollapse.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
        // Menunggu animasi selesai sebelum menghapus overlay
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
    document.body.style.overflow = ''; // Mengembalikan scroll
}

// Fungsi untuk membuat overlay
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'navbar-overlay';
    overlay.addEventListener('click', closeNavbar);
    return overlay;
}

// Menutup navbar ketika link diklik
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});

// Mencegah click event bubble ke parent
navbarCollapse.addEventListener('click', function (e) {
    e.stopPropagation();
});
