const auth = {
  login: {
    title: "Sign in",
    description: "Sign in to your account to continue",

    fields: {
      email: {
        label: "Email",
        placeholder: "you@company.com",
      },
      password: {
        label: "Password",
        placeholder: "Enter your password",
      },
      rememberMe: "Remember me",
    },

    actions: {
      signIn: "Sign in",
      forgotPassword: "Forgot password?",
    },
  
    messages: {
      loading: "Signing in...",
    },

    footer: {
      noAccount: "Don't have an account?",
      createAccount: "Create account",
    },
  },

  signup: {
    title: "Create account",
    description: "Create your account to get started.",

    fields: {
      fullName: {
        label: "Full name",
        placeholder: "John Smith",
      },
      email: {
        label: "Email",
        placeholder: "you@company.com",
      },
      password: {
        label: "Password",
        placeholder: "Create a password",
      },
      confirmPassword: {
        label: "Confirm password",
        placeholder: "Confirm your password",
      },
    },

    actions: {
      createAccount: "Create account",
    },

    footer: {
      alreadyHaveAccount: "Already have an account?",
      signIn: "Sign in",
    },
  },

  invitation: {
    title: "You're invited to {{account}}",
    description:
      "You'll join as {{role}}. This invitation expires on {{date}}.",

    actions: {
      acceptInvitation: "Create account",
      signIn: "Already have an account?",
    },
  },

  forgotPassword: {
    title: "Reset password",
    description:
      "Enter your email address and we'll send you a link to reset your password.",

    fields: {
      email: {
        label: "Email",
        placeholder: "you@company.com",
      },
    },

    actions: {
      sendResetLink: "Send reset link",
      backToLogin: "Back to sign in",
    },
  },

  resetPassword: {
    title: "Create a new password",
    description: "Choose a new password for your account.",

    fields: {
      password: {
        label: "New password",
        placeholder: "Enter your new password",
      },
      confirmPassword: {
        label: "Confirm password",
        placeholder: "Confirm your new password",
      },
    },

    actions: {
      updatePassword: "Update password",
      updating: "Updating...",      
    },

    messages: {
      success: "Your password has been updated successfully.",
    },

    errors: {
      mismatch: "Passwords do not match.",
      weak: "Password must be at least 6 characters.",
      generic: "Unable to update your password.",
    }, 
  },

  verification: {
    title: "Verify your email",
    description: "Please verify your email address to continue.",
  },

  messages: {
    accountCreated: "Your account has been created successfully.",
    passwordResetEmailSent: "Password reset email sent.",
    passwordUpdated: "Your password has been updated successfully.",
    invitationAccepted: "Invitation accepted successfully.",
    emailVerified: "Your email has been verified.",
  },

  errors: {
    invalidCredentials: "Invalid email or password.",
    requiredEmail: "Email is required.",
    requiredPassword: "Password is required.",
    emailAlreadyExists: "An account with this email already exists.",
    passwordTooShort: "Password is too short.",
    passwordsDoNotMatch: "Passwords do not match.",
    invalidInvitation: "Invalid invitation.",
    expiredInvitation: "Invitation has expired.",
    invalidToken: "Invalid or expired token.",
    sessionExpired: "Your session has expired.",
  },
};

export default auth;