import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Tech Enthusiast",
      avatar: "https://i.ibb.co/DgWSffZP/joy.jpg",
      rating: 5,
      feedback:
        "Absolutely love the products! The MacBook Pro I bought works flawlessly and delivery was super fast.",
    },
    {
      id: 2,
      name: "Mark Smith",
      role: "Software Engineer",
      avatar: "https://i.ibb.co/zWrCNhyW/karim.jpg",
      rating: 4.8,
      feedback:
        "Great variety of tech gadgets. Customer support is very responsive and helpful.",
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Designer",
      avatar: "https://i.ibb.co/V0hgVGD7/tania.jpg",
      rating: 4.9,
      feedback:
        "I found exactly what I needed! The site is smooth, modern, and easy to navigate.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Hear from some of our satisfied tech enthusiasts who love our products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-15 h-15 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-200 mb-4">{t.feedback}</p>

              {/* Rating */}
              <div className="flex items-center text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.round(t.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
