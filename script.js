// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add hero decorative elements
    const heroSection = document.querySelector('.hero');
    const heroDecoration = document.createElement('div');
    heroDecoration.className = 'hero-decoration';
    
    // Create floating dots
    for(let i = 0; i < 5; i++) {
        const span = document.createElement('span');
        span.style.left = `${Math.random() * 100}%`;
        span.style.top = `${Math.random() * 100}%`;
        span.style.animationDelay = `${Math.random() * 5}s`;
        heroDecoration.appendChild(span);
    }
    
    heroSection.appendChild(heroDecoration);
    
    // Preloader with animation
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
                
                // Start entrance animations after preloader
                document.querySelectorAll('.section-title, .about-content, .timeline-item, .project-card, .cert-card')
                    .forEach(el => el.classList.add('animate'));
                
                // Start typing effect
                const typingText = document.querySelector('.typing-text');
                if (typingText) {
                    startTypingEffect(typingText);
                }
            }, 500);
        }, 1500);
    });
    
    // Typing effect
    function startTypingEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary)';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            } else {
                element.style.borderRight = 'none';
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // Mobile Menu
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show-mobile');
            
            // Create overlay for mobile menu
            let overlay = document.querySelector('.mobile-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay';
                document.body.appendChild(overlay);
                
                overlay.addEventListener('click', function() {
                    navLinks.classList.remove('show-mobile');
                    overlay.classList.remove('show');
                    mobileToggle.querySelector('i').className = 'fas fa-bars';
                });
            }
            
            overlay.classList.toggle('show');
            
            // Toggle icon
            const icon = mobileToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show-mobile');
            document.querySelector('.mobile-menu-overlay')?.classList.remove('show');
            mobileToggle.querySelector('i').className = 'fas fa-bars';
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Back to Top Button with smooth animation
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth Scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Certificate Modal with animations
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');
    const closeModal = document.querySelector('.close-modal');
    
    document.querySelectorAll('.view-cert').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.closest('.cert-image').querySelector('img').src;
            modal.style.display = 'flex';
            modalImg.src = imgSrc;
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Contact Form with validation and animation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let valid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'var(--accent)';
                    input.classList.add('shake-on-hover');
                    setTimeout(() => {
                        input.classList.remove('shake-on-hover');
                    }, 500);
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (valid) {
                // Show success message
                const button = contactForm.querySelector('button');
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                button.style.background = 'var(--gradient-success)';
                
                setTimeout(() => {
                    contactForm.reset();
                    button.innerHTML = originalText;
                    button.style.background = '';
                    
                    // Create toast notification
                    const toast = document.createElement('div');
                    toast.className = 'toast-notification';
                    toast.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message! I will get back to you soon.';
                    document.body.appendChild(toast);
                    
                    setTimeout(() => {
                        toast.classList.add('show');
                    }, 100);
                    
                    setTimeout(() => {
                        toast.classList.remove('show');
                        setTimeout(() => {
                            toast.remove();
                        }, 300);
                    }, 5000);
                }, 2000);
            }
        });
    }
    
    // Toast notification styling
    const style = document.createElement('style');
    style.textContent = `
        .toast-notification {
            position: fixed;
            bottom: 30px;
            left: 30px;
            background: var(--secondary);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            z-index: 1000;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .toast-notification.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        .toast-notification i {
            color: var(--success);
            margin-right: 10px;
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
    
    // Scroll reveal animation
    function revealOnScroll() {
        const elements = document.querySelectorAll('.section-title, .timeline-item, .project-card, .cert-card, .education-box, .about-content > *, .awards-container > *');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    
    // Add animation class to all skill tags with delay
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('animate');
    });
    
    // Add random floating animation to certain elements
    const floatingElements = document.querySelectorAll('.profile-image, .cert-icon i, .section-title::before');
    floatingElements.forEach(element => {
        element.style.animationDelay = `${Math.random() * 2}s`;
        element.classList.add('floating');
    });
});