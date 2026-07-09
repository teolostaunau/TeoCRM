// src/app/auth/callback/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  console.log("========== AUTH CALLBACK ==========");
  console.log(request.url);

  const requestUrl = new URL(request.url);

  console.log("search:", requestUrl.search);

  console.log(
    "params:",
    Object.fromEntries(requestUrl.searchParams.entries())
  );
  
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/dashboard";

  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.exchangeCodeForSession(code);

if (error) {
  console.error("========== CALLBACK ERROR ==========");
  console.error(error);

  return NextResponse.json(
    {
      message: error.message,
      status: error.status,
      code: error.code,
      name: error.name,
      error,
    },
    { status: 500 }
  );
}

  return NextResponse.redirect(new URL(next, request.url));
}