# rypsk.com — Landing Page

Landing page personal construida con **Angular 21**, **Tailwind CSS** y **DaisyUI**, con iconos de **Lucide Angular** y animaciones de **AOS (Animate On Scroll)**.

## 📋 Requisitos previos

- **Node.js** v20 o superior (recomendado v22+)
- **npm** v10 o superior (viene incluido con Node.js)

Verifica tus versiones con:

```bash
node -v
npm -v
```

> Si tu terminal no encuentra `node`, `npm` o `ng`, asegúrate de que la ruta de instalación de Node esté en tu `PATH`. En macOS, si instalaste Node con el instalador oficial, normalmente se encuentra en `/usr/local/bin`:
>
> ```bash
> export PATH=$PATH:/usr/local/bin
> ```
>
> Añade esa línea a tu `~/.zshrc` (o `~/.bash_profile`) para que quede configurada de forma permanente.

## 🚀 Instalación

Clona el repositorio (o sitúate en la carpeta del proyecto) e instala las dependencias:

```bash
npm install
```

Esto instalará, entre otras, las siguientes dependencias clave:

| Paquete | Uso |
|---|---|
| `@angular/*` | Framework principal |
| `tailwindcss` v3.4 | Utilidades CSS |
| `daisyui` | Componentes UI sobre Tailwind |
| `@lucide/angular` | Iconos minimalistas |
| `aos` + `@types/aos` | Animaciones al hacer scroll |

## 🖥️ Servidor de desarrollo

Para levantar la app en modo desarrollo, con recarga automática:

```bash
npm start
```

o de forma equivalente:

```bash
ng serve
```

Una vez arrancado, abre tu navegador en:

```
http://localhost:4200/
```

La aplicación se recargará automáticamente cada vez que modifiques algún archivo dentro de `src/`.

## 🧩 Generación de componentes

Angular CLI incluye herramientas de scaffolding. Para generar un nuevo componente:

```bash
ng generate component nombre-del-componente
```

Para ver el listado completo de esquemas disponibles (`components`, `directives`, `pipes`, etc.):

```bash
ng generate --help
```

## 📦 Build de producción

Para compilar el proyecto y generar los artefactos optimizados:

```bash
npm run build
```

Los archivos resultantes se guardan en:

```
dist/rypsk-landing/browser
```

Esta es la carpeta que debe publicarse en cualquier hosting estático (por ejemplo, Vercel).

> Durante el build pueden aparecer avisos (warnings) no bloqueantes relacionados con imports de iconos no utilizados o con la naturaleza CommonJS del paquete `aos`; no afectan al funcionamiento de la aplicación.

## 🧪 Tests

### Tests unitarios

Este proyecto usa [Vitest](https://vitest.dev/) como runner de tests:

```bash
npm test
```

### Tests end-to-end (e2e)

Angular CLI no incluye un framework de e2e por defecto. Puedes añadir el que prefieras (Cypress, Playwright, etc.) y ejecutarlo con:

```bash
ng e2e
```

## 🎨 Stack de diseño

- **Tailwind CSS** — utilidades de estilos directamente en el HTML.
- **DaisyUI** — componentes prediseñados (botones, cards, navbar) sobre Tailwind.
- **Lucide Angular** — set de iconos SVG minimalistas.
- **AOS** — animaciones suaves al hacer scroll por la página.

La configuración de Tailwind se encuentra en `tailwind.config.js`, y los estilos globales (incluyendo las directivas `@tailwind` y la importación de `aos/dist/aos.css`) en `src/styles.css`.

## ☁️ Despliegue en Vercel (dominio `rypsk.com`)

1. Sube el proyecto a un repositorio remoto (GitHub, GitLab o Bitbucket).
2. Entra en [vercel.com](https://vercel.com) e importa el repositorio como nuevo proyecto.
3. Vercel detecta automáticamente que se trata de un proyecto Angular. Verifica/ajusta esta configuración:
   - **Framework Preset:** Angular
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/rypsk-landing/browser`
4. Lanza el despliegue (**Deploy**).
5. Una vez desplegado, ve a **Settings → Domains** dentro del proyecto en Vercel y añade el dominio `rypsk.com`.
6. Actualiza los registros DNS de tu proveedor de dominio según las instrucciones que Vercel te indique (normalmente un registro `A` apuntando a la IP de Vercel, o un `CNAME` si usas un subdominio).
7. Espera a que se propague el DNS y verifica que `https://rypsk.com` carga correctamente con certificado SSL (Vercel lo gestiona automáticamente).

## 📚 Recursos adicionales

Para más información sobre Angular CLI, incluyendo la referencia completa de comandos, visita la [documentación oficial de Angular CLI](https://angular.dev/tools/cli).
