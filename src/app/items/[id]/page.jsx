import ItemBuyButton from "@/components/Button/ItemBuyButton";
import React from "react";

const ItemDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://super-tech-server-henna.vercel.app/items/${id}`,
    { cache: "no-store" }
  );
  const item = await res.json();

  return (
    <section className="bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-start">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-xl shadow-lg max-h-[500px] object-contain"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          <p className="text-gray-400 mb-4">{item.category}</p>
          <div className="flex items-center mb-6">
            <span className="text-blue-400 text-2xl font-bold">
              ${item.price}
            </span>
            <span className="ml-4 text-yellow-400 text-lg">
              ⭐ {item.rating}
            </span>
          </div>
          <p className="text-gray-300 mb-8">{item.description}</p>

          {/* Buy Now Button */}
          <ItemBuyButton></ItemBuyButton>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
