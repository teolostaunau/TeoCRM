const inbox = {
  filters: {
    all: "Todos",
    unread: "No leídos",
    open: "Abiertos",
    pending: "Pendientes",
    closed: "Cerrados",
  },

  search: {
    placeholder: "Buscar conversaciones...",
  },

  empty: {
    noConversations: "No se encontraron conversaciones",
  },

  contact: {
    unknown: "Desconocido",
  },

  messages: {
    none: "Aún no hay mensajes",
  },

  contactSidebar: {
    selectConversation: "Selecciona una conversación",
    tags: "Etiquetas",
    noTags: "Sin etiquetas",
    activeDeals: "Negocios activos",
    noDeals: "Sin negocios",
    notes: "Notas",
    addNote: "Agregar una nota...",
  },

  messageBubble: {
    mediaUnavailable: "{{label}} no disponible",
    sharedImage: "Imagen compartida",
    document: "Documento",
    template: "Plantilla",
    locationShared: "Ubicación compartida",
    buttonReply: "Respuesta de botón",
    interactiveReply: "[Respuesta interactiva]",
    unsupportedMessageType: "[Tipo de mensaje no compatible]",
  },

  messageThread: {
    today: "Hoy",
    yesterday: "Ayer",
    selectConversation: "Selecciona una conversación",
    chooseConversation: "Elige una conversación de la izquierda para comenzar a enviar mensajes",
    backToConversations: "Volver a las conversaciones",
    open: "Abierta",
    pending: "Pendiente",
    closed: "Cerrada",
    assigned: "Asignado",
    assign: "Asignar",
    noCustomerMessages: "Sin mensajes del cliente",
    expired: "Expirada",
    hoursRemaining: "{{count}} h restantes",
    minutesRemaining: "{{count}} min restantes",
  },

  emptyState: {
    selectConversation: "Selecciona una conversación",
    chooseConversation: "Elige una conversación de la izquierda para comenzar a enviar mensajes",
  },

  date: {
    today: "Hoy",
    yesterday: "Ayer",
  },

  composer: {
    gateReasons: {
      send: "enviar mensajes",
    },
    sessionExpired: "La sesión de 24 horas expiró. Usa una plantilla para volver a contactar.",
    templates: "Plantillas",

    recording: "Grabando…",
    cancel: "Cancelar",
    stopAndAttach: "Detener y adjuntar",

    attachMedia: "Adjuntar archivo",
    sendTemplate: "Enviar plantilla",

    photo: "Foto",
    video: "Video",
    document: "Documento",
    voiceNote: "Nota de voz",

    readOnly: "Solo lectura: tu rol no puede enviar mensajes",
    readOnlyPlaceholder: "Solo lectura: los usuarios con permisos de visualización pueden navegar, pero no responder",
    sessionExpiredPlaceholder: "Sesión expirada: usa una plantilla",
    messagePlaceholder: "Escribe un mensaje... (Shift+Enter para una nueva línea)",

    quickRepliesHint: "Escribe '/' para respuestas rápidas",

    removeAttachment: "Eliminar archivo adjunto",
    addCaption: "Agregar un comentario…",

    errors: {
        fileTooLarge: "El archivo pesa {{size}} MB. El límite para {{kind}} es {{limit}} MB.",
        uploadFailed: "Error al subir el archivo.",
        recordingTooLong: "La grabación es demasiado larga (más de 16 MB).",
        recordingUnsupported: "La grabación de voz no es compatible con este navegador.",
        microphoneUnavailable: "El acceso al micrófono fue denegado o no está disponible.",
    },
  },

  status: {
    open: "Abierto",
    pending: "Pendiente",
    closed: "Cerrado",
  },
  
  assign: {
    assign: "Asignar",
    assigned: "Asignado",
    noTeammates: "No hay compañeros disponibles",
    me: "yo",
    unassign: "Desasignar",
  },

  "session": {
    "noCustomerMessages": "No hay mensajes del cliente",
    "expired": "Expirada",
    "hoursRemaining": "Quedan {{hours}} h",
    "minutesRemaining": "Quedan {{minutes}} min"
  }

}

export default inbox;