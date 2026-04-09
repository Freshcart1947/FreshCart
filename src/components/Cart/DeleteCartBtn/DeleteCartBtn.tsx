"use client"
import { deleteUserCart } from "@/services/cart/deleteUserCart/deleteUserCart";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";
import { MdDeleteSweep } from "react-icons/md";
import { CartResponse } from "@/interfaces/cart.interface";
import useCartMutation from "@/hooks/useCartMutation/useCartMutation";
import { addToCart } from "@/services/cart/addToCart/addToCart";


export default function DeleteCartBtn() {

  const {mutate , isPending} =  useCartMutation(deleteUserCart , [['cart']])


  return (
    <>
      <div className="mt-8 flex justify-end px-2">
        <button
          onClick={mutate}
          className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-2xl text-red-600 bg-white border-2 border-red-50 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-bold shadow-sm hover:shadow-red-200"
        >
          {isPending ? (
            <>
              <ImSpinner2 className="animate-spin mx-auto" />
              <span>Deleting Cart...</span>
            </>
          ) : (
            <>
              <MdDeleteSweep size={22} />
              <span>Clear All Items</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
