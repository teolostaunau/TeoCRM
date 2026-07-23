const automations = {
  builder: {
    general: {
      backToAutomations: "Volver a automatizaciones",
      untitledAutomation: "Automatización sin título",
      active: "Activa",
      save: "Guardar",
      saveDraft: "Guardar borrador",
      trigger: "Disparador",
      triggerType: "Tipo de disparador",
      action: "Acción",
      condition: "Condición",
      wait: "Espera",
    },

    triggers: {
      newMessageReceived: {
        label: "Nuevo mensaje recibido",
        hint: "Cualquier mensaje entrante",
      },
      firstInboundMessage: {
        label: "Primer mensaje del contacto",
        hint: "La primera vez que este contacto te envía un mensaje (también funciona con contactos agregados manualmente)",
      },
      keywordMatch: {
        label: "Coincidencia de palabras clave",
        hint: "El mensaje contiene una o más palabras clave específicas",
      },
      newContactCreated: {
        label: "Nuevo contacto creado",
        hint: "Cuando un contacto se crea automáticamente a partir de un mensaje entrante",
      },
      conversationAssigned: {
        label: "Conversación asignada",
        hint: "Cuando se asigna a un agente",
      },
      tagAdded: {
        label: "Etiqueta agregada",
        hint: "Cuando se agrega una etiqueta a un contacto",
      },
      timeBased: {
        label: "Basado en tiempo",
        hint: "Según un horario recurrente",
      },
    },

    steps: {
      sendMessage: "Enviar mensaje",
      sendTemplate: "Enviar plantilla",
      addTag: "Agregar etiqueta",
      removeTag: "Eliminar etiqueta",
      assignConversation: "Asignar conversación",
      updateContactField: "Actualizar campo del contacto",
      createDeal: "Crear negocio",
      wait: "Esperar",
      condition: "Condición (Si/Entonces)",
      sendWebhook: "Enviar webhook",
      closeConversation: "Cerrar conversación",
    },

    categories: {
      action: "Acción",
      condition: "Condición",
      wait: "Espera",
    },

    fields: {
      tag: "Etiqueta",
      customFields: "Campos personalizados",
      name: "Nombre",
      email: "Correo electrónico",
      company: "Empresa",

      messageText: "Texto del mensaje",

      templateName: "Nombre de la plantilla",
      language: "Idioma",
      template: "Plantilla",

      mode: "Modo",
      agent: "Agente",

      field: "Campo",
      value: "Valor",

      pipelineId: "ID del pipeline",
      stageId: "ID de la etapa",
      title: "Título",

      amount: "Cantidad",
      unit: "Unidad",

      subject: "Asunto",
      operand: "Operador",

      url: "URL",
      bodyTemplate: "Plantilla del cuerpo (JSON)",

      keywords: "Palabras clave (separadas por comas)",
      matchType: "Tipo de coincidencia",
    },

    modes: {
      roundRobin: "Rotación automática",
      specific: "Agente específico",
    },

    units: {
      minutes: "Minutos",
      hours: "Horas",
      days: "Días",
    },

    conditions: {
      tagPresence: "Presencia de etiqueta",
      contactField: "Campo del contacto",
      messageContent: "Contenido del mensaje",
      timeOfDay: "Hora del día",

      contains: "Contiene",
      exact: "Exacta",
    },

    branches: {
      yes: "Sí",
      no: "No",
    },

    resources: {
      selectTag: "Selecciona una etiqueta…",
      tagId: "ID de la etiqueta",
      unknownTag: "etiqueta desconocida",

      selectAgent: "Selecciona un agente…",
      agentId: "ID del agente",
      unknownAgent: "agente desconocido",

      selectTemplate: "Selecciona una plantilla…",
      unknown: "desconocido",
      notInApprovedList: "no está en la lista aprobada",
    },

    placeholders: {
      schedule: "Expresión cron o HH:mm",
      keywords: "ej. precios, solicitud de demo, hablar con ventas",
      messageText: "¡Hola! Gracias por escribirnos…",
      selectTag: "Selecciona una etiqueta…",
      contactField: "nombre / correo / empresa",
      tagId: "ID de la etiqueta",
      messageVariables: "Texto o {{ vars.x }} / {{ message.text }}",
      timeRange: "HH:mm-HH:mm",
    },

    preview: {
      noText: "aún no hay texto",
      pickTemplate: "selecciona una plantilla",
      noUrl: "no hay URL",
      when: "cuando",
      wait: "{{amount}} {{unit}}",
    },

    closeConversation: {
      description:
        'Establece el estado de la conversación en "{{status}}". No requiere configuración.',
    },

    actions: {
      moveUp: "Mover hacia arriba",
      moveDown: "Mover hacia abajo",
      delete: "Eliminar",
      addStep: "Agregar paso",
    },

    messages: {
      saveFailed: "Error al guardar",
      automationSaved: "Automatización guardada",
      automationCreated: "Automatización creada",
      atPath: "en {{path}}",
      loadFailed: "Error al cargar las automatizaciones",
      updateFailed: "Error al actualizar",
      automationActivated: "Automatización activada",
      automationPaused: "Automatización pausada",
      duplicateFailed: "Error al duplicar",
      automationDuplicated: "Automatización duplicada",
      deleteFailed: "Error al eliminar",
      automationDeleted: "Automatización eliminada",
    },

    accessibility: {
      moveStepUp: "Mover paso hacia arriba",
      moveStepDown: "Mover paso hacia abajo",
      deleteStep: "Eliminar paso",
      addStep: "Agregar paso",
    },

    list: {
      title: "Automatizaciones",
      description:
        "Crea flujos de trabajo que reaccionan automáticamente a eventos de WhatsApp®.",
      create: "Crear automatización",
      quickStartTemplates: "Plantillas de inicio rápido",
      noAutomations: "Aún no hay automatizaciones",
      emptyDescription:
        "Elige una plantilla o crea una desde cero.",
      deleteTitle: "Eliminar automatización",
      deleteDescription:
        "Esto eliminará permanentemente {{name}} y su historial de ejecuciones. Esta acción no se puede deshacer.",
      cancel: "Cancelar",
      run: "ejecución",
      runs: "ejecuciones",
      last: "última",
    },

    relativeTime: {
      lastRun: "Última ejecución: {{time}}",
      never: "nunca",
      justNow: "justo ahora",
      minutesAgo: "hace {{count}} min",
      hoursAgo: "hace {{count}} h",
      daysAgo: "hace {{count}} d",
      date: "{{date}}",
    },
  },

  page: {
    gateReasons: {
      create: "crear automatizaciones",
    },
    templates: {
      welcomeMessage: {
        name: "Mensaje de bienvenida",
        description: "Respuesta automática a contactos nuevos con un saludo.",
      },
      outOfOffice: {
        name: "Fuera de oficina",
        description: "Respuesta automática fuera del horario laboral.",
      },
      leadQualifier: {
        name: "Calificador de leads",
        description: "Hacer preguntas de calificación para filtrar leads.",
      },
      followUpReminder: {
        name: "Recordatorio de seguimiento",
        description: "Enviar un recordatorio si el contacto no ha respondido en 24 horas.",
      },
    },
    title: "Automatizaciones",
    description: "Crea flujos de trabajo que reaccionan automáticamente a eventos de WhatsApp®.",
    create: "Crear automatización",
    quickStartTemplates: "Plantillas de inicio rápido",
    noAutomations: "Aún no hay automatizaciones",
    createFromScratch: "Elige una plantilla o crea una desde cero.",
    retry: "Reintentar",

    execution: {
      run: "{{count}} ejecución",
      runs: "{{count}} ejecuciones",
    },

    actions: {
      edit: "Editar",
      duplicate: "Duplicar",
      viewLogs: "Ver registros",
      delete: "Eliminar",
    },

    status: {
      active: "Activa",
      activate: "Activar",
      deactivate: "Desactivar",
    },

    errors: {
      loadFailed: "No se pudieron cargar las automatizaciones",
      updateFailed: "No se pudo actualizar",
      duplicateFailed: "No se pudo duplicar",
      deleteFailed: "No se pudo eliminar",
    },

    success: {
      activated: "Automatización activada",
      paused: "Automatización pausada",
      duplicated: "Automatización duplicada",
      deleted: "Automatización eliminada",
    },

    deleteDialog: {
      title: "Eliminar automatización",
      description:
        "Esto eliminará permanentemente {{name}} y su historial de ejecuciones. Esta acción no se puede deshacer.",
      cancel: "Cancelar",
      confirm: "Eliminar",
    },

    accessibility: {
      openMenu: "Abrir menú",
    },
  },

  logs: {
    back: "Volver",
    title: "Registros de ejecución",

    empty: {
      title: "Aún no hay ejecuciones",
      description: "Ejecuta esta automatización para ver las ejecuciones aquí.",
    },

    unknownContact: "Contacto desconocido",

    stepCount: {
      one: "{{count}} paso",
      other: "{{count}} pasos",
    },

    noStepsRecorded: "No se registraron pasos.",

    status: {
      success: "Correcto",
      partial: "Parcial",
      failed: "Fallido",
    },

    errors: {
      failedToLoad: "No se pudieron cargar los registros",
    },
  },
};

export default automations;