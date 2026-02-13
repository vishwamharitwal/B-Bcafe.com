import './style.css'

/**
 * 1. Global Error Handling (Production Safety)
 * Catches runtime errors that might break the experience.
 */
window.onerror = function (message, source, lineno, colno, error) {
  console.error('B&B Global Error:', { message, source, lineno, error });
  // In production, you would send this to Sentry/LogRocket
  return false;
};

console.log('B&B Premium Experience Initialized');

/**
 * Utility: Throttle
 * Prevents functions from firing too often (perf optimization)
 */
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

/**
 * Preloader & Initial Reveal
 */
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const body = document.body;

  // Simulate a slight delay for the logo animation to finish
  setTimeout(() => {
    if (preloader) preloader.classList.add('loaded');
    if (body) body.classList.remove('is-loading');

    // Trigger Hero Animations
    startHeroAnimations();
  }, 1500);
});

function startHeroAnimations() {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.classList.add('active');
}

/**
 * Custom Cursor (Optimized with requestAnimationFrame)
 */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  // Track mouse position only
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate loop
  function animateCursor() {
    // Dot follows immediately
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    // Outline follows with lerp (linear interpolation) for smoothness
    // This removes the heavy .animate() call on every frame
    outlineX += (mouseX - outlineX) * 0.1;
    outlineY += (mouseY - outlineY) * 0.1;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateCursor);
  }

  // Start loop
  animateCursor();

  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, .menu-card, .btn-primary, .tab-btn, .mobile-toggle');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}

/**
 * Menu Tabs Logic
 */
const tabBtns = document.querySelectorAll('.tab-btn');
const menuGrids = document.querySelectorAll('.menu-grid');

if (tabBtns.length > 0) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      menuGrids.forEach(grid => {
        grid.classList.remove('active-grid');
        setTimeout(() => {
          grid.style.display = 'none';
        }, 300);
      });

      const targetId = btn.getAttribute('data-tab');
      const targetGrid = document.getElementById(targetId);

      if (targetGrid) {
        setTimeout(() => {
          menuGrids.forEach(g => g.style.display = 'none');
          targetGrid.style.display = 'grid';
          void targetGrid.offsetWidth; // Force reflow
          targetGrid.classList.add('active-grid');
        }, 300);
      }
    });
  });
}

/**
 * Scroll Animations (IntersectionObserver)
 * Efficient by default, no change needed usually
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px"
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const scrollElements = document.querySelectorAll('.fade-scroll, .scroll-reveal');
scrollElements.forEach(el => scrollObserver.observe(el));

/**
 * Header Scroll Effect (Throttled)
 */
let lastScroll = 0;
const navbar = document.getElementById('navbar');

if (navbar) {
  // Navbar scroll logic removed as per user request (static/absolute positioning)
}

/**
 * Mobile Menu Toggle
 */
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-book-btn');
const body = document.body;

if (mobileToggle && mobileMenu) {
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  const toggleMenu = () => {
    const isActive = mobileMenu.classList.contains('active');
    if (isActive) {
      closeMenu();
    } else {
      mobileToggle.classList.add('active');
      mobileMenu.classList.add('active');
      if (mobileBackdrop) mobileBackdrop.classList.add('active');
      body.classList.add('no-scroll');
    }
  };

  const closeMenu = () => {
    mobileToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
    body.classList.remove('no-scroll');
  };

  mobileToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking the backdrop
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMenu);
  }

  // Close menu when a link is clicked
  const allMobileLinks = document.querySelectorAll('.mobile-link');
  allMobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * Hero Image Sequence Animation
 * NOW HANDLED INLINE IN index.html
 */
// Animation code moved to inline script in index.html for reliability
/*
document.addEventListener('DOMContentLoaded', () => {
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) {
    const context = heroCanvas.getContext('2d');
    const frameCount = 75; // Total frames: 079 - 005 + 1 = 75
    const startFrame = 5;
    const images = [];
    const fps = 18;
    let frameIndex = 0;
    let lastTime = 0;
    const interval = 1000 / fps;

    // Resize canvas to match display size
    function resizeHeroCanvas() {
      if (heroCanvas.clientWidth && heroCanvas.clientHeight) {
        heroCanvas.width = heroCanvas.clientWidth;
        heroCanvas.height = heroCanvas.clientHeight;
      } else {
        heroCanvas.width = window.innerWidth;
        heroCanvas.height = window.innerHeight;
      }
    }
    window.addEventListener('resize', resizeHeroCanvas);
    resizeHeroCanvas();

    // Generate filename with padding
    const currentHeroFrame = index => {
      const frameNumber = (index + startFrame).toString().padStart(3, '0');
      // No cache bust in production-like logic, but keep it for now if needed. 
      // Let's remove cache bust for cleaner URL if user says it works, but user said NO animation.
      // I'll keep it for now to be safe.
      const path = `/animation/Smooth_cinematic_transition_202602071505_6tn_${frameNumber}.jpg`;
      if (index === 0) console.log(`B&B: Loading animation frame at ${path}`);
      return path;
    };

    // Preload images
    const preloadHeroImages = () => {
      let loadedCount = 0;
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentHeroFrame(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === 5) { // Start sooner
            console.log('B&B: Animation starting...');
            requestAnimationFrame(animateHeroSequence);
          }
        };
        img.onerror = (e) => console.error(`B&B: Failed to load frame ${i}: ${img.src}`);
        images.push(img);
      }
    };

    const renderHeroFrame = index => {
      if (index >= images.length) return;
      const img = images[index];
      if (img.complete && img.naturalWidth > 0) {
        // Use 'contain' logic - entire image visible (zoomed out)
        const scale = Math.min(heroCanvas.width / img.width, heroCanvas.height / img.height);
        const x = (heroCanvas.width / 2) - (img.width / 2) * scale;
        const y = (heroCanvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    function animateHeroSequence(time) {
      if (time - lastTime > interval) {
        renderHeroFrame(frameIndex);
        frameIndex = (frameIndex + 1) % frameCount; // Loop
        lastTime = time;
      }
      requestAnimationFrame(animateHeroSequence);
    }

    // Start
    preloadHeroImages();
  }
});
*/

/**
 * PROFESSIONAL ENHANCEMENT: Smooth Scroll for Anchor Links
 * Handles smooth scrolling with navbar offset
 */
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^=\"#\"]');
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (!href || href === '#') return;

      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();

        // Calculate position with navbar offset
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });
});

/**
 * PROFESSIONAL ENHANCEMENT: Active Navigation State
 * Highlights the current section in the navigation
 */
window.addEventListener('scroll', throttle(() => {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^=\"#\"]');
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 100;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}, 100));
