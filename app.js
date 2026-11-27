/* ============================================================
   Digital Lab — landing renderizada en JavaScript
   HERO: intacto (CSS propio + Poppins).
   Resto: sistema "Autonomous Kinetic Green" (Tailwind).
   ============================================================ */

// Tarjetas del arco 3D del HERO (placeholders en HTML/CSS; solo la foto es un avatar)
const heroCards = [
  d => `<div class="c-card c-lime" style="--d:${d}s"><div class="cc"><div class="cc-label">Conversaciones</div><div class="cc-metric">520k+</div><div class="cc-sub">este año</div></div></div>`,
  d => `<div class="c-card" style="--d:${d}s"><div class="cc"><div class="cc-label">Ingresos</div><div class="cc-bars"><span style="height:40%"></span><span style="height:65%"></span><span style="height:50%"></span><span style="height:85%"></span><span style="height:70%"></span></div></div></div>`,
  d => `<div class="c-card c-glass" style="--d:${d}s"><div class="plus">+</div></div>`,
  d => `<img class="c-card c-photo" style="--d:${d}s" src="https://i.pravatar.cc/260?img=32" alt="Cliente" loading="lazy" />`,
  d => `<div class="c-card" style="--d:${d}s"><div class="cc"><div class="cc-label">Conversión</div><svg class="cc-line" width="100%" height="54" viewBox="0 0 104 54" preserveAspectRatio="none"><polyline points="0,44 20,38 38,42 56,22 74,28 104,8" fill="none" stroke="#1A7FE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="cc-metric" style="font-size:20px">+38%</div></div></div>`,
  d => `<div class="c-card c-black" style="--d:${d}s"><div class="cc"><div class="cc-label">Agente IA</div><div class="cc-txt" style="margin-top:auto">Vendiendo 24/7 por ti.</div></div></div>`,
  d => `<div class="c-card" style="--d:${d}s"><div class="cc"><div class="cc-label">Cierre</div><div class="cc-donut"></div></div></div>`,
  d => `<div class="c-card" style="--d:${d}s"><div class="cc"><div class="cc-label">Rating</div><div class="cc-metric">4.9★</div><div class="cc-sub">4,900+ clientes</div></div></div>`,
  d => `<div class="c-card" style="--d:${d}s"><div class="cc"><div class="cc-label">Satisfacción</div><div class="cc-metric">98%</div><div class="cc-sub">renuevan</div></div></div>`,
];
// Coloca cada tarjeta en un arco cilíndrico (rotateY/translateZ/scale progresivos)
const heroArc = heroCards.map((card, i) => {
  const d = i - (heroCards.length - 1) / 2;
  const ad = Math.abs(d);
  const t = `rotateY(${(-d * 10).toFixed(1)}deg) translateZ(${(-ad * 52).toFixed(0)}px) translateY(${(ad * 9).toFixed(0)}px) scale(${(1 - ad * 0.05).toFixed(3)})`;
  return `<div class="c-slot" style="transform:${t}; z-index:${10 - Math.round(ad)}">${card((i * 0.35).toFixed(2))}</div>`;
}).join('');

// ---------- NAVBAR (rediseñado · sticky) ----------
const navbar = `
  <div class="sticky top-4 z-50 px-4 sm:px-8 max-w-7xl mx-auto">
    <nav class="backdrop-blur-md bg-white/80 border border-brand-border/70 rounded-full px-5 py-3 shadow-glass flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a class="flex items-center gap-2.5 group" href="#inicio">
          <div class="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center font-extrabold text-lg shadow-glow-sm group-hover:scale-105 transition-transform">D</div>
          <span class="font-extrabold text-lg tracking-tight text-brand-dark">Digital<span class="text-brand-500">Lab</span></span>
        </a>
        <div class="hidden sm:flex items-center gap-2 pl-3 border-l border-brand-border/80 text-xs font-medium text-emerald-800 bg-brand-50 px-2.5 py-1 rounded-full">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span class="font-tech tracking-wide font-semibold">Engine v3.4 Live</span>
        </div>
      </div>
      <div class="hidden md:flex items-center space-x-7 text-sm font-semibold text-gray-600">
        <a class="hover:text-brand-600 transition-colors" href="#comparativa">Paradigma</a>
        <a class="hover:text-brand-600 transition-colors" href="#squad">Agentes</a>
        <a class="hover:text-brand-600 transition-colors" href="#playground">Playground</a>
        <a class="hover:text-brand-600 transition-colors" href="#resultados">Resultados</a>
      </div>
      <a class="relative group inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold tracking-wide text-brand-dark bg-brand-500 hover:bg-[#00e377] rounded-full transition-all duration-300 shadow-glow-sm hover:shadow-glow-lg active:scale-95" href="#playground">
        <span>Activar Agente Demo</span>
        <svg class="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
      </a>
    </nav>
  </div>`;

