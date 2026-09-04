/* ============================================================
   HERTS SIGNS GROUP — SHARED SCRIPT
   Handles: page-load hero reveal, scroll-triggered reveals,
   subtle parallax on the van imagery, and the mobile nav toggle.
   All motion is skipped automatically if the visitor has
   "reduce motion" set at the OS level.
   ============================================================ */

(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Page-load hero sequence ----
  // Adding [data-loaded] on body triggers the CSS transitions
  // defined for ".hero .reveal-up" / ".reveal-fade".
  requestAnimationFrame(function () {
    document.body.setAttribute('data-loaded', 'true');
  });

  // ---- Scroll-triggered reveals (below the hero) ----
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('section .reveal-up, section .reveal-fade');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // No JS support or reduced motion: show everything immediately
    document.querySelectorAll('.reveal-up, .reveal-fade').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ---- Subtle parallax on van imagery ----
  if (!reduceMotion) {
    var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    if (parallaxEls.length) {
      var ticking = false;
      function updateParallax() {
        var viewportH = window.innerHeight;
        parallaxEls.forEach(function (el) {
          var strength = parseFloat(el.getAttribute('data-parallax')) || 0.1;
          var rect = el.getBoundingClientRect();
          var centerOffset = (rect.top + rect.height / 2) - viewportH / 2;
          el.style.transform = 'translateY(' + (centerOffset * -strength * 0.1) + 'px)';
        });
        ticking = false;
      }
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }, { passive: true });
      updateParallax();
    }
  }

  // ---- Stat counters: count up from zero on scroll ----
  // Opt in by adding class "count-up" to a stat's number element.
  // The target is read from the element's own text, so Jon only ever
  // edits the figure in the HTML — no duplicate value to keep in sync.
  // Any leading/trailing non-digits (e.g. the "+" in "30+") are preserved.
  var counters = Array.prototype.slice.call(document.querySelectorAll('.count-up'));
  if (counters.length) {
    counters.forEach(function (el) {
      var parts = el.textContent.trim().match(/^(\D*)([\d,]+)(\D*)$/);
      if (!parts) { return; }
      el.setAttribute('data-prefix', parts[1]);
      el.setAttribute('data-target', parts[2].replace(/,/g, ''));
      el.setAttribute('data-suffix', parts[3]);
    });

    function runCount(el) {
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      var target = parseInt(el.getAttribute('data-target'), 10) || 0;
      var duration = 1600;
      var start = null;
      function step(now) {
        if (start === null) { start = now; }
        var progress = Math.min((now - start) / duration, 1);
        // easeOutExpo — fast start, gentle settle onto the final figure
        var eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        var current = Math.round(target * eased);
        el.textContent = prefix + current.toLocaleString('en-GB') + suffix;
        if (progress < 1) { requestAnimationFrame(step); }
      }
      requestAnimationFrame(step);
    }

    if (!reduceMotion && 'IntersectionObserver' in window) {
      // Reset to zero only once we know we'll animate, so the count
      // has somewhere to start from.
      counters.forEach(function (el) {
        if (!el.hasAttribute('data-target')) { return; }
        el.textContent = (el.getAttribute('data-prefix') || '') + '0' +
          (el.getAttribute('data-suffix') || '');
      });
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) {
        if (el.hasAttribute('data-target')) { countObserver.observe(el); }
      });
    }
    // Reduced motion or no IntersectionObserver: leave the real figure shown.
  }

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var primaryNav = document.querySelector('.primary-nav');
  if (toggle && primaryNav) {
    toggle.addEventListener('click', function () {
      var isOpen = primaryNav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ---- Work page: category filter tabs ----
  var filterTabs = document.querySelectorAll('.filter-tab');
  var workCards = document.querySelectorAll('#work-grid .work-card');
  if (filterTabs.length && workCards.length) {
    filterTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        filterTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        var filter = tab.getAttribute('data-filter');
        workCards.forEach(function (card) {
          var matches = filter === 'all' || card.getAttribute('data-category') === filter;
          card.hidden = !matches;
        });
      });
    });
  }

  // ---- Contact page: file attachment field ----
  // Shows the chosen files with sizes and a remove control, and accepts
  // drag-and-drop. Display only — submission is handled by whichever form
  // processor is wired up. No-ops on pages without the attachment field.
  var fileInput = document.getElementById('attachments');
  var fileList = document.getElementById('fileList');
  var fileDrop = document.querySelector('.file-drop');
  var supportsDataTransfer = typeof DataTransfer !== 'undefined';

  if (fileInput && fileList) {
    function formatSize(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    function setFiles(files) {
      if (!supportsDataTransfer) return;
      var dt = new DataTransfer();
      Array.prototype.forEach.call(files, function (f) { dt.items.add(f); });
      fileInput.files = dt.files;
      renderFiles();
    }

    function removeFile(index) {
      var kept = Array.prototype.filter.call(fileInput.files, function (f, i) {
        return i !== index;
      });
      setFiles(kept);
    }

    function renderFiles() {
      fileList.innerHTML = '';
      Array.prototype.forEach.call(fileInput.files, function (file, i) {
        var li = document.createElement('li');

        var name = document.createElement('span');
        name.className = 'file-name';
        name.textContent = file.name;

        var right = document.createElement('span');
        right.style.display = 'flex';
        right.style.alignItems = 'center';
        right.style.gap = '0.8rem';
        right.style.flex = '0 0 auto';

        var meta = document.createElement('span');
        meta.className = 'file-meta';
        meta.textContent = formatSize(file.size);
        right.appendChild(meta);

        if (supportsDataTransfer) {
          var remove = document.createElement('button');
          remove.type = 'button';
          remove.className = 'file-remove';
          remove.setAttribute('aria-label', 'Remove ' + file.name);
          remove.innerHTML = '&times;';
          remove.addEventListener('click', function () { removeFile(i); });
          right.appendChild(remove);
        }

        li.appendChild(name);
        li.appendChild(right);
        fileList.appendChild(li);
      });
    }

    fileInput.addEventListener('change', renderFiles);

    if (fileDrop && supportsDataTransfer) {
      ['dragenter', 'dragover'].forEach(function (ev) {
        fileDrop.addEventListener(ev, function (e) {
          e.preventDefault();
          fileDrop.classList.add('is-dragover');
        });
      });
      ['dragleave', 'drop'].forEach(function (ev) {
        fileDrop.addEventListener(ev, function (e) {
          e.preventDefault();
          fileDrop.classList.remove('is-dragover');
        });
      });
      fileDrop.addEventListener('drop', function (e) {
        var dropped = e.dataTransfer && e.dataTransfer.files;
        if (!dropped || !dropped.length) return;
        var dt = new DataTransfer();
        Array.prototype.forEach.call(fileInput.files, function (f) { dt.items.add(f); });
        Array.prototype.forEach.call(dropped, function (f) { dt.items.add(f); });
        fileInput.files = dt.files;
        renderFiles();
      });
    }
  }
})();
