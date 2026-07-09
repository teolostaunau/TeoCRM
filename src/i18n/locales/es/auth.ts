const auth = {
  login: {
    title: "Iniciar sesión",
    description: "Ingresa a tu cuenta para continuar",

    fields: {
      email: {
        label: "Correo electrónico",
        placeholder: "micorreo@empresa.com",
      },
      password: {
        label: "Contraseña",
        placeholder: "Ingresa tu contraseña",
      },
      rememberMe: "Recordarme",
    },

    actions: {
      signIn: "Iniciar sesión",
      forgotPassword: "¿Olvidaste tu contraseña?",
    },

    messages: {
      loading: "Iniciando sesión...",
    },

    footer: {
      noAccount: "¿No tienes una cuenta?",
      createAccount: "Crear cuenta",
    },
  },

  signup: {
    title: "Crear cuenta",
    description: "Crea tu cuenta para comenzar.",

    fields: {
      fullName: {
        label: "Nombre completo",
        placeholder: "Juan Pérez",
      },
      email: {
        label: "Correo electrónico",
        placeholder: "micorreo@empresa.com",
      },
      password: {
        label: "Contraseña",
        placeholder: "Crea una contraseña",
      },
      confirmPassword: {
        label: "Confirmar contraseña",
        placeholder: "Confirma tu contraseña",
      },
    },

    actions: {
      createAccount: "Crear cuenta",
    },

    footer: {
      alreadyHaveAccount: "¿Ya tienes una cuenta?",
      signIn: "Iniciar sesión",
    },
  },

  invitation: {
    title: "Has sido invitado a {{account}}",
    description:
      "Te unirás como {{role}}. Esta invitación vence el {{date}}.",

    actions: {
      acceptInvitation: "Crear cuenta",
      signIn: "Ya tengo una cuenta",
    },
  },

  forgotPassword: {
    title: "Restablecer contraseña",
    description:
      "Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.",

    fields: {
      email: {
        label: "Correo electrónico",
        placeholder: "micorreo@empresa.com",
      },
    },

    actions: {
      sendResetLink: "Enviar enlace",
      backToLogin: "Volver a iniciar sesión",
    },
  },

  resetPassword: {
    title: "Crear una nueva contraseña",
    description: "Elige una nueva contraseña para tu cuenta.",

    fields: {
      password: {
        label: "Nueva contraseña",
        placeholder: "Ingresa tu nueva contraseña",
      },
      confirmPassword: {
        label: "Confirmar contraseña",
        placeholder: "Confirma tu nueva contraseña",
      },
    },

    actions: {
      updatePassword: "Actualizar contraseña",
      updating: "Actualizando...",
    },

    messages: {
      success: "Tu contraseña se actualizó correctamente.",
    },

    errors: {
      mismatch: "Las contraseñas no coinciden.",
      weak: "La contraseña debe tener al menos 6 caracteres.",
      generic: "No fue posible actualizar tu contraseña.",
    },
  },

  verification: {
    title: "Verifica tu correo electrónico",
    description: "Verifica tu correo electrónico para continuar.",
  },

  messages: {
    accountCreated: "Tu cuenta ha sido creada correctamente.",
    passwordResetEmailSent:
      "Se ha enviado el correo para restablecer tu contraseña.",
    passwordUpdated: "Tu contraseña ha sido actualizada correctamente.",
    invitationAccepted: "La invitación fue aceptada correctamente.",
    emailVerified: "Tu correo electrónico ha sido verificado.",
  },

  errors: {
    invalidCredentials: "Correo o contraseña incorrectos.",
    requiredEmail: "El correo electrónico es obligatorio.",
    requiredPassword: "La contraseña es obligatoria.",
    emailAlreadyExists: "Ya existe una cuenta con este correo.",
    passwordTooShort: "La contraseña es demasiado corta.",
    passwordsDoNotMatch: "Las contraseñas no coinciden.",
    invalidInvitation: "La invitación no es válida.",
    expiredInvitation: "La invitación ha expirado.",
    invalidToken: "El enlace es inválido o ha expirado.",
    sessionExpired: "Tu sesión ha expirado.",
  },
};

export default auth;