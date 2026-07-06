export interface WhatsAppDiagnostics {
  connected: boolean

  graphApiVersion: string

  phoneNumber: {
    id: string
    displayNumber: string
    verifiedName: string
  }

  business: {
    id: string
  }

  checkedAt: string
}

export interface WhatsAppConnectionInfo {
  graphApiVersion: string

  verifiedName: string | null

  displayPhoneNumber: string | null

  phoneNumberId: string

  businessAccountId: string | null
  
  qualityRating: string | null
  
  checkedAt: string
}

export interface WhatsAppDiagnosticsResponse {
  live: boolean

  checks: {
    config_exists: boolean
    token_decryptable: boolean
    phone_metadata_ok: boolean
    waba_subscribed_to_app: boolean | null
    locally_marked_registered: boolean
  }

  errors: string[]

  connection?: WhatsAppConnectionInfo
}   