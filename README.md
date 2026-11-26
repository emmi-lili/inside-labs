# Digital Lab — Landing page

Landing page SaaS de **Digital Lab**: páginas web con agentes de IA que conversan con cada visitante, lo entienden y lo convierten en cliente.

Hero inspirado en un estilo "Conoce a tus clientes", con clúster flotante de clientes, tarjeta de métricas y acento verde `#1DB81D`.

## Stack

Sitio estático, sin build ni dependencias:

- `index.html` — shell + estilos globales (CSS)
- `app.js` — renderiza todo el contenido en JavaScript e inyecta el DOM

## Cómo correrlo

Abrir directamente:

```bash
open index.html
```

O con un servidor local:

```bash
python3 -m http.server 3000   # http://localhost:3000
```

## Deploy

Desplegado en Vercel:

```bash
vercel --prod
```
