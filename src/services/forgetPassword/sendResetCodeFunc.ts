export async function sendResetCodeApi(email: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgotPasswords`,
    {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "content-type": "application/json" },
    }
  );
  return await res.json();
}