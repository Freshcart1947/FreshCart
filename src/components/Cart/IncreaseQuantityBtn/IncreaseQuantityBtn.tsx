"use client";
import useCartMutation from "@/hooks/useCartMutation/useCartMutation";
import { updateCart } from "@/services/cart/updateCart/updateCart";
import React, { ReactNode } from "react";
import { ImSpinner2 } from "react-icons/im";

interface IncreaseQuantityProps {
  children?: ReactNode;
  className?: string;
  count?: number;
  disabled?: boolean;
  productId?: string;
  quantity?: number; 
}

export default function IncreaseQuantityBtn({
  children,
  className,
  count,
  disabled,
  productId,
  quantity,
}: IncreaseQuantityProps) {
  const { mutate, isPending } = useCartMutation(
    ({ productId, count }: { productId: string; count: number }) =>
      updateCart(productId, count),
    [["cart"]],
  );

  async function handleIncrease() {
    if (productId && count !== undefined) {
      if (quantity !== undefined && count >= quantity) {
        console.warn("Reached stock limit");
        return;
      }
      mutate({ productId, count: count + 1 });
    }
  }

  return (
    <button
      onClick={handleIncrease}
      className={className}
      disabled={disabled || isPending}
    >
      {isPending ? <ImSpinner2 className="animate-spin mx-auto" /> : children}
    </button>
  );
}
