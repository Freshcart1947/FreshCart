export async function resetPasswordFunc(email: string , newPassword:string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/resetPassword`,
    {
      method: "PUT",
      body: JSON.stringify({ email , newPassword }),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await res.json()
  if(data.token){
    return true
  }else{
    return false
  }
}