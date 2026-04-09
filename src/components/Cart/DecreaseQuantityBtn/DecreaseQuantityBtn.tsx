"use client";
import useCartMutation from "@/hooks/useCartMutation/useCartMutation";
import { updateCart } from "@/services/cart/updateCart/updateCart";
import React, { ReactNode, useState } from "react";
import { ImSpinner2 } from "react-icons/im"; // عشان لو حبيت تظهر Spinner

interface DecreaseQuantityProps {
  children?: ReactNode;
  className?: string;
  count?: number;
  disabled?: boolean;
  productId?: string;
}

export default function DecreaseQuantityBtn({
  children,
  className,
  count,
  disabled,
  productId,
}: DecreaseQuantityProps) {

  const { mutate, isPending } = useCartMutation(
    ({ productId, count }: { productId: string; count: number }) =>
      updateCart(productId, count),
    [["cart"]]
  );

  async function handleDecrease() {
    if (productId && count !== undefined && count > 1) {
      mutate({ productId, count: count - 1 });
    }
  }

  return (
    <button
      onClick={handleDecrease}
      className={className}
      disabled={disabled || isPending || count === 1}
    >
      {isPending ? <ImSpinner2 className="animate-spin" /> : children}
    </button>
  );
}
