const dashboard = {
  title: "Dashboard",

  description:
    "Analítica en tiempo real de conversaciones, contactos, oportunidades, campañas y automatizaciones.",

  metrics: {
    activeConversations: "Conversaciones activas",
    newContactsToday: "Nuevos contactos hoy",
    openDealsValue: "Valor de oportunidades abiertas",
    messagesSentToday: "Mensajes enviados hoy",

    openDeal: "oportunidad abierta",
    openDeals: "oportunidades abiertas",

    delta: {
      noChange: "Sin cambios",
      vsYesterday: "vs ayer",
      newTodayVsYesterday: "nuevos hoy vs ayer",
    },
  },

  quickActions: {
    newContact: "Nuevo contacto",
    newDeal: "Nueva oportunidad",
    newBroadcast: "Nueva difusión",
    newAutomation: "Nueva automatización",
  },

  activity: {
    title: "Actividad reciente",
    viewAll: "Ver todo",

    empty: {
      title: "Aún no hay actividad",
      hint: "Aquí aparecerá la actividad de mensajes, oportunidades, campañas y automatizaciones.",
    },

    showing: "Mostrando {{visible}} de {{total}}",

    show: "Mostrar",

    relative: {
      seconds: "hace {{count}} s",
      minutes: "hace {{count}} min",
      hours: "hace {{count}} h",
      days: "hace {{count}} d",
    },
  },

  conversationsChart: {
    title: "Conversaciones en el tiempo",

    subtitle: "Volumen diario de mensajes por dirección",

    range: "{{days}} días",

    empty: {
      title: "No hay actividad de mensajes en este período",
      hint: "Envía o recibe mensajes para comenzar a llenar este gráfico.",
    },

    legend: {
      incoming: "Entrantes",
      outgoing: "Salientes",
    },
    
    ariaLabel: "Conversaciones por día",
  },
};

export default dashboard;