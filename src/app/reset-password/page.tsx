"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTranslation } from "@/i18n/react";
import { LanguageSwitcher } from "@/components/common/language-switcher";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";


export default function ResetPasswordPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  console.log("========================================");
  console.log("RESET PASSWORD - HANDLE SUBMIT");
  console.log("========================================");

  setLoading(true);
  setError("");
  setSuccess("");

  console.log("Password length:", password.length);
  console.log("Confirm length:", confirmPassword.length);

  if (password !== confirmPassword) {
    console.log("ERROR: Passwords do not match");

    setError(
      t("auth.resetPassword.errors.mismatch")
    );

    setLoading(false);
    return;
  }

  if (password.length < 6) {
    console.log("ERROR: Weak password");

    setError(
      t("auth.resetPassword.errors.weak")
    );

    setLoading(false);
    return;
  }

  try {
    console.log("Checking current session...");

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    console.log("Session Error:", sessionError);
    console.log("Session:", session);

    if (!session) {
      console.error("NO ACTIVE SESSION");

      setError("No existe una sesión activa de recuperación.");

      return;
    }

    console.log("Calling updateUser()...");

    const { data, error } =
      await supabase.auth.updateUser({
        password,
      });

    console.log("updateUser() response");
    console.log("data:", data);
    console.log("error:", error);

    if (error) {
      throw error;
    }

    console.log("Password updated successfully.");

    setSuccess(
      t("auth.resetPassword.messages.success")
    );

    setTimeout(() => {
      console.log("Redirecting to Login...");
      router.replace("/login");
    }, 1500);

  } catch (err) {

    console.error("Exception:");
    console.error(err);

    setError(
      t("auth.resetPassword.errors.generic")
    );

  } finally {

    console.log("Reset Password finished.");
    console.log("========================================");

    setLoading(false);
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="mb-6 flex justify-end">
          <LanguageSwitcher />
        </div>

        <Card>

            <CardHeader>

                <CardTitle>
                {t("auth.resetPassword.title")}
                </CardTitle>

                <CardDescription>
                {t("auth.resetPassword.description")}
                </CardDescription>

            </CardHeader>

            <CardContent>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="password">
                      {t("auth.resetPassword.fields.password.label")}
                  </Label>

                  <Input id="password"
                      type="password"
                      placeholder={t(
                      "auth.resetPassword.fields.password.placeholder"
                      )}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>

                <Label htmlFor="confirmPassword">
                    {t("auth.resetPassword.fields.confirmPassword.label")}
                </Label>

                <Input id="confirmPassword"
                    type="password"
                    placeholder={t(
                    "auth.resetPassword.fields.confirmPassword.placeholder"
                    )}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                </div>

                {error && (
                <p className="text-sm text-destructive">
                    {error}
                </p>
                )}

                {success && (
                <p className="text-sm text-green-600">
                    {success}
                </p>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                {loading
                    ? t("auth.resetPassword.actions.updating")
                    : t("auth.resetPassword.actions.updatePassword")}
                </Button>

            </form>

            </CardContent>

        </Card>

      </div>
    </div>
  );
}