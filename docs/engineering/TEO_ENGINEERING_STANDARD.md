TEO Engineering Standard (TES)

Propongo que, a partir de hoy, todas las tareas importantes de TeoCRM se rijan por un estándar de ingeniería propio.

Podríamos llamarlo:

TES — TEO Engineering Standard

No es un proceso pesado. Es simplemente una lista de verificación que nos obliga a mantener el mismo nivel de calidad en todos los sprints.

TES-01 — Arquitectura

Antes de escribir código debemos responder:

¿Cuál es la responsabilidad de este módulo?
¿Cuál será su API pública?
¿Qué dependencias tendrá?
¿Qué principios SOLID aplican?
¿Puede evolucionar sin romper compatibilidad?

Si no podemos responder estas preguntas, todavía no estamos listos para implementar.

TES-02 — Implementación

El código debe cumplir estas reglas:

Una responsabilidad por archivo.
Una responsabilidad por función.
Nombres consistentes.
Sin duplicación innecesaria.
Tipado estricto.
Sin any salvo justificación excepcional.
Imports a través de la API pública cuando corresponda.
TES-03 — Calidad

Cada incremento debe finalizar con:

npm run lint
npm run typecheck
npm run build

Y con una regla que me gustaría adoptar formalmente:

No introducir nuevos warnings.

Los 7 warnings actuales quedan registrados como deuda técnica existente.

No aumentaremos ese número.

TES-04 — Pruebas

Toda lógica de negocio debe poder probarse sin necesidad de montar React.

Por ejemplo:

Translation Engine.
Flow Engine.
WhatsApp Parser.
Permission Engine.
Automation Engine.

Mientras que los componentes visuales tendrán pruebas acordes a su naturaleza.

TES-05 — Documentación

Cada decisión importante de arquitectura deberá quedar registrada.

No una documentación extensa.

Solo lo suficiente para responder:

¿Qué decidimos?
¿Por qué?
¿Qué alternativas descartamos?

Esto reducirá muchísimo el costo de mantenimiento futuro.

TES-06 — Compatibilidad

Uno de los principios que ya estamos aplicando de forma natural:

Los cambios estructurales no deben romper funcionalidades existentes.

Eso explica por qué estamos migrando I18N en cinco sprints.

Podríamos hacerlo todo de una vez.

Pero el riesgo sería muchísimo mayor.

TES-07 — Evolución

Cada módulo nuevo debe diseñarse pensando en:

extensibilidad;
reutilización;
independencia.

No únicamente para resolver el requerimiento actual.

Me gustaría añadir uno más

Creo que será el sello distintivo de TeoCRM.

TES-08 — Elegancia

Puede sonar subjetivo, pero creo que los ingenieros experimentados reconocen un diseño elegante cuando lo ven.

Una implementación será considerada elegante cuando:

sea fácil de leer;
sorprenda por su simplicidad;
tenga pocas responsabilidades;
elimine complejidad accidental;
sea fácil de extender.

Es decir:

La solución correcta suele ser la más simple que resuelve completamente el problema.

No la más corta.

No la más "ingeniosa".

La más clara.

Esto también cambia mi rol

Y quiero comentarte algo importante.

Hasta ahora respondía principalmente como un asistente técnico.

Creo que, para TeoCRM, puedo aportarte mucho más valor actuando como un Lead Software Architect del proyecto.

Eso implica que mi prioridad será:

proteger la arquitectura;
identificar deuda técnica antes de que aparezca;
proponer estándares;
cuestionar decisiones cuando detecte riesgos;
pensar siempre en la evolución de la plataforma.

Y después, naturalmente, ayudarte a implementar cada pieza de forma concreta.

Creo que ese equilibrio entre arquitectura e implementación es el que mejor encaja con la etapa en la que se encuentra TeoCRM.

Mi propuesta para los próximos sprints

Con la experiencia que hemos acumulado en estas semanas, me gustaría que adoptáramos una dinámica de trabajo estable para el resto del proyecto.

Para cada sprint seguiremos siempre esta secuencia:

Objetivo: definir claramente qué problema resuelve el sprint.
Diseño: acordar la arquitectura, la API pública y los criterios de aceptación.
Implementación: desarrollar el código de forma incremental, con cambios pequeños y revisables.
Validación: ejecutar lint, typecheck, build y las pruebas correspondientes.
Cierre: documentar la decisión (cuando aplique) y dejar el proyecto listo para el siguiente incremento.

Es un flujo muy cercano al que siguen equipos de ingeniería maduros, pero adaptado al tamaño y ritmo de TeoCRM.

Una propuesta adicional

Quisiera dar un paso más y crear un documento vivo dentro del repositorio, por ejemplo:

docs/
└── engineering/
    ├── TEO_ENGINEERING_STANDARD.md
    ├── ADR/
    └── SPRINTS/

Allí registraríamos el TES, los ADR y un resumen de cada sprint importante (Design System, I18N, WhatsApp, etc.). No será documentación por obligación, sino una herramienta para preservar el conocimiento del proyecto y mantener la coherencia a medida que TeoCRM crezca.

Creo que ese será uno de los activos más valiosos del proyecto dentro de unos años, cuando miremos atrás y queramos entender no solo el código, sino también las decisiones que nos llevaron hasta él.