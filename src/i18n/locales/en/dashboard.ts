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
};

export default dashboard;