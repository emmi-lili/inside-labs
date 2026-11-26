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

// ---------- RENDER ----------
document.getElementById('app').innerHTML = navbar + hero;
