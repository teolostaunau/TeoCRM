import type { AutomationTriggerType } from '@/types'

export interface TriggerMeta {
  labelKey: string
  /** Tailwind classes for the Badge pill on the list row. */
  pillClass: string
}

export const TRIGGER_META: Record<AutomationTriggerType, TriggerMeta> = {
  new_message_received: {
    labelKey: 'automations.builder.triggers.newMessageReceived.label',
    pillClass: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  },
  first_inbound_message: {
    labelKey: 'automations.builder.triggers.firstInboundMessage.label',
    pillClass: 'border-teal-500/30 bg-teal-500/10 text-teal-300',
  },
  keyword_match: {
    labelKey: 'automations.builder.triggers.keywordMatch.label',
    pillClass: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
  },
  new_contact_created: {
    labelKey: 'automations.builder.triggers.newContactCreated.label',
    pillClass: 'border-primary/30 bg-primary/10 text-primary',
  },
  conversation_assigned: {
    labelKey: 'automations.builder.triggers.conversationAssigned.label',
    pillClass: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
  },
  tag_added: {
    labelKey: 'automations.builder.triggers.tagAdded.label',
    pillClass: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  },
  time_based: {
    labelKey: 'automations.builder.triggers.timeBased.label',
    pillClass: 'border-slate-500/30 bg-slate-500/10 text-muted-foreground',
  },
}

export function triggerMeta(t: AutomationTriggerType | string): TriggerMeta {
  return (
    TRIGGER_META[t as AutomationTriggerType] ?? {
      label: t,
      pillClass: 'border-slate-500/30 bg-slate-500/10 text-muted-foreground',
    }
  )
}

export type RelativeTimeResult = {
  key: string
  params?: Record<string, string | number>
}

export function formatRelative(
  iso: string | null | undefined
): RelativeTimeResult {
  if (!iso) {
    return { key: "automations.builder.relativeTime.never" }
  }

  const then = new Date(iso).getTime()

  if (Number.isNaN(then)) {
    return { key: "automations.builder.relativeTime.never" }
  }

  const diffSec = Math.round((Date.now() - then) / 1000)

  if (diffSec < 60) {
    return { key: "automations.builder.relativeTime.justNow" }
  }

  if (diffSec < 3600) {
    return {
      key: "automations.builder.relativeTime.minutesAgo",
      params: { count: Math.floor(diffSec / 60) },
    }
  }

  if (diffSec < 86400) {
    return {
      key: "automations.builder.relativeTime.hoursAgo",
      params: { count: Math.floor(diffSec / 3600) },
    }
  }

  if (diffSec < 2_592_000) {
    return {
      key: "automations.builder.relativeTime.daysAgo",
      params: { count: Math.floor(diffSec / 86400) },
    }
  }

  return {
    key: "automations.builder.relativeTime.date",
    params: { date: new Date(iso).toLocaleDateString(), },
  }
}
