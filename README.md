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
   "https://STREAM_URL_1"
   "https://STREAM_URL_2"
   "https://STREAM_URL_3"
   ```
   por tus URLs reales (Shoutcast/Icecast).
2. Sube todos los archivos a tu repositorio.
3. Publica con Cloudflare Pages (Framework: None, Build: vacío, Output: `/`).
4. (Opcional) Conecta tu dominio `www.ecuaradioonline.com` desde **Custom domains**.
