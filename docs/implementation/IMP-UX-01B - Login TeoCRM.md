# IMP-UX-01B — Implementación del Login Oficial de TeoCRM

**Proyecto:** TeoCRM
**Sprint:** UX-01B
**Estado:** Listo para Implementación
**Prioridad:** Alta

---
# Objetivo

Actualizar la interfaz visual del formulario de autenticación para alinearla con la identidad de TeoCRM, manteniendo intacta la lógica de autenticación existente.

**No se modifica:**
- autenticación
- Supabase
- middleware
- providers
- rutas
- sesiones
- permisos

Este sprint es exclusivamente visual y de internacionalización.

---
# Archivos involucrados

(Ejemplo; ajustaremos los nombres cuando revisemos el árbol real del proyecto.)

```text
src/

app/

(auth)/login/page.tsx

components/

auth/

LoginCard.tsx

LoginForm.tsx

LoginHeader.tsx

LoginFooter.tsx
```

---
# Checklist de implementación

## Fase 1 – Internacionalización

### Traducción de textos

| Actual                  | Nuevo                            |
| ----------------------- | -------------------------------- |
| Welcome back            | Bienvenido a TeoCRM              |
| Sign in to your account | Accede a tu espacio de trabajo   |
| Email                   | Correo electrónico               |
| Password                | Contraseña                       |
| Sign In                 | Ingresar                         |
| Forgot password?        | ¿Olvidaste tu contraseña?        |
| Loading...              | Ingresando...                    |
| Invalid credentials     | Usuario o contraseña incorrectos |

---
### Placeholders

Correo:

```text
tu@empresa.com
```

Contraseña:

```text
Ingrese su contraseña
```

---
## Fase 2 – Encabezado

Eliminar:

- icono morado
    

Agregar:

Logo pequeño TeoCRM

Si todavía no existe componente:

```tsx
<TeoCRMLogo size="sm" />
```

o temporalmente:

```text
TeoCRM
```

---
## Fase 3 – Botón

Color actual:

Morado

↓

Nuevo

```css
background: var(--primary);
```

Nunca:

```css
#7C3AED
```

Todo deberá utilizar los tokens del Design System.

Hover

```css
background: var(--primary-hover);
```

---
## Fase 4 – Inputs

Mantener:

✔ tamaño

✔ borde

✔ radius

Cambiar únicamente:

Focus

↓

Azul corporativo.

---

## Fase 5 – Footer

Eliminar completamente:

```text
Don't have an account?

Create account
```

Agregar:

```text
Versión Alpha

© 2026 Teo Technologies
```

---

## Fase 6 – Espaciado

Reducir:

Padding vertical

aprox.

```text
48 px

↓

36 px
```

Entre campos

```text
24 px

↓

20 px
```

El objetivo es que el card se perciba más compacto.

---

## Fase 7 – Responsive

Verificar:

Desktop

Tablet

Mobile

No debe romperse ningún layout.

---

# Componentización

El login debería quedar dividido así:

```text
LoginCard

│

├── LoginHeader

├── LoginForm

└── LoginFooter
```

Cada componente tendrá una única responsabilidad, facilitando su reutilización y mantenimiento.

---

# Tokens utilizados

No utilizar valores hardcodeados.

Todo debe salir de:

```text
colors.ts

semanticColors.ts

spacing.ts

typography.ts

radius.ts

shadows.ts
```

---

# Definición de Hecho (Definition of Done)

El sprint se considerará terminado cuando se cumplan todos los siguientes puntos:

- Toda la interfaz del login está en español.
    
- No existen textos en inglés.
    
- El botón utiliza la identidad visual de TeoCRM.
    
- Se elimina el color morado heredado del template.
    
- El login mantiene la funcionalidad actual sin regresiones.
    
- Se elimina el enlace de creación de cuenta.
    
- El footer refleja la versión Alpha de TeoCRM.
    
- El formulario funciona correctamente en modo claro y oscuro.
    
- El código utiliza exclusivamente tokens del Design System.
    
- La estructura de componentes queda preparada para futuras pantallas de autenticación.
    

---

# Fase siguiente (UX-01C)

Una vez concluido este sprint, el siguiente paso será la **internacionalización completa de la aplicación**, creando la infraestructura `i18n` y reemplazando progresivamente todas las cadenas hardcodeadas por claves de traducción.
