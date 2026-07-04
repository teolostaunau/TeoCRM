ADR-007
Public API Only

Estado

✅ Accepted

Contexto

Cuando un proyecto crece aparecen imports como:

import Button from

design-system/components/Button/internal/Button

Eso rompe todo.

Decisión

Cada módulo exportará únicamente mediante index.ts.

Siempre:

design-system

Nunca:

design-system/components/...

Esto permite reorganizar carpetas sin romper el proyecto.