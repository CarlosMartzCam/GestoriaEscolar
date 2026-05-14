const SHIELD_SVG = `<svg class="nav-logo-shield" viewBox="0 0 76 92" xmlns="http://www.w3.org/2000/svg">
  <path d="M38 4 L72 19 L72 54 Q72 76 38 88 Q4 76 4 54 L4 19 Z" fill="#1e4d2b" stroke="#e8b84b" stroke-width="2.5"/>
  <path d="M38 30 L52 36 L52 44 L38 50 L24 44 L24 36 Z" fill="white" opacity="0.95"/>
  <rect x="26" y="44" width="3" height="9" rx="1" fill="white" opacity="0.6"/>
  <circle cx="25" cy="55" r="3" fill="#e8b84b"/>
  <rect x="24" y="26" width="28" height="2.5" rx="1.25" fill="white" opacity="0.4"/>
</svg>`;

const ANN_BAR_HTML = `
<div class="ann-bar">
  <span>Consulta gratuita sin compromiso — Titulación por experiencia laboral</span>
<<<<<<< HEAD
  <a href="contacto.html">HABLAR CON ASESOR ↗</a>
=======
  <a href="https://wa.me/525659227963" target="_blank">HABLAR CON ASESOR ↗</a>
>>>>>>> 76ad32a9ec23e6e529785b83f0e4800e7d1e46a6
</div>`;

const NAV_HTML = `
<nav id="main-nav">
  <a href="index.html" class="nav-logo">
    ${SHIELD_SVG}
    <div class="nav-logo-text">Gestoría Escolar<span>Cecuifj</span></div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="index">Inicio</a></li>
    <li><a href="servicios.html" data-page="servicios">Programas</a></li>
    <li><a href="nosotros.html" data-page="nosotros">Nosotros</a></li>
    <li><a href="contacto.html" data-page="contacto">Contacto</a></li>
  </ul>
  <div class="nav-actions">
<<<<<<< HEAD
    <a href="contacto.html" class="btn-yellow">Consulta gratis</a>
=======
    <a href="https://wa.me/525659227963" target="_blank" class="btn-yellow">Consulta gratis</a>
>>>>>>> 76ad32a9ec23e6e529785b83f0e4800e7d1e46a6
    <a href="contacto.html" class="btn-outline-dark">Contáctanos</a>
  </div>
  <button class="nav-hamburger" id="hamburger" aria-label="Menú">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <a href="index.html" class="nav-logo" style="text-decoration:none">
        ${SHIELD_SVG}
        <div class="nav-logo-text">Gestoría Escolar<span>Cecuifj</span></div>
      </a>
      <p class="footer-brand-desc">Titulación por experiencia laboral con validez oficial ante la SEP. Licenciaturas, Maestrías y Doctorados.</p>
    </div>
    <div class="footer-col">
      <h4>Programas</h4>
      <ul>
        <li><a href="servicios.html#licenciaturas">Licenciaturas</a></li>
        <li><a href="servicios.html#maestrias">Maestrías</a></li>
        <li><a href="servicios.html#doctorados">Doctorados</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Empresa</h4>
      <ul>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li><a href="nosotros.html#proceso">Proceso</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </div>
    <div class="footer-col">
<<<<<<< HEAD
      <h4>Asesores</h4>
      <ul>
        <li><a href="https://wa.me/525516602103" target="_blank">Lic. Barush — WhatsApp</a></li>
        <li><a href="https://wa.me/525574666240" target="_blank">Lic. Diego — WhatsApp</a></li>
        <li><a href="https://wa.me/525536769215" target="_blank">Lic. Carla — WhatsApp</a></li>
        <li><a href="https://instagram.com/gestoria_escolar33" target="_blank">@gestoria_escolar33</a></li>
        <li><a href="https://tiktok.com/@gestoria.escolar" target="_blank">@gestoria.escolar</a></li>
=======
      <h4>Contacto</h4>
      <ul>
        <li><a href="https://wa.me/525659227963" target="_blank">WhatsApp</a></li>
        <li><a href="tel:+525659227963">+52 56 5922 7963</a></li>
        <li><a href="https://instagram.com/gestoria_escolar33" target="_blank">@gestoria_escolar33</a></li>
>>>>>>> 76ad32a9ec23e6e529785b83f0e4800e7d1e46a6
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Gestoría Escolar Cecuifj. Todos los derechos reservados.</p>
<<<<<<< HEAD
    <div style="display:flex;gap:16px;align-items:center;">
      <a href="https://wa.me/525516602103" target="_blank" class="footer-wa">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.867L.057 23.5l5.79-1.518A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.001-1.367l-.36-.213-3.718.975.99-3.619-.235-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        Barush
      </a>
      <a href="https://wa.me/525574666240" target="_blank" class="footer-wa">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.867L.057 23.5l5.79-1.518A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.001-1.367l-.36-.213-3.718.975.99-3.619-.235-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        Diego
      </a>
      <a href="https://wa.me/525536769215" target="_blank" class="footer-wa">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.867L.057 23.5l5.79-1.518A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.001-1.367l-.36-.213-3.718.975.99-3.619-.235-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        Carla
      </a>
    </div>
  </div>
</footer>
<a href="contacto.html" class="wa-float" title="Contacto">
=======
    <a href="https://wa.me/525659227963" target="_blank" class="footer-wa">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.867L.057 23.5l5.79-1.518A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.001-1.367l-.36-.213-3.718.975.99-3.619-.235-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
      +52 56 5922 7963
    </a>
  </div>
</footer>
<a href="https://wa.me/525659227963" target="_blank" class="wa-float" title="WhatsApp">
>>>>>>> 76ad32a9ec23e6e529785b83f0e4800e7d1e46a6
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.131.558 4.13 1.533 5.867L.057 23.5l5.79-1.518A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.001-1.367l-.36-.213-3.718.975.99-3.619-.235-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
</a>`;

function initComponents(activePage) {
  const annRoot = document.getElementById('ann-root');
  if (annRoot) annRoot.innerHTML = ANN_BAR_HTML;
  const navRoot = document.getElementById('nav-root');
  if (navRoot) navRoot.innerHTML = NAV_HTML;
  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) footerRoot.innerHTML = FOOTER_HTML;

  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', e => { if (!nav.contains(e.target)) nav.classList.remove('open'); });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
<<<<<<< HEAD
}
=======
}
>>>>>>> 76ad32a9ec23e6e529785b83f0e4800e7d1e46a6
