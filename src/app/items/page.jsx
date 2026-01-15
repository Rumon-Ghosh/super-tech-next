import React from "react";
import ItemCard from "@/components/ItemCard"; // adjust path if needed

const Items = async () => {
  const res = await fetch("https://super-tech-server-henna.vercel.app/items", {
    cache: "no-store",
  });
  const items = await res.json();

  return (
    <section className="bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Explore Our Tech Collection
        </h2>
        <p className="text-lg font-medium text-center mb-8">
          Browse the latest gadgets, laptops, smartphones, and accessories
          handpicked for tech enthusiasts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Items;
