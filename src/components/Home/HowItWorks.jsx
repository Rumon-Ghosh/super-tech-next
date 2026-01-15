import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Products",
      description:
        "Explore a wide range of latest tech gadgets, laptops, and accessories.",
      icon: "🛍️",
    },
    {
      id: 2,
      title: "View Product Details",
      description:
        "Check detailed specifications, pricing, and product images before deciding.",
      icon: "📱",
    },
    {
      id: 3,
      title: "Login & Add Items",
      description:
        "Login securely to add new products or manage your tech listings.",
      icon: "🔐",
    },
    {
      id: 4,
      title: "Fast & Secure Experience",
      description:
        "Enjoy a smooth and secure browsing experience powered by modern web technology.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="max-w-xl mx-auto">
            Get started in just a few simple steps and explore the latest tech products.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-500 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className=" text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
