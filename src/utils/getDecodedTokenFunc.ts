"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedTokenFunc() {
  const cookieStore = await cookies();

  const cookieName =
    process.env.NODE_ENV === "production"
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token";

  // Vercel بيقسم الـ cookie لـ chunks لما يكون كبير (.0, .1, ...)
  // فبنجمعهم مع بعض لو الـ cookie مش موجود مباشرة
  let token = cookieStore.get(cookieName)?.value;

  if (!token) {
    let chunk = "";
    let i = 0;
    while ((chunk = cookieStore.get(`${cookieName}.${i}`)?.value ?? "")) {
      token = (token ?? "") + chunk;
      i++;
    }
  }

  console.log("TOKEN:", token);

  if (!token) return null;

  const decodedCookie = await decode({
    secret: process.env.AUTH_SECRET!,
    token,
  });

  console.log("Decoded", decodedCookie?.userToken);

  return decodedCookie?.userToken;
}
