import React from "react";

const Banner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Content Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover the Latest Tech Products
            </h1>
            <p className="text-lg mb-6">
              Explore cutting-edge gadgets, laptops, smartphones, and accessories 
              designed to elevate your digital lifestyle.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Shop Now
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/YT0SGRyw/web-technology-conceptual-banner-template-modern-dark-techno-elements-6939046.jpg"
              alt="Tech Products"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