// ---------- HERO (REDISEÑADO · sky card + arco 3D) ----------
// Contenido conservado del hero anterior (título, subtítulo, botones, links y logo).
const hero = `
  <header class="hero" id="inicio">
    <div class="hero-card">
      <nav class="hero-nav">
        <div class="hero-brand">
          <a class="hero-logo" href="#inicio"><span class="mark">D</span>DigitalLab</a>
          <span class="hero-live"><span class="pulse"></span>Engine v3.4 Live</span>
        </div>
        <div class="hero-links">
          <a href="#comparativa">Paradigma</a>
          <a href="#squad">Agentes</a>
          <a href="#playground">Playground</a>
          <a href="#resultados">Resultados</a>
        </div>
        <a class="hero-navbtn" href="#playground">Activar Agente Demo</a>
      </nav>

      <div class="hero-center">
        <h1 class="hero-title">Conoce a tus<br><span class="l2">Clientes</span></h1>
        <p class="hero-sub">Creamos tu página web y un agente de IA que conversa con cada visitante, entiende qué busca y lo acompaña hasta la venta.</p>
        <div class="hero-cta">
          <a class="hero-cta-sec" href="#comparativa">Ver cómo funciona</a>
          <a class="hero-cta-pri" href="#playground">Agenda una reunión <span class="arrow">↗</span></a>
        </div>
      </div>

      <div class="hero-carousel">${heroArc}</div>

      <div class="hero-rating">
        <!-- PLACEHOLDER rating: edita texto y nº de estrellas aquí -->
        <div class="rtext">Rated 4.9/5 by 4,900+ clients</div>
        <div class="stars">★★★★★</div>
      </div>
    </div>
  </header>`;

// ---------- SOCIAL PROOF (logos) ----------
const logos = `
  <section class="bg-white border-y border-brand-border/60 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">Ecosistemas B2B que escalan con Digital Lab</p>
      <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all text-sm font-bold text-gray-500">
        <span class="hover:text-brand-600 transition-colors">NORVIA TECH</span>
        <span class="hover:text-brand-600 transition-colors">LUMEN&amp;CO</span>
        <span class="hover:text-brand-600 transition-colors">ESTUDIO 9</span>
        <span class="hover:text-brand-600 transition-colors">PAMPA VENTURES</span>
        <span class="hover:text-brand-600 transition-colors">VELOZ LOGISTICS</span>
        <span class="hover:text-brand-600 transition-colors">KAIRO CAPITAL</span>
      </div>
    </div>
  </section>`;

