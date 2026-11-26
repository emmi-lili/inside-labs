/* ============================================================
   Digital Lab — landing page renderizada en JavaScript
   El contenido se genera aquí y se inyecta en #app.
   ============================================================ */

// Isotipo reutilizable (SVG)
const iso = `
  <svg class="iso" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="28" height="28" rx="9" fill="#1DB81D"/>
    <path d="M11 22V10.5C11 9.7 11.7 9 12.5 9H21.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M11 16H18.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
  </svg>`;

// Avatares de clientes (fotos de ejemplo)
const avatars = [
  { cls: 'a1', img: 'https://i.pravatar.cc/200?img=12' },
  { cls: 'a2', img: 'https://i.pravatar.cc/200?img=32' },
  { cls: 'a3', img: 'https://i.pravatar.cc/200?img=5'  },
  { cls: 'a4', img: 'https://i.pravatar.cc/200?img=47' },
  { cls: 'a5', img: 'https://i.pravatar.cc/200?img=15' },
];

// ---------- NAVBAR ----------
const navbar = `
  <div class="nav-outer">
    <nav class="nav">
      <a class="brand" href="#inicio">${iso}<span>Digital Lab</span></a>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a href="#contacto" class="btn btn-primary nav-cta">Contacto</a>
      <button class="burger" aria-label="Menú"><span></span><span></span><span></span></button>
    </nav>
  </div>`;

// ---------- HERO ----------
const hero = `
  <header class="hero" id="inicio">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <span class="eyebrow"><span class="dot"></span>Agentes de IA para vender más</span>
        <h1>Conoce a tus<br><span class="accent">Clientes</span></h1>
        <p class="sub">Creamos tu página web y un agente de IA que conversa con cada visitante, entiende qué busca y lo acompaña hasta la venta.</p>
        <div class="hero-actions">
          <a href="#contacto" class="btn btn-primary">Agenda una reunión</a>
          <a href="#nosotros" class="btn btn-ghost">Ver cómo funciona →</a>
        </div>
      </div>

      <div class="hero-visual">
        <svg class="arrow-svg" viewBox="0 0 520 480" fill="none" preserveAspectRatio="none">
          <path d="M70 70 C 200 20, 260 150, 180 230 S 120 380, 300 400 C 400 410, 470 350, 490 280"
                stroke="#1DB81D" stroke-width="2" stroke-dasharray="6 7" stroke-linecap="round" opacity=".55"/>
          <path d="M478 300 l12 -22 l12 20" stroke="#1DB81D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".55"/>
        </svg>

        ${avatars.map(a => `<img class="avatar ${a.cls}" src="${a.img}" alt="Cliente" loading="lazy" />`).join('')}

        <div class="card-group">
          <div class="v-tab"><span>Dashboard</span></div>
          <div class="metric-card">
            <div class="mc-head">
              <span class="mc-tag"><i></i>Insights</span>
              <span class="mc-tag" style="color:#bbb">▦</span>
            </div>
            <svg class="mc-chart" width="190" height="56" viewBox="0 0 190 56">
              <polyline points="0,46 28,40 52,44 80,26 108,32 136,14 164,18 190,4"
                fill="none" stroke="#1DB81D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="190" cy="4" r="4.5" fill="#1DB81D" stroke="#fff" stroke-width="2"/>
            </svg>
            <div class="mc-value">1.2k <small>+Leads</small></div>
          </div>
          <div class="report-card">
            <div class="rc-top">▲ Report</div>
            <div class="rc-big">+38%</div>
          </div>
        </div>

        <div class="pill-insights">Brand insights <span class="toggle"></span></div>
      </div>
    </div>

    <div class="scroll-ind">SCROLL<span class="line"></span></div>
  </header>`;

// ---------- LOGOS ----------
const logos = `
  <section class="logos">
    <div class="wrap">
      <p>NEGOCIOS QUE YA VENDEN CON DIGITAL LAB</p>
      <div class="logo-row">
        <span>Norvia</span><span>Lumen&amp;Co</span><span>Estudio9</span><span>Pampa</span><span>Veloz</span><span>Kairo</span>
      </div>
    </div>
  </section>`;

