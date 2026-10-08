# Asociación Laja-Diguillín

Sitio institucional estático, hecho con [Astro](https://astro.build). Cada página sale como HTML listo. No hay servidor ni base de datos: en el navegador no se descarga una aplicación, solo el contenido.

Dominio previsto: https://asociacionlajadiguillin.cl

## Generar el sitio

```bash
npm install
npm run build
```

El resultado queda en la carpeta `dist/`.

## Subir por FTP

1. Entre a `dist/`.
2. Suba **el contenido** de esa carpeta (no la carpeta `dist` misma) a `public_html` o a la raíz del dominio.
3. `index.html` debe quedar en la raíz del sitio.
4. El archivo `.htaccess` también va. Activa compresión y caché en Apache. Si el hosting lo oculta, active “mostrar archivos ocultos” en el cliente FTP.

Para ver el cambio de un texto, vuelva a correr `npm run build` y reemplace los HTML. Las fotos y el CSS pueden quedar en caché hasta 30 días: si cambia una imagen, súbala con otro nombre o pida vaciar la caché del hosting.

## Editar contenidos

Los datos que se repiten (directorio, correo, cuotas, enlaces) están en `src/data/site.ts`. Los textos de cada página están en `src/pages/`.

Las fotos referenciales viven en `public/media/`. Para poner una foto oficial, reemplace el archivo conservando el nombre, o cambie la ruta en `site.ts`.