// ---------- PARADIGM SHIFT ----------
const paradigm = `
  <section class="py-24 bg-white border-y border-brand-border/60" id="comparativa">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="text-xs font-extrabold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">Evolución Inevitable</span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4 tracking-tight">La web estática ha muerto. <br/><span class="text-brand-600">Bienvenido al Marketing Autónomo.</span></h2>
        <p class="text-gray-600 mt-4 text-base sm:text-lg">Tener un formulario estático de "Contáctanos" en 2026 es el equivalente digital a dejar un buzón de sugerencias vacío en una tienda desierta.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
        <div class="bg-gray-50/80 rounded-3xl p-8 border border-gray-200/80 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-36 h-36 bg-gray-200/50 rounded-full blur-2xl"></div>
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 text-red-700 text-xs font-bold mb-6">✕ Paradigma Antiguo: La Web Pasiva</div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">La Web Folleto &amp; Formularios Fantasma</h3>
            <p class="text-sm text-gray-500 mb-6 leading-relaxed">El visitante aterriza, navega sin guía, encuentra formularios genéricos y si decide escribir, tu equipo tarda 24 a 48 horas en contestar. El interés se esfumó.</p>
            <ul class="space-y-4 text-sm text-gray-600">
              <li class="flex items-start gap-3"><span class="text-red-500 font-bold">✕</span><span><strong>98% Tasa de Abandono:</strong> los visitantes se van sin dejar rastro.</span></li>
              <li class="flex items-start gap-3"><span class="text-red-500 font-bold">✕</span><span><strong>Respuesta tardía:</strong> contestas cuando el prospecto ya contrató a tu competidor.</span></li>
              <li class="flex items-start gap-3"><span class="text-red-500 font-bold">✕</span><span><strong>Experiencia fría:</strong> el mismo texto plano para un CEO que para un estudiante.</span></li>
            </ul>
          </div>
          <div class="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 font-medium">Resultado: ROI decreciente y leads con baja intención de compra.</div>
        </div>
        <div class="bg-gradient-to-b from-brand-50/70 to-white rounded-3xl p-8 border-2 border-brand-500/40 shadow-glow-sm flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-brand-500 text-white text-[11px] font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl shadow-sm tracking-wider">Recomendado</div>
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-700 text-xs font-bold mb-6">✓ Nueva Era: Digital Lab AI Agents</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">La Web Cognitiva y Proactiva</h3>
            <p class="text-sm text-gray-600 mb-6 leading-relaxed">Cada visitante recibe una bienvenida adaptada a su nicho, una propuesta de valor precisa y la oportunidad de resolver objeciones en segundos.</p>
            <ul class="space-y-4 text-sm text-gray-700">
              <li class="flex items-start gap-3"><span class="text-brand-500 font-bold text-base">✓</span><span><strong>Respuesta en &lt;1 segundo:</strong> interacción natural en el momento álgido de curiosidad.</span></li>
              <li class="flex items-start gap-3"><span class="text-brand-500 font-bold text-base">✓</span><span><strong>Perfilado Predictivo:</strong> la IA evalúa presupuesto, urgencia y fit técnico en tiempo real.</span></li>
              <li class="flex items-start gap-3"><span class="text-brand-500 font-bold text-base">✓</span><span><strong>Cierre y Agendamiento:</strong> reserva citas en Calendly/HubSpot o ejecuta checkouts.</span></li>
            </ul>
          </div>
          <div class="mt-8 pt-6 border-t border-brand-100 text-xs text-brand-700 font-bold flex items-center justify-between"><span>Conversión media observada: +42% a +180%</span><span class="flex h-2 w-2 rounded-full bg-brand-500"></span></div>
        </div>
      </div>
    </div>
  </section>`;

