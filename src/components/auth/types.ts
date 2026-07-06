import { ReactNode } from "react";
import type { FormEvent } from "react";

export interface AuthLayoutProps {
  hero?: ReactNode;
  children: ReactNode;
}

export interface AuthCardProps {
  children: ReactNode;
}

export interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

export interface AuthFooterProps {
  children?: ReactNode;
}

export interface AuthHeroProps {
  title?: string;
  subtitle?: string;
}

export interface LoginFormProps {
  email: string;
  password: string;
  loading: boolean;
  error?: string | null;
  inviteToken?: string | null;

  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