// ---------- BENEFITS ----------
const benefits = `
  <section class="section-pad" id="servicios">
    <div class="wrap center">
      <span class="kicker">Por qué Digital Lab</span>
      <h2 class="section-title">Cada visita es una venta esperando</h2>
      <p class="section-lead">Tu web se llena de visitantes… pero casi todos se van sin comprar. Tu agente de IA cambia esa historia.</p>
      <div class="grid-3" style="text-align:left">
        <div class="card">
          <div class="ic"><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
          <h3>Responde en el segundo cero</h3>
          <p>La mayoría compra a quien contesta primero. Tu agente responde al instante, cada vez, sin hacer esperar a nadie.</p>
        </div>
        <div class="card">
          <div class="ic"><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
          <h3>Vende a toda hora</h3>
          <p>No pierdas la venta de las 11 de la noche. Tu agente atiende, asesora y cierra mientras tú duermes o atiendes lo demás.</p>
        </div>
        <div class="card">
          <div class="ic"><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
          <h3>Convierte, no solo informa</h3>
          <p>Tu web deja de ser un catálogo pasivo: guía a cada visitante, resuelve sus dudas y lo lleva de la mano hasta el “sí”.</p>
        </div>
      </div>
    </div>
  </section>`;

// ---------- HOW IT WORKS ----------
const steps = `
  <section class="section-pad" id="nosotros" style="background:#fafafa">
    <div class="wrap center">
      <span class="kicker">Cómo funciona</span>
      <h2 class="section-title">De visita a venta en 3 pasos</h2>
      <div class="steps">
        <div class="step"><div class="num">1</div><h3>Diseñamos tu web</h3><p>Creamos una página rápida, bonita y pensada para vender, lista en días —no en meses.</p></div>
        <div class="step"><div class="num">2</div><h3>Entrenamos tu agente</h3><p>Tu agente de IA aprende tu negocio, tus productos y tu forma de hablar con los clientes.</p></div>
        <div class="step"><div class="num">3</div><h3>Empieza a vender solo</h3><p>Lo publicamos y tu agente comienza a atender, responder y cerrar ventas desde el primer día.</p></div>
      </div>
    </div>
  </section>`;

// ---------- RESULTS ----------
const results = `
  <section class="section-pad results">
    <div class="wrap center">
      <span class="kicker">Resultados</span>
      <h2 class="section-title">El final feliz: más ventas, menos esfuerzo</h2>
      <div class="metrics">
        <div class="metric"><div class="big">+42%</div><div class="lbl">más ventas en los primeros 90 días</div></div>
        <div class="metric"><div class="big v">24/7</div><div class="lbl">atención sin un solo descanso</div></div>
        <div class="metric"><div class="big">&lt;9s</div><div class="lbl">tiempo de respuesta promedio</div></div>
      </div>
    </div>
  </section>`;

// ---------- FINAL CTA ----------
const ctaFinal = `
  <section class="section-pad" id="contacto" style="padding-bottom:0">
    <div class="cta-final">
      <h2>Tu próximo cliente ya está en tu web. ¿Quién lo <span class="accent">atiende</span>?</h2>
      <p>Deja que Digital Lab construya tu página y tu agente de IA. Empieza a vender mientras lees este texto.</p>
      <a href="#" class="btn btn-primary">Quiero vender con IA</a>
    </div>
  </section>`;

// ---------- FOOTER ----------
const footer = `
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <a class="brand" href="#inicio" style="font-size:20px">${iso}<span>Digital Lab</span></a>
          <p style="font-size:14px;color:var(--ink-40);max-width:260px;margin-top:14px">Páginas web con agentes de IA que venden por ti, de día y de noche.</p>
          <div class="socials">
            <a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5-6.6L5.3 22H2l8-9.2L1.5 2h7l4.5 6zM17 20h1.6L7 4H5.3z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 112.5 6 2.5 2.5 0 014.98 3.5zM2.9 8.4h4.1V22H2.9zM9.3 8.4h3.9v1.9h.1c.5-1 1.9-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V22h-4.1v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V22H9.3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.5-.1 4.8c-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.1 15.5 2.1 15.2 2.1 12s0-3.5.1-4.8C2.3 4 3.8 2.4 7.1 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1018.6 12 6.6 6.6 0 0012 5.4zm0 10.9A4.3 4.3 0 1116.3 12 4.3 4.3 0 0112 16.3zm6.8-11.1a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z"/></svg></a>
          </div>
        </div>
        <div class="foot-links">
          <div class="foot-col"><h4>Producto</h4><a href="#servicios">Funciones</a><a href="#">Precios</a><a href="#">Integraciones</a><a href="#">Seguridad</a></div>
          <div class="foot-col"><h4>Empresa</h4><a href="#nosotros">Nosotros</a><a href="#">Blog</a><a href="#">Empleo</a><a href="#contacto">Contacto</a></div>
          <div class="foot-col"><h4>Legal</h4><a href="#">Privacidad</a><a href="#">Términos</a><a href="#">Cookies</a></div>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 Digital Lab. Todos los derechos reservados.</span>
        <span>Hecho para negocios que no quieren perder ni una sola venta.</span>
      </div>
    </div>
  </footer>`;

// ---------- RENDER ----------
document.getElementById('app').innerHTML =
  navbar + hero + logos + benefits + steps + results + ctaFinal + footer;
