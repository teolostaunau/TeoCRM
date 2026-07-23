export const flows = {
  editor: {
    view: {
      label: "Vista del editor",
      canvas: "Lienzo",
      list: "Lista",
    },

    fields: {
      name: "Nombre del Flow",
      description: "Descripción del Flow",
      descriptionPlaceholder:
        "Agrega una descripción breve (interna; los clientes no la verán)",
    },

    actions: {
      back: "Volver a Flows",
      runs: "Ejecuciones",
      delete: "Eliminar",
      pause: "Pausar",
      activate: "Activar",
      save: "Guardar",
      fixIssuesBeforeActivating:
        "Corrige los problemas siguientes antes de activar",
    },

    unsavedChanges:
      "Cambios sin guardar: presiona Guardar para conservarlos",

    edited: "Editado",
  },

  status: {
    draft: "Borrador",
    active: "Activo",
    archived: "Archivado",
  },

  trigger: {
    title: "Disparador",

    when: "Cuando…",

    types: {
      keyword: "Un mensaje contiene una palabra clave",

      firstInboundMessage:
        "El primer mensaje entrante del cliente",

      manual: "Solo manual (sin activación automática)",
    },

    fields: {
      keywords: "Palabras clave (separadas por comas)",
      keywordsPlaceholder: "soporte, ayuda, hola",
    },
  },

  entry: {
    label: "Nodo de entrada:",
    placeholder: "Selecciona el primer nodo…",
  },

  canvas: {
    empty: "Aún no hay nodos.",
  },

  nodes: {
    title: "Nodos ({{count}})",

    emptyState:
      "Agrega un nodo Inicio, luego un nodo Enviar botones y después un nodo Transferir. Esa es la estructura del menú de bienvenida definida en la especificación.",

    entry: "Entrada",

    actions: {
      add: "Agregar nodo",
      setAsEntry: "Establecer como entrada",
      remove: "Quitar nodo",
      delete: "Eliminar nodo",
    },

    categories: {
      messaging: "Mensajería",
      logic: "Lógica",
      flow: "Flujo",
    },

    types: {
      start: {
        label: "Inicio",
        description: "Punto de entrada del Flow",
      },

      sendMessage: {
        label: "Enviar mensaje",
        description: "Enviar un mensaje de texto al cliente",
      },

      sendButtons: {
        label: "Enviar botones",
        description: "Enviar un mensaje con botones interactivos",
      },

      sendList: {
        label: "Enviar lista",
        description: "Enviar un mensaje con una lista interactiva",
      },

      sendMedia: {
        label: "Enviar multimedia",
        description: "Enviar una imagen, video o documento",
      },

      collectInput: {
        label: "Recopilar información",
        description: "Solicitar información al cliente",
      },

      condition: {
        label: "Condición",
        description: "Dividir el Flow según una condición",
      },

      setTag: {
        label: "Establecer etiqueta",
        description: "Agregar o eliminar una etiqueta del contacto",
      },

      handoff: {
        label: "Transferir",
        description: "Transferir la conversación a un agente humano",
      },

      end: {
        label: "Fin",
        description: "Finalizar el Flow",
      },
    },
  },

  advanced: {
    show: "Mostrar",
    hide: "Ocultar",
    label: "avanzado",

    nodeKey:
      "Clave del nodo (identificador interno; mantenla estable para los análisis)",

    replyIdsHelp:
      "Los IDs de respuesta de cada opción se muestran arriba. WhatsApp los devuelve cuando un cliente toca una opción; normalmente no necesitas modificarlos.",
  },

  forms: {
    fields: {
      pickNextNode: "Selecciona el siguiente nodo…",
      nextNode: "Siguiente nodo…",
      none: "— Ninguno —",
    },

    nodes: {
      start: {
        advancesTo: "Avanza a",
      },

      sendMessage: {
        text: "Texto enviado al cliente",
        advancesTo: "Avanza a",
      },

      sendButtons: {
        bodyText: "Texto del mensaje",
        footer: "Pie de mensaje (opcional, 60 caracteres)",
        buttons: "Botones",
        option: "Opción",
        visibleTitle: "Título visible (≤20 caracteres)",
        addButton: "Agregar botón",
      },

      sendList: {
        bodyText: "Texto del mensaje",
        buttonLabel: "Etiqueta del botón para expandir (≤20 caracteres)",
        footer: "Pie de mensaje (opcional, 60 caracteres)",
        sections: "Secciones",
        section: "Sección {{number}}",
        sectionTitlePlaceholder: "Título de la sección {{number}} (opcional)",
        rows: "Filas",
        rowsDescription: "Filas (1–10 en total entre todas las secciones)",
        row: "Fila {{number}}",
        rowTitlePlaceholder: "Título de fila (≤24)",
        title: "Título",
        description: "Descripción (opcional)",
        option: "Opción {{number}}",
        addSection: "Agregar sección",
        addRow: "Agregar fila",
        remove: "Eliminar",
        removeSection: "Eliminar sección",
      },

      sendMedia: {
        mediaType: "Tipo de multimedia",

        types: {
          image: "Imagen",
          video: "Video",
          document: "Documento",
        },

        file: "Archivo",
        caption: "Texto descriptivo (opcional)",
        upload: "Cargar multimedia",
        noFile: "No se ha cargado ningún archivo",
        captionDescription: "Texto descriptivo (opcional, se muestra debajo del multimedia)",
        filename: "Nombre de archivo mostrado al cliente (solo documentos)",
        afterSending: "Después de enviar, avanzar a",
      },

      collectInput: {
        prompt: "Mensaje enviado al cliente",

        variableKey:
          "Clave de variable (se almacena en flow_runs.vars; caracteres alfanuméricos + guion bajo)",

        variableKeyPlaceholder:
          "p. ej., nombre, email, empresa",

        interpolationHelp:
          "Puedes interpolarla en mensajes posteriores y notas de transferencia usando {{vars.name}}.",

        afterCapturing: "Después de capturar la información, avanzar a",
      },

      condition: {
        subject: "Sujeto",
        operator: "Operador",
        value: "Valor",

        if: "Si",

        subjectTypes: {
          capturedVariable: "Variable capturada",
          tag: "El contacto tiene la etiqueta",
          contactField: "Campo del contacto",
        },

        operators: {
          equals: "Es igual a",
          notEquals: "No es igual a",
          contains: "Contiene",
          notContains: "No contiene",
          startsWith: "Comienza con",
          endsWith: "Termina con",
          exists: "Existe",
          notExists: "No existe",
        },

        isPresent: "está presente",
        isAbsent: "no está presente",

        trueBranch: "Rama verdadera",
        falseBranch: "Rama falsa",
        trueAdvanceTo: "Si es verdadero → avanzar a",
        falseAdvanceTo: "Si es falso → avanzar a",

        pickTag: "Selecciona una etiqueta…",
        pickField: "Selecciona un campo…",
        varName: "p. ej. email",
        tagUuid: "UUID de etiqueta",
        fieldUuid: "UUID de campo",

        addCondition: "Agregar condición",
        removeCondition: "Eliminar condición",
      },

      setTag: {
        action: "Acción",

        actions: {
          add: "Agregar etiqueta",
          remove: "Eliminar etiqueta",
        },

        tag: "Etiqueta",
        selectTag: "Selecciona una etiqueta",
        pickTag: "Selecciona una etiqueta…",
        tagUuid: "UUID de etiqueta",
      },

      handoff: {
        note: "Nota interna (para el agente que se haga cargo)",
      },

      end: {
        description:
          "Nodo terminal. Cuando el ejecutor llega a este nodo, la ejecución se marca como completada. No necesita configuración.",
      },
    },

    media: {
      upload: "Cargar",
      remove: "Eliminar",
      cancel: "Cancelar",
      retry: "Reintentar",
      uploading: "Cargando…",
      clickToUpload: "Haz clic para cargar (máx. {{size}})",

      errors: {
        uploadFailed: "No se pudo cargar el archivo.",
        fileTooLarge:
          "El archivo es demasiado grande. Tamaño máximo: {{size}}.",
        unsupportedFileType: "Tipo de archivo no compatible.",
      },
    },
  },

  validation: {
    ready: "No hay problemas. Listo para activar.",

    errors: {
      one: "error",
      other: "errores",
    },

    warnings: {
      one: "advertencia",
      other: "advertencias",
    },

    jumpToNode: "Ir al nodo {{nodeKey}}",

    fixBeforeActivating:
      "Corrige los problemas siguientes antes de activar",

    issues: {
      flowNameRequired: "El nombre del Flow es obligatorio.",

      entryNodeRequired:
        "Selecciona un nodo de entrada antes de activar.",

      noNodes:
        "El Flow necesita al menos un nodo antes de activarse.",

      entryNodeNotFound:
        'El nodo de entrada "{{nodeKey}}" no existe.',

      triggerKeywordsRequired:
        "El disparador por palabra clave necesita al menos una palabra clave.",

      triggerKeywordsBlank:
        "El disparador por palabra clave contiene una palabra clave vacía.",

      startNextNodeRequired:
        "El nodo Inicio debe apuntar a un siguiente nodo.",

      startNextNodeNotFound:
        'Inicio apunta a un nodo inexistente: "{{nodeKey}}".',

      sendMessageTextRequired:
        "El nodo Enviar mensaje necesita un texto.",

      sendMessageNextNodeRequired:
        "El nodo Enviar mensaje debe apuntar a un siguiente nodo.",

      sendMessageNextNodeNotFound:
        'Enviar mensaje apunta a un nodo inexistente: "{{nodeKey}}".',

      mediaTypeRequired:
        "El nodo Enviar multimedia necesita un tipo de multimedia (imagen, video o documento).",

      mediaFileRequired:
        "El nodo Enviar multimedia necesita un archivo (carga uno antes de activar).",

      mediaCaptionTooLong:
        "El texto descriptivo es demasiado largo. Máximo: {{max}} caracteres.",

      collectInputVarKeyRequired:
        "Recopilar información necesita una var_key para almacenar la respuesta.",

      collectInputVarKeyInvalid:
        'La var_key "{{varKey}}" debe contener caracteres alfanuméricos y guiones bajos, y comenzar con una letra o un guion bajo.',

      collectInputNextNodeRequired:
        "El nodo Recopilar información debe apuntar a un siguiente nodo.",

      conditionSubjectRequired:
        "La condición necesita un sujeto.",

      conditionSubjectKeyRequired:
        "La condición necesita una subject_key.",

      conditionEmptyValue:
        "Se recomienda un valor de comparación para esta condición. Un valor vacío solo coincide con sujetos vacíos.",

      conditionTrueBranchRequired:
        'La condición necesita un nodo para la rama "verdadera".',

      conditionFalseBranchRequired:
        'La condición necesita un nodo para la rama "falsa".',

      buttonTitleTooLong:
        "El título del botón debe tener {{max}} caracteres o menos.",

      buttonDescriptionTooLong:
        "La descripción del botón debe tener {{max}} caracteres o menos.",

      listButtonLabelTooLong:
        "La etiqueta del botón de lista debe tener {{max}} caracteres o menos.",

      sectionTitleTooLong:
        "El título de la sección debe tener {{max}} caracteres o menos.",

      rowTitleTooLong:
        "El título de la fila debe tener {{max}} caracteres o menos.",

      rowDescriptionTooLong:
        "La descripción de la fila debe tener {{max}} caracteres o menos.",
    },
  },

  notifications: {
    saved: "Guardado.",

    saveFailed:
      "No se pudo guardar: {{status}}",

    saveFailedGeneric:
      "No se pudo guardar",

    activated: "Flow activado.",

    archived: "Archivado.",

    savedAsDraft:
      "Guardado como borrador.",

    statusUpdateFailed:
      "No se pudo actualizar el estado: {{status}}",

    statusUpdateFailedGeneric:
      "No se pudo actualizar el estado",

    deleted: "Eliminado.",

    deleteFailed:
      "No se pudo eliminar",
  },

  confirmDelete:
    '¿Eliminar "{{name}}"? Las ejecuciones activas finalizarán inmediatamente. Esta acción no se puede deshacer.',

  builder: {
    nodes: {
      title: "Nodos ({{count}})",
      emptyState:
        "Agrega un nodo Inicio, luego un nodo Enviar botones y después un nodo Transferir. Esa es la estructura del menú de bienvenida definida en la especificación.",
    },
  },

  header: {
    backToFlows: "Volver a Flows",
    namePlaceholder: "Nombre del Flow",
    descriptionPlaceholder:
      "Agrega una descripción breve (interna; los clientes no la verán)",
    unsavedChanges:
      "Cambios sin guardar — presiona Guardar para conservarlos",
    edited: "Editado",
    runs: "Ejecuciones",
    delete: "Eliminar",
    pause: "Pausar",
    activate: "Activar",
    save: "Guardar",
    fixIssues: "Corrige los problemas siguientes antes de activar",
    status: {
      draft: "Borrador",
      active: "Activo",
      archived: "Archivado",
    },
  },

  page: {
    notFound: "Flow no encontrado.",
    backToFlows: "← Volver a flows",
    loadError: "No se pudo cargar el flow.",
  },

  list: {
    heading: "Flujos",
    beta: "Beta",
    description:
      "Crea conversaciones ramificadas con botones en WhatsApp. Útil para menús, FAQ y clasificación antes de que un agente intervenga.",
    gateReason: "crear flows",
    newFlow: "Nuevo flow",
    createDialog: {
      title: "Crear un nuevo flow",
      description: "Comienza desde una plantilla o constrúyelo desde cero.",
      templateSection: "Comenzar desde una plantilla",
      nodeCount: { one: "nodo", other: "nodos" },
      blankSection: "O comenzar en blanco",
      namePlaceholder: "p. ej. Menú de bienvenida",
      cancel: "Cancelar",
      createBlank: "Crear flow en blanco",
    },
    empty: {
      heading: "Aún no hay flows",
      description:
        "Crea tu primera conversación — un menú de bienvenida, una búsqueda de pedidos, un bot de FAQ. Los clientes tocan botones; el bot los dirige a la respuesta correcta (o al agente correcto).",
      cta: "Crear tu primer flow",
    },
    card: {
      edit: "Editar",
      delete: "Eliminar",
      runCount: { one: "ejecución", other: "ejecuciones" },
    },
    trigger: {
      keywordNone: "Se activa por palabra clave (ninguna configurada)",
      keywordOn: "Se activa en: {{keywords}}",
      firstInbound:
        "Se activa en el primer mensaje entrante de un contacto",
      manual: "Activación manual",
    },
    errors: {
      loadFailed: "No se pudieron cargar los flows.",
      createFailed: "No se pudo crear el flow.",
      cloneFailed: "No se pudo clonar",
      deleteFailed: "No se pudo eliminar el flow.",
    },
    success: {
      deleted: "Flow eliminado.",
    },
  },

  runs: {
    heading: "Ejecuciones",
    description:
      "Las 50 ejecuciones más recientes de este flow. Expande una fila para ver el registro paso a paso del motor.",
    empty:
      "Aún no hay ejecuciones. Activa el flow desde un número personal de WhatsApp para que aparezca aquí.",
    unknownContact: "Contacto desconocido",
    backToFlows: "← Volver a flows",
    notFound: "Flow no encontrado.",
    status: {
      active: "Activa",
      completed: "Completada",
      handedOff: "Transferida",
      timedOut: "Tiempo agotado",
      pausedByAgent: "Pausada por agente",
      failed: "Fallida",
    },
    startedAt: "Iniciada {{time}}",
    atNode: "en {{node}}",
    rePrompts: "{{count}} re-peticiones",
    duration: "duró {{duration}}",
    capturedVars: "Variables capturadas ({{count}})",
    noEvents: "No se registraron eventos para esta ejecución.",

    errors: {
      loadFailed: "No se pudieron cargar las ejecuciones.",
    },
  },

  shared: {
    options: { one: "opción", other: "opciones" },
    sections: { one: "sección", other: "secciones" },
    media: "Multimedia",
    noFileUploaded: "(sin archivo cargado)",
    remove: "Eliminar",
    add: "Agregar",
    nonePicked: "ninguna seleccionada",
  },
};

export default flows;