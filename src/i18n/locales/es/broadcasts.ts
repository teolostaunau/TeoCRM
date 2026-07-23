const broadcasts = {
  status: {
    broadcast: {
      draft: "Borrador",
      scheduled: "Programada",
      sending: "Enviando",
      sent: "Enviada",
      failed: "Fallida",
    },
    recipient: {
      pending: "Pendiente",
      sent: "Enviado",
      delivered: "Entregado",
      read: "Leído",
      replied: "Respondido",
      failed: "Fallido",
    },
  },
  steps: {
    chooseTemplate: {
      title: "Elegir una plantilla",
      description: "Selecciona una plantilla de mensaje aprobada para tu difusión.",
      emptyTitle: "No hay plantillas disponibles.",
      emptyDescription: "Crea una plantilla en Configuración primero.",
      errors: {
        load: "No se pudieron cargar las plantillas",
      },
      actions: {
        back: "Volver",
        next: "Siguiente",
      },
      language: "Idioma",
    },
    selectAudience: {
      title: "Seleccionar audiencia",
      description: "Elige quién recibirá esta difusión.",
      options: {
        all: {
          label: "Todos los contactos",
          description: "Enviar a todos los contactos de tu base",
        },
        tags: {
          label: "Filtrar por etiquetas",
          description: "Dirigirse a contactos con etiquetas específicas",
        },
        customField: {
          label: "Campo personalizado",
          description: "Filtrar por el valor de un campo personalizado",
        },
        csv: {
          label: "Subir CSV",
          description: "Subir una lista de números de teléfono",
        },
      },
      tags: {
        title: "Seleccionar etiquetas",
        empty: "No se encontraron etiquetas. Crea etiquetas en Configuración.",
      },
      customField: {
        title: "Filtro por campo personalizado",
        empty: "No hay campos personalizados definidos. Crea uno en Configuración → Campos personalizados.",
        fieldPlaceholder: "Selecciona un campo…",
        operatorPlaceholder: "Selecciona un operador…",
        valuePlaceholder: "Valor",
      },
      exclude: {
        title: "Excluir contactos con estas etiquetas",
        optional: "(opcional)",
        empty: "No hay etiquetas disponibles.",
      },
      summary: {
        title: "Resumen de audiencia",
        loading: "Calculando…",
        recipients: "destinatarios estimados",
        empty: "Selecciona un tipo de audiencia para ver la estimación.",
      },
      actions: {
        back: "Volver",
        next: "Siguiente",
      },
      operators: {
        is: "es",
        is_not: "no es",
        contains: "contiene",
      },
    },
    personalize: {
      title: "Personalizar mensaje",
      description: "Asocia las variables de la plantilla con campos de contacto, campos personalizados o valores estáticos.",
      headerMedia: {
        title: "Media del encabezado",
        label: "URL del archivo",
        placeholder: "https://example.com/header",
        description: "URL pública del {{type}} enviada como encabezado del mensaje. Se usa para todos los destinatarios de esta difusión.",
        validation: {
          missing: "Se requiere una URL para enviar esta plantilla.",
          invalid: "Ingresa una URL http(s) válida.",
        },
        altPreview: "Vista previa del encabezado",
      },
      emptyState: "Esta plantilla no tiene variables para personalizar.",
      mapping: {
        type: "Tipo de asignación",
        value: "Valor",
        field: "Campo",
        staticValue: "Valor estático",
        contactField: "Campo de contacto",
        customField: "Campo personalizado",
        placeholder: "Ingresa un valor...",
        selectField: "Selecciona un campo...",
        loading: "Cargando…",
        noCustomFields: "Sin campos personalizados",
        selectCustomField: "Selecciona un campo personalizado…",
      },
      preview: {
        title: "Vista previa en vivo",
        sampleData: "datos de ejemplo",
      },
      validation: {
        missing: "Asocia todas las variables antes de continuar — aún faltan {{placeholders}}. De lo contrario, esas variables se enviarán a Meta como cadenas vacías.",
      },
      actions: {
        back: "Volver",
        next: "Siguiente",
      },
      contactFields: {
        name: "Nombre del contacto",
        phone: "Número de teléfono",
        email: "Correo electrónico",
        company: "Empresa",
      },
    },
    scheduleSend: {
      title: "Revisar y enviar",
      description: "Ponle nombre a la difusión, revisa los detalles y envía.",
      nameLabel: "Nombre de la difusión",
      namePlaceholder: "p. ej. Anuncio de verano",
      summary: {
        title: "Resumen",
        template: "Plantilla",
        audience: "Audiencia",
        estimatedReach: "Cobertura estimada",
        language: "Idioma",
      },
      processing: {
        title: "Enviando difusión...",
      },
      actions: {
        back: "Volver",
        saveDraft: "Guardar como borrador",
        send: "Enviar difusión",
      },
      dialog: {
        title: "Confirmar difusión",
        description: "Estás a punto de enviar esta difusión a {{count}} contactos usando la plantilla {{template}}. Esta acción no se puede deshacer.",
        cancel: "Cancelar",
        confirm: "Confirmar y enviar",
      },
      audience: {
        all: "Todos los contactos",
        tags: "Etiquetas ({{count}} seleccionadas)",
        csv: "Carga CSV",
        custom: "Personalizado",
      },
    },
  },
  pages: {
    list: {
      gateReasons: {
        create: "crear difusiones",
      },
      errors: {
        load: "No se pudieron cargar las difusiones",
      },
      actions: {
        retry: "Reintentar",
        newBroadcast: "Nueva difusión",
      },
      progress: {
        aria: "Difusión en curso",
      },
      header: {
        title: "Difusiones",
        description: "Envía mensajes masivos a tus contactos usando plantillas aprobadas.",
      },
      empty: {
        title: "Aún no hay difusiones",
        description: "Crea tu primera difusión para llegar a tus contactos a gran escala.",
      },
      table: {
        headers: {
          name: "Nombre",
          template: "Plantilla",
          recipients: "Destinatarios",
          delivery: "Entrega",
          read: "Lectura",
          status: "Estado",
          date: "Fecha",
        },
      },
    },
    new: {
      header: {
        title: "Nueva difusión",
        description: "Crea y envía un mensaje de difusión a tus contactos.",
      },
      steps: {
        template: "Plantilla",
        audience: "Audiencia",
        personalize: "Personalizar",
        send: "Enviar",
      },
      errors: {
        sendFailed: "La difusión falló",
        draftNameRequired: "Ponle nombre a la difusión antes de guardar un borrador.",
        notSignedIn: "No has iniciado sesión.",
        accountMissing: "Tu perfil no está vinculado a una cuenta.",
        saveDraftFailed: "No se pudo guardar el borrador: {{message}}",
      },
      messages: {
        draftSaved: "Borrador guardado",
      },
    },
    detail: {
      errors: {
        load: "No se pudo cargar la difusión",
        notFound: "No se encontró la difusión",
      },
      actions: {
        backToList: "Volver a las difusiones",
      },
      header: {
        template: "Plantilla: {{name}}",
        created: "Creada {{date}}",
      },
      delete: {
        confirmTitle: "¿Eliminar esta difusión?",
        cancel: "Cancelar",
        deleting: "Eliminando…",
        confirm: "Confirmar",
        disabledSending: "No se puede eliminar mientras la difusión está enviándose",
        button: "Eliminar",
        failed: "No se pudo eliminar: {{message}}",
        success: "Difusión eliminada",
      },
      stats: {
        totalRecipients: "Total de destinatarios",
        sent: "Enviados",
        delivered: "Entregados",
        read: "Leídos",
        replied: "Respondidos",
        failed: "Fallidos",
      },
      funnel: {
        title: "Embudo",
      },
      recipients: {
        title: "Destinatarios ({{count}}{{total}})",
        filters: {
          all: "Todos los estados",
        },
        actions: {
          exportCsv: "Exportar CSV",
        },
        empty: {
          none: "No se encontraron destinatarios.",
          filter: "Ningún destinatario coincide con este filtro.",
        },
        table: {
          contact: "Contacto",
          phone: "Teléfono",
          status: "Estado",
          sentAt: "Enviado el",
          deliveredAt: "Entregado el",
          readAt: "Leído el",
          error: "Error",
          unknownContact: "Desconocido",
        },
        csv: {
          contact: "Contacto",
          phone: "Teléfono",
          status: "Estado",
          sentAt: "Enviado el",
          deliveredAt: "Entregado el",
          readAt: "Leído el",
          repliedAt: "Respondido el",
          error: "Error",
        },
      },
    },
  },
};

export default broadcasts;
