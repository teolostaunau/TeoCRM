ADR-005
Layered Design System

Estado

✅ Accepted

Decisión

El Design System tendrá cinco capas estrictamente separadas.

Intent

↓

Variant

↓

Resolver

↓

Tokens

↓

Renderer

Cada capa solo conoce la inmediatamente inferior.

Nunca puede saltarse una capa.

Esto evita muchísimo acoplamiento.