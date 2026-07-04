ADR-003
Resolver Pattern

Estado

✅ Accepted

Contexto

Los componentes suelen contener demasiada lógica.

Decisión

Toda decisión visual vivirá en un Resolver.

Ejemplo:

Button

↓

ButtonResolver

↓

Tokens
Regla

Los componentes únicamente renderizan.

Nunca calculan estilos.