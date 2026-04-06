// "use server";

// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export async function getDecodedTokenFunc() {
//   const cookieStore = await cookies();

//   const cookieName =
//     process.env.NODE_ENV === "production"
//       ? "__Secure-next-auth.session-token"
//       : "next-auth.session-token";

//   let token = cookieStore.get(cookieName)?.value;

//   if (!token) {
//     let chunk = "";
//     let i = 0;
//     while ((chunk = cookieStore.get(`${cookieName}.${i}`)?.value ?? "")) {
//       token = (token ?? "") + chunk;
//       i++;
//     }
//   }

//   console.log("TOKEN:", token);

//   if (!token) return null;

//   const decodedCookie = await decode({
//     secret: process.env.AUTH_SECRET!,
//     token,
//   });

//   console.log("Decoded", decodedCookie?.userToken);

//   return decodedCookie?.userToken;
// }

// const token =
//   cookieStore.get("__Secure-next-auth.session-token")?.value ||
//   cookieStore.get("next-auth.session-token")?.value;

"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function getDecodedTokenFunc() {
  const cookieStore = await cookies();
  const token =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;
  const decodedCookie = await decode({
    token,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  return decodedCookie?.userToken;
}
