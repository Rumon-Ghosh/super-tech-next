import React from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Laptops", icon: "💻" },
    { id: 2, name: "Smartphones", icon: "📱" },
    { id: 3, name: "Headphones", icon: "🎧" },
    { id: 4, name: "Wearables", icon: "⌚" },
    { id: 5, name: "Accessories", icon: "🖱️" },
    { id: 6, name: "Monitors", icon: "🖥️" },
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Find the perfect tech product by exploring our curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-800 rounded-xl p-6 text-center cursor-pointer
                         hover:bg-gray-700 transition"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-white font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