// ---------- MARKETPLACE ----------
const marketplace = `
  <section class="py-24 bg-[#FAFCFA] border-b border-brand-border/60 relative overflow-hidden" id="marketplace">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200 inline-flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping"></span>NOVEDAD // E-COMMERCE &amp; MARKETPLACE</span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4 tracking-tight leading-tight">Vende todo en un solo lugar. <br class="hidden sm:inline"/><span class="text-brand-600">Tu Tienda Virtual a 1 solo Click.</span></h2>
        <p class="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">Olvídate de configuraciones interminables. Sincroniza tus canales y publica tu tienda autónoma instantáneamente.</p>
      </div>
      <div class="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border/90 shadow-glass max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 rounded-2xl overflow-hidden border border-gray-100 bg-gradient-to-br from-brand-50 to-emerald-50 p-8 relative min-h-[260px]">
            <div class="absolute top-6 left-6 flex items-center gap-2 text-xs font-tech font-bold text-brand-700"><span class="w-2 h-2 rounded-full bg-brand-500"></span> store.digitallab.ai</div>
            <div class="grid grid-cols-3 gap-3 mt-12">
              ${[1,2,3,4,5,6].map(() => `<div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3"><div class="w-full h-12 rounded-lg bg-gradient-to-br from-brand-100 to-emerald-100 mb-2"></div><div class="h-2 w-3/4 bg-gray-200 rounded mb-1"></div><div class="h-2 w-1/2 bg-brand-200 rounded"></div></div>`).join('')}
            </div>
          </div>
          <div class="lg:col-span-5 space-y-6">
            <div>
              <span class="text-xs font-tech font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">Flujo Instantáneo</span>
              <h3 class="text-2xl font-extrabold text-gray-900 mt-2">De subir producto a tienda en vivo en 1 segundo</h3>
              <p class="text-sm text-gray-600 mt-2 leading-relaxed">El motor cognitivo clasifica imágenes, redacta fichas optimizadas para conversión y genera la interfaz completa al instante.</p>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-50/60 border border-brand-100"><div class="w-8 h-8 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-sm shadow-glow-sm shrink-0">⚡</div><div><div class="text-xs font-bold text-gray-900">1-Click Setup</div><div class="text-xs text-gray-500">Catálogo listo en segundos sin código</div></div></div>
              <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm"><div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">🤖</div><div><div class="text-xs font-bold text-gray-900">Agente Vendedor Integrado 24/7</div><div class="text-xs text-gray-500">Resuelve dudas y recomienda variantes</div></div></div>
              <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm"><div class="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center font-bold text-sm shrink-0">🛒</div><div><div class="text-xs font-bold text-gray-900">Checkout Unificado y Omnicanal</div><div class="text-xs text-gray-500">Pagos en 1-click vía Stripe &amp; Apple Pay</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// ---------- AI SQUAD ----------
const agent = (icon, badge, badgeCls, name, role, desc, rows, footLabel, footVal, footValCls, featured) => `
  <article class="bg-white rounded-3xl p-7 ${featured ? 'border-2 border-brand-500/50 shadow-glow-sm hover:shadow-glow-lg relative overflow-hidden' : 'border border-brand-border/90 shadow-glass hover:shadow-glow-sm hover:border-brand-400'} transition-all duration-300 flex flex-col justify-between group">
    ${featured ? '<div class="absolute -right-8 -top-8 w-24 h-24 bg-brand-400/20 rounded-full blur-xl pointer-events-none"></div>' : ''}
    <div>
      <div class="flex items-center justify-between mb-6">
        <div class="w-14 h-14 rounded-2xl ${featured ? 'bg-brand-500 text-white shadow-glow-sm' : 'bg-brand-50 border border-brand-100 text-brand-600'} flex items-center justify-center font-extrabold text-xl group-hover:scale-110 transition-transform">${icon}</div>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badgeCls}"><span class="w-1.5 h-1.5 rounded-full ${featured ? 'bg-white animate-ping' : 'bg-brand-500'}"></span>${badge}</span>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-1">${name}</h3>
      <p class="text-xs font-semibold text-brand-600 mb-4 font-tech tracking-wide uppercase">${role}</p>
      <p class="text-sm text-gray-600 leading-relaxed mb-6">${desc}</p>
      <div class="space-y-2 ${featured ? 'bg-brand-50/50 border-brand-100' : 'bg-[#F8FAF9] border-gray-100'} p-3.5 rounded-xl border text-xs">
        ${rows.map(r => `<div class="flex justify-between text-gray-500 font-medium"><span>${r[0]}</span><span class="${r[2] || 'text-gray-900'} font-bold">${r[1]}</span></div>`).join('')}
      </div>
    </div>
    <div class="mt-6 pt-5 border-t ${featured ? 'border-brand-100' : 'border-gray-100'} flex items-center justify-between text-xs">
      <span class="text-gray-400 font-medium">${footLabel}</span>
      <span class="font-extrabold ${footValCls} px-2 py-0.5 rounded">${footVal}</span>
    </div>
  </article>`;

