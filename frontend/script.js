// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-black/95');
    } else {
        navbar.classList.add('bg-black/95');
        navbar.classList.remove('bg-black');
    }
});

// Gallery functionality
const screenshots = [
    'pictures/xray-screenshots/desktop-1.png',
    'pictures/xray-screenshots/desktop-2.png',
    'pictures/xray-screenshots/desktop-3.png',
    'pictures/xray-screenshots/desktop-4.png',
    'pictures/xray-screenshots/desktop-5.png',
    'pictures/xray-screenshots/desktop-6.png',
    'pictures/xray-screenshots/desktop-7.png'
];

let currentImageIndex = 0;

function openModal(src, index) {
    currentImageIndex = index;
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').classList.remove('hidden');
    document.getElementById('imageModal').classList.add('flex');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
    document.getElementById('imageModal').classList.remove('flex');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % screenshots.length;
    document.getElementById('modalImage').src = screenshots[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + screenshots.length) % screenshots.length;
    document.getElementById('modalImage').src = screenshots[currentImageIndex];
}

function scrollGallery(amount) {
    const gallery = document.getElementById('gallery');
    gallery.scrollBy({ left: amount, behavior: 'smooth' });
}

// Mouse wheel scrolling for gallery
window.addEventListener('load', () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        gallery.addEventListener('wheel', (e) => {
            e.preventDefault();
            gallery.scrollLeft += e.deltaY;
        });
    }
});