// ============================================
// TechAble ONG - JavaScript Principal
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // --- HAMBURGER MENU (Responsive) ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger
            hamburger.classList.toggle('open');
        });

        // Close menu when clicking a link (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    // --- CAROUSEL / SLIDER ---
    initCarousel();

    // --- DONATION TIERS SELECTION ---
    initDonationTiers();

    // --- CONTACT FORM ---
    initContactForm();

    // --- DONATION FORM ---
    initDonationForm();

    // --- MODALS (for project details) ---
    initModals();
});

// ============================================
// CAROUSEL
// ============================================
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Create dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto advance every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);

    // Pause on hover
    const carouselWrapper = document.querySelector('.carousel');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoSlide));
        carouselWrapper.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 5000);
        });
    }

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Touch swipe support (basic)
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });

    // Initial state
    updateCarousel();
}

// ============================================
// DONATION TIERS
// ============================================
function initDonationTiers() {
    const tiers = document.querySelectorAll('.tier');
    if (tiers.length === 0) return;

    tiers.forEach(tier => {
        tier.addEventListener('click', () => {
            // Deselect all
            tiers.forEach(t => t.classList.remove('selected'));
            // Select current
            tier.classList.add('selected');

            // Set hidden input or show amount (for demo)
            const amountEl = tier.querySelector('.amount');
            if (amountEl) {
                const amount = amountEl.textContent.trim().replace('$', '').replace('/mes', '');
                console.log('Monto seleccionado:', amount);
            }
        });
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.textContent : '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
        }

        // Simulate sending
        setTimeout(() => {
            showSuccessMessage(form, '¡Gracias! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.');
            form.reset();

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }, 1200);
    });
}

// ============================================
// DONATION FORM
// ============================================
function initDonationForm() {
    const form = document.getElementById('donationForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.textContent : '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Procesando donación...';
        }

        setTimeout(() => {
            showSuccessMessage(form, '¡Muchas gracias por tu donación! Tu aporte transforma vidas. Recibirás un correo con el comprobante.');
            form.reset();

            // Clear selected tier
            document.querySelectorAll('.tier').forEach(t => t.classList.remove('selected'));

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }, 1500);
    });
}

// ============================================
// SUCCESS MESSAGE
// ============================================
function showSuccessMessage(container, message) {
    // Remove existing messages
    const existing = container.parentNode.querySelector('.success-message');
    if (existing) existing.remove();

    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        background: #D1FAE5;
        color: #065F46;
        padding: 1.25rem 1.75rem;
        border-radius: 12px;
        margin: 1.5rem 0;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 600;
        border: 1px solid #A7F3D0;
    `;
    successDiv.innerHTML = `
        <span style="font-size:1.5rem">✅</span> 
        <span>${message}</span>
    `;

    container.parentNode.insertBefore(successDiv, container.nextSibling);

    // Auto remove after 6 seconds
    setTimeout(() => {
        if (successDiv && successDiv.parentNode) {
            successDiv.parentNode.removeChild(successDiv);
        }
    }, 6000);
}

// ============================================
// MODALS (Project Details)
// ============================================
function initModals() {
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Open modal function (called from HTML onclick)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// ANIMATED COUNTERS (Impact Stats)
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 1800;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Trigger when element is visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        observer.observe(counter);
    });
}

// Initialize counters
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
});