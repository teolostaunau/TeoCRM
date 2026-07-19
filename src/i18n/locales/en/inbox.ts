const inbox = {
  filters: {
    all: "All",
    unread: "Unread",
    open: "Open",
    pending: "Pending",
    closed: "Closed",
  },

  search: {
    placeholder: "Search conversations...",
  },

  empty: {
    noConversations: "No conversations found",
  },

  contact: {
    unknown: "Unknown",
  },

  messages: {
    none: "No messages yet",
  },

  contactSidebar: {
    selectConversation: "Select a conversation",
    tags: "Tags",
    noTags: "No tags",
    activeDeals: "Active Deals",
    noDeals: "No deals",
    notes: "Notes",
    addNote: "Add a note...",
  },

  messageBubble: {
    mediaUnavailable: "{{label}} unavailable",
    sharedImage: "Shared image",
    document: "Document",
    template: "Template",
    locationShared: "Location shared",
    buttonReply: "Button reply",
    interactiveReply: "[Interactive reply]",
    unsupportedMessageType: "[Unsupported message type]",
  },

  messageThread: {
    today: "Today",
    yesterday: "Yesterday",
    selectConversation: "Select a conversation",
    chooseConversation: "Choose a conversation from the left to start messaging",
    backToConversations: "Back to conversations",
    open: "Open",
    pending: "Pending",
    closed: "Closed",
    assigned: "Assigned",
    assign: "Assign",
    noCustomerMessages: "No customer messages",
    expired: "Expired",
    hoursRemaining: "{{count}}h remaining",
    minutesRemaining: "{{count}}m remaining",
  },

  emptyState: {
    selectConversation: "Select a conversation",
    chooseConversation: "Choose a conversation from the left to start messaging",
  },

  date: {
    today: "Today",
    yesterday: "Yesterday",
  },

  composer: {
    sessionExpired: "24-hour session expired. Use a template to re-engage.",
    templates: "Templates",

    recording: "Recording…",
    cancel: "Cancel",
    stopAndAttach: "Stop and attach",

    attachMedia: "Attach media",
    sendTemplate: "Send template",

    photo: "Photo",
    video: "Video",
    document: "Document",
    voiceNote: "Voice note",

    readOnly: "Read-only — your role can't send messages",
    readOnlyPlaceholder: "Read-only — viewers can browse but not reply",
    sessionExpiredPlaceholder: "Session expired - use a template",
    messagePlaceholder: "Type a message... (Shift+Enter for new line)",

    quickRepliesHint: "Type '/' for quick replies",

    removeAttachment: "Remove attachment",
    addCaption: "Add a caption…",

    errors: {
        fileTooLarge: "File is {{size}} MB — {{kind}} limit is {{limit}} MB.",
        uploadFailed: "Upload failed.",
        recordingTooLong: "Recording is too long (over 16 MB).",
        recordingUnsupported: "Voice recording isn't supported in this browser.",
        microphoneUnavailable: "Microphone access denied or unavailable.",
    },
  },

  status: {
    open: "Open",
    pending: "Pending",
    closed: "Closed",
  },

  assign: {
    assign: "Assign",
    assigned: "Assigned",
    noTeammates: "No teammates available",
    me: "me",
    unassign: "Unassign",
  },

  "session": {
    "noCustomerMessages": "No customer messages",
    "expired": "Expired",
    "hoursRemaining": "{{hours}}h remaining",
    "minutesRemaining": "{{minutes}}m remaining"
  },

}

export default inbox;