const squad = `
  <section class="py-24 bg-[#FAFCFA] relative" id="squad">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">Tu Fuerza de Ventas Sintética</span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4 tracking-tight">Conoce al Squad Autónomo de Digital Lab</h2>
        <p class="text-gray-600 mt-4 text-base sm:text-lg">No un bot torpe de respuestas prefabricadas. Entrenamos modelos con tus casos de éxito, estructura de precios y argumentos de venta más persuasivos.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${agent('🏹','24/7 En Vivo','bg-emerald-50 text-emerald-700 border border-emerald-200','Agent Hunter','Detección &amp; Cualificación Activa','Monitorea el comportamiento de navegación para iniciar interacciones de altísima relevancia justo antes del abandono.',[['Especialidad:','Cualificación B2B'],['Tiempo de enganche:','Primeros 4 seg','text-brand-600']],'Precisión de scoring:','97.8%','text-emerald-800 bg-brand-50',false)}
        ${agent('⚡','Top Performer','bg-brand-500 text-white shadow-sm','Agent Closer','Derribo de Objeciones &amp; Cierre','Comprende dudas complejas sobre integraciones, seguridad o pricing, conectando con tu pasarela o calendario corporativo.',[['Especialidad:','Manejo de objeciones'],['Integraciones:','Stripe, Calendly, HubSpot','text-brand-600']],'Tasa de cierre en sesión:','+42% Boost','text-brand-700 bg-brand-100',true)}
        ${agent('🔄','Omnicanal','bg-emerald-50 text-emerald-700 border border-emerald-200','Agent Retarget','Reactivación WhatsApp &amp; Email','Si el usuario abandona, redacta correos y mensajes de WhatsApp 100% personalizados según lo que estuvo consultando.',[['Canales activos:','WhatsApp, Email, LinkedIn'],['Personalización:','Hiper-contextual','text-brand-600']],'Apertura de reactivación:','68% Open Rate','text-emerald-800 bg-brand-50',false)}
      </div>
    </div>
  </section>`;

