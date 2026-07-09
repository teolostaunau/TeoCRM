# Meta WhatsApp Integration Architecture

## Objetivo

Definir la arquitectura de integración entre TEO Platform y Meta WhatsApp Cloud API.

Esta documentación describe el funcionamiento esperado de la integración y los componentes involucrados.

No modifica la implementación existente.

---

# Arquitectura

                   Meta Developers

                        │

                Meta App (Cliente)

                        │

            WhatsApp Business Platform

                        │

                 WhatsApp Business Account

                        │

                  Phone Number (Cliente)

                        │

                    Access Token

                        │

────────────────────────────────────────────────────────

                   TEO Platform

                        │

             Configuración WhatsApp

                        │

        /api/whatsapp/config

                        │

        Validación contra Meta API

                        │

      Cifrado del Access Token

                        │

                  Base de Datos

                        │

              Configuración Workspace

                        │

             Envío / Recepción mensajes

                        │

                Webhook Meta

                        │

            /api/whatsapp/webhook

---

# Modelo Multi-Tenant

Cada Workspace administra su propia integración con Meta.

No existe una cuenta global de WhatsApp para toda la plataforma.

Cada cliente posee:

- su propia Meta App
- su propia WhatsApp Business Account
- su propio número
- su propio Access Token

La plataforma únicamente administra dichas credenciales.

---

# Datos almacenados por Workspace

Cada Workspace mantiene una configuración similar a:

- Meta App
- Phone Number ID
- WhatsApp Business Account ID
- Access Token
- Webhook Verify Token
- Two-Step Verification PIN (opcional)

Los datos sensibles se almacenan cifrados.

---

# Variables globales (.env)

Las variables de entorno NO almacenan credenciales de WhatsApp de los clientes.

Únicamente contienen configuración global de la plataforma.

Ejemplos:

- NEXTAUTH_SECRET
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- OPENAI_API_KEY
- RESEND_API_KEY

---

# Flujo de conexión

Usuario

↓

Crea una Meta App

↓

Agrega WhatsApp

↓

Obtiene:

- Phone Number ID
- Business Account ID
- Permanent Access Token

↓

Ingresa las credenciales en TEO Platform

↓

TEO Platform valida la conexión

↓

Las credenciales son cifradas

↓

Se almacenan asociadas al Workspace

↓

El Workspace queda conectado.

---

# Flujo de Mensajería

Cliente

↓

WhatsApp Cloud API

↓

Webhook

↓

TEO Platform

↓

Supabase

↓

CRM

↓

Respuesta

↓

Meta API

↓

Cliente

---

# Seguridad

- Access Token cifrado.
- Nunca expuesto al Frontend.
- Validación previa contra Meta.
- Un Workspace no puede acceder a la configuración de otro.
- Todas las llamadas a Meta se realizan desde el Backend.

---

# Estado actual

Estado:

En implementación.

La arquitectura ya existe dentro del proyecto.

Este documento únicamente formaliza el diseño existente.

No requiere cambios funcionales.

---

Autor

Proyecto TEO Platform

Versión

1.0