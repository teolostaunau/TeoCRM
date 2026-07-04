ADR-002
Intent Driven UI (IDUI)

Estado

✅ Accepted

Contexto

Las pantallas actualmente expresan apariencia.

Ejemplo:

<Button variant="primary">

Eso acopla el negocio con el diseño.

Decisión

Las pantallas expresarán intención.

Ejemplo:

<Button role="primaryAction">

El Design System decidirá cómo representarlo.

Flujo
Role

↓

Variant

↓

Resolver

↓

Tokens

↓

Render
Beneficios

El negocio deja de conocer el diseño.