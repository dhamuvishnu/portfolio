document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
            
            // Minimal layout toggle for mobile styling
            if(navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(10, 12, 16, 0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid var(--border-color)';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

    // --- Active Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section, footer');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Checks if current scroll position is within the boundaries of a section
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // --- Elegant Button Scroll Event ---
    const viewWorkBtn = document.querySelector('a[href="#portfolio"]');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#portfolio').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Full Screen Lightbox Modal Logic ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const certImages = document.querySelectorAll('.gallery-item .image-container img');

    if (lightbox && lightboxImg) {
        // Open Lightbox when any certificate image container is clicked
        certImages.forEach(img => {
            img.parentElement.addEventListener('click', () => {
                lightbox.classList.add('show');
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                document.body.style.overflow = 'hidden'; // Prevents background page scrolling
            });
        });

        // Close functions helper
        const closeLightbox = () => {
            lightbox.classList.remove('show');
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 300); // Matches the CSS transition delay timing exactly
            document.body.style.overflow = 'auto'; // Restores page scrolling
        };

        // Close on 'X' click
        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

        // Close when clicking outside the certificate container canvas
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close when pressing the 'Escape' hardware key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('show')) {
                closeLightbox();
            }
        });
    }
});