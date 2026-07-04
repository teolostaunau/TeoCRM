ADR-008 — Evolutionary Architecture (Backward Compatibility)

Estado: ✅ Accepted

Contexto

TeoCRM ya posee funcionalidades estables en producción/desarrollo que no deben verse afectadas por la construcción del nuevo Design System.

Una migración "Big Bang" generaría riesgos innecesarios.

Decisión

El nuevo Design System convivirá con la implementación actual hasta alcanzar una versión estable.

La adopción será incremental.

Aplicación actual
        │
        ├──────────────┐
        │              │
        ▼              ▼
Componentes actuales   Design System v2
        │              │
        └──────┬───────┘
               ▼
      Migración progresiva
Reglas
Ningún componente existente se reemplaza inmediatamente.
Todo componente nuevo usa el Design System.
Los componentes existentes migrarán sprint por sprint.
Se evitarán cambios masivos en una sola rama.
El Design System tendrá versionado propio.
Esto nos lleva a una decisión importante

No construiremos un Design System que reemplace el actual.

Construiremos un Design System que conviva con el actual.

Por ejemplo:

src/

components/              ← actual

design-system/           ← nuevo

Cuando lleguemos a v1.0 del Design System, recién comenzará la migración.

Eso reduce muchísimo el riesgo.