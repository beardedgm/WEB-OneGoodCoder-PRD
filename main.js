/* ============================================
   DERRICK DEDMON - Portfolio JS
   Vanilla JS, no dependencies
   ============================================ */

(function () {
  'use strict';

  /* --- DOM Ready --- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNav();
    initSmoothScroll();
    initScrollSpy();
    initRevealAnimations();
    initPortfolioModals();
    initPrintResume();
  }

  /* ============================================
     NAVIGATION
     ============================================ */
  function initNav() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');

    if (!nav) return;

    // Scroll effect - solid background
    function handleScroll() {
      if (window.scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    // Mobile menu toggle
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        const isOpen = links.classList.toggle('nav__links--open');
        toggle.classList.toggle('nav__toggle--open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close menu on link click
      links.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
          links.classList.remove('nav__links--open');
          toggle.classList.remove('nav__toggle--open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });

      // Close menu on escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && links.classList.contains('nav__links--open')) {
          links.classList.remove('nav__links--open');
          toggle.classList.remove('nav__toggle--open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
          toggle.focus();
        }
      });
    }
  }

  /* ============================================
     SMOOTH SCROLL
     ============================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#' || href === '#top') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        var target;
        try {
          target = document.querySelector(href);
        } catch (_) {
          return;
        }

        if (target) {
          e.preventDefault();
          var navHeight = document.querySelector('.nav')
            ? document.querySelector('.nav').offsetHeight
            : 0;
          var top = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ============================================
     SCROLL SPY
     ============================================ */
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav__link[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    function onScroll() {
      var scrollY = window.scrollY;
      var navHeight = document.querySelector('.nav')
        ? document.querySelector('.nav').offsetHeight
        : 0;

      var current = '';

      sections.forEach(function (section) {
        var top = section.offsetTop - navHeight - 100;
        var bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove('nav__link--active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('nav__link--active');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================
     REVEAL ANIMATIONS (Intersection Observer)
     ============================================ */
  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach(function (el) {
        el.classList.add('reveal--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================
     PORTFOLIO MODALS
     ============================================ */
  function initPortfolioModals() {
    var cards = document.querySelectorAll('[data-modal]');
    var backdrop = document.querySelector('.modal-backdrop');

    if (!cards.length || !backdrop) return;

    var currentModal = null;

    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        openModal(this.getAttribute('data-modal'));
      });

      // Keyboard support
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(this.getAttribute('data-modal'));
        }
      });
    });

    function openModal(id) {
      var modal = document.getElementById(id);
      if (!modal) return;

      currentModal = modal;
      backdrop.classList.add('modal-backdrop--visible');
      modal.classList.add('modal--visible');
      document.body.style.overflow = 'hidden';

      // Focus the close button
      var closeBtn = modal.querySelector('.modal__close');
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      if (!currentModal) return;

      backdrop.classList.remove('modal-backdrop--visible');
      currentModal.classList.remove('modal--visible');
      document.body.style.overflow = '';

      // Return focus to the card that opened it
      var trigger = document.querySelector('[data-modal="' + currentModal.id + '"]');
      if (trigger) trigger.focus();

      currentModal = null;
    }

    // Close on backdrop click
    backdrop.addEventListener('click', closeModal);

    // Close buttons
    document.querySelectorAll('.modal__close').forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });

    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && currentModal) {
        closeModal();
      }
    });

    // Prevent modal content click from closing
    document.querySelectorAll('.modal').forEach(function (modal) {
      modal.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  }

  /* ============================================
     PRINT RÉSUMÉ
     ============================================ */
  function initPrintResume() {
    var btn = document.getElementById('print-resume');
    if (!btn) return;
    btn.addEventListener('click', function () {
      window.print();
    });
  }
})();
