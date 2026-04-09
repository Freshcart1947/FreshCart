"use client";
import { addToCart } from "@/services/cart/addToCart/addToCart";
import React, { ReactNode} from "react";
import { ImSpinner2 } from "react-icons/im";
import useCartMutation from "@/hooks/useCartMutation/useCartMutation";
import { updateCart } from "@/services/cart/updateCart/updateCart";

interface AddToCartBtnProps {
  children?: ReactNode;
  className?: string;
  id: string;
  quantity?: number;
}

export default function AddToCartBtn({
  children,
  className,
  id,
  quantity = 0,
}: AddToCartBtnProps) {

  const { mutate, isPending } = useCartMutation(
    async (productId: string) => {
      const res = await addToCart(productId);
      if (res && quantity > 1) {
        await updateCart(productId, quantity);
      }
      return res;
    },
    [["cart"]],
    "Product Added To Cart Successfully",
    "Login First"
  );

  async function handleAddToCart() {
    mutate(id);
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className={`${className} ${isPending ? "opacity-80 cursor-not-allowed" : ""}`}
    >
      {isPending ? (
        <>
          <ImSpinner2 className="animate-spin text-xl" />
        </>
      ) : (
        children
      )}
    </button>
  );
}
