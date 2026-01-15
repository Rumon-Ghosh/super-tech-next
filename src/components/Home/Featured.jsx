import React from "react";

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      name: "MacBook Pro",
      price: "$1999",
      image: "https://i.ibb.co/hJ45qhHC/hero-image.webp",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$1199",
      image: "https://i.ibb.co/cKwZr8wq/i-Phone-15-Pro-Max-Main-Image.jpg",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: "$399",
      image: "https://i.ibb.co/VPdFsfj/20220704-1656928394-640411.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="max-w-xl mx-auto">
            Handpicked premium tech products loved by our customers.
          </p>
        </div>

        {/* Featured Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>
              <p className="text-blue-600 font-bold mt-2">{item.price}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Featured;
