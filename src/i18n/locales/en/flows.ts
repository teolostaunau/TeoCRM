export const flows = {
  editor: {
    view: {
      label: "Editor view",
      canvas: "Canvas",
      list: "List",
    },

    fields: {
      name: "Flow name",
      description: "Flow description",
      descriptionPlaceholder:
        "Add a short description (internal — customers don't see this)",
    },

    actions: {
      back: "Back to Flows",
      runs: "Runs",
      delete: "Delete",
      pause: "Pause",
      activate: "Activate",
      save: "Save",
      fixIssuesBeforeActivating:
        "Fix the issues below before activating",
    },

    unsavedChanges: "Unsaved changes — hit Save to persist",
    edited: "Edited",
  },

  status: {
    draft: "Draft",
    active: "Active",
    archived: "Archived",
  },

  trigger: {
    title: "Trigger",

    when: "When…",

    types: {
      keyword: "A message contains a keyword",
      firstInboundMessage:
        "Customer's first ever inbound message",
      manual: "Manual only (no auto-trigger)",
    },

    fields: {
      keywords: "Keywords (comma-separated)",
      keywordsPlaceholder: "support, help, hi",
    },
  },

  entry: {
    label: "Entry node:",
    placeholder: "Pick the first node…",
  },

  canvas: {
    empty: "No nodes yet.",
  },

  nodes: {
    title: "Nodes ({{count}})",

    emptyState:
      "Add a Start node, then a Send buttons node, then a Handoff — that's the welcome-menu shape from the brief.",

    entry: "Entry",

    actions: {
      add: "Add node",
      setAsEntry: "Set as entry",
      remove: "Remove node",
      delete: "Delete node",
    },

    categories: {
      messaging: "Messaging",
      logic: "Logic",
      flow: "Flow",
    },

    types: {
      start: {
        label: "Start",
        description: "Entry point of the flow",
      },

      sendMessage: {
        label: "Send message",
        description: "Send a text message to the customer",
      },

      sendButtons: {
        label: "Send buttons",
        description: "Send a message with interactive buttons",
      },

      sendList: {
        label: "Send list",
        description: "Send a message with an interactive list",
      },

      sendMedia: {
        label: "Send media",
        description: "Send an image, video, or document",
      },

      collectInput: {
        label: "Collect input",
        description: "Ask the customer for information",
      },

      condition: {
        label: "Condition",
        description: "Branch the flow based on a condition",
      },

      setTag: {
        label: "Set tag",
        description: "Add or remove a tag from the contact",
      },

      handoff: {
        label: "Handoff",
        description: "Hand the conversation over to a human agent",
      },

      end: {
        label: "End",
        description: "End the flow",
      },
    },
  },

  advanced: {
    show: "Show",
    hide: "Hide",
    label: "advanced",

    nodeKey:
      "Node key (internal identifier — keep stable for analytics)",

    replyIdsHelp:
      "Reply IDs for each option are shown inline above. They're returned by WhatsApp when a customer taps; you usually don't need to touch them.",
  },

  forms: {
    fields: {
      pickNextNode: "Pick a next node…",
      nextNode: "Next node…",
      none: "— None —",
    },

    nodes: {
      start: {
        advancesTo: "Advances to",
      },

      sendMessage: {
        text: "Text sent to the customer",
        advancesTo: "Advances to",
      },

      sendButtons: {
        bodyText: "Body text",
        footer: "Footer (optional, 60 chars)",
        buttons: "Buttons",
        option: "Option",
        visibleTitle: "Visible title (≤20 chars)",
        addButton: "Add button",
      },

      sendList: {
        bodyText: "Body text",
        buttonLabel: "Tap-to-expand button label (≤20 chars)",
        footer: "Footer (optional, 60 chars)",
        sections: "Sections",
        section: "Section {{number}}",
        sectionTitlePlaceholder: "Section {{number}} title (optional)",
        rows: "Rows",
        rowsDescription: "Rows (1–10 total across all sections)",
        row: "Row {{number}}",
        rowTitlePlaceholder: "Row title (≤24)",
        title: "Title",
        description: "Description (optional)",
        option: "Option {{number}}",
        addSection: "Add section",
        addRow: "Add row",
        remove: "Remove",
        removeSection: "Remove section",
      },

      sendMedia: {
        mediaType: "Media type",

        types: {
          image: "Image",
          video: "Video",
          document: "Document",
        },

        file: "File",
        caption: "Caption (optional)",
        upload: "Upload media",
        noFile: "No file uploaded",
        captionDescription: "Caption (optional, shown under the media)",
        filename: "Filename shown to the customer (documents only)",
        afterSending: "After sending, advance to",
      },

      collectInput: {
        prompt: "Prompt sent to the customer",

        variableKey:
          "Variable key (stored in flow_runs.vars; alphanumeric + underscore)",

        variableKeyPlaceholder:
          "e.g. name, email, company",

        interpolationHelp:
          "Interpolate in downstream prompts and handoff notes with {{vars.name}}.",

        afterCapturing: "After capturing, advance to",
      },

      condition: {
        subject: "Subject",
        operator: "Operator",
        value: "Value",

        if: "If",

        subjectTypes: {
          capturedVariable: "Captured variable",
          tag: "Contact has tag",
          contactField: "Contact field",
        },

        operators: {
          equals: "Equals",
          notEquals: "Does not equal",
          contains: "Contains",
          notContains: "Does not contain",
          startsWith: "Starts with",
          endsWith: "Ends with",
          exists: "Exists",
          notExists: "Does not exist",
        },

        isPresent: "is present",
        isAbsent: "is absent",

        trueBranch: "True branch",
        falseBranch: "False branch",
        trueAdvanceTo: "If true → advance to",
        falseAdvanceTo: "If false → advance to",

        pickTag: "Pick a tag…",
        pickField: "Pick a field…",
        varName: "e.g. email",
        tagUuid: "Tag UUID",
        fieldUuid: "Field UUID",

        addCondition: "Add condition",
        removeCondition: "Remove condition",
      },

      setTag: {
        action: "Action",

        actions: {
          add: "Add tag",
          remove: "Remove tag",
        },

        tag: "Tag",
        selectTag: "Select a tag",
        pickTag: "Pick a tag…",
        tagUuid: "Tag UUID",
      },

      handoff: {
        note: "Internal note (for the agent picking up)",
      },

      end: {
        description:
          "Terminal node. When the runner reaches this node the run is marked complete. No config needed.",
      },
    },

    media: {
      upload: "Upload",
      remove: "Remove",
      cancel: "Cancel",
      retry: "Retry",
      uploading: "Uploading…",
      clickToUpload: "Click to upload (max {{size}})",

      errors: {
        uploadFailed: "Upload failed.",
        fileTooLarge:
          "File is too large. Maximum size: {{size}}.",
        unsupportedFileType: "Unsupported file type.",
      },
    },
  },

  validation: {
    ready: "No issues. Ready to activate.",

    errors: {
      one: "error",
      other: "errors",
    },

    warnings: {
      one: "warning",
      other: "warnings",
    },

    jumpToNode: "Jump to node {{nodeKey}}",

    fixBeforeActivating:
      "Fix the issues below before activating",

    issues: {
      flowNameRequired: "Flow name is required.",

      entryNodeRequired:
        "Pick an entry node before activating.",

      noNodes:
        "A flow needs at least one node before activation.",

      entryNodeNotFound:
        'Entry node "{{nodeKey}}" doesn\'t exist.',

      triggerKeywordsRequired:
        "Keyword trigger needs at least one keyword.",

      triggerKeywordsBlank:
        "Keyword trigger contains a blank keyword.",

      startNextNodeRequired:
        "Start node must point to a next node.",

      startNextNodeNotFound:
        'Start points to non-existent node "{{nodeKey}}".',

      sendMessageTextRequired:
        "Send-message node needs a text body.",

      sendMessageNextNodeRequired:
        "Send-message node must point to a next node.",

      sendMessageNextNodeNotFound:
        'Send-message points to non-existent node "{{nodeKey}}".',

      mediaTypeRequired:
        "Send-media node needs a media type (image, video, or document).",

      mediaFileRequired:
        "Send-media node needs a file (upload one before activating).",

      mediaCaptionTooLong:
        "Caption is too long. Maximum: {{max}} characters.",

      collectInputVarKeyRequired:
        "Collect-input needs a var_key to store the answer under.",

      collectInputVarKeyInvalid:
        'var_key "{{varKey}}" must be alphanumeric+underscore and start with a letter or underscore.',

      collectInputNextNodeRequired:
        "Collect-input must point to a next node.",

      conditionSubjectRequired:
        "Condition needs a subject.",

      conditionSubjectKeyRequired:
        "Condition needs a subject_key.",

      conditionEmptyValue:
        "A comparison value is recommended for this condition. An empty value only matches empty subjects.",

      conditionTrueBranchRequired:
        'Condition needs a node for the "true" branch.',

      conditionFalseBranchRequired:
        'Condition needs a node for the "false" branch.',

      buttonTitleTooLong:
        "Button title must be {{max}} characters or fewer.",

      buttonDescriptionTooLong:
        "Button description must be {{max}} characters or fewer.",

      listButtonLabelTooLong:
        "List button label must be {{max}} characters or fewer.",

      sectionTitleTooLong:
        "Section title must be {{max}} characters or fewer.",

      rowTitleTooLong:
        "Row title must be {{max}} characters or fewer.",

      rowDescriptionTooLong:
        "Row description must be {{max}} characters or fewer.",
    },
  },

  notifications: {
    saved: "Saved.",

    saveFailed:
      "Save failed: {{status}}",

    saveFailedGeneric:
      "Save failed",

    activated: "Flow activated.",

    archived: "Archived.",

    savedAsDraft:
      "Saved as draft.",

    statusUpdateFailed:
      "Status update failed: {{status}}",

    statusUpdateFailedGeneric:
      "Status update failed",

    deleted: "Deleted.",

    deleteFailed:
      "Delete failed",
  },

  confirmDelete:
    'Delete "{{name}}"? Any active runs end immediately. This can\'t be undone.',

  builder: {
    nodes: {
      title: "Nodes ({{count}})",

      emptyState:
        "Add a Start node, then a Send buttons node, then a Handoff — that's the welcome-menu shape from the brief.",
    },
  },

  header: {
    backToFlows: "Back to Flows",
    namePlaceholder: "Flow name",
    descriptionPlaceholder:
      "Add a short description (internal — customers don't see this)",
    unsavedChanges: "Unsaved changes — hit Save to persist",
    edited: "Edited",
    runs: "Runs",
    delete: "Delete",
    pause: "Pause",
    activate: "Activate",
    save: "Save",
    fixIssues: "Fix the issues below before activating",
    status: {
      draft: "Draft",
      active: "Active",
      archived: "Archived",
    },
  },

  page: {
    notFound: "Flow not found.",
    backToFlows: "← Back to flows",
    loadError: "Couldn't load flow.",
  },

  list: {
    heading: "Flows",
    beta: "Beta",
    description:
      "Build branching, button-driven WhatsApp conversations. Useful for menus, FAQs, and triage before a human steps in.",
    gateReason: "create flows",
    newFlow: "New flow",

    createDialog: {
      title: "Create a new flow",
      description: "Start from a template or build from scratch.",
      templateSection: "Start from a template",
      nodeCount: { one: "node", other: "nodes" },
      blankSection: "Or start blank",
      namePlaceholder: "e.g. Welcome menu",
      cancel: "Cancel",
      createBlank: "Create blank flow",
    },

    empty: {
      heading: "No flows yet",
      description:
        "Build your first conversation — a welcome menu, an order lookup, an FAQ bot. Customers tap buttons; the bot routes them to the right answer (or the right agent).",
      cta: "Create your first flow",
    },

    card: {
      edit: "Edit",
      delete: "Delete",
      runCount: { one: "run", other: "runs" },
    },

    trigger: {
      keywordNone: "Triggers on keyword (none set)",
      keywordOn: "Triggers on: {{keywords}}",
      firstInbound:
        "Triggers on a contact's first-ever inbound message",
      manual: "Manual trigger",
    },

    errors: {
      loadFailed: "Couldn't load flows.",
      createFailed: "Couldn't create flow.",
      cloneFailed: "Clone failed",
      deleteFailed: "Couldn't delete flow.",
    },

    success: {
      deleted: "Flow deleted.",
    },
  },

  runs: {
    heading: "Runs",
    description:
      "The 50 most recent times this flow ran. Expand a row to see the engine's per-step log.",
    empty:
      "No runs yet. Trigger the flow from a personal WhatsApp number to see it appear here.",
    unknownContact: "Unknown contact",
    backToFlows: "← Back to flows",
    notFound: "Flow not found.",

    status: {
      active: "Active",
      completed: "Completed",
      handedOff: "Handed off",
      timedOut: "Timed out",
      pausedByAgent: "Paused by agent",
      failed: "Failed",
    },

    startedAt: "Started {{time}}",
    atNode: "at {{node}}",
    rePrompts: "{{count}} re-prompts",
    duration: "ran for {{duration}}",
    capturedVars: "Captured vars ({{count}})",
    noEvents: "No events recorded for this run.",

    errors: {
      loadFailed: "Couldn't load runs.",
    },
  },

  shared: {
    options: { one: "option", other: "options" },
    sections: { one: "section", other: "sections" },
    media: "Media",
    noFileUploaded: "(no file uploaded)",
    remove: "Remove",
    add: "Add",
    nonePicked: "none picked",
  },
};

export default flows;