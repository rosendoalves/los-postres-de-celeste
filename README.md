# Los Postres de Celeste - Website

Una hermosa landing page para el negocio de postres artesanales "Los Postres de Celeste" creado por Celeste Rios.

## 🍰 Características

- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Landing Page Moderna**: Inspirada en el diseño de Kobai pero personalizada para postres
- **Secciones Completas**: Hero, Productos, Nosotros, Contacto
- **Formulario de Contacto**: Funcional y listo para integrar con backend
- **Redes Sociales**: Enlaces a Instagram, Facebook y WhatsApp
- **Colores Personalizables**: Fácil de modificar en el archivo de configuración de Tailwind

## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd los-postres-de-celeste
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🎨 Personalización de Colores

Los colores están definidos en `tailwind.config.js` y son fáciles de modificar:

### Paleta de Colores Actual

```javascript
colors: {
  primary: {
    50: '#fef7f0',   // Naranja muy claro
    500: '#f2751e',  // Naranja principal
    900: '#7a3015',  // Naranja oscuro
  },
  secondary: {
    50: '#fdf4ff',   // Rosa muy claro
    500: '#d946ef',  // Rosa principal
    900: '#701a75',  // Rosa oscuro
  },
  chocolate: {
    50: '#fdf8f3',   // Chocolate muy claro
    500: '#e06f3a',  // Chocolate principal
    900: '#723024',  // Chocolate oscuro
  },
  cream: {
    50: '#fefefe',   // Crema muy claro
    500: '#e2d5c4',  // Crema principal
    900: '#84725f',  // Crema oscuro
  }
}
```

### Cómo Cambiar Colores

1. Abre `tailwind.config.js`
2. Modifica los valores hexadecimales en la sección `colors`
3. Guarda el archivo
4. Reinicia el servidor de desarrollo

### Sugerencias de Colores

- **Para un tema más elegante**: Usa tonos dorados y marrones
- **Para un tema más vibrante**: Usa tonos rojos y rosas
- **Para un tema más suave**: Usa tonos pasteles

## 📱 Contenido Personalizable

### Información de Contacto
Edita en `src/components/Contact.tsx`:
- Números de teléfono
- Emails
- Dirección
- Horarios de atención

### Productos
Edita en `src/components/Products.tsx`:
- Nombres de productos
- Descripciones
- Precios
- Categorías

### Redes Sociales
Edita en `src/components/Contact.tsx` y `src/components/Footer.tsx`:
- Enlaces a Instagram
- Enlaces a Facebook
- Enlaces a WhatsApp

### Información de la Empresa
Edita en `src/components/About.tsx`:
- Historia de la empresa
- Descripción de Celeste Rios
- Características del negocio

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework de JavaScript
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de CSS utility-first
- **Responsive Design**: Mobile-first approach
- **Modern JavaScript**: ES6+ features

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Hero.tsx           # Sección principal
│   ├── About.tsx          # Historia de la empresa
│   ├── Products.tsx       # Catálogo de productos
│   ├── Contact.tsx        # Formulario de contacto
│   └── Footer.tsx         # Pie de página
├── App.tsx                # Componente principal
├── index.tsx              # Punto de entrada
└── index.css              # Estilos globales
```

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `build`

### Vercel
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto React

### GitHub Pages
1. Instala `gh-pages`: `npm install --save-dev gh-pages`
2. Agrega al `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/los-postres-de-celeste",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Ejecuta: `npm run deploy`

## 📞 Soporte

Para cualquier pregunta o ayuda con la personalización, no dudes en contactar.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Creado con ❤️ para Los Postres de Celeste**
