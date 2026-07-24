const settings = {
  common: {
    roles: {
      owner: "Owner",
      admin: "Admin",
      agent: "Agent",
      viewer: "Viewer",
    },
    saving: "Saving…",
    loading: "Loading…",
    cancel: "Cancel",
    save: "Save",
    done: "Done",
    copy: "Copy",
    delete: "Delete",
    edit: "Edit",
    remove: "Remove",
    unknownError: "Unknown error",
  },

  page: {
    title: "Settings",
    description:
      "Everything in one place — your account and your workspace. Pick a section to manage it.",
  },

  rail: {
    account: "Account",
    workspace: "Workspace",
    sections: {
      overview: "Overview",
      profile: "Your profile",
      security: "Login & security",
      appearance: "Appearance",
      whatsapp: "WhatsApp",
      templates: "Templates",
      fields: "Fields & tags",
      deals: "Deals & currency",
      members: "Team members",
      api: "API keys",
    },
  },

  overview: {
    yourAccount: "Your account",
    whatsapp: {
      notSetUp: "Not set up yet",
      connected: "Connected",
      needsReconnecting: "Needs reconnecting",
    },
    members: {
      viewTeam: "View team members",
      member: "member",
      members: "members",
      pendingInvite: "pending invite",
      pendingInvites: "pending invites",
    },
    templates: {
      manage: "Manage message templates",
      template: "template",
      templates: "templates",
      pendingReview: "pending review",
    },
    fields: {
      tagsAndCustomFields: "Tags and custom fields",
      tag: "tag",
      tags: "tags",
      customField: "custom field",
      customFields: "custom fields",
    },
    appearance: {
      accent: "accent",
    },
    loading: "Loading…",
  },

  profile: {
    title: "Your profile",
    description:
      "How you show up across the app. Your avatar and name appear in the header, sidebar, and anywhere your teammates see you.",
    avatar: {
      unsupportedType: "Unsupported image type",
      unsupportedTypeDesc: "Use PNG, JPG, WebP, or GIF.",
      tooLarge: "Image is too large",
      tooLargeDesc: "Maximum 2 MB.",
      changePhoto: "Change photo",
      uploadPhoto: "Upload photo",
      remove: "Remove",
      helpText: "PNG, JPG, WebP, or GIF. Up to 2 MB.",
    },
    displayName: {
      label: "Display name",
      required: "Display name is required",
    },
    email: {
      label: "Email",
      invalid: "Enter a valid email address",
      changeFailed: "Email change failed: {{error}}",
      saved: "Profile saved",
      savedConfirm:
        "Profile saved — check your email to confirm the address change",
      pendingWarning:
        "Check the inbox for <strong>{{oldEmail}}</strong> and <strong>{{newEmail}}</strong> — both need to confirm before the change takes effect.",
    },
    accountDetails: "Account details",
    role: "Role",
    joined: "Joined",
    userId: "User ID",
    loadingProfile: "Loading your profile…",
    saving: "Saving…",
    saveChanges: "Save changes",
  },

  security: {
    title: "Login & security",
    description:
      "Change your password and sign out of your devices. These keep your account safe.",
  },

  password: {
    title: "Password",
    description:
      "Use at least 8 characters. You will stay signed in on this device after changing it.",
    currentLabel: "Current password",
    newLabel: "New password",
    confirmLabel: "Confirm new password",
    updating: "Updating…",
    updateButton: "Update password",
    errors: {
      noEmail: "Cannot change password without a current email",
      tooShort: "Password must be at least {{min}} characters",
      mismatch: "New password and confirmation do not match",
      incorrect: "Current password is incorrect",
      updateFailed: "Password update failed: {{error}}",
    },
    success: "Password updated",
  },

  sessions: {
    title: "Active sessions",
    description:
      "Sign out of every device where you're logged in — including this one. Useful if you lost a laptop or shared your password.",
    signOutAll: "Sign out of all devices",
    confirmTitle: "Sign out everywhere?",
    confirmDescription:
      "Every device logged into this account will be signed out and will need to log in again. You will be redirected to the login page.",
    signingOut: "Signing out…",
    signOutButton: "Sign out everywhere",
    errors: {
      signOutFailed: "Sign-out failed: {{error}}",
    },
  },

  appearance: {
    title: "Appearance",
    description:
      "Set the mode and accent colour used across the app. Saved to this device — try it, it changes live.",
    mode: "Mode",
    accentColor: "Accent color",
    active: "Active",
    themes: {
      cobalt: {
        tagline: "Default — clean B2B-SaaS blue, calm and product-focused.",
      },
      emerald: {
        tagline: "Growth-coded, nods at messaging without copying WhatsApp green.",
      },
      violet: {
        tagline: "Confident and slightly playful.",
      },
      amber: {
        tagline: "Warm and friendly — feels good for SMB teams.",
      },
      rose: {
        tagline: "Bold and modern — D2C, creator-economy, lifestyle.",
      },
    },
  },

  whatsapp: {
    title: "WhatsApp connection",
    description:
      "Connect your Meta WhatsApp Business API. Credentials, webhook, and setup steps all live here.",
    banner: {
      tokenCorrupted: "Stored token can't be decrypted",
      resetting: "Resetting…",
      resetButton: "Reset Configuration",
    },
    status: {
      credentialsValid: "Credentials valid",
      notConnected: "Not Connected",
      connectedDescription:
        "Your access token authenticates with Meta. See Registration status below for whether webhooks are actually wired.",
      disconnectedDescription:
        "Configure your Meta API credentials below to connect your WhatsApp Business account.",
    },
    registration: {
      registered: "Registered — Meta will deliver events to wacrm",
      notRegistered: "Not registered — Meta will not deliver events",
      verifyButton: "Verify with Meta",
      subscribedSince: "Subscribed since {{date}}.",
      clickVerify: "Click <strong>Verify with Meta</strong> if events stop arriving.",
      lastAttemptFailed:
        'Last attempt failed with: <span class="text-red-300">"{{error}}"</span>. Enter (or correct) the 2-step PIN below and click Save Configuration to retry.',
      noTracking:
        "This number was saved before registration tracking existed, or registration was skipped. Enter the 2-step PIN below and click Save Configuration to subscribe it.",
      diagnostic: "Diagnostic — last run:",
      live: "live",
      notLive: "not live",
    },
    credentials: {
      cardTitle: "API Credentials",
      cardDescription: "Enter your Meta WhatsApp Business API credentials.",
      phoneNumberId: "Phone Number ID",
      wabaId: "WhatsApp Business Account ID",
      accessToken: "Permanent Access Token",
      tokenHidden: "Token is hidden for security. Re-enter it to update configuration.",
      verifyToken: "Webhook Verify Token",
      verifyTokenHelp:
        "A custom string you create. Must match the token you set in Meta webhook settings.",
      pin: "Two-step verification PIN",
      pinOptional: "(optional)",
      pinHelp:
        "Needed only to wire <strong>inbound</strong> messages for a <strong>production</strong> number. Set it in <strong>Meta Business Manager → WhatsApp Accounts → Phone Numbers → Two-step verification</strong>, then paste it here so wacrm can subscribe the number — otherwise Meta routes inbound events to whichever app last claimed it (the symptom that hits second numbers under a shared WABA). <strong>Meta test numbers</strong> have no PIN and are pre-registered — leave this blank for them. Leaving it blank also keeps an existing registration untouched.",
    },
    webhook: {
      cardTitle: "Webhook Configuration",
      cardDescription:
        "Use this URL as your webhook callback in the Meta App Dashboard.",
      callbackUrl: "Webhook Callback URL",
      copied: "Webhook URL copied to clipboard",
    },
    actions: {
      saving: "Saving…",
      saveButton: "Save Configuration",
      testing: "Testing…",
      testButton: "Test API Connection",
      resetting: "Resetting…",
      resetButton: "Reset Configuration",
    },
    connectionDetails: {
      title: "Connection Details",
      description: "Information returned by the Meta WhatsApp Cloud API.",
      clearButton: "Clear",
      status: "Status",
      connectedBadge: "Connected",
      verifiedName: "Verified Name",
      displayNumber: "Display Number",
      phoneNumberId: "Phone Number ID",
      qualityRating: "Quality Rating",
      graphApi: "Graph API",
      lastCheck: "Last Check",
    },
    setup: {
      title: "Setup Instructions",
      description: "Follow these steps to connect your WhatsApp Business API.",
      step1: {
        title: "Create a Meta App",
        item1: 'Go to <span class="text-primary">developers.facebook.com</span>',
        item2: 'Click "My Apps" and then "Create App"',
        item3: 'Select "Business" as the app type',
        item4: "Fill in app details and create",
      },
      step2: {
        title: "Add WhatsApp Product",
        item1: 'In your app dashboard, click "Add Product"',
        item2: 'Find "WhatsApp" and click "Set Up"',
        item3: "Follow the setup wizard to link your business",
      },
      step3: {
        title: "Get API Credentials",
        item1: "Go to WhatsApp > API Setup",
        item2: "Copy your <strong>Phone Number ID</strong>",
        item3: "Copy your <strong>WhatsApp Business Account ID</strong>",
        item4: "Generate a <strong>Permanent Access Token</strong> from Business Settings > System Users",
      },
      step4: {
        title: "Configure Webhooks",
        item1: "Go to WhatsApp > Configuration",
        item2: 'Click "Edit" on the Webhook section',
        item3: "Paste the <strong>Webhook Callback URL</strong> from above",
        item4: "Enter the same <strong>Verify Token</strong> you set here",
        item5: 'Subscribe to "messages" webhook field',
      },
      documentation: "Meta WhatsApp API Documentation",
    },
    confirmReset:
      "This will delete the current WhatsApp config so you can re-enter it. Continue?",
    errors: {
      loadFailed: "Failed to load WhatsApp configuration",
      phoneNumberRequired: "Phone Number ID is required",
      accessTokenRequired: "Access Token is required for initial setup",
      tokenReentryRequired: "Please re-enter the Access Token to save changes",
      saveFailed: "Failed to save configuration",
      registrationFailed:
        "Saved, but Meta couldn't register the number: {{error}}",
      credentialsSaved:
        "Credentials saved and verified. Inbound registration was skipped (no PIN) — see Registration status below.",
      liveSuccess:
        "Live — {{name}} can now receive events.",
      connectedSuccess: "WhatsApp connected. Events will start flowing within a minute.",
      testFailed: "API connection failed",
      testNetworkError: "Connection test failed. Check network and try again.",
      connectedTo: "Connected to {{name}}",
      testSuccess: "API connection successful",
      registrationLive: "Number is fully wired — Meta is delivering events.",
      registrationNotLive:
        "Number is not fully registered. See the checks below for which step failed.",
      verificationFailed: "Could not reach the verification endpoint.",
      resetFailed: "Failed to reset configuration",
      resetSuccess: "Configuration cleared. You can now re-enter your credentials.",
      resetConfirm:
        "This will delete the current WhatsApp config so you can re-enter it. Continue?",
    },
  },

  templates: {
    title: "Message templates",
    description:
      'Create templates and submit them to Meta for approval. Use "Sync from Meta" to pull templates approved elsewhere.',
    syncButton: "Sync from Meta",
    syncing: "Syncing…",
    newTemplate: "New Template",
    syncTitle: "Pull approved templates from your Meta WhatsApp Business Account",
    empty: {
      heading: "No templates yet.",
      description: "Create your first message template to get started.",
    },
    categories: {
      Marketing: "Marketing",
      Utility: "Utility",
      Authentication: "Authentication",
    },
    headerFormats: {
      none: "None",
      text: "Text",
      image: "Image",
      video: "Video",
      document: "Document",
    },
    form: {
      titleLabel: "Template Name",
      namePlaceholder: "e.g. order_confirmation",
      nameFixed: "Name is fixed once a template exists on Meta — create a new template to change it.",
      nameHelp: "Lowercase letters, digits, and underscores only.",
      categoryLabel: "Category",
      languageLabel: "Language",
      languageFixed: "Language is fixed once a template exists on Meta.",
      languageHelp:
        "Must match the exact code on Meta — <code>en_US</code> and <code>en</code> are distinct.",
      headerLabel: "Header",
      headerTextPlaceholder:
        "Header text (max 60 chars, optional {{1}})",
      headerSamplePlaceholder:
        "Sample value for {{1}} (required for Meta review)",
      uploadImage: "Upload image",
      imageHelp: "JPEG or PNG, ≤5 MB",
      imageUploadHelp:
        "Upload a JPEG/PNG (≤5 MB, ≥800×418 px recommended) or paste a public HTTPS link — we upload it to Meta for review automatically.",
      mediaHelp:
        "Must be a publicly accessible HTTPS link. Meta fetches it once during review, so it needs to stay live for ~24 hrs.",
      videoHelp: " Recommended: MP4 / 3GPP, ≤16 MB, ≤60 seconds.",
      documentHelp: " Recommended: PDF, ≤100 MB.",
      bodyLabel: "Body Text",
      bodyPlaceholder: "Hello {{1}}, your order {{2}} is confirmed.",
      bodyHelp:
        "Use {{1}}, {{2}} for variables (must be contiguous starting at {{1}}).",
      sampleValues: "Sample values (Meta uses these to review your template)",
      footerLabel: "Footer (optional)",
      footerPlaceholder: "Optional footer text (max 60 chars)",
      buttonsLabel: "Buttons (optional)",
      addButton: "Add Button",
      buttonsHelp:
        "Up to {{max}} buttons. QUICK_REPLY buttons must come before URL / phone / copy-code buttons.",
      buttonLabelPlaceholder: "Button label",
      buttonTypes: {
        QUICK_REPLY: "Quick Reply",
        URL: "URL",
        PHONE_NUMBER: "Phone",
        COPY_CODE: "Copy Code",
      },
      urlPlaceholder: "https://example.com/path or with {{1}} suffix",
      urlExamplePlaceholder:
        "Example value for {{1}} (required when URL has a variable)",
      phonePlaceholder: "+15551234567",
      copyCodePlaceholder: "Example code (e.g. SUMMER20)",
    },
    dialog: {
      createTitle: "New Message Template",
      editTitle: "Edit Message Template",
      createDescription:
        "Build a template and submit it to Meta for approval. Once approved, you can use it in broadcasts and the inbox.",
      editDescription:
        "Save your changes to re-submit to Meta. Status will flip back to PENDING during review.",
    },
    authWarning:
      "AUTHENTICATION templates have a fixed body + OTP button shape that needs a different builder. Create them in Meta WhatsApp Manager for now and use <strong>Sync from Meta</strong> to bring them in.",
    actions: {
      edit: "Edit",
      resubmit: "Resubmit",
      deleteFromMeta: "Delete from Meta and locally",
      deleteLocal: "Delete locally",
      editTooltip: "Editing triggers Meta re-review — status flips to PENDING.",
      resubmitTooltip:
        "Edit the template and resubmit to Meta for review.",
    },
    submit: {
      saving: "Saving…",
      submitting: "Submitting…",
      saveResubmit: "Save & Resubmit",
      submitForApproval: "Submit for Approval",
    },
    deleteConfirm: {
      title: "Delete template?",
      withMeta:
        '"{{name}}" will be deleted from Meta and from wacrm. Active broadcasts using this template will start failing on their next send. This can\'t be undone.',
      withoutMeta:
        '"{{name}}" will be deleted from wacrm. It was never submitted to Meta, so no remote cleanup is needed.',
      deleting: "Deleting…",
      deleteButton: "Delete",
    },
    sync: {
      success:
        "Synced {{count}} template from Meta{{details}}",
      successPlural:
        "Synced {{count}} templates from Meta{{details}}",
      detailsFormat: " ({{inserted}} new, {{updated}} updated)",
      syncErrors: "Failed to sync: {{names}}{{suffix}}",
      truncated:
        "Synced the first 2000 templates only — your account has more. Sync again to continue, or contact support if this persists.",
    },
    submitResults: {
      editDryRun: "Template updated (dry-run — no Meta call)",
      createDryRun: "Template saved (dry-run — no Meta call)",
      editSubmitted:
        "Edit submitted — Meta typically reviews within 24 hours.",
      createSubmitted:
        "Submitted to Meta — typical review time is 24 hours. Status updates automatically.",
    },
    headerImage: {
      invalidType: "Header image must be a JPEG or PNG.",
      tooLarge:
        "Image is {{size}} MB — Meta's limit is 5 MB.",
      uploaded: "Image uploaded.",
    },
    errors: {
      loadFailed: "Failed to load templates",
      nameRequired: "Template name is required",
      submitFailed: "Failed to submit",
      deleteFailed: "Failed to delete template",
    },
  },

  fields: {
    title: "Fields & tags",
    description:
      "Two ways to organize contacts: colour-coded tags for quick grouping, and custom fields for structured data.",
  },

  tags: {
    title: "Tags",
    description: "Colour-coded labels for grouping and filtering contacts.",
    empty: "No tags yet — create your first one below.",
    addButton: "Add tag",
    tagNamePlaceholder: "e.g. Newsletter",
    colors: {
      Red: "Red",
      Orange: "Orange",
      Amber: "Amber",
      Emerald: "Emerald",
      Cyan: "Cyan",
      Blue: "Blue",
      Violet: "Violet",
      Pink: "Pink",
    },
    deleteConfirm: {
      title: "Delete tag",
      description:
        'Delete the tag "{{name}}"? This removes it from all contacts and cannot be undone.',
      deleting: "Deleting…",
      deleteButton: "Delete tag",
    },
    errors: {
      loadFailed: "Failed to load tags",
      nameRequired: "Tag name is required",
      notAuthenticated: "Not authenticated",
      createFailed: "Failed to create tag",
      deleteFailed: "Failed to delete tag",
    },
    success: {
      created: "Tag created",
      deleted: "Tag deleted",
    },
  },

  customFields: {
    title: "Custom fields",
    description:
      'Extra contact fields (e.g. ZIP code, lead source). They appear on every contact and in the "Update Contact Field" automation action.',
    adminBadge: "Admin",
  },

  deals: {
    title: "Deals & currency",
    description:
      "The currency used for new deals and for pipeline and dashboard totals.",
    defaultCurrency: "Default currency",
    defaultCurrencyDescription:
      "New deals default to this currency, and pipeline and dashboard totals are shown in it. Existing deals keep the currency they were saved with.",
    currencyLabel: "Currency",
    adminOnly: "Only account admins can change the default currency.",
    errors: {
      saveFailed: "Failed to save default currency",
    },
    success: "Default currency updated",
  },

  members: {
    title: "Team members",
    description:
      "People with access to this account. Roles control what each teammate can do.",
    inviteButton: "Invite member",
    presence: {
      online: "online",
      away: "away",
      offline: "offline",
    },
    memberCount: "member",
    memberCountPlural: "members",
    unnamed: "Unnamed",
    you: "You",
    joined: "Joined",
    pendingInvitations: "Pending invitations",
    inviteHint:
      "The plaintext invite URL is only shown once at creation for security — to re-share, revoke the invite below and create a new one.",
    noPending: "No pending invitations.",
    clickInvite:
      "Click <span>Invite member</span> above to generate a shareable link.",
    untitledInvite: "Untitled invite",
    createdDate: "Created {{date}}",
    expires: "expires in {{count}} day",
    expiresPlural: "expires in {{count}} days",
    expired: "expired",
    expiresHours: "expires in {{count}} hour",
    expiresHoursPlural: "expires in {{count}} hours",
    removeMember: "Remove member",
    removeDescription:
      "Remove <strong>{{name}}</strong> from the account? They'll be signed out of this account and given a fresh personal account on their next sign-in. Their login isn't deleted.",
    removing: "Removing…",
    removeButton: "Remove member",
    revokeButton: "Revoke",
    editableRoles: {
      admin: {
        label: "Admin",
        hint: "Manage members + everything",
      },
      agent: {
        label: "Agent",
        hint: "Use features; no settings",
      },
      viewer: {
        label: "Viewer",
        hint: "Read-only across the app",
      },
    },
    errors: {
      loadFailed: "Failed to load members",
      loadInvitations: "Failed to load invitations",
      serverError: "Could not reach the server",
      updateRole: "Failed to update role",
      removeFailed: "Failed to remove member",
      revokeFailed: "Failed to revoke invitation",
    },
    success: {
      roleUpdated: "Updated {{name}} to {{role}}",
      removed: "Removed {{name}}",
      invitationRevoked: "Invitation revoked",
    },
  },

  invite: {
    createdTitle: "Invite created",
    createdDescription:
      "Share this link with your new teammate. They'll be able to sign up (or sign in) and join the account as <strong>{{role}}</strong>. The link is valid for <strong>{{count}} day</strong>.",
    createdDescriptionPlural:
      "Share this link with your new teammate. They'll be able to sign up (or sign in) and join the account as <strong>{{role}}</strong>. The link is valid for <strong>{{count}} days</strong>.",
    inviteLink: "Invite link",
    saveWarning: "Save this link now.",
    saveWarningBody:
      "We never store the plaintext — once you close this dialog the URL is gone. To re-share, revoke this invite and create a new one.",
    sendWhatsApp: "Send via WhatsApp",
    createTitle: "Invite a teammate",
    createDescription:
      "Generate a one-time invite link. Share it via WhatsApp, Slack, or any channel you like — no email service required.",
    roleLabel: "Role",
    linkValidFor: "Link valid for",
    expiryOptions: {
      "1": "1 day",
      "7": "7 days",
      "30": "30 days",
    },
    labelField: "Label",
    labelOptional: "(optional)",
    labelPlaceholder: "e.g. Sara — support team",
    labelHelp:
      "Helps you remember who you sent the link to in the pending list below.",
    creating: "Creating…",
    generateLink: "Generate link",
    roleDescriptions: {
      admin: "Can invite teammates, manage settings, send messages, and edit data.",
      agent: "Can use the inbox, contacts, broadcasts, automations, and flows. No settings or member access.",
      viewer:
        "Read-only access across every page. Cannot send or edit anything.",
    },
    errors: {
      labelTooLong: "Label must be {{max}} characters or fewer",
      createFailed: "Failed to create invitation",
      serverError: "Could not reach the server. Try again?",
    },
    success: {
      linkCopied: "Invite link copied",
    },
    clipboardBlocked: "Clipboard blocked — copy the link manually",
  },

  apiKeys: {
    title: "API keys",
    description:
      "Keys authenticate the public REST API (<code>/api/v1</code>) so you can build your own automations. Send them as <code>Authorization: Bearer &lt;key&gt;</code>.",
    newKeyButton: "New API key",
    empty: {
      heading: "No API keys yet.",
      adminHint: 'Click <span>New API key</span> to create one.',
      viewerHint: "Ask an admin to create one.",
    },
    status: {
      revoked: "Revoked",
      expired: "Expired",
      noScopes: "No scopes",
    },
    dates: {
      created: "Created {{date}}",
      lastUsed: "last used {{date}}",
      neverUsed: "never used",
      expires: "expires {{date}}",
    },
    revokeButton: "Revoke",
    createDialog: {
      title: "New API key",
      description:
        "Name it after the integration that will use it, and grant only the scopes it needs.",
      nameLabel: "Name",
      namePlaceholder: "e.g. Zapier automation",
      scopesLabel: "Scopes",
      noScopesHelp:
        "A key with no scopes can still call <code>GET /api/v1/me</code> to verify it works.",
      creating: "Creating…",
      createButton: "Create key",
    },
    revealDialog: {
      title: "Copy your API key",
      description:
        "This is the only time the full key is shown. Store it somewhere safe — if you lose it, revoke it and create a new one.",
      keyLabel: "API key",
    },
    errors: {
      loadFailed: "Failed to load API keys",
      serverError: "Could not reach the server",
      revokeFailed: "Failed to revoke key",
      nameRequired: "Give the key a name",
      createFailed: "Failed to create key",
    },
    success: {
      revoked: 'Revoked "{{name}}"',
      keyCopied: "API key copied",
    },
    clipboardFailed: "Copy failed — select and copy manually",
  },
};

export default settings;
