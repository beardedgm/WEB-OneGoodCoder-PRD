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
    initFooterYear();
  }

  /* ============================================
     NAVIGATION
     ============================================ */
  function initNav() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');

    if (!nav) return;

    // Solid-background state once the page scrolls past the top. A 50px sentinel
    // at the document top is watched by an IntersectionObserver, so there is no
    // per-frame scroll handler. The observer fires once on load (initial state).
    var sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText =
      'position:absolute;top:0;left:0;width:1px;height:50px;pointer-events:none;';
    document.body.prepend(sentinel);

    new IntersectionObserver(function (entries) {
      nav.classList.toggle('nav--scrolled', !entries[0].isIntersecting);
    }).observe(sentinel);

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

    var nav = document.querySelector('.nav');
    var navHeight = nav ? nav.offsetHeight : 0;

    function setActive(id) {
      navLinks.forEach(function (link) {
        link.classList.toggle('nav__link--active', link.getAttribute('href') === '#' + id);
      });
    }

    // A section counts as "current" while it occupies the band just below the
    // nav (top of viewport down to ~45%). When several overlap, the one highest
    // on the page wins, so the active link tracks the section under the nav.
    var visible = new Set();
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });

        var topmost = null;
        visible.forEach(function (sec) {
          if (!topmost || sec.offsetTop < topmost.offsetTop) topmost = sec;
        });
        if (topmost) setActive(topmost.getAttribute('id'));
      },
      { rootMargin: '-' + navHeight + 'px 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
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

    // Cards are native <button>s, so Enter/Space already fire click.
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        openModal(this.getAttribute('data-modal'));
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

    // Trap focus inside the open modal so Tab can't reach the page behind it.
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !currentModal) return;

      var focusable = currentModal.querySelectorAll(
        'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      var active = document.activeElement;
      var inside = currentModal.contains(active);

      if (e.shiftKey) {
        if (active === first || !inside) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || !inside) {
        e.preventDefault();
        first.focus();
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

  /* ============================================
     FOOTER YEAR
     ============================================ */
  function initFooterYear() {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }
})();
