ADR-001
Design System Driven Development (DSDD)
Estado

✅ Accepted

Contexto

El crecimiento continuo de TeoCRM puede provocar la creación de componentes inconsistentes en diferentes módulos.

Si cada equipo crea sus propios botones, tablas o formularios, la plataforma terminará siendo difícil de mantener.

Decisión

Todo elemento visual deberá existir primero dentro del Design System.

Los módulos funcionales no podrán crear componentes de UI propios.

Flujo obligatorio:

Nueva necesidad UI
        │
        ▼
Design System
        │
        ▼
Documentación
        │
        ▼
Reutilización
Consecuencias

Ventajas:

Consistencia
Reutilización
Menor deuda técnica
Evolución centralizada