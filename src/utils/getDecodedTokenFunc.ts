'use server';

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedTokenFunc() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("__Secure-next-auth.session-token")?.value ||
    cookieStore.get("next-auth.session-token")?.value;

  if (!token) return null;

  const cookieName = process.env.NODE_ENV === "production" ? "__Secure-next-auth.session-token" : "next-auth.session-token";
  
  const decodedCookie = await decode({
    secret: process.env.AUTH_SECRET!,
    token,
    salt: cookieName,
  });

  return decodedCookie?.userToken;
}
