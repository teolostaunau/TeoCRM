# DS-05 — Brand Color Foundation

**Estado:** Approved

**Versión:** 1.0

**Fecha:** Julio 2026

**Responsables:** Equipo de Arquitectura de TeoCRM

---

# 1. Objetivo

El **Brand Color Foundation** define la arquitectura cromática oficial de TeoCRM.

Su propósito es transformar la identidad visual del producto en un conjunto de Design Tokens reutilizables que permitan construir interfaces consistentes, accesibles y preparadas para evolucionar hacia múltiples temas visuales.

Este documento constituye la **Single Source of Truth** para el sistema de color del Design System.

---

# 2. Alcance

Este documento aplica a todos los productos de la plataforma TEO:

- TeoCRM Web
- Dashboard
- Landing Pages
- Portal del Cliente
- Automatizaciones
- Aplicaciones móviles
- Storybook
- Documentación
- Material institucional
- Componentes compartidos

No aplica a la construcción gráfica del logotipo ni a la identidad visual institucional, que pertenecen al dominio **Branding**.

---

# 3. Relación con Brand Identity

La identidad visual oficial se documenta en:

```
docs/branding/
```

Brand Identity define:

- Logotipo
- Isotipo
- Construcción geométrica
- Área de protección
- Colores institucionales
- Manual de marca

El Design System consume esa información y la transforma en tokens reutilizables.

La relación oficial será:

```
Brand Identity
        │
        ▼
Official Brand Colors
        │
        ▼
Brand Tokens
        │
        ▼
Semantic Tokens
        │
        ▼
CSS Variables
        │
        ▼
Theme Engine
        │
        ▼
UI Components
```

---

# 4. Principios

## 4.1 Single Source of Truth

No existirán colores duplicados.

Toda referencia cromática provendrá de Design Tokens.

---

## 4.2 Brand Driven

La marca alimenta el sistema.

Nunca al revés.

---

## 4.3 Semantic First

Los componentes expresan intención.

Nunca implementación.

Ejemplos:

- Primary
- Secondary
- Accent
- Success
- Warning
- Danger
- Surface
- Border

Nunca:

- Blue600
- Orange500

---

## 4.4 Theme Driven

Los componentes desconocen el tema activo.

El cambio de tema modifica únicamente el mapeo de variables.

---

## 4.5 Accessibility by Default

Todo token deberá cumplir WCAG 2.2 AA.

El contraste será validado antes de incorporarse al sistema.

---

# 5. Arquitectura

```
Official Brand Colors
        │
        ▼
Brand Tokens
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
Shadcn UI
        │
        ▼
Components
```

---

# 6. Official Brand Palette

La paleta oficial proviene exclusivamente del Manual de Marca.

| Token | HEX | Uso |
|---------|---------|-----------------------------|
| Brand/Navy | #081B3A | Logo, Sidebar, Headings |
| Brand/Blue | #0E66F5 | CTA, Botones, Links |
| Brand/Cyan | #00B5E8 | IA, Automatización |
| Brand/Amber | #FF9800 | Acentos |
| White | #FFFFFF | Fondos |
| Black | #000000 | Casos especiales |

---

# 7. Neutral Scale

La interfaz utilizará una escala neutra independiente de la marca.

| Token | HEX |
|--------|--------|
| Neutral/950 | #020617 |
| Neutral/900 | #0F172A |
| Neutral/800 | #1E293B |
| Neutral/700 | #334155 |
| Neutral/600 | #475569 |
| Neutral/500 | #64748B |
| Neutral/400 | #94A3B8 |
| Neutral/300 | #CBD5E1 |
| Neutral/200 | #E2E8F0 |
| Neutral/100 | #F1F5F9 |
| Neutral/50 | #F8FAFC |

La Neutral Scale constituye la base para superficies, tipografía y divisores.

---

# 8. Semantic Color System

Los componentes nunca consumirán Brand Tokens directamente.

Consumirán Semantic Tokens.

## Primary

Acciones principales.

```
Primary
        ↓
Brand Blue
```

---

## Secondary

Acciones secundarias.

```
Secondary
        ↓
Brand Navy
```

---

## Accent

IA, Automatización, Innovación.

```
Accent
        ↓
Brand Cyan
```

---

## Highlight

Elementos destacados.

```
Highlight
        ↓
Brand Amber
```

---

## Success

```
#22C55E
```

---

## Warning

```
#F59E0B
```

---

## Danger

```
#EF4444
```

---

## Info

```
#3B82F6
```

---

# 9. Surface Tokens

| Token | Valor |
|---------|----------------|
| Background | Neutral/50 |
| Card | White |
| Surface | White |
| Muted | Neutral/100 |
| Border | Neutral/200 |
| Foreground | Neutral/900 |

---

# 10. Hero Gradient

Gradiente institucional oficial.

```css
linear-gradient(
135deg,
#081B3A 0%,
#0E66F5 55%,
#00B5E8 100%
)
```

Aplicaciones:

- Login
- Landing
- Onboarding
- Loading
- Marketing

---

# 11. Glow Tokens

## Primary Glow

```
rgba(14,102,245,.45)
```

Blur:

```
40px
```

---

## Accent Glow

```
rgba(0,181,232,.30)
```

---

# 12. CSS Variables

El Theme Engine expondrá únicamente variables CSS.

Ejemplo:

```css
:root{

--primary:

--secondary:

--accent:

--background:

--foreground:

--surface:

--border:

--muted;

}
```

Los componentes nunca conocerán valores HEX.

---

# 13. Tailwind Integration

Tailwind consumirá exclusivamente variables CSS mediante `@theme` (Tailwind CSS v4).

Los componentes deberán utilizar únicamente clases derivadas de dichos tokens.

Ejemplos:

```
bg-primary

text-primary

border-border

bg-surface

text-muted
```

No se permitirá el uso de colores hardcodeados en clases utilitarias.

---

# 14. SVG Integration

Los recursos SVG deberán utilizar variables CSS.

Ejemplo:

```css
--brand-primary
--brand-secondary
--brand-accent
--brand-highlight
```

Esto permitirá reutilizar un mismo SVG en diferentes temas sin modificar el archivo original.

---

# 15. Gobernanza

Todo nuevo componente deberá cumplir las siguientes reglas:

✓ Utilizar únicamente Semantic Tokens.

✓ No utilizar valores HEX.

✓ No redefinir colores.

✓ Mantener compatibilidad con Dark Theme.

✓ Mantener compatibilidad con futuros temas.

Las modificaciones a Brand Tokens requerirán actualización del Manual de Marca.

---

# 16. Roadmap

## DS-05.1

Corporate Theme

---

## DS-05.2

Dark Theme

---

## DS-05.3

High Contrast Theme

---

## DS-05.4

Theme Switcher

---

## DS-05.5

Storybook Color Tokens

---

## DS-05.6

Figma Tokens Export

---

# 17. Referencias

Brand Identity

```
docs/branding/
```

DS-00 — Design System Charter

DS-01 — Typography Foundation

DS-02 — Spacing Foundation

ADR-006 — Design Token Governance

---

# 18. Conclusión

El Brand Color Foundation establece la infraestructura cromática oficial del Design System de TeoCRM.

La identidad visual permanece definida por la documentación de Branding, mientras que el Design System traduce dicha identidad en Brand Tokens, Semantic Tokens y Variables CSS consumidas por los componentes.

Esta separación garantiza consistencia visual, escalabilidad, compatibilidad con múltiples temas y una evolución controlada de la plataforma.