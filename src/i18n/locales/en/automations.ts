const automations = {
  builder: {
    general: {
      backToAutomations: "Back to automations",
      untitledAutomation: "Untitled automation",
      active: "Active",
      save: "Save",
      saveDraft: "Save Draft",
      trigger: "Trigger",
      triggerType: "Trigger type",
      action: "Action",
      condition: "Condition",
      wait: "Wait",
    },

    triggers: {
      newMessageReceived: {
        label: "New Message Received",
        hint: "Any incoming message",
      },
      firstInboundMessage: {
        label: "First Message from Contact",
        hint: "First time this contact ever messages you (works for manually-added contacts too)",
      },
      keywordMatch: {
        label: "Keyword Match",
        hint: "Message contains specific keyword(s)",
      },
      newContactCreated: {
        label: "New Contact Created",
        hint: "When a contact is auto-created from an incoming message",
      },
      conversationAssigned: {
        label: "Conversation Assigned",
        hint: "When assigned to an agent",
      },
      tagAdded: {
        label: "Tag Added",
        hint: "When a tag is added to a contact",
      },
      timeBased: {
        label: "Time-Based",
        hint: "On a recurring schedule",
      },
    },

    steps: {
      sendMessage: "Send Message",
      sendTemplate: "Send Template",
      addTag: "Add Tag",
      removeTag: "Remove Tag",
      assignConversation: "Assign Conversation",
      updateContactField: "Update Contact Field",
      createDeal: "Create Deal",
      wait: "Wait",
      condition: "Condition (If/Else)",
      sendWebhook: "Send Webhook",
      closeConversation: "Close Conversation",
    },

    categories: {
      action: "Action",
      condition: "Condition",
      wait: "Wait",
    },

    fields: {
      tag: "Tag",
      customFields: "Custom fields",
      name: "Name",
      email: "Email",
      company: "Company",

      messageText: "Message text",

      templateName: "Template name",
      language: "Language",
      template: "Template",

      mode: "Mode",
      agent: "Agent",

      field: "Field",
      value: "Value",

      pipelineId: "Pipeline ID",
      stageId: "Stage ID",
      title: "Title",

      amount: "Amount",
      unit: "Unit",

      subject: "Subject",
      operand: "Operand",

      url: "URL",
      bodyTemplate: "Body template (JSON)",

      keywords: "Keywords (comma-separated)",
      matchType: "Match type",
    },

    modes: {
      roundRobin: "Round-robin",
      specific: "Specific agent",
    },

    units: {
      minutes: "Minutes",
      hours: "Hours",
      days: "Days",
    },

    conditions: {
      tagPresence: "Tag presence",
      contactField: "Contact field",
      messageContent: "Message content",
      timeOfDay: "Time of day",

      contains: "Contains",
      exact: "Exact",
    },

    branches: {
      yes: "Yes",
      no: "No",
    },

    resources: {
      selectTag: "Select a tag…",
      tagId: "Tag ID",
      unknownTag: "unknown tag",

      selectAgent: "Select an agent…",
      agentId: "Agent ID",
      unknownAgent: "unknown agent",

      selectTemplate: "Select a template…",
      unknown: "unknown",
      notInApprovedList: "not in approved list",
    },

    placeholders: {
      schedule: "Cron expression or HH:mm",
      keywords: "e.g. pricing, demo request, talk to sales",
      messageText: "Hi! Thanks for reaching out…",
      selectTag: "Select a tag…",
      contactField: "name / email / company",
      tagId: "tag ID",
      messageVariables: "Text or {{ vars.x }} / {{ message.text }}",
      timeRange: "HH:mm-HH:mm",
    },

    preview: {
      noText: "no text yet",
      pickTemplate: "pick a template",
      noUrl: "no URL",
      when: "when",
      wait: "{{amount}} {{unit}}",
    },

    closeConversation: {
      description:
        'Sets the conversation status to "{{status}}". No configuration needed.',
    },

    actions: {
      moveUp: "Move up",
      moveDown: "Move down",
      delete: "Delete",
      addStep: "Add step",
    },

    messages: {
      saveFailed: "Save failed",
      automationSaved: "Automation saved",
      automationCreated: "Automation created",
      atPath: "at {{path}}",
      loadFailed: "Failed to load automations",
      updateFailed: "Failed to update",
      automationActivated: "Automation activated",
      automationPaused: "Automation paused",
      duplicateFailed: "Failed to duplicate",
      automationDuplicated: "Automation duplicated",
      deleteFailed: "Failed to delete",
      automationDeleted: "Automation deleted",
    },

    accessibility: {
      moveStepUp: "Move step up",
      moveStepDown: "Move step down",
      deleteStep: "Delete step",
      addStep: "Add step",
    },

    list: {
      title: "Automations",
      description: "Build workflows that react to WhatsApp® events automatically.",
      create: "Create Automation",
      quickStartTemplates: "Quick-start templates",
      noAutomations: "No automations yet",
      emptyDescription: "Pick a template above or create one from scratch.",
      deleteTitle: "Delete automation",
      deleteDescription:
        "This permanently removes {{name}} and its execution history. This cannot be undone.",
      cancel: "Cancel",
      run: "run",
      runs: "runs",
      last: "last",
    },
    
    relativeTime: {
      lastRun: "Last {{time}}",
      never: "never",
      justNow: "just now",
      minutesAgo: "{{count}}m ago",
      hoursAgo: "{{count}}h ago",
      daysAgo: "{{count}}d ago",
      date: "{{date}}",
    },
  },

  page: {
    title: "Automations",
    description: "Build workflows that react to WhatsApp® events automatically.",
    create: "Create Automation",
    quickStartTemplates: "Quick-start templates",
    noAutomations: "No automations yet",
    createFromScratch: "Pick a template above or create one from scratch.",
    retry: "Retry",

    execution: {
      run: "{{count}} run",
      runs: "{{count}} runs",
    },

    actions: {
      edit: "Edit",
      duplicate: "Duplicate",
      viewLogs: "View Logs",
      delete: "Delete",
    },

    status: {
      active: "Active",
      activate: "Activate",
      deactivate: "Deactivate",
    },

    errors: {
      loadFailed: "Failed to load automations",
      updateFailed: "Failed to update",
      duplicateFailed: "Failed to duplicate",
      deleteFailed: "Failed to delete",
    },

    success: {
      activated: "Automation activated",
      paused: "Automation paused",
      duplicated: "Automation duplicated",
      deleted: "Automation deleted",
    },

    deleteDialog: {
      title: "Delete automation",
      description:
        "This permanently removes {{name}} and its execution history. This cannot be undone.",
      cancel: "Cancel",
      confirm: "Delete",
    },

    accessibility: {
      openMenu: "Open menu",
    },
  },

  logs: {
    back: "Back",
    title: "Execution logs",

    empty: {
      title: "No executions yet",
      description: "Trigger this automation to see runs here.",
    },

    unknownContact: "Unknown contact",

    stepCount: {
      one: "{{count}} step",
      other: "{{count}} steps",
    },

    noStepsRecorded: "No steps recorded.",

    status: {
      success: "Success",
      partial: "Partial",
      failed: "Failed",
    },

    errors: {
      failedToLoad: "Failed to load logs",
    },
  },
};

export default automations;