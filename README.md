# EcuaRadioOnline — sitio estático (multi‑stream)

Este proyecto es un **portal de radios** con 3 streams conmutables (botones).  
Listo para publicar en **Cloudflare Pages** o cualquier hosting estático.

## 📦 Archivos
- `index.html` → estructura del sitio
- `styles.css` → estilos (responsive)
- `config.js` → **aquí pones tus URLs de stream**
- `script.js` → lógica del reproductor
- `logo.png` y `favicon.png` → imágenes simples de relleno

## ⚙️ Configuración rápida
1. Abre `config.js` y reemplaza:
   ```js
   // config.js
const STATIONS = [
  { 
    name: "Ecua Radio – La casa de la música ecuatoriana", 
    url: "https://sonicpanel.streamsolutions.us/8010/stream", 
    tagline: "La casa de la música ecuatoriana" 
  },
  { 
    name: "Ecua Radio Online – Música variada", 
    url: "https://sonicpanel.streamsolutions.us/8026/stream", 
    tagline: "Música variada para todos" 
  }
];
   ```
   
