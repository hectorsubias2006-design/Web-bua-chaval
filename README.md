# Búa Chaval - Restaurante Asador (Utebo, Zaragoza)

Sitio web oficial desarrollado con **Next.js 14**, **React 18**, **TypeScript** y **Tailwind CSS**, diseñado con máxima fidelidad visual (Pixel Perfect) basándose en las especificaciones de Google Stitch.

---

## 🌟 Características Principales

- **Fidelidad Pixel-Perfect**: Reproducción exacta de la identidad corporativa: paleta de colores cálidos y terracota (`#99370f`, `#ba4e26`, `#fef9f0`, `#3a6752`), tipografías (*Playfair Display* y *Plus Jakarta Sans*) e iconografía *Google Material Symbols*.
- **Diseño Responsive (Móvil y Escritorio)**:
  - En móviles, el menú superior se repliega en un menú hamburguesa desplegable y discreto.
  - Las listas y columnas de platos se apilan en 1 columna en pantallas pequeñas para una lectura óptima.
- **Single Page Application (SPA)**:
  - Navegación fluida con desplazamiento suave (*smooth scrolling*) a través de los enlaces: **Inicio**, **Nuestra Carta**, **El Local** y **Contacto**.
- **Sección Interactiva "Nuestra Carta"**:
  - Selector con pestañas para alternar entre **Zona Restaurante** (Comedor Principal) y **Zona de Bar** (Picoteo Frontal).
  - Todas las categorías incluidas (*Abriendo Bocas*, *De la Huerta*, *Encendiendo la Brasa*, *Me Voy de Huevos*, *De la Brasa a la Mesa*, *Bandejas Búa-Chaval*, *Bocadillos*).
  - Precios alineados a la derecha y unidos elegantemente por una **línea sutil de puntos**.
- **Botón Flotante de WhatsApp**:
  - Ubicado en la esquina inferior derecha con el color oficial de WhatsApp (`#25D366`), icono oficial y enlace directo para reservar mesa al **+34 624 28 29 93**.

---

## 📁 Estructura del Proyecto

```text
Web bua chaval/
├── index.html                  # Versión estática autónoma para previsualización directa
├── package.json                # Dependencias (Next.js, React, Tailwind, TypeScript)
├── tsconfig.json               # Configuración TypeScript con paths (@/*)
├── tailwind.config.ts          # Tokens de diseño y colores extendidos de Google Stitch
├── postcss.config.js           # PostCSS para procesamiento Tailwind
├── next.config.mjs             # Configuración Next.js con dominios remotos de imágenes
├── README.md                   # Esta documentación
└── src/
    ├── app/
    │   ├── globals.css         # Estilos globales y directivas Tailwind
    │   ├── layout.tsx          # Layout con fuentes tipográficas y metadatos SEO
    │   └── page.tsx            # Página principal integrando todos los componentes
    ├── components/
    │   ├── Navbar.tsx          # Menú de navegación responsive con menú móvil
    │   ├── Hero.tsx            # Portada principal con llamadas a la acción
    │   ├── About.tsx           # Historia del Chef Daniel Pando y "El Local"
    │   ├── FeaturedDishes.tsx  # Platos estrella (Chuletón, Sabor a Cuba) y Menú del Día
    │   ├── MenuSection.tsx     # Carta interactiva con pestañas y precios punteados
    │   ├── SpaceFeatures.tsx   # Climatización, niños y eventos familiares
    │   ├── Footer.tsx          # Pie de página, horarios, contacto y redes
    │   └── WhatsAppButton.tsx  # Botón flotante para reserva por WhatsApp
    └── data/
        └── menuData.ts         # Datos tipados y centralizados de la carta
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Visualización Inmediata (Sin instalar nada)
Puedes abrir directamente el archivo [**`index.html`**](file:///c:/Users/hecto/OneDrive/Escritorio/Web%20bua%20chaval/index.html) haciendo doble clic sobre él en tu explorador de archivos. Es 100% funcional y autónomo.

---

### Opción 2: Proyecto Next.js / React (Entorno de Desarrollo)

#### 1. Requisito previo: Instalar Node.js
Si aún no tienes Node.js instalado en tu ordenador:
1. Descarga e instala **Node.js (versión LTS recomendada)** desde: [nodejs.org](https://nodejs.org/)
2. Abre tu terminal (PowerShell o CMD) y confirma la instalación:
   ```bash
   node -v
   npm -v
   ```

#### 2. Instalar dependencias
En la carpeta del proyecto, ejecuta:
```bash
npm install
```

#### 3. Iniciar el servidor local
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la web en funcionamiento con recarga en caliente (*Hot Reload*).

#### 4. Compilar para Producción
Para desplegar en servicios como **Vercel**, **Netlify** o tu propio servidor:
```bash
npm run build
npm run start
```
