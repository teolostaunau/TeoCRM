# DS-00 — Design System Charter

**Estado:** Approved

**Versión:** 1.0

**Fecha:** Julio 2026

**Responsables:** Equipo de Arquitectura de TeoCRM

---

# 1. Objetivo

El Design System de TeoCRM constituye la especificación oficial para el diseño, desarrollo y evolución de todas las interfaces de la plataforma.

Su propósito es proporcionar un lenguaje visual, funcional y técnico consistente que permita construir productos escalables, mantenibles y accesibles sin duplicar decisiones de diseño.

El Design System es la fuente oficial para todos los elementos de interfaz utilizados por TeoCRM y por las futuras aplicaciones de la Plataforma TEO.

---

# 2. Visión

Construir un sistema de diseño que permita desarrollar interfaces con la misma coherencia con la que se desarrolla software.

Los componentes no serán únicamente elementos visuales.

Serán contratos de arquitectura.

Cada componente deberá expresar una intención clara, consumir únicamente Design Tokens y mantenerse independiente de implementaciones concretas.

El objetivo no es construir pantallas.

El objetivo es construir una plataforma.

---

# 3. Alcance

El Design System será utilizado por:

- Plataforma Web
- Dashboard
- CRM
- Automatizaciones
- IA
- Landing Pages
- Aplicaciones móviles
- Storybook
- Documentación
- Material institucional
- Presentaciones
- Componentes reutilizables

Todos estos productos compartirán un único lenguaje visual.

---

# 4. Relación con Brand Identity

La identidad visual del producto pertenece al dominio **Branding**.
docs/branding/


El Design System no define la identidad de marca.

La consume.

La relación oficial será:
Brand Identity
│
▼
Official Brand Assets
│
▼
Brand Tokens
│
▼
Semantic Tokens
│
▼
Componentes
│
▼
Aplicación


La documentación de Branding constituye la única fuente autorizada para logotipos, isotipos, construcción geométrica y colores institucionales.

---

# 5. Principios Fundamentales

## 5.1 Single Source of Truth

Toda decisión de diseño deberá tener una única fuente oficial.

No existirán duplicidades entre código, documentación o diseño.

---

## 5.2 Design Tokens First

Los componentes nunca consumirán valores visuales directamente.

Siempre utilizarán Design Tokens.

Ejemplo:

✔ Correcto

Button → Primary

↓

Semantic Token

↓

Brand Token

↓

CSS Variable

↓

Color

✘ Incorrecto

Button

↓

#0E66F5

---

## 5.3 Semantic First

Los componentes describen intención.

Nunca implementación.

Ejemplos:

Primary

Secondary

Danger

Surface

Muted

Accent

Success

Warning

No existirán componentes dependientes de colores específicos.

---

## 5.4 Intent Driven UI

La interfaz expresa la intención del usuario.

Los componentes representan acciones.

No decoración.

Este principio se encuentra desarrollado en:

DS-03 — Intent Driven UI

---

## 5.5 Resolver Pattern

Toda resolución de estilos deberá pasar por resolvers.

Los componentes desconocen:

- colores
- tipografías
- espaciados
- temas

Únicamente conocen intención.

---

## 5.6 Theme Driven

Los temas modifican variables.

Nunca componentes.

Cambiar un tema no implica cambiar código.

---

## 5.7 Accessibility by Default

Toda decisión deberá cumplir como mínimo WCAG 2.2 AA.

La accesibilidad no constituye una funcionalidad adicional.

Forma parte del diseño.

---

## 5.8 Public API Only

Los componentes expondrán únicamente APIs públicas.

Las implementaciones internas podrán cambiar sin afectar a los consumidores.

---

# 6. Arquitectura


Brand Identity
│
▼
Design Tokens
│
▼
Resolvers
│
▼
Foundation
│
▼
Primitive Components
│
▼
Composite Components
│
▼
Screens
│
▼
Platform


Cada capa depende únicamente de la inmediatamente inferior.

---

# 7. Dominios del Design System

## Foundation

Define:

- Typography
- Color
- Spacing
- Radius
- Shadows
- Motion

---

## Tokens

Representan los valores oficiales del sistema.

Nunca serán utilizados directamente por las pantallas.

---

## Resolvers

Traducen intención en implementación.

Ejemplo:

Primary

↓

Corporate Theme

↓

Brand Blue

↓

CSS Variable

---

## Components

Construidos sobre Foundation.

No contienen colores.

No contienen tamaños fijos.

No contienen valores visuales hardcodeados.

---

## Patterns

Composición de componentes.

Representan comportamientos reutilizables.

Ejemplo:

Login

Wizard

Dashboard

Data Table

Conversation

Kanban

---

# 8. Organización documental

La documentación oficial del Design System se organiza de la siguiente forma:


docs/design-system/

DS-00 Design System Charter

DS-01 Typography Foundation

DS-02 Spacing Foundation

DS-03 Intent Driven UI

DS-04 Branding Integration

DS-05 Brand Color Foundation

DS-06 Elevation Foundation

DS-07 Motion Foundation

DS-08 Iconography

DS-09 Components

DS-10 Accessibility


Los documentos **DS** son normativos y establecen las reglas del sistema.

Los documentos **IMP** describen la implementación de funcionalidades o sprints concretos y no modifican la especificación oficial.

Las decisiones arquitectónicas relacionadas con el Design System se documentarán mediante **ADR**.

---

# 9. Gobernanza

Toda modificación al Design System deberá cumplir las siguientes reglas:

- Mantener compatibilidad con la arquitectura vigente.
- Preservar la estabilidad de las APIs públicas.
- Evitar cambios que rompan componentes existentes sin un proceso de migración documentado.
- Incorporar documentación antes de la implementación.
- Garantizar compatibilidad con múltiples temas.
- Priorizar accesibilidad, mantenibilidad y consistencia sobre soluciones puntuales.

Las decisiones que afecten a los principios fundamentales del sistema requerirán una ADR asociada.

---

# 10. Roadmap

## Foundation

- DS-01 Typography
- DS-02 Spacing
- DS-05 Colors
- DS-06 Elevation
- DS-07 Motion

---

## Components

- Buttons
- Forms
- Cards
- Tables
- Navigation
- Dialogs

---

## Patterns

- Login
- Dashboard
- CRM
- Inbox
- Pipelines
- Automation Builder

---

## Platform

- Storybook
- Theme Engine
- Token Generator
- Figma Sync
- Design Token Export

---

# 11. Referencias

Brand Identity


docs/branding/


Architecture Decision Records


docs/architecture/adr/


Implementation Guides


docs/implementation/


---

# 12. Conclusión

El Design System de TeoCRM constituye la infraestructura visual y funcional sobre la que se construye toda la plataforma.

Su finalidad no es únicamente estandarizar componentes, sino establecer un contrato estable entre diseño, desarrollo y arquitectura.

Toda nueva interfaz deberá construirse a partir de este sistema, garantizando consistencia, escalabilidad y mantenibilidad.

El Design System evoluciona junto con la plataforma, preservando la compatibilidad de sus APIs públicas y manteniendo como principios inmutables la simplicidad, la intención semántica, la accesibilidad y la separación entre identidad de marca e implementación técnica.


**Este documento tiene carácter fundacional**. Cualquier cambio que modifique sus principios, alcance o arquitectura deberá justificarse mediante una Architecture Decision Record (ADR) y aprobarse antes de su implementación.
