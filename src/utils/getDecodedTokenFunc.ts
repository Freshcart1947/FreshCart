'use server';

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedTokenFunc() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("__Secure-next-auth.session-token")?.value ||
    cookieStore.get("next-auth.session-token")?.value;

  if (!token) return null;

  const decodedCookie = await decode({
    secret: process.env.AUTH_SECRET!,
    token,
  });

  return decodedCookie?.userToken;
}
