"use server";
import { ShippingFormData } from "@/components/CheckOut/CheckoutForm/CheckoutForm";
import { getDecodedTokenFunc } from "@/utils/getDecodedTokenFunc";

export async function cashPayment(
  cartId: string,
  shippingData: ShippingFormData,
) {
  const token = await getDecodedTokenFunc();
  if (!token) {
    throw new Error("unAuth");
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/orders/${cartId}`,
      {
        method: "POST",
        body: JSON.stringify({ shippingData }),
        headers: {
          token,
          "Content-type": "application/json",
        },
      },
    );

    const data = await res.json();
    if (data.status === "success") {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false
  }
}
