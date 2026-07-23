const settings = {
  common: {
    roles: {
      owner: "Propietario",
      admin: "Administrador",
      agent: "Agente",
      viewer: "Visualizador",
    },
    saving: "Guardando…",
    loading: "Cargando…",
    cancel: "Cancelar",
    save: "Guardar",
    done: "Listo",
    copy: "Copiar",
    delete: "Eliminar",
    edit: "Editar",
    remove: "Quitar",
    unknownError: "Error desconocido",
  },

  page: {
    title: "Configuración",
    description:
      "Todo en un solo lugar — tu cuenta y tu espacio de trabajo. Elige una sección para gestionarla.",
  },

  rail: {
    account: "Cuenta",
    workspace: "Espacio de trabajo",
    sections: {
      overview: "Resumen",
      profile: "Tu perfil",
      security: "Acceso y seguridad",
      appearance: "Apariencia",
      whatsapp: "WhatsApp",
      templates: "Plantillas",
      fields: "Campos y etiquetas",
      deals: "Negocios y moneda",
      members: "Equipo",
      api: "Claves API",
    },
  },

  overview: {
    yourAccount: "Tu cuenta",
    whatsapp: {
      notSetUp: "Aún no configurado",
      connected: "Conectado",
      needsReconnecting: "Requiere reconexión",
    },
    members: {
      viewTeam: "Ver miembros del equipo",
      member: "miembro",
      members: "miembros",
      pendingInvite: "invitación pendiente",
      pendingInvites: "invitaciones pendientes",
    },
    templates: {
      manage: "Gestionar plantillas de mensaje",
      template: "plantilla",
      templates: "plantillas",
      pendingReview: "pendiente de revisión",
    },
    fields: {
      tagsAndCustomFields: "Etiquetas y campos personalizados",
      tag: "etiqueta",
      tags: "etiquetas",
      customField: "campo personalizado",
      customFields: "campos personalizados",
    },
    appearance: {
      accent: "acento",
    },
    loading: "Cargando…",
  },

  profile: {
    title: "Tu perfil",
    description:
      "Cómo te muestras en la aplicación. Tu avatar y nombre aparecen en el encabezado, la barra lateral y donde sea que tus compañeros te vean.",
    avatar: {
      unsupportedType: "Tipo de imagen no compatible",
      unsupportedTypeDesc: "Usa PNG, JPG, WebP o GIF.",
      tooLarge: "La imagen es demasiado grande",
      tooLargeDesc: "Máximo 2 MB.",
      changePhoto: "Cambiar foto",
      uploadPhoto: "Subir foto",
      remove: "Quitar",
      helpText: "PNG, JPG, WebP o GIF. Hasta 2 MB.",
    },
    displayName: {
      label: "Nombre para mostrar",
      required: "El nombre para mostrar es obligatorio",
    },
    email: {
      label: "Correo electrónico",
      invalid: "Ingresa un correo electrónico válido",
      changeFailed: "Error al cambiar el correo: {{error}}",
      saved: "Perfil guardado",
      savedConfirm:
        "Perfil guardado — revisa tu correo para confirmar el cambio de dirección",
      pendingWarning:
        "Revisa la bandeja de <strong>{{oldEmail}}</strong> y <strong>{{newEmail}}</strong> — ambos deben confirmar antes de que el cambio surta efecto.",
    },
    accountDetails: "Datos de la cuenta",
    role: "Rol",
    joined: "Se unió",
    userId: "ID de usuario",
    loadingProfile: "Cargando tu perfil…",
    saving: "Guardando…",
    saveChanges: "Guardar cambios",
  },

  security: {
    title: "Acceso y seguridad",
    description:
      "Cambia tu contraseña y cierra sesión en tus dispositivos. Estas medidas mantienen tu cuenta segura.",
  },

  password: {
    title: "Contraseña",
    description:
      "Usa al menos 8 caracteres. Permanecerás conectado en este dispositivo después de cambiarla.",
    currentLabel: "Contraseña actual",
    newLabel: "Nueva contraseña",
    confirmLabel: "Confirmar nueva contraseña",
    updating: "Actualizando…",
    updateButton: "Actualizar contraseña",
    errors: {
      noEmail: "No se puede cambiar la contraseña sin un correo electrónico actual",
      tooShort: "La contraseña debe tener al menos {{min}} caracteres",
      mismatch: "La nueva contraseña y la confirmación no coinciden",
      incorrect: "La contraseña actual es incorrecta",
      updateFailed: "Error al actualizar la contraseña: {{error}}",
    },
    success: "Contraseña actualizada",
  },

  sessions: {
    title: "Sesiones activas",
    description:
      "Cierra sesión en todos los dispositivos donde estás conectado — incluyendo este. Útil si perdiste una laptop o compartiste tu contraseña.",
    signOutAll: "Cerrar sesión en todos los dispositivos",
    confirmTitle: "¿Cerrar sesión en todos lados?",
    confirmDescription:
      "Todos los dispositivos conectados a esta cuenta cerrarán sesión y deberán volver a iniciar sesión. Serás redirigido a la página de inicio de sesión.",
    signingOut: "Cerrando sesión…",
    signOutButton: "Cerrar sesión en todos lados",
    errors: {
      signOutFailed: "Error al cerrar sesión: {{error}}",
    },
  },

  appearance: {
    title: "Apariencia",
    description:
      "Configura el modo y el color de acento en la aplicación. Guardado en este dispositivo — pruébalo, cambia en tiempo real.",
    mode: "Modo",
    accentColor: "Color de acento",
    active: "Activo",
  },

  whatsapp: {
    title: "Conexión de WhatsApp",
    description:
      "Conecta tu API de WhatsApp Business de Meta. Credenciales, webhook y pasos de configuración están aquí.",
    banner: {
      tokenCorrupted: "El token almacenado no se puede descifrar",
      resetting: "Restableciendo…",
      resetButton: "Restablecer configuración",
    },
    status: {
      credentialsValid: "Credenciales válidas",
      notConnected: "No conectado",
      connectedDescription:
        "Tu token de acceso se autentica con Meta. Consulta el estado de registro más abajo para verificar si los webhooks están conectados.",
      disconnectedDescription:
        "Configura tus credenciales de API de Meta más abajo para conectar tu cuenta de WhatsApp Business.",
    },
    registration: {
      registered: "Registrado — Meta entregará eventos a wacrm",
      notRegistered: "No registrado — Meta no entregará eventos",
      verifyButton: "Verificar con Meta",
      subscribedSince: "Suscrito desde {{date}}.",
      clickVerify: "Haz clic en <strong>Verificar con Meta</strong> si los eventos dejan de llegar.",
      lastAttemptFailed:
        'El último intento falló con: <span class="text-red-300">"{{error}}"</span>. Ingresa (o corrige) el PIN de dos pasos más abajo y haz clic en Guardar configuración para reintentar.',
      noTracking:
        "Este número se guardó antes del seguimiento de registro, o el registro se omitió. Ingresa el PIN de dos pasos más abajo y haz clic en Guardar configuración para suscribirlo.",
      diagnostic: "Diagnóstico — última ejecución:",
      live: "activo",
      notLive: "no activo",
    },
    credentials: {
      cardTitle: "Credenciales de API",
      cardDescription: "Ingresa tus credenciales de API de WhatsApp Business de Meta.",
      phoneNumberId: "ID del número de teléfono",
      wabaId: "ID de la cuenta de WhatsApp Business",
      accessToken: "Token de acceso permanente",
      tokenHidden: "El token está oculto por seguridad. Vuelve a ingresarlo para actualizar la configuración.",
      verifyToken: "Token de verificación del webhook",
      verifyTokenHelp:
        "Una cadena personalizada que creas. Debe coincidir con el token que configuraste en los ajustes de webhook de Meta.",
      pin: "PIN de verificación en dos pasos",
      pinOptional: "(opcional)",
      pinHelp:
        "Solo se necesita para conectar los mensajes <strong>entrantes</strong> de un número en <strong>producción</strong>. Configúralo en <strong>Meta Business Manager → Cuentas de WhatsApp → Números de teléfono → Verificación en dos pasos</strong>, luego pégalo aquí para que wacrm pueda suscribir el número — de lo contrario Meta enruta los eventos entrantes a la última app que lo reclamó (el síntoma que afecta a segundos números bajo un WABA compartido). Los <strong>números de prueba de Meta</strong> no tienen PIN y están pre-registrados — déjalo vacío para ellos. Dejarlo vacío también mantiene un registro existente intacto.",
    },
    webhook: {
      cardTitle: "Configuración del webhook",
      cardDescription:
        "Usa esta URL como callback de webhook en el Panel de la App de Meta.",
      callbackUrl: "URL de callback del webhook",
      copied: "URL del webhook copiada al portapapeles",
    },
    actions: {
      saving: "Guardando…",
      saveButton: "Guardar configuración",
      testing: "Probando…",
      testButton: "Probar conexión API",
      resetting: "Restableciendo…",
      resetButton: "Restablecer configuración",
    },
    connectionDetails: {
      title: "Detalles de conexión",
      description: "Información devuelta por la API de WhatsApp Cloud de Meta.",
      clearButton: "Limpiar",
      status: "Estado",
      connectedBadge: "Conectado",
      verifiedName: "Nombre verificado",
      displayNumber: "Número visible",
      phoneNumberId: "ID del número de teléfono",
      qualityRating: "Calificación de calidad",
      graphApi: "API de Graph",
      lastCheck: "Última verificación",
    },
    setup: {
      title: "Instrucciones de configuración",
      description: "Sigue estos pasos para conectar tu API de WhatsApp Business.",
      step1: {
        title: "Crear una app de Meta",
        item1: 'Ve a <span class="text-primary">developers.facebook.com</span>',
        item2: 'Haz clic en "Mis apps" y luego en "Crear app"',
        item3: 'Selecciona "Negocio" como tipo de app',
        item4: "Completa los detalles de la app y crea",
      },
      step2: {
        title: "Agregar producto de WhatsApp",
        item1: 'En el panel de tu app, haz clic en "Agregar producto"',
        item2: 'Busca "WhatsApp" y haz clic en "Configurar"',
        item3: "Sigue el asistente de configuración para vincular tu negocio",
      },
      step3: {
        title: "Obtener credenciales de API",
        item1: "Ve a WhatsApp > Configuración de API",
        item2: "Copia tu <strong>ID del número de teléfono</strong>",
        item3: "Copia tu <strong>ID de la cuenta de WhatsApp Business</strong>",
        item4: "Genera un <strong>Token de acceso permanente</strong> desde Configuración del negocio > Usuarios del sistema",
      },
      step4: {
        title: "Configurar webhooks",
        item1: "Ve a WhatsApp > Configuración",
        item2: 'Haz clic en "Editar" en la sección de Webhook',
        item3: "Pega la <strong>URL de callback del webhook</strong> de arriba",
        item4: "Ingresa el mismo <strong>Token de verificación</strong> que configuraste aquí",
        item5: 'Suscríbete al campo de webhook "messages"',
      },
      documentation: "Documentación de la API de WhatsApp de Meta",
    },
    confirmReset:
      "Esto eliminará la configuración actual de WhatsApp para que puedas volver a ingresarla. ¿Continuar?",
    errors: {
      loadFailed: "Error al cargar la configuración de WhatsApp",
      phoneNumberRequired: "El ID del número de teléfono es obligatorio",
      accessTokenRequired: "El token de acceso es obligatorio para la configuración inicial",
      tokenReentryRequired: "Vuelve a ingresar el token de acceso para guardar los cambios",
      saveFailed: "Error al guardar la configuración",
      registrationFailed:
        "Guardado, pero Meta no pudo registrar el número: {{error}}",
      credentialsSaved:
        "Credenciales guardadas y verificadas. El registro de entradas se omitió (sin PIN) — consulta el estado de registro más abajo.",
      liveSuccess:
        "Activo — {{name}} ahora puede recibir eventos.",
      connectedSuccess: "WhatsApp conectado. Los eventos comenzarán a fluir en un minuto.",
      testFailed: "Conexión API fallida",
      testNetworkError: "Error en la prueba de conexión. Verifica la red e intenta de nuevo.",
      connectedTo: "Conectado a {{name}}",
      testSuccess: "Conexión API exitosa",
      registrationLive: "El número está completamente conectado — Meta está entregando eventos.",
      registrationNotLive:
        "El número no está completamente registrado. Consulta las verificaciones más abajo para saber en qué paso falló.",
      verificationFailed: "No se pudo alcanzar el endpoint de verificación.",
      resetFailed: "Error al restablecer la configuración",
      resetSuccess: "Configuración eliminada. Ahora puedes volver a ingresar tus credenciales.",
      resetConfirm:
        "Esto eliminará la configuración actual de WhatsApp para que puedas volver a ingresarla. ¿Continuar?",
    },
  },

  templates: {
    title: "Plantillas de mensaje",
    description:
      'Crea plantillas y envíalas a Meta para aprobación. Usa "Sincronizar con Meta" para obtener plantillas aprobadas en otro lugar.',
    syncButton: "Sincronizar con Meta",
    syncing: "Sincronizando…",
    newTemplate: "Nueva plantilla",
    syncTitle: "Obtener plantillas aprobadas de tu cuenta de WhatsApp Business de Meta",
    empty: {
      heading: "Aún no hay plantillas.",
      description: "Crea tu primera plantilla de mensaje para comenzar.",
    },
    categories: {
      Marketing: "Marketing",
      Utility: "Utilidad",
      Authentication: "Autenticación",
    },
    headerFormats: {
      none: "Ninguno",
      text: "Texto",
      image: "Imagen",
      video: "Video",
      document: "Documento",
    },
    form: {
      titleLabel: "Nombre de la plantilla",
      namePlaceholder: "ej. confirmacion_pedido",
      nameFixed: "El nombre está fijo una vez que la plantilla existe en Meta — crea una nueva plantilla para cambiarlo.",
      nameHelp: "Solo letras minúsculas, dígitos y guiones bajos.",
      categoryLabel: "Categoría",
      languageLabel: "Idioma",
      languageFixed: "El idioma está fijo una vez que la plantilla existe en Meta.",
      languageHelp:
        "Debe coincidir con el código exacto en Meta — <code>en_US</code> y <code>en</code> son distintos.",
      headerLabel: "Encabezado",
      headerTextPlaceholder:
        "Texto del encabezado (máx 60 caracteres, opcional {{1}})",
      headerSamplePlaceholder:
        "Valor de ejemplo para {{1}} (requerido para la revisión de Meta)",
      uploadImage: "Subir imagen",
      imageHelp: "JPEG o PNG, ≤5 MB",
      imageUploadHelp:
        "Sube un JPEG/PNG (≤5 MB, ≥800×418 px recomendado) o pega un enlace HTTPS público — lo subimos a Meta para revisión automáticamente.",
      mediaHelp:
        "Debe ser un enlace HTTPS accesible públicamente. Meta lo obtiene una vez durante la revisión, así que debe permanecer activo ~24 hrs.",
      videoHelp: " Recomendado: MP4 / 3GPP, ≤16 MB, ≤60 segundos.",
      documentHelp: " Recomendado: PDF, ≤100 MB.",
      bodyLabel: "Texto del cuerpo",
      bodyPlaceholder: "Hola {{1}}, tu pedido {{2}} está confirmado.",
      bodyHelp:
        "Usa {{1}}, {{2}} para variables (deben ser continuas comenzando en {{1}}).",
      sampleValues: "Valores de ejemplo (Meta los usa para revisar tu plantilla)",
      footerLabel: "Pie (opcional)",
      footerPlaceholder: "Texto de pie opcional (máx 60 caracteres)",
      buttonsLabel: "Botones (opcional)",
      addButton: "Agregar botón",
      buttonsHelp:
        "Hasta {{max}} botones. Los botones de RESPUESTA RÁPIDA deben ir antes de los botones de URL / teléfono / copiar código.",
      buttonLabelPlaceholder: "Etiqueta del botón",
      buttonTypes: {
        QUICK_REPLY: "Respuesta rápida",
        URL: "URL",
        PHONE_NUMBER: "Teléfono",
        COPY_CODE: "Copiar código",
      },
      urlPlaceholder: "https://ejemplo.com/ruta o con sufijo {{1}}",
      urlExamplePlaceholder:
        "Valor de ejemplo para {{1}} (requerido cuando la URL tiene una variable)",
      phonePlaceholder: "+15551234567",
      copyCodePlaceholder: "Código de ejemplo (ej. VERANO20)",
    },
    dialog: {
      createTitle: "Nueva plantilla de mensaje",
      editTitle: "Editar plantilla de mensaje",
      createDescription:
        "Construye una plantilla y envíala a Meta para aprobación. Una vez aprobada, puedes usarla en transmisiones y la bandeja de entrada.",
      editDescription:
        "Guarda tus cambios para reenviar a Meta. El estado volverá a PENDIENTE durante la revisión.",
    },
    authWarning:
      "Las plantillas de AUTENTICACIÓN tienen un cuerpo fijo + forma de botón OTP que necesita un constructor diferente. Créalas en Meta WhatsApp Manager por ahora y usa <strong>Sincronizar con Meta</strong> para importarlas.",
    actions: {
      edit: "Editar",
      resubmit: "Reenviar",
      deleteFromMeta: "Eliminar de Meta y localmente",
      deleteLocal: "Eliminar localmente",
      editTooltip: "Editar activa la re-revisión de Meta — el estado cambia a PENDIENTE.",
      resubmitTooltip:
        "Edita la plantilla y reenvíala a Meta para revisión.",
    },
    submit: {
      saving: "Guardando…",
      submitting: "Enviando…",
      saveResubmit: "Guardar y reenviar",
      submitForApproval: "Enviar para aprobación",
    },
    deleteConfirm: {
      title: "¿Eliminar plantilla?",
      withMeta:
        '"{{name}}" será eliminada de Meta y de wacrm. Las transmisiones activas que usen esta plantilla dejarán de funcionar en su próximo envío. Esto no se puede deshacer.',
      withoutMeta:
        '"{{name}" será eliminada de wacrm. Nunca se envió a Meta, así que no se necesita limpieza remota.',
      deleting: "Eliminando…",
      deleteButton: "Eliminar",
    },
    sync: {
      success:
        "Sincronizada {{count}} plantilla de Meta{{details}}",
      successPlural:
        "Sincronizadas {{count}} plantillas de Meta{{details}}",
      detailsFormat: " ({{inserted}} nuevas, {{updated}} actualizadas)",
      syncErrors: "Error al sincronizar: {{names}}{{suffix}}",
      truncated:
        "Solo se sincronizaron las primeras 2000 plantillas — tu cuenta tiene más. Sincroniza de nuevo para continuar, o contacta soporte si esto persiste.",
    },
    submitResults: {
      editDryRun: "Plantilla actualizada (simulación — sin llamada a Meta)",
      createDryRun: "Plantilla guardada (simulación — sin llamada a Meta)",
      editSubmitted:
        "Edición enviada — Meta generalmente revisa en 24 horas.",
      createSubmitted:
        "Enviada a Meta — el tiempo de revisión típico es 24 horas. El estado se actualiza automáticamente.",
    },
    headerImage: {
      invalidType: "La imagen del encabezado debe ser JPEG o PNG.",
      tooLarge:
        "La imagen tiene {{size}} MB — el límite de Meta es 5 MB.",
      uploaded: "Imagen subida.",
    },
    errors: {
      loadFailed: "Error al cargar las plantillas",
      nameRequired: "El nombre de la plantilla es obligatorio",
      submitFailed: "Error al enviar",
      deleteFailed: "Error al eliminar la plantilla",
    },
  },

  fields: {
    title: "Campos y etiquetas",
    description:
      "Dos formas de organizar contactos: etiquetas con color para agrupación rápida, y campos personalizados para datos estructurados.",
  },

  tags: {
    title: "Etiquetas",
    description: "Etiquetas con color para agrupar y filtrar contactos.",
    empty: "Aún no hay etiquetas — crea la tuya abajo.",
    addButton: "Agregar etiqueta",
    tagNamePlaceholder: "ej. Newsletter",
    colors: {
      Red: "Rojo",
      Orange: "Naranja",
      Amber: "Ámbar",
      Emerald: "Esmeralda",
      Cyan: "Cian",
      Blue: "Azul",
      Violet: "Violeta",
      Pink: "Rosa",
    },
    deleteConfirm: {
      title: "Eliminar etiqueta",
      description:
        '¿Eliminar la etiqueta "{{name}}"? Se eliminará de todos los contactos y no se puede deshacer.',
      deleting: "Eliminando…",
      deleteButton: "Eliminar etiqueta",
    },
    errors: {
      loadFailed: "Error al cargar las etiquetas",
      nameRequired: "El nombre de la etiqueta es obligatorio",
      notAuthenticated: "No autenticado",
      createFailed: "Error al crear la etiqueta",
      deleteFailed: "Error al eliminar la etiqueta",
    },
    success: {
      created: "Etiqueta creada",
      deleted: "Etiqueta eliminada",
    },
  },

  customFields: {
    title: "Campos personalizados",
    description:
      'Campos de contacto adicionales (ej. código postal, fuente de leads). Aparecen en cada contacto y en la acción de automatización "Actualizar campo de contacto".',
    adminBadge: "Administrador",
  },

  deals: {
    title: "Negocios y moneda",
    description:
      "La moneda usada para nuevos negocios y para los totales del pipeline y del panel.",
    defaultCurrency: "Moneda predeterminada",
    defaultCurrencyDescription:
      "Los nuevos negocios usan esta moneda por defecto, y los totales del pipeline y del panel se muestran en ella. Los negocios existentes mantienen la moneda con la que se guardaron.",
    currencyLabel: "Moneda",
    adminOnly: "Solo los administradores de la cuenta pueden cambiar la moneda predeterminada.",
    errors: {
      saveFailed: "Error al guardar la moneda predeterminada",
    },
    success: "Moneda predeterminada actualizada",
  },

  members: {
    title: "Equipo",
    description:
      "Personas con acceso a esta cuenta. Los roles controlan lo que cada compañero puede hacer.",
    inviteButton: "Invitar miembro",
    presence: {
      online: "en línea",
      away: "ausente",
      offline: "desconectado",
    },
    memberCount: "miembro",
    memberCountPlural: "miembros",
    unnamed: "Sin nombre",
    you: "Tú",
    joined: "Se unió",
    pendingInvitations: "Invitaciones pendientes",
    inviteHint:
      "La URL de la invitación en texto plano solo se muestra una vez por seguridad — para compartir de nuevo, revoca la invitación abajo y crea una nueva.",
    noPending: "No hay invitaciones pendientes.",
    clickInvite:
      "Haz clic en <span>Invitar miembro</span> arriba para generar un enlace para compartir.",
    untitledInvite: "Invitación sin título",
    createdDate: "Creada {{date}}",
    expires: "expira en {{count}} día",
    expiresPlural: "expira en {{count}} días",
    expired: "expirada",
    expiresHours: "expira en {{count}} hora",
    expiresHoursPlural: "expira en {{count}} horas",
    removeMember: "Quitar miembro",
    removeDescription:
      "¿Quitar a <strong>{{name}}</strong> de la cuenta? Se cerrará su sesión en esta cuenta y se le asignará una cuenta personal nueva en su próximo inicio de sesión. Su inicio de sesión no se elimina.",
    removing: "Quitando…",
    removeButton: "Quitar miembro",
    revokeButton: "Revocar",
    editableRoles: {
      admin: {
        label: "Administrador",
        hint: "Gestionar miembros + todo",
      },
      agent: {
        label: "Agente",
        hint: "Usar funciones; sin configuración",
      },
      viewer: {
        label: "Visualizador",
        hint: "Solo lectura en toda la app",
      },
    },
    errors: {
      loadFailed: "Error al cargar los miembros",
      loadInvitations: "Error al cargar las invitaciones",
      serverError: "No se pudo conectar con el servidor",
      updateRole: "Error al actualizar el rol",
      removeFailed: "Error al quitar el miembro",
      revokeFailed: "Error al revocar la invitación",
    },
    success: {
      roleUpdated: "{{name}} actualizado a {{role}}",
      removed: "{{name}} removido",
      invitationRevoked: "Invitación revocada",
    },
  },

  invite: {
    createdTitle: "Invitación creada",
    createdDescription:
      "Comparte este enlace con tu nuevo compañero. Podrá registrarse (o iniciar sesión) y unirse a la cuenta como <strong>{{role}}</strong>. El enlace es válido por <strong>{{count}} día</strong>.",
    createdDescriptionPlural:
      "Comparte este enlace con tu nuevo compañero. Podrá registrarse (o iniciar sesión) y unirse a la cuenta como <strong>{{role}}</strong>. El enlace es válido por <strong>{{count}} días</strong>.",
    inviteLink: "Enlace de invitación",
    saveWarning: "Guarda este enlace ahora.",
    saveWarningBody:
      "Nunca almacenamos el texto plano — una vez que cierres este diálogo, la URL desaparecerá. Para compartir de nuevo, revoca esta invitación y crea una nueva.",
    sendWhatsApp: "Enviar por WhatsApp",
    createTitle: "Invitar a un compañero",
    createDescription:
      "Genera un enlace de invitación de un solo uso. Compártelo por WhatsApp, Slack o cualquier canal — no se necesita servicio de correo.",
    roleLabel: "Rol",
    linkValidFor: "Enlace válido por",
    expiryOptions: {
      "1": "1 día",
      "7": "7 días",
      "30": "30 días",
    },
    labelField: "Etiqueta",
    labelOptional: "(opcional)",
    labelPlaceholder: "ej. Sara — equipo de soporte",
    labelHelp:
      "Te ayuda a recordar a quién enviaste el enlace en la lista de pendientes abajo.",
    creating: "Creando…",
    generateLink: "Generar enlace",
    roleDescriptions: {
      admin: "Puede invitar compañeros, gestionar configuración, enviar mensajes y editar datos.",
      agent: "Puede usar la bandeja de entrada, contactos, transmisiones, automatizaciones y flows. Sin acceso a configuración ni miembros.",
      viewer:
        "Acceso de solo lectura en todas las páginas. No puede enviar ni editar nada.",
    },
    errors: {
      labelTooLong: "La etiqueta debe tener {{max}} caracteres o menos",
      createFailed: "Error al crear la invitación",
      serverError: "No se pudo conectar con el servidor. ¿Intentar de nuevo?",
    },
    success: {
      linkCopied: "Enlace de invitación copiado",
    },
    clipboardBlocked: "Portapapeles bloqueado — copia el enlace manualmente",
  },

  apiKeys: {
    title: "Claves API",
    description:
      "Las claves autentican la API REST pública (<code>/api/v1</code>) para que puedas construir tus propias automatizaciones. Envíalas como <code>Authorization: Bearer &lt;key&gt;</code>.",
    newKeyButton: "Nueva clave API",
    empty: {
      heading: "Aún no hay claves API.",
      adminHint: 'Haz clic en <span>Nueva clave API</span> para crear una.',
      viewerHint: "Pide a un administrador que cree una.",
    },
    status: {
      revoked: "Revocada",
      expired: "Expirada",
      noScopes: "Sin ámbitos",
    },
    dates: {
      created: "Creada {{date}}",
      lastUsed: "último uso {{date}}",
      neverUsed: "nunca usada",
      expires: "expira {{date}}",
    },
    revokeButton: "Revocar",
    createDialog: {
      title: "Nueva clave API",
      description:
        "Nómbrala según la integración que la usará, y otorga solo los ámbitos que necesita.",
      nameLabel: "Nombre",
      namePlaceholder: "ej. Automatización de Zapier",
      scopesLabel: "Ámbitos",
      noScopesHelp:
        "Una clave sin ámbitos aún puede llamar a <code>GET /api/v1/me</code> para verificar que funciona.",
      creating: "Creando…",
      createButton: "Crear clave",
    },
    revealDialog: {
      title: "Copia tu clave API",
      description:
        "Esta es la única vez que se muestra la clave completa. Guárdala en un lugar seguro — si la pierdes, revócala y crea una nueva.",
      keyLabel: "Clave API",
    },
    errors: {
      loadFailed: "Error al cargar las claves API",
      serverError: "No se pudo conectar con el servidor",
      revokeFailed: "Error al revocar la clave",
      nameRequired: "Dale un nombre a la clave",
      createFailed: "Error al crear la clave",
    },
    success: {
      revoked: 'Revocada "{{name}}"',
      keyCopied: "Clave API copiada",
    },
    clipboardFailed: "Error al copiar — selecciona y copia manualmente",
  },
};

export default settings;
