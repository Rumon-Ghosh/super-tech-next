"use client"
import React from "react";
import toast from "react-hot-toast";

const ItemBuyButton = () => {
  const handleBuy = () => {
    toast.success("Thanks For Buying !")
  }
  return (
    <button onClick={handleBuy} className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold">
      Buy Now
    </button>
  );
};

export default ItemBuyButton;
