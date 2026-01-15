import Link from "next/link";
import React from "react";

const PopularItems = async () => {
  const data = await fetch("https://super-tech-server-henna.vercel.app/items");
  const items = await data.json();
  const popularItems = items.filter((item) => item.rating > 4.6).slice(0, 4);

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Popular Items
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Most loved tech products chosen by our customers.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl p-5 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-white">{item.name}</h3>

              <div className="flex items-center justify-between mt-2">
                <span className="text-blue-400 font-bold">{item.price}</span>
                <span className="text-yellow-400 text-sm">
                  ⭐ {item.rating}
                </span>
              </div>

              <Link href={`/items/${item.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2    rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
