import ProductDetailsComp from "@/components/productDetails/ProductDetailsComp/ProductDetailsComp";
import { ProductDetails } from "@/interfaces/productDetails.interface";
import { getSpecificProduct } from "@/services/getSpecificProduct/getSpecificProduct";
import React from "react";
import { FaBolt, FaCartPlus, FaRegHeart, FaShippingFast, FaShoppingCart, FaStar } from "react-icons/fa";
import {
  FaArrowRotateLeft,
  FaShieldHalved,
  FaTruckFast,
} from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";

export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: ProductDetails = await getSpecificProduct(id);
  console.log(product, "data");

  return (
    <>
      <ProductDetailsComp product = {product}  />

    </>
  );
}