// ---------- PLAYGROUND ----------
const playground = `
  <section class="py-24 bg-white border-y border-brand-border/60" id="playground">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">Sandbox Interactivo</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-4">Pruébalo ahora mismo: Selecciona tu industria</h2>
        <p class="text-gray-600 mt-2 text-sm sm:text-base">Mira cómo se adapta instantáneamente la personalidad, el tono y el gancho de venta de nuestro agente.</p>
      </div>
      <div class="bg-[#FAFCFA] rounded-3xl border border-brand-border p-6 sm:p-8 shadow-xl">
        <div class="flex flex-wrap gap-2.5 justify-center mb-8" id="industry-selector">
          <button class="industry-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-brand-500 text-brand-dark shadow-glow-sm" data-industry="saas" type="button">💼 SaaS &amp; B2B</button>
          <button class="industry-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-white border border-gray-200 text-gray-700 hover:border-brand-400" data-industry="ecommerce" type="button">🛍️ E-Commerce &amp; Retail</button>
          <button class="industry-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-white border border-gray-200 text-gray-700 hover:border-brand-400" data-industry="realestate" type="button">🏢 Inmobiliaria</button>
        </div>
        <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-4 sm:p-6 min-h-[280px] flex flex-col justify-between">
          <div class="space-y-4" id="dynamic-chat-content"></div>
          <div class="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
            <input class="w-full text-xs sm:text-sm bg-gray-50 border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all" id="demo-user-input" placeholder="Pregúntale cómo cerraría a un cliente escéptico..." type="text"/>
            <button class="px-5 py-2.5 bg-brand-dark text-white hover:bg-brand-600 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0" id="demo-send-btn" type="button">Probar Respuesta</button>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// ---------- METRICS ----------
const metric = (big, title, desc) => `
  <div class="bg-white rounded-3xl p-8 border border-brand-border text-center shadow-glass hover:-translate-y-1 transition-transform">
    <div class="text-4xl sm:text-5xl font-black font-tech tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500 mb-2">${big}</div>
    <div class="text-sm font-bold text-gray-800 mb-1">${title}</div>
    <div class="text-xs text-gray-500">${desc}</div>
  </div>`;

const metrics = `
  <section class="py-24 bg-[#FAFCFA] relative overflow-hidden" id="resultados">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="text-xs font-extrabold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">Tracción Comprobada</span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4 tracking-tight">El fin de las conjeturas en marketing</h2>
        <p class="text-gray-600 mt-4 text-base sm:text-lg">Métricas auditadas en más de 250.000 conversaciones autónomas durante el último trimestre.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${metric('+340%','Pipeline Generado','Crecimiento medido en los primeros 90 días de implementación.')}
        ${metric('&lt;8s','Tiempo de Respuesta','Cero colas de espera, disponible en cada huso horario mundial.')}
        ${metric('24/7','Operación Continua','Sin bajas por vacaciones, fatiga o desmotivación comercial.')}
        ${metric('12x','Retorno de Inversión','Comparado con contrataciones de SDR tradicionales iniciales.')}
      </div>
    </div>
  </section>`;

// ---------- FINAL CTA ----------
const ctaFinal = `
  <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div class="relative rounded-3xl bg-gradient-to-br from-brand-100 via-emerald-50 to-brand-200/50 p-10 sm:p-16 border border-brand-300/80 shadow-glow-sm overflow-hidden text-center">
      <div class="absolute -right-20 -top-20 w-80 h-80 bg-brand-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-2xl mx-auto space-y-6 relative z-10">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-brand-500 text-brand-dark shadow-sm uppercase tracking-wider">Despliegue Listo en 48 Horas</span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">¿Listo para convertir cada visita en una conversación de valor?</h2>
        <p class="text-base sm:text-lg text-emerald-950/80 font-normal">Configuramos tu sitio web autónomo, entrenamos los agentes de IA con tu conocimiento de producto y te entregamos la consola lista para cerrar ventas.</p>
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a class="w-full sm:w-auto px-8 py-4 bg-brand-dark hover:bg-black text-white font-bold rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 text-base flex items-center justify-center gap-2" href="#">
            <span>Lanzar mi primer Agente hoy</span>
            <svg class="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </a>
          <a class="w-full sm:w-auto px-7 py-4 bg-white/90 hover:bg-white text-gray-800 font-bold rounded-2xl border border-brand-300 transition-all text-base" href="#">Consultar con un Estratega</a>
        </div>
      </div>
    </div>
  </section>`;

// ---------- FOOTER ----------
const footer = `
  <footer class="bg-white border-t border-brand-border py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center font-black text-base shadow-sm">D</div>
            <span class="font-extrabold text-lg tracking-tight text-brand-dark">Digital<span class="text-brand-500">Lab</span></span>
          </div>
          <p class="text-sm text-gray-500 max-w-sm leading-relaxed">Plataforma de infraestructura autónoma para la nueva generación de páginas web B2B y direct-to-consumer impulsadas por IA.</p>
          <div class="flex items-center space-x-3 text-gray-400 pt-2">
            <a class="w-9 h-9 rounded-full bg-gray-50 hover:bg-brand-50 hover:text-brand-600 flex items-center justify-center transition-colors font-bold text-xs" href="#">X</a>
            <a class="w-9 h-9 rounded-full bg-gray-50 hover:bg-brand-50 hover:text-brand-600 flex items-center justify-center transition-colors font-bold text-xs" href="#">IN</a>
            <a class="w-9 h-9 rounded-full bg-gray-50 hover:bg-brand-50 hover:text-brand-600 flex items-center justify-center transition-colors font-bold text-xs" href="#">IG</a>
          </div>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 font-tech">Producto</h3>
          <ul class="space-y-2.5 text-sm font-medium text-gray-600">
            <li><a class="hover:text-brand-600 transition-colors" href="#inicio">Cockpit Autónomo</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#squad">Agentes Squad</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#">Integración CRM</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#">Seguridad de Datos</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 font-tech">Empresa</h3>
          <ul class="space-y-2.5 text-sm font-medium text-gray-600">
            <li><a class="hover:text-brand-600 transition-colors" href="#">Sobre Nosotros</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#">Metodología</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#">Casos de Éxito</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#">Contacto Directo</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 font-tech">Transparencia</h3>
          <ul class="space-y-2.5 text-sm font-medium text-gray-600">
            <li><a class="hover:text-brand-600 transition-colors" href="#">Privacidad RGPD</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#">Términos de Servicio</a></li>
            <li><a class="hover:text-brand-600 transition-colors" href="#">Estado del Sistema</a></li>
            <li><span class="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">All Systems Normal</span></li>
          </ul>
        </div>
      </div>
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© 2026 Digital Lab Technologies. Todos los derechos reservados.</p>
        <p>Hecho para negocios que nunca duermen ni pierden una sola venta.</p>
      </div>
    </div>
  </footer>`;

// ---------- RENDER ----------
// Nota: la navbar global se omite porque el nuevo hero incluye su propia nav interna.
document.getElementById('app').innerHTML =
  hero + logos + paradigm + marketplace + squad + playground + metrics + ctaFinal + footer;

// ---------- PLAYGROUND INTERACTIVO ----------
(function initPlayground() {
  const industryData = {
    saas: {
      title: 'Digital Lab Agent // SaaS Pitch',
      message: 'Hola. Veo que tienes un equipo comercial de 8 personas evaluando integraciones de API. ¿Te gustaría calcular el ahorro en tiempo manual antes de agendar demo con el Solutions Architect?',
      chips: ['📊 Ver estimación de ROI', '🔒 Revisar compliance SOC2', '📅 Bloquear reunión 15 min'],
    },
    ecommerce: {
      title: 'Digital Lab Agent // E-Commerce Cart Rescuer',
      message: '¡Hola! Vi que te interesó el modelo Pro en talla M. Nos quedan las últimas 3 unidades con envío express gratuito hoy. ¿Tienes dudas sobre el material o el tallaje?',
      chips: ['🏷️ Aplicar cupón 10% OFF', '📏 Guía de tallas 3D', '💳 Checkout en 1-click'],
    },
    realestate: {
      title: 'Digital Lab Agent // High-Value Property Advisor',
      message: 'Buenas tardes. Esta propiedad en Salamanca coincide con tu búsqueda de 3 habitaciones y terraza. ¿Prefieres que te envíe el dossier técnico o hacemos un tour virtual 360 ahora?',
      chips: ['📑 Descargar Dossier PDF', '🎥 Recorrido Virtual 360°', '📲 Hablar por WhatsApp'],
    },
  };

  const chatContent = document.getElementById('dynamic-chat-content');
  const buttons = document.querySelectorAll('.industry-btn');
  const input = document.getElementById('demo-user-input');
  const sendBtn = document.getElementById('demo-send-btn');

  function renderChat(data) {
    chatContent.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold shrink-0">AI</div>
        <div class="bg-brand-50/70 border border-brand-100 rounded-2xl rounded-tl-none p-3.5 text-sm text-gray-800 max-w-lg">
          <span class="font-bold text-brand-800 block text-xs mb-1 font-tech uppercase tracking-wide">${data.title}</span>
          "${data.message}"
        </div>
      </div>
      <div class="flex flex-wrap gap-2 pt-2 pl-11">
        ${data.chips.map(c => `<span class="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium cursor-pointer hover:bg-brand-100 hover:text-brand-800 transition-colors">${c}</span>`).join('')}
      </div>`;
  }

  renderChat(industryData.saas);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-brand-500', 'text-brand-dark', 'shadow-glow-sm', 'font-bold');
        b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200', 'font-semibold', 'hover:border-brand-400');
      });
      btn.classList.add('bg-brand-500', 'text-brand-dark', 'shadow-glow-sm', 'font-bold');
      btn.classList.remove('bg-white', 'text-gray-700', 'font-semibold', 'hover:border-brand-400');
      const data = industryData[btn.dataset.industry];
      if (data) renderChat(data);
    });
  });

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) return;
      const user = document.createElement('div');
      user.className = 'flex justify-end';
      user.innerHTML = `<div class="bg-gray-100 text-gray-800 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-sm text-sm">"${text}"</div>`;
      chatContent.appendChild(user);
      input.value = '';
      setTimeout(() => {
        const ai = document.createElement('div');
        ai.className = 'flex items-start gap-3';
        ai.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold shrink-0">AI</div>
          <div class="bg-brand-50 border border-brand-200 rounded-2xl rounded-tl-none p-3.5 text-sm text-gray-800 max-w-lg">
            <strong>Análisis en vivo:</strong> Excelente objeción. La resolvemos garantizando un SLA de migración sin cortes en 48 horas y un piloto gratuito con tus primeros 100 clientes. ¿Comenzamos?
          </div>`;
        chatContent.appendChild(ai);
      }, 500);
    });
  }
})();
