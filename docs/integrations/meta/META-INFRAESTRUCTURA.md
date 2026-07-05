Business Manager:
Caricias del Alma

WABA:
Caricias del Alma

Phone Number:
+51 993731273

Phone Number ID:
...

WABA ID:
...

App:
CRM WaTeo

App ID:
...

Webhook URL:
...

Verify Token:
...

Access Token:
...

## Arquitectura de Integración

TEO Platform utiliza un modelo Multi-Tenant.

Cada Workspace conecta su propia infraestructura de Meta:

Workspace
    ↓
Meta App
    ↓
WhatsApp Business Account
    ↓
Phone Number

Las credenciales pertenecen al Workspace y no a la plataforma.

La plataforma únicamente administra la conexión.