// RO-ROYAL - Le Royaume de l'Élégance - JavaScript

// ===== NAVIGATION SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SMOOTH SCROLL TO SECTION =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== SCROLL TO TOP =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
        observer.observe(element);
    });
});

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroBackground = document.querySelector('.hero-background img');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});

// ===== PRELOAD IMAGES =====
window.addEventListener('load', function() {
    // Get all images on the page
    const images = document.querySelectorAll('img');
    
    images.forEach(function(img) {
        // Add loaded class for smooth fade-in
        img.addEventListener('load', function() {
            img.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    let currentSection = '';
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// ===== MOBILE MENU TOGGLE (OPTIONAL) =====
function toggleMobileMenu() {
    const menu = document.querySelector('.navbar-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// ===== PREVENT DEFAULT FOR ANCHOR LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c RO-ROYAL ', 'background: #D4AF37; color: #1A1A1A; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Le Royaume de l\'Élégance ', 'color: #D4AF37; font-size: 16px; font-style: italic;');
console.log('Bienvenue dans notre royaume digital.');

// ===== CURSOR TRAIL EFFECT (OPTIONAL LUXURY FEATURE) =====
let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const optimizedScroll = debounce(function() {
    // Any heavy scroll operations can go here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ===== FORM VALIDATION (FOR FUTURE BOOKING FORM) =====
function validateBookingForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim() === '') {
        errors.push('Le nom est requis');
    }
    
    if (!formData.email || !formData.email.includes('@')) {
        errors.push('Email valide requis');
    }
    
    if (!formData.phone || formData.phone.length < 10) {
        errors.push('Numéro de téléphone valide requis');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// ===== LOCAL STORAGE FOR USER PREFERENCES =====
function saveUserPreference(key, value) {
    try {
        localStorage.setItem('roroyal_' + key, JSON.stringify(value));
    } catch (e) {
        console.warn('LocalStorage not available');
    }
}

function getUserPreference(key) {
    try {
        const value = localStorage.getItem('roroyal_' + key);
        return value ? JSON.parse(value) : null;
    } catch (e) {
        console.warn('LocalStorage not available');
        return null;
    }
}

// ===== SMOOTH REVEAL ON SCROLL =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in');
    
    reveals.forEach(function(element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', debounce(revealOnScroll, 50));

// ===== IMAGE LAZY LOADING FALLBACK =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe lazy images if they exist
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function(img) {
        imageObserver.observe(img);
    });
}

// ===== ANALYTICS TRACKING (PLACEHOLDER) =====
function trackEvent(category, action, label) {
    // Placeholder for analytics integration
    console.log('Event tracked:', {
        category: category,
        action: action,
        label: label
    });
    
    // Example: Google Analytics integration
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            trackEvent('CTA', 'click', button.textContent.trim());
        });
    });
});

// ===== PAGE LOAD PERFORMANCE =====
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Page chargée en ' + loadTime + 'ms');
    
    trackEvent('Performance', 'page_load', loadTime + 'ms');
});

// ===== EASTER EGG (OPTIONAL) =====
let clickCount = 0;
const logo = document.querySelector('.navbar-logo');

if (logo) {
    logo.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 5) {
            console.log('%c 👑 Vous avez découvert un secret royal! 👑 ', 'background: #D4AF37; color: #1A1A1A; font-size: 16px; padding: 10px;');
            clickCount = 0;
        }
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('RO-ROYAL website initialized');
    
    // Initial reveal check
    revealOnScroll();
    
    // Add smooth scroll behavior to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                scrollToSection(targetId);
            }
        });
    });
});
