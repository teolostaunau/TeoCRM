const dashboard = {
  title: "Dashboard",

  description:
    "Live analytics across conversations, contacts, deals, broadcasts, and automations.",

  metrics: {
    activeConversations: "Active Conversations",
    newContactsToday: "New Contacts Today",
    openDealsValue: "Open Deals Value",
    messagesSentToday: "Messages Sent Today",

    openDeal: "open deal",
    openDeals: "open deals",

    delta: {
      noChange: "No change",
      vsYesterday: "vs yesterday",
      newTodayVsYesterday: "new today vs yesterday",
    },
  },

  quickActions: {
    newContact: "New Contact",
    newDeal: "New Deal",
    newBroadcast: "New Broadcast",
    newAutomation: "New Automation",
  },

  activity: {
    title: "Recent Activity",
    viewAll: "View all",

    empty: {
      title: "No activity yet",
      hint: "Activity from messages, deals, broadcasts, and automations will appear here.",
    },

    showing: "Showing {{visible}} of {{total}}",

    show: "Show",

    relative: {
      seconds: "{{count}}s ago",
      minutes: "{{count}}m ago",
      hours: "{{count}}h ago",
      days: "{{count}}d ago",
    },
  },

  conversationsChart: {
    title: "Conversations Over Time",

    subtitle: "Daily message volume by direction",

    range: "{{days}} days",

    empty: {
      title: "No message activity in this range",
      hint: "Send or receive messages to start populating this chart.",
    },

    legend: {
      incoming: "Incoming",
      outgoing: "Outgoing",
    },

    ariaLabel: "Conversations per day",
  },

  pipelineValue: {
    title: "Pipeline Value",
    subtitle: "Open deals by stage",

    ariaLabel: "Pipeline value by stage",

    total: "Total",

    deals: "{{count}} deal",
    deals_plural: "{{count}} deals",

    empty: {
      title: "No open deals yet",
      hint: "Create deals in Pipelines to see stage breakdowns here.",
    },

    stages: {
      new_lead: "New Lead",
      proposal_sent: "Proposal Sent",
      won: "Won",
      lost: "Lost",
    },
  },

  responseTime: {
    title: "Average First Response Time",
    subtitle:
      "Minutes to reply to a customer's first unreplied message, by weekday",

    category: "Avg minutes",

    target: "Target {{minutes}}m",

    thisWeek: "This week:",
    lastWeek: "Last week:",

    empty: {
      title: "No replies recorded yet",
      hint: "This chart fills in as you reply to customer messages.",
    },

    units: {
      seconds: "{{value}}s",
      minutes: "{{value}}m",
      hours: "{{value}}h",
    },

    days: {
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",
      fri: "Fri",
      sat: "Sat",
      sun: "Sun",
    },
  },
};

export default dashboard;