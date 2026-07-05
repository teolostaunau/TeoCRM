Me parece la decisión correcta. De hecho, creo que esta consolidación marcará el cierre definitivo del Sprint DS-01. Después de esto, el Design System quedará listo para soportar Themes, Internacionalización y los componentes futuros.

No lo llamaría simplemente una corrección de errores, sino una **consolidación arquitectónica**.

---

# IMP-DS-01.2 — Consolidación del Sistema de Tipografía

**Epic:** EPIC-01 — TEO Platform Foundation

**Sprint:** DS-01 — Typography Foundation

**Versión:** 1.0

**Estado:** Aprobado para implementación

---

# Objetivo

Consolidar el módulo de tipografía del Design System eliminando implementaciones duplicadas, estableciendo una única fuente de verdad y dejando una API pública consistente.

Al finalizar:

* `npm run typecheck` deberá finalizar sin errores.
* Existirá una única definición de tipografía semántica.
* Foundation, Tokens y Components tendrán responsabilidades claramente definidas.

---

# Situación actual

Actualmente existen dos implementaciones de tipografía semántica.

```text
src/design-system/tokens/typography.ts
```

y

```text
src/design-system/typography/semanticTypography.ts
```

Además:

* `Typography.tsx` está vacío.
* `Typography.types.ts` depende de `semanticTypography.ts`.
* `semanticTypography.ts` importa una ruta inexistente.
* `tokens/typography.ts` depende de `textStyles`, que ya no existe.

Esto genera una arquitectura inconsistente.

---

# Arquitectura objetivo

```
Foundation
      │
      ▼
Design Tokens
      │
      ▼
Semantic Tokens
      │
      ▼
Typography Component
      │
      ▼
Aplicaciones
```

---

# Estructura objetivo

```text
src/design-system/

foundation/
    typography.ts
    index.ts

tokens/
    typography.ts
    index.ts

typography/
    Typography.tsx
    Typography.types.ts
    index.ts
```

El archivo

```text
semanticTypography.ts
```

desaparece.

---

# Responsabilidades

## Foundation

Contiene únicamente valores base.

Ejemplo:

```
fontFamily

fontWeight

fontSize

lineHeight

letterSpacing
```

No conoce componentes.

No conoce la UI.

No conoce páginas.

---

## Tokens

Construye significado.

Ejemplo:

```text
pageTitle

sectionTitle

cardTitle

body

bodySmall

caption

button

label
```

Los Tokens únicamente consumen Foundation.

Nunca consumen componentes.

---

## Typography Component

Consume únicamente Semantic Tokens.

Nunca accede directamente a Foundation.

---

# Fuente de verdad

A partir de esta implementación existirá una única fuente oficial.

```
src/design-system/tokens/typography.ts
```

Toda la aplicación deberá consumir esta definición.

---

# Eliminaciones

Eliminar:

```
src/design-system/typography/semanticTypography.ts
```

---

# Cambios por archivo

## foundation/typography.ts

Mantener únicamente:

```
fontFamily

fontWeight

fontSize

lineHeight

letterSpacing
```

Eliminar cualquier referencia a:

```
textStyles
```

---

## foundation/index.ts

Debe exportar únicamente Foundation.

Ejemplo:

```ts
export * from "./typography";
```

---

## tokens/typography.ts

Se convierte en el lugar donde viven los Semantic Tokens.

Ya no utilizará

```
typography.textStyles
```

Construirá directamente los objetos semánticos utilizando:

```
fontSize

fontWeight

lineHeight

letterSpacing

fontFamily
```

---

## Typography.types.ts

Dejará de importar desde:

```
./semanticTypography
```

e importará desde:

```
../tokens/typography
```

---

## Typography.tsx

Implementar el componente oficial del Design System.

Responsabilidad:

* resolver variant
* aplicar className
* renderizar el elemento HTML correspondiente

No contendrá estilos hardcodeados.

---

## typography/index.ts

Nuevo archivo.

```ts
export * from "./Typography";
export * from "./Typography.types";
```

---

# API pública

El resto del proyecto únicamente podrá consumir:

```ts
import { Typography } from "@/design-system/typography";
```

o

```ts
import { semanticTypography } from "@/design-system/tokens";
```

Nunca accederá directamente a Foundation.

---

# Criterios de aceptación

## Arquitectura

* Una sola fuente de Semantic Typography.
* Sin archivos duplicados.
* Sin imports obsoletos.

---

## Calidad

Debe pasar:

```bash
npm run lint
```

```bash
npm run typecheck
```

```bash
npm run build
```

---

## Documentación

Actualizar:

```
CHANGELOG.md
```

Agregar:

```
Consolidated Typography Design System.
```

---

# ADR asociado

Propongo crear un nuevo ADR para registrar esta decisión.

## ADR-010 — Single Source of Truth for Typography

### Decisión

La tipografía semántica tendrá una única implementación oficial dentro de:

```
src/design-system/tokens
```

Foundation únicamente contendrá valores primitivos.

Los componentes consumirán exclusivamente Tokens.

### Consecuencias

* Eliminación de implementaciones duplicadas.
* Menor acoplamiento.
* Mayor facilidad para evolucionar el Design System.
* Base preparada para múltiples temas y personalización futura.

---

# Beneficios para el Sprint 4

Esta consolidación no solo resolverá los errores actuales, sino que dejará el Design System preparado para los próximos trabajos:

* **DS-04.2 — Theme Architecture**, donde los temas modificarán únicamente tokens semánticos.
* **Corporate Blue**, que podrá cambiar la apariencia sin afectar componentes.
* **Internacionalización**, donde el componente `Typography` podrá incorporar comportamientos consistentes (por ejemplo, jerarquías tipográficas por idioma si algún día fueran necesarias).

Además, esta decisión consolida una regla arquitectónica que considero fundamental para **TEO Platform**: **cada capa tiene una única responsabilidad y una única fuente de verdad**. Ese principio será tan importante para la tipografía como lo será más adelante para colores, espaciado, iconografía y temas. Es una inversión que simplificará enormemente la evolución futura del proyecto.
