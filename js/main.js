(function () {
  'use strict';

  var DATA = window.PORTFOLIO_DATA;
  if (!DATA) {
    console.error('[portfólio] js/data.js não foi carregado.');
    return;
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function el(tag, props, children) {
    var node = document.createElement(tag);
    props = props || {};

    Object.keys(props).forEach(function (key) {
      if (key === 'text') node.textContent = props[key];
      else if (key === 'class') node.className = props[key];
      else if (props[key] !== null && props[key] !== undefined) node.setAttribute(key, props[key]);
    });

    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });

    return node;
  }

  function bindText(key, value) {
    var nodes = document.querySelectorAll('[data-bind="' + key + '"]');
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = value;
  }

  function chipList(items, className) {
    return el('ul', { class: className }, items.map(function (item) {
      return el('li', {}, [el('span', { class: 'chip', text: item })]);
    }));
  }

  function staggerDelay(index) {
    return String(Math.min(index + 1, 6));
  }

  function renderProfile() {
    var p = DATA.profile;

    bindText('name', p.name);
    bindText('shortName', p.shortName || p.name);
    bindText('availability', p.availability);
    bindText('bio', p.bio);

    var chips = document.getElementById('heroChips');
    if (chips && p.highlights && p.highlights.length) {
      p.highlights.forEach(function (item) {
        chips.appendChild(el('li', {}, [el('span', { class: 'chip', text: item })]));
      });
    } else if (chips) {

      chips.remove();
    }

    var stats = document.getElementById('heroStats');
    if (stats && p.stats && p.stats.length) {
      p.stats.forEach(function (stat) {
        stats.appendChild(el('div', {}, [
          el('dt', { text: stat.value }),
          el('dd', { text: stat.label })
        ]));
      });
    } else if (stats) {
      stats.remove();
    }
  }

  function renderExperience() {
    var list = document.getElementById('timeline');
    if (!list) return;

    DATA.experience.forEach(function (job, index) {
      var card = el('div', { class: 'timeline__card' }, [
        el('span', { class: 'timeline__period', text: job.period }),
        el('h3', { class: 'timeline__role', text: job.role }),
        el('span', { class: 'timeline__company', text: job.company }),
        el('ul', { class: 'timeline__bullets' }, (job.bullets || []).map(function (bullet) {
          return el('li', { text: bullet });
        })),
        (job.tags && job.tags.length) ? chipList(job.tags, 'timeline__tags') : null
      ]);

      list.appendChild(el('li', {
        class: 'timeline__item',
        'data-reveal': '',
        'data-reveal-delay': staggerDelay(index)
      }, [card]));
    });
  }

  function renderEducation() {
    var list = document.getElementById('education');

    if (list) {
      (DATA.education || []).forEach(function (item, index) {
        var card = el('div', { class: 'timeline__card' }, [
          el('span', { class: 'timeline__period', text: item.period }),
          el('h3', { class: 'timeline__role', text: item.course }),
          el('span', { class: 'timeline__company', text: item.school }),
          item.status ? chipList([item.status], 'timeline__tags') : null
        ]);

        list.appendChild(el('li', {
          class: 'timeline__item',
          'data-reveal': '',
          'data-reveal-delay': staggerDelay(index)
        }, [card]));
      });
    }

    var certs = document.getElementById('certifications');
    if (!certs) return;

    (DATA.certifications || []).forEach(function (cert, index) {

      var name = el('span', { class: 'cert__name' });
      if (cert.url) {
        name.appendChild(el('a', {
          href: cert.url, target: '_blank', rel: 'noopener noreferrer', text: cert.name
        }));
      } else {
        name.textContent = cert.name;
      }

      certs.appendChild(el('li', {
        class: cert.url ? 'cert cert--link' : 'cert',
        'data-reveal': '',
        'data-reveal-delay': staggerDelay(index)
      }, [
        name,
        el('span', { class: 'cert__issuer', text: cert.issuer })
      ]));
    });
  }

  function renderProjects() {
    var grid = document.getElementById('projects');
    if (!grid) return;

    DATA.projects.forEach(function (project, index) {

      var titleInner = project.url
        ? el('a', { href: project.url, target: '_blank', rel: 'noopener noreferrer', text: project.title })
        : document.createTextNode(project.title);

      var title = el('h3', { class: 'project__title' });
      title.appendChild(titleInner);

      var links = el('div', { class: 'project__links' });
      if (project.url) {
        /* Quando o destino é o próprio repositório, o rótulo diz isso —
           "Ver projeto" apontando para o GitHub engana o visitante. */
        var paraGithub = /^https?:\/\/([^\/]*\.)?github\.com\//i.test(project.url);
        links.appendChild(el('a', {
          class: 'link-arrow', href: project.url, target: '_blank', rel: 'noopener noreferrer'
        }, [
          el('span', { text: paraGithub ? 'Ver no GitHub' : 'Ver projeto' }),
          el('span', { 'aria-hidden': 'true', text: paraGithub ? '↗' : '→' })
        ]));
      }
      if (project.repo) {
        links.appendChild(el('a', {
          class: 'link-arrow', href: project.repo, target: '_blank', rel: 'noopener noreferrer'
        }, [
          el('span', { text: 'Código' }),
          el('span', { 'aria-hidden': 'true', text: '↗' })
        ]));
      }

      if (project.extra && project.extra.url) {
        links.appendChild(el('a', {
          class: 'link-arrow', href: project.extra.url, target: '_blank', rel: 'noopener noreferrer'
        }, [
          el('span', { text: project.extra.label }),
          el('span', { 'aria-hidden': 'true', text: '↗' })
        ]));
      }

      grid.appendChild(el('article', {
        class: 'project',
        'data-reveal': '',
        'data-reveal-delay': staggerDelay(index)
      }, [

        project.image ? el('div', { class: 'project__cover' }, [
          el('img', {
            src: project.image,
            /* alt vazio de propósito: o título do card já descreve o projeto,
               e a capa viraria leitura duplicada no leitor de tela. */
            alt: project.imageAlt || '',
            width: '1200',
            height: '675',
            loading: 'lazy',
            decoding: 'async'
          })
        ]) : null,

        el('div', { class: 'project__head' }, [

          el('span', {
            class: 'project__index',
            'aria-hidden': 'true',
            text: ('0' + (index + 1)).slice(-2)
          }),
          el('span', { class: 'project__year', text: project.year || '' })
        ]),
        title,
        el('p', { class: 'project__desc', text: project.description }),
        (project.tags && project.tags.length) ? chipList(project.tags, 'project__tags') : null,
        links.childNodes.length ? links : null
      ]));
    });
  }

  function renderSkills() {
    var grid = document.getElementById('skills-grid');
    if (!grid) return;

    DATA.skills.forEach(function (group, index) {
      grid.appendChild(el('div', {
        class: 'skill-group',
        'data-reveal': '',
        'data-reveal-delay': staggerDelay(index)
      }, [
        el('h3', { class: 'skill-group__title', text: group.title }),
        chipList(group.items, 'skill-group__list')
      ]));
    });
  }

  function renderContact() {
    var mail = document.getElementById('contactMail');
    if (mail) {
      mail.href = 'mailto:' + DATA.contact.email;
      bindText('email', DATA.contact.email);
    }

    var list = document.getElementById('contactLinks');
    if (list) {
      DATA.contact.links.forEach(function (link) {

        var isExternal = /^https?:/i.test(link.url) || /\.pdf$/i.test(link.url);
        list.appendChild(el('li', {}, [
          el('a', {
            href: link.url,
            target: isExternal ? '_blank' : null,
            rel: isExternal ? 'noopener noreferrer' : null,
            text: link.label
          })
        ]));
      });
    }

    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function initTyping() {
    var target = document.querySelector('[data-bind="role"]');
    var roles = DATA.profile.roles || [];
    if (!target || !roles.length) return;

    target.textContent = '';
    var textNode = el('span', { text: '' });
    var caret = el('span', { class: 'caret', 'aria-hidden': 'true' });
    target.appendChild(textNode);
    target.appendChild(caret);

    if (reduceMotion.matches || roles.length === 1) {
      textNode.textContent = roles[0];
      caret.remove();
      return;
    }

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function tick() {
      var full = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      textNode.textContent = full.slice(0, charIndex);

      var delay = deleting ? 40 : 75;

      if (!deleting && charIndex === full.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 320;
      }

      window.setTimeout(tick, delay);
    }

    window.setTimeout(tick, 600);
  }

  function initReveal() {
    var items = document.querySelectorAll('[data-reveal]');

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-visible');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    for (var j = 0; j < items.length; j++) observer.observe(items[j]);
  }

  function initMobileNav() {
    var nav = document.getElementById('primaryNav');
    var toggle = document.getElementById('navToggle');
    var scrim = document.getElementById('navScrim');
    if (!nav || !toggle || !scrim) return;

    function isOpen() { return nav.classList.contains('is-open'); }

    function open() {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
      scrim.hidden = false;
      window.requestAnimationFrame(function () { scrim.classList.add('is-visible'); });
    }

    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
      scrim.classList.remove('is-visible');
      window.setTimeout(function () { if (!isOpen()) scrim.hidden = true; }, 320);
    }

    toggle.addEventListener('click', function () {
      if (isOpen()) close(); else open();
    });

    scrim.addEventListener('click', close);

    nav.addEventListener('click', function (event) {
      if (event.target.closest('.nav__link')) close();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        close();
        toggle.focus();
      }
    });

    window.matchMedia('(min-width: 901px)').addEventListener('change', function (event) {
      if (event.matches && isOpen()) close();
    });
  }

  function initScrollUI() {
    var header = document.getElementById('siteHeader');
    var nav = document.getElementById('primaryNav');
    var indicator = nav ? nav.querySelector('.nav__indicator') : null;
    var bar = document.getElementById('scrollBar');
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));

    var sections = links.map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    }).filter(Boolean);

    var activeLink = null;
    var ticking = false;

    function moveIndicator(link) {
      if (!indicator || !nav) return;
      indicator.style.width = link.offsetWidth + 'px';
      indicator.style.transform = 'translate(' + link.offsetLeft + 'px, -50%)';
      nav.classList.add('is-active');

      window.requestAnimationFrame(function () { nav.classList.add('is-ready'); });
    }

    function setActive(link) {
      if (link === activeLink) return;
      if (activeLink) activeLink.removeAttribute('aria-current');
      activeLink = link;
      if (!link) return;
      link.setAttribute('aria-current', 'true');
      moveIndicator(link);
    }

    function update() {
      ticking = false;

      var scrollY = window.scrollY || window.pageYOffset;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (bar) bar.style.transform = 'scaleX(' + (docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0) + ')';
      if (header) header.classList.toggle('is-scrolled', scrollY > 8);

      var probe = (header ? header.offsetHeight : 72) + 24;
      var current = sections[0];

      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= probe) current = section;
      });

      if (docHeight > 0 && scrollY >= docHeight - 2) current = sections[sections.length - 1];

      if (current) {
        setActive(links.find(function (link) {
          return link.getAttribute('href') === '#' + current.id;
        }));
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () {
      if (activeLink) moveIndicator(activeLink);
      onScroll();
    });

    if (window.ResizeObserver && nav) {
      var list = nav.querySelector('.nav__list');
      if (list) {
        new ResizeObserver(function () {
          if (activeLink) moveIndicator(activeLink);
        }).observe(list);
      }
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        if (activeLink) moveIndicator(activeLink);
      });
    }

    update();
  }

  function initCardGlow() {
    if (reduceMotion.matches || !window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.project').forEach(function (card) {
      card.addEventListener('mousemove', function (event) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
      });
    });
  }

  renderProfile();
  renderExperience();
  renderEducation();
  renderProjects();
  renderSkills();
  renderContact();

  initTyping();
  initReveal();
  initMobileNav();
  initScrollUI();
  initCardGlow();
})();
