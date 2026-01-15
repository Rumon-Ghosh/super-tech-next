import Link from "next/link";
import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-5 hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
      <p className="text-gray-400 mt-1">{item.category}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-blue-400 font-bold">${item.price}</span>
        <span className="text-yellow-400">
          ⭐ {item.rating}
        </span>
      </div>
      <Link href={`items/${item.id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ItemCard;
