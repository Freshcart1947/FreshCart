"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedTokenFunc() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("__Secure-next-auth.session-token")?.value ||
    cookieStore.get("next-auth.session-token")?.value;

  console.log("TOKEN:", token);

  if (!token) return null;

  const decodedCookie = await decode({
    secret: process.env.AUTH_SECRET!,
    token,
    // Vercel changes the salt during encryption for secure cookies, so we need to match it here
    salt:
      process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
  });

  console.log("Decoded", decodedCookie?.userToken);

  return decodedCookie?.userToken;
}

// const token =
//   cookieStore.get("__Secure-next-auth.session-token")?.value ||
//   cookieStore.get("next-auth.session-token")?.value;
