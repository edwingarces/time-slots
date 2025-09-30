## Prompt de rediseño UX/UI

### Contexto
Aplicación web para gestionar horarios de motociclistas (8:00–20:00, intervalos de 30 min, 8 motociclistas por slot). El usuario selecciona un horario y se asigna un motociclista; si vuelve a hacer clic, se libera. Si no hay disponibilidad, el slot se marca en rojo.

### Objetivo
Rediseñar la interfaz para mejorar usabilidad, accesibilidad y experiencia visual.

### Análisis de problemas
1. Jerarquía visual débil
2. Feedback de estado insuficiente
3. Accesibilidad limitada
4. Diseño poco moderno
5. Responsive incompleto
6. Indicadores de disponibilidad poco claros

### Especificaciones de diseño

#### 1. Layout y estructura
- Header con título y selector de usuario
- Grid de horarios (8:00–20:00) en tarjetas
- Sidebar con disponibilidad del slot seleccionado
- Notificaciones toast
- Footer con resumen

#### 2. Sistema de colores
- Primario: #2563eb
- Secundario: #64748b
- Éxito: #10b981
- Error: #ef4444
- Advertencia: #f59e0b
- Neutro: #f8fafc, #e2e8f0, #475569

#### 3. Estados visuales
- Disponible: fondo blanco, borde azul, hover azul claro
- Asignado por el usuario: fondo verde, texto blanco
- Completamente ocupado: fondo rojo, texto blanco, cursor not-allowed
- Hover: sombra y transición
- Seleccionado: borde más grueso

#### 4. Componentes

**Tarjetas de horario:**
- Bordes redondeados
- Sombras sutiles
- Iconos de estado
- Contador de disponibilidad
- Animaciones de transición

**Selector de usuario:**
- Estilo moderno
- Icono de usuario
- Estados hover y focus

**Sidebar de disponibilidad:**
- Lista de motociclistas
- Badges de estado
- Iconos
- Scroll si es necesario

#### 5. Responsive
- Mobile-first
- Breakpoints: 320px, 768px, 1024px, 1440px
- Grid adaptativo
- Sidebar colapsable en móvil
- Touch targets ≥ 44px

#### 6. Accesibilidad
- Contraste ≥ 4.5:1
- Navegación por teclado
- ARIA labels
- Focus visible
- Texto alternativo en iconos

#### 7. Microinteracciones
- Animaciones de 200–300ms
- Feedback inmediato
- Loading states
- Transiciones suaves

#### 8. Tipografía
- Títulos: Inter Bold, 24px–32px
- Subtítulos: Inter SemiBold, 18px–20px
- Cuerpo: Inter Regular, 14px–16px
- Captions: Inter Medium, 12px–14px

#### 9. Espaciado
- Sistema 8px: 8, 16, 24, 32, 48, 64px
- Padding: 16px–24px
- Márgenes: 24px–32px
- Gaps: 16px–24px

#### 10. Iconografía
- Librería: Lucide React o Heroicons
- Tamaños: 16px, 20px, 24px
- Estilo: outline
- Colores: según estado

### Funcionalidades adicionales
1. Filtros por disponibilidad
2. Búsqueda de horarios
3. Vista de calendario
4. Exportar asignaciones
5. Historial de cambios
6. Modo oscuro

### Tecnologías
- React 18+ con TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Headless UI

### Entregables
1. Diseño en Figma
2. Prototipo interactivo
3. Guía de componentes
4. Tokens de diseño
5. Documentación de accesibilidad

### Criterios de éxito
- Tiempo de tarea < 3 s
- Tasa de error < 5%
- Puntuación de accesibilidad > 90
- Satisfacción > 4.5/5
- Carga < 2 s

### Consideraciones técnicas
- Lazy loading
- Optimización de imágenes
- Caching
- PWA
- Testing de accesibilidad
