# Internationalization (i18n) Guidelines

**Project:** TeoCRM  
**Version:** v0.3.0  
**Status:** Approved Architecture Guideline

---

# Objective

Define a consistent and scalable internationalization strategy for TeoCRM.

The architecture is designed to support multiple languages while keeping English as the single source of truth.

Current languages:

- English (Base Language)
- Spanish

Future languages may include:

- Portuguese
- French
- Italian
- German

without requiring structural changes.

---

# Core Principles

## 1. English is the Source of Truth

All new translation keys MUST be created first in English.

Example:

```
src/i18n/locales/en/dashboard.ts
```

Afterwards the same structure must be replicated into every supported language.

```
src/i18n/locales/es/dashboard.ts
```

Never create keys in Spanish first.

---

## 2. One Dictionary per Module

Each functional module owns its translation dictionary.

Example:

```
auth.ts
dashboard.ts
contacts.ts
companies.ts
deals.ts
tasks.ts
settings.ts
common.ts
validation.ts
```

Avoid creating a single giant translation file.

---

## 3. Hierarchical Namespaces

Translation keys should represent UI structure rather than text.

Good

```
dashboard.header.title
dashboard.header.subtitle
```

Bad

```
dashboardTitle
mainTitle
```

---

## 4. Form Fields

Every form field must be represented as an object.

Example

```
email: {
    label,
    placeholder,
    helper,
    tooltip
}
```

instead of

```
email
emailPlaceholder
emailTooltip
```

Standard properties:

- label
- placeholder
- helper
- tooltip

---

## 5. Actions

Reusable actions belong together.

Example

```
actions: {
    create
    edit
    update
    save
    delete
    archive
    cancel
    continue
    back
}
```

---

## 6. States

Common UI states should be grouped.

```
states: {
    loading
    empty
    success
    error
    noResults
}
```

---

## 7. Validation

Validation messages are centralized.

```
validation.ts
```

Example

```
required
invalidEmail
invalidPassword
minLength
maxLength
network
```

---

## 8. Common Dictionary

Texts shared across multiple modules belong in

```
common.ts
```

Example

```
yes
no
ok
cancel
close
search
filter
refresh
today
copy
paste
```

---

## 9. Errors

Module-specific errors stay inside their module.

Example

```
auth.errors.invalidCredentials
```

Generic errors belong in

```
validation.ts
```

---

# Folder Structure

```
src/
└── i18n/
    ├── locales/
    │   ├── en/
    │   │   ├── auth.ts
    │   │   ├── dashboard.ts
    │   │   ├── contacts.ts
    │   │   ├── companies.ts
    │   │   ├── deals.ts
    │   │   ├── tasks.ts
    │   │   ├── settings.ts
    │   │   ├── common.ts
    │   │   └── validation.ts
    │   │
    │   └── es/
    │       ├── auth.ts
    │       ├── dashboard.ts
    │       ├── contacts.ts
    │       ├── companies.ts
    │       ├── deals.ts
    │       ├── tasks.ts
    │       ├── settings.ts
    │       ├── common.ts
    │       └── validation.ts
```

---

# Naming Rules

Translation keys describe the purpose of the text.

Good

```
header.title
header.subtitle
actions.save
```

Bad

```
bigBlueButton
title1
dashboardTitle
```

---

# Missing Translation Policy

Missing keys should NEVER fail silently.

Development mode displays

```
⚠ namespace.key
```

to quickly identify untranslated content.

---

# Workflow

When internationalizing a new module:

1. Create the English dictionary.
2. Create the Spanish dictionary.
3. Replace hardcoded strings.
4. Verify UI.
5. Run

```
npm run typecheck
npm run lint
npm run build
```

Only after all checks pass is the Sprint considered complete.

---

# Current Sprint Order

Sprint I18N-01

- Infrastructure
- Language Switcher
- Login
- Dashboard
- Contacts
- Companies
- Deals
- Tasks
- Settings

Future sprints will continue following the same architecture.

---
Arquitectura que propondría aprobar para TeoCRM v0.3.0

Resumiendo, propondría adoptar oficialmente este estándar:

Un archivo de traducción por módulo (auth.ts, dashboard.ts, contacts.ts, etc.).
Un archivo common.ts para textos reutilizables en toda la aplicación.
Un archivo validation.ts para mensajes de validación compartidos.
Namespaces jerárquicos y semánticos (header.title, actions.save, states.loading), evitando claves planas.
Campos de formularios como objetos (label, placeholder, helper, tooltip) para mantener consistencia.
Inglés como única fuente de verdad, con el resto de idiomas replicando exactamente la misma estructura.
Mi recomendación adicional

Como Lead Software Architect, añadiría un documento al repositorio llamado:

docs/architecture/I18N_GUIDELINES.md

En él dejaríamos registradas estas convenciones para que cualquier desarrollador que se incorpore al proyecto sepa exactamente cómo crear nuevas claves y organizar los diccionarios. Esto evitará inconsistencias conforme TeoCRM evolucione y facilitará la incorporación de nuevos idiomas y colaboradores. Creo que vale la pena establecer esta base ahora, antes de continuar con la internacionalización del Dashboard y los demás módulos.

