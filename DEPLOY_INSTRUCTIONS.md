# 🚀 Instrucciones para Deploy en GitHub Pages

## ✅ Configuración Completada

Tu proyecto ya está configurado para GitHub Pages. Se han realizado las siguientes configuraciones:

### 1. Package.json actualizado
- ✅ Agregado `homepage`: "https://rosen.github.io/los-postres-de-celeste"
- ✅ Agregados scripts de deploy: `predeploy` y `deploy`
- ✅ Instalada dependencia `gh-pages`

### 2. GitHub Actions configurado
- ✅ Creado workflow en `.github/workflows/deploy.yml`
- ✅ Deploy automático en cada push a la rama `main`

### 3. Build verificado
- ✅ El comando `npm run build` funciona correctamente
- ✅ Se genera la carpeta `build` con los archivos optimizados

## 📋 Pasos para hacer el Deploy

### Opción 1: Deploy Manual (Recomendado para primera vez)

1. **Inicializar repositorio Git** (si no lo has hecho):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Crear repositorio en GitHub**:
   - Ve a [GitHub.com](https://github.com)
   - Crea un nuevo repositorio llamado `los-postres-de-celeste`
   - **NO** inicialices con README, .gitignore o licencia

3. **Conectar repositorio local con GitHub**:
   ```bash
   git remote add origin https://github.com/rosen/los-postres-de-celeste.git
   git branch -M main
   git push -u origin main
   ```

4. **Habilitar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"
   - Guarda los cambios

5. **Hacer el primer deploy**:
   ```bash
   npm run deploy
   ```

### Opción 2: Deploy Automático con GitHub Actions

Una vez que hayas subido el código a GitHub:

1. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages en tu repositorio
   - Selecciona "GitHub Actions" como fuente

2. **El deploy será automático**:
   - Cada vez que hagas `git push` a la rama `main`
   - GitHub Actions ejecutará automáticamente el build y deploy

## 🔧 Comandos Útiles

```bash
# Desarrollo local
npm start

# Build para producción
npm run build

# Deploy manual a GitHub Pages
npm run deploy

# Ver el sitio localmente después del build
npx serve -s build
```

## 🌐 URLs

- **Repositorio**: https://github.com/rosen/los-postres-de-celeste
- **Sitio web**: https://rosen.github.io/los-postres-de-celeste

## ⚠️ Notas Importantes

1. **Cambiar el nombre de usuario**: Si tu nombre de usuario de GitHub no es "rosen", debes actualizar:
   - La URL en `package.json` (campo `homepage`)
   - La URL en este archivo

2. **Advertencias del build**: Hay algunas advertencias sobre enlaces sin `href` válidos en los componentes Contact y Footer. Estas no afectan el funcionamiento pero puedes corregirlas agregando URLs reales.

3. **Primera vez**: El primer deploy puede tomar unos minutos. Los siguientes serán más rápidos.

## 🆘 Solución de Problemas

### Error: "Repository not found"
- Verifica que el repositorio existe en GitHub
- Verifica que tienes permisos de escritura

### Error: "Permission denied"
- Verifica que estás autenticado en GitHub
- Puedes usar GitHub CLI: `gh auth login`

### El sitio no se actualiza
- Espera unos minutos (GitHub Pages puede tardar)
- Verifica que el workflow de GitHub Actions se ejecutó correctamente
- Revisa la pestaña "Actions" en tu repositorio

## 🎉 ¡Listo!

Una vez completados estos pasos, tu sitio estará disponible en:
**https://rosen.github.io/los-postres-de-celeste**

¡Tu landing page de "Los Postres de Celeste" estará en línea! 🍰
