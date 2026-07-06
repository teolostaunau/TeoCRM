"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LoginFormProps } from "./types";

export function LoginForm({
  email,
  password,
  loading,
  error,
  inviteToken,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) 
{
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
    {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
        {error}
        </div>
    )}

    <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-muted-foreground">
        Correo electrónico
        </Label>
        <Input
        id="email"
        type="email"
        placeholder="correo@empresa.com"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        required
        className="border-border bg-muted text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20"
        />
    </div>

    <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
        <Label htmlFor="password" className="text-muted-foreground">
            Contraseña
        </Label>
        <Link
            href="/forgot-password"
            className="text-sm text-primary hover:text-primary/80"
        >
            ¿Olvidaste tu contraseña?
        </Link>
        </div>
        <Input
        id="password"
        type="password"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={(e)=>onPasswordChange(e.target.value)}
        required
        className="border-border bg-muted text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20"
        />
    </div>

    <Button
        type="submit"
        disabled={loading}
        className="mt-2 h-10 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
    >
        {loading ? "Ingresando..." : "Iniciar sesión"}
    </Button>
    </form>
  );
}