# 🎓 Malla Curricular Interactiva - Administración y Negocios Digitales

Aplicación web interactiva que muestra la malla curricular completa de la carrera, permitiendo visualizar prerequisitos y marcar cursos como completados.

## ✨ Características principales

- **Visualización por años y ciclos** con pestañas interactivas
- **Sistema de prerequisitos**: Los cursos se desbloquean al completar sus requisitos
- **Persistencia de datos**: El progreso se guarda localmente en tu navegador
- **Diseño responsive**: Adaptable a diferentes tamaños de pantalla
- **Multi-desbloqueo**: Un curso puede desbloquear varios cursos simultáneamente



## 🚀 Cómo usar

1. **Navega entre años** usando las pestañas superiores
2. **Explora los ciclos** de cada año
3. **Marca cursos como completados** haciendo clic en "✅ Completar"
4. **Los cursos con prerequisitos** se desbloquearán automáticamente
5. **Tu progreso se guarda** automáticamente

## 🔧 Personalización

Para modificar los cursos o prerequisitos, edita el archivo `index.html`:

```html
<!-- Ejemplo de estructura de curso -->
<div class="curso" id="curso1">
  <h2>Nombre del Curso</h2>
  <p>Descripción o prerequisitos</p>
  <button class="completar-btn" onclick="completarCurso('curso1', 'curso2,curso3')">
    ✅ Completar
  </button>
</div>
```

## 📌 Notas importantes

- Los datos se guardan solo en tu navegador actual
- Para compartir tu progreso entre dispositivos, considera implementar autenticación
- Puedes resetear todo tu progreso con el botón inferior

