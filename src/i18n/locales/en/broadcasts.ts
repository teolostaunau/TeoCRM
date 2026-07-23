const broadcasts = {
  status: {
    broadcast: {
      draft: "Draft",
      scheduled: "Scheduled",
      sending: "Sending",
      sent: "Sent",
      failed: "Failed",
    },
    recipient: {
      pending: "Pending",
      sent: "Sent",
      delivered: "Delivered",
      read: "Read",
      replied: "Replied",
      failed: "Failed",
    },
  },
  steps: {
    chooseTemplate: {
      title: "Choose a Template",
      description: "Select an approved message template for your broadcast.",
      emptyTitle: "No templates available.",
      emptyDescription: "Create a template in Settings first.",
      errors: {
        load: "Failed to load templates",
      },
      actions: {
        back: "Back",
        next: "Next",
      },
      language: "Language",
    },
    selectAudience: {
      title: "Select Audience",
      description: "Choose who will receive this broadcast.",
      options: {
        all: {
          label: "All Contacts",
          description: "Send to every contact in your database",
        },
        tags: {
          label: "Filter by Tags",
          description: "Target contacts with specific tags",
        },
        customField: {
          label: "Custom Field",
          description: "Filter by a custom field value",
        },
        csv: {
          label: "Upload CSV",
          description: "Upload a list of phone numbers",
        },
      },
      tags: {
        title: "Select Tags",
        empty: "No tags found. Create tags in Settings.",
      },
      customField: {
        title: "Custom Field Filter",
        empty: "No custom fields defined. Create one in Settings → Custom Fields.",
        fieldPlaceholder: "Select field…",
        operatorPlaceholder: "Select operator…",
        valuePlaceholder: "Value",
      },
      exclude: {
        title: "Exclude contacts with these tags",
        optional: "(optional)",
        empty: "No tags available.",
      },
      summary: {
        title: "Audience Summary",
        loading: "Calculating…",
        recipients: "estimated recipients",
        empty: "Select an audience type to see the estimate.",
      },
      actions: {
        back: "Back",
        next: "Next",
      },
      operators: {
        is: "is",
        is_not: "is not",
        contains: "contains",
      },
    },
    personalize: {
      title: "Personalize Message",
      description: "Map template variables to contact fields, custom fields, or static values.",
      headerMedia: {
        title: "Header media",
        label: "Media URL",
        placeholder: "https://example.com/header",
        description: "Public URL of the {{type}} sent as the message header. Used for every recipient in this broadcast.",
        validation: {
          missing: "A media URL is required to send this template.",
          invalid: "Enter a valid http(s) URL.",
        },
        altPreview: "Header preview",
      },
      emptyState: "This template has no variables to personalize.",
      mapping: {
        type: "Mapping Type",
        value: "Value",
        field: "Field",
        staticValue: "Static Value",
        contactField: "Contact Field",
        customField: "Custom Field",
        placeholder: "Enter value...",
        selectField: "Select field...",
        loading: "Loading…",
        noCustomFields: "No custom fields",
        selectCustomField: "Select custom field…",
      },
      preview: {
        title: "Live Preview",
        sampleData: "sample data",
      },
      validation: {
        missing: "Map every placeholder before continuing — still missing {{placeholders}}. Otherwise those placeholders will ship to Meta as empty strings.",
      },
      actions: {
        back: "Back",
        next: "Next",
      },
      contactFields: {
        name: "Contact Name",
        phone: "Phone Number",
        email: "Email Address",
        company: "Company",
      },
    },
    scheduleSend: {
      title: "Review & Send",
      description: "Name your broadcast, review the details, and send.",
      nameLabel: "Broadcast Name",
      namePlaceholder: "e.g. Summer Sale Announcement",
      summary: {
        title: "Summary",
        template: "Template",
        audience: "Audience",
        estimatedReach: "Estimated Reach",
        language: "Language",
      },
      processing: {
        title: "Sending broadcast...",
      },
      actions: {
        back: "Back",
        saveDraft: "Save as Draft",
        send: "Send Broadcast",
      },
      dialog: {
        title: "Confirm Broadcast",
        description: "You are about to send this broadcast to {{count}} contacts using the {{template}} template. This action cannot be undone.",
        cancel: "Cancel",
        confirm: "Confirm & Send",
      },
      audience: {
        all: "All Contacts",
        tags: "Tags ({{count}} selected)",
        csv: "CSV Upload",
        custom: "Custom",
      },
    },
  },
  pages: {
    list: {
      gateReasons: {
        create: "create broadcasts",
      },
      errors: {
        load: "Failed to load broadcasts",
      },
      actions: {
        retry: "Retry",
        newBroadcast: "New Broadcast",
      },
      progress: {
        aria: "Broadcast in progress",
      },
      header: {
        title: "Broadcasts",
        description: "Send bulk messages to your contacts using approved templates.",
      },
      empty: {
        title: "No broadcasts yet",
        description: "Create your first broadcast to reach your contacts at scale.",
      },
      table: {
        headers: {
          name: "Name",
          template: "Template",
          recipients: "Recipients",
          delivery: "Delivery",
          read: "Read",
          status: "Status",
          date: "Date",
        },
      },
    },
    new: {
      header: {
        title: "New Broadcast",
        description: "Create and send a broadcast message to your contacts.",
      },
      steps: {
        template: "Template",
        audience: "Audience",
        personalize: "Personalize",
        send: "Send",
      },
      errors: {
        sendFailed: "Broadcast failed",
        draftNameRequired: "Give the broadcast a name before saving a draft.",
        notSignedIn: "Not signed in.",
        accountMissing: "Your profile is not linked to an account.",
        saveDraftFailed: "Failed to save draft: {{message}}",
      },
      messages: {
        draftSaved: "Draft saved",
      },
    },
    detail: {
      errors: {
        load: "Failed to load broadcast",
        notFound: "Broadcast not found",
      },
      actions: {
        backToList: "Back to Broadcasts",
      },
      header: {
        template: "Template: {{name}}",
        created: "Created {{date}}",
      },
      delete: {
        confirmTitle: "Delete this broadcast?",
        cancel: "Cancel",
        deleting: "Deleting…",
        confirm: "Confirm",
        disabledSending: "Cannot delete while a broadcast is actively sending",
        button: "Delete",
        failed: "Failed to delete: {{message}}",
        success: "Broadcast deleted",
      },
      stats: {
        totalRecipients: "Total Recipients",
        sent: "Sent",
        delivered: "Delivered",
        read: "Read",
        replied: "Replied",
        failed: "Failed",
      },
      funnel: {
        title: "Funnel",
      },
      recipients: {
        title: "Recipients ({{count}}{{total}})",
        filters: {
          all: "All statuses",
        },
        actions: {
          exportCsv: "Export CSV",
        },
        empty: {
          none: "No recipients found.",
          filter: "No recipients match this filter.",
        },
        table: {
          contact: "Contact",
          phone: "Phone",
          status: "Status",
          sentAt: "Sent At",
          deliveredAt: "Delivered At",
          readAt: "Read At",
          error: "Error",
          unknownContact: "Unknown",
        },
        csv: {
          contact: "Contact",
          phone: "Phone",
          status: "Status",
          sentAt: "Sent At",
          deliveredAt: "Delivered At",
          readAt: "Read At",
          repliedAt: "Replied At",
          error: "Error",
        },
      },
    },
  },
};

export default broadcasts;
