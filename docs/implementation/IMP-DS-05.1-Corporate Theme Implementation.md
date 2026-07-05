# IMP-DS-05.1 — Corporate Theme Implementation

**Estado:** Ready for Implementation

**Versión:** 1.0

**Sprint:** SPR-UX-01

**Depende de:**

- DS-00 — Design System Charter
- DS-05 — Brand Color Foundation

---

# 1. Objetivo

Implementar el primer tema oficial del Design System de TeoCRM denominado **Corporate Theme**.

Esta implementación constituye la primera materialización del sistema de color definido en DS-05 y establece la infraestructura sobre la que se construirán futuros temas (Dark, High Contrast, White Label, etc.).

No modifica el comportamiento funcional de la aplicación.

Únicamente introduce la infraestructura oficial del sistema cromático.

---

# 2. Objetivos específicos

Este sprint deberá:

✔ Eliminar colores hardcodeados nuevos.

✔ Centralizar todos los colores institucionales.

✔ Crear Design Tokens de Color.

✔ Integrar Tailwind CSS v4.

✔ Integrar Shadcn UI.

✔ Preparar soporte para múltiples temas.

---

# 3. Alcance

Incluye:

- Brand Tokens
- Semantic Tokens
- CSS Variables
- Theme Mapping
- Foundation Layer
- Tailwind Integration
- Shadcn Integration

No incluye:

- Dark Theme
- Theme Switcher
- White Label
- Storybook
- Figma Export

---

# 4. Arquitectura

```

Brand Identity
│
▼
Brand Tokens
│
▼
Foundation
│
▼
Semantic Tokens
│
▼
CSS Variables
│
▼
Tailwind Theme
│
▼
Shadcn
│
▼
Componentes

```

---

# 5. Estructura de carpetas

Nueva estructura.

```

src/

design-system/

foundation/

colors.ts

tokens/

colors.ts

themes/

corporate.ts

utils/

resolveColor.ts

```

---

# 6. Brand Tokens

Crear:

```

src/design-system/tokens/colors.ts

```

Ejemplo:

```ts
export const brandColors = {

navy:"#081B3A",

blue:"#0E66F5",

cyan:"#00B5E8",

amber:"#FF9800",

white:"#FFFFFF",

black:"#000000",

}
```

Este archivo nunca será consumido directamente por componentes.

---

# 7. Foundation Layer

Crear:

```

foundation/colors.ts

```

Su función será exponer únicamente la API pública.

Ejemplo:

```ts
export * from "../tokens/colors"
```

En futuras versiones podrá contener resolvers.

---

# 8. Theme Layer

Crear:

```

themes/corporate.ts

```

Este archivo será el responsable de mapear Brand Tokens hacia Semantic Tokens.

Ejemplo conceptual:

```text
Primary

↓

Brand Blue

Secondary

↓

Brand Navy

Accent

↓

Brand Cyan

Highlight

↓

Brand Amber
```

Los componentes nunca conocerán Brand Tokens.

---

# 9. CSS Variables

Actualizar:

```

src/app/globals.css

```

Agregar:

```css
:root{

--primary:

--secondary:

--accent:

--highlight:

--background:

--surface:

--foreground:

--muted:

--border:

}
```

Todas las variables deberán provenir del Theme.

Nunca desde HEX.

---

# 10. Tailwind CSS v4

Integrar mediante:

```
@theme inline
```

Ejemplo conceptual:

```css
@theme inline{

--color-primary:

var(--primary);

--color-surface:

var(--surface);

}
```

No se utilizará `tailwind.config.ts`.

---

# 11. Integración con Shadcn

Todos los componentes de Shadcn deberán consumir:

```
bg-primary

text-primary

border-border

bg-card

bg-background

text-muted
```

Nunca:

```
bg-blue-600

text-slate-900

border-gray-200
```

---

# 12. Reemplazo progresivo

No se realizará una migración masiva.

Se seguirá la siguiente estrategia.

## Primera etapa

Login

---

## Segunda etapa

Dashboard

---

## Tercera etapa

Sidebar

---

## Cuarta etapa

CRM

---

## Quinta etapa

Inbox

---

## Sexta etapa

Automation Builder

---

# 13. Reglas

Durante este sprint quedan prohibidos:

- colores HEX
- bg-blue-*
- text-blue-*
- border-blue-*
- text-slate-*
- bg-slate-*

Todo deberá utilizar Semantic Tokens.

---

# 14. Validaciones

Antes de aprobar el sprint deberán cumplirse:

## Build

```
npm run build
```

Sin errores.

---

## TypeScript

```
npm run typecheck
```

Sin errores.

---

## ESLint

```
npm run lint
```

Sin errores nuevos.

---

## Visual

Validar:

- Login

- Botones

- Inputs

- Cards

- Sidebar

---

# 15. Criterios de aceptación

✔ Existe un único archivo de Brand Tokens.

✔ Los componentes consumen Semantic Tokens.

✔ El Login utiliza el nuevo Corporate Theme.

✔ No existen nuevos colores hardcodeados.

✔ La arquitectura soporta múltiples temas.

✔ La implementación cumple DS-05.

---

# 16. Roadmap posterior

Después de completar esta implementación continuará:

IMP-DS-05.2

Dark Theme

↓

IMP-DS-05.3

Theme Switcher

↓

IMP-DS-05.4

Storybook

↓

IMP-DS-05.5

Figma Tokens

---

# 17. Resultado esperado

Al finalizar este sprint TeoCRM dispondrá de una infraestructura oficial de color completamente desacoplada de componentes concretos.

Los cambios futuros de identidad visual requerirán únicamente modificar el Theme Layer, preservando intactos los componentes y permitiendo la incorporación de nuevos temas sin alterar la interfaz existente.