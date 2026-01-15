import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Explore the Latest Tech?
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-400 text-lg mb-8">
          Browse our curated collection of gadgets, laptops, smartphones, and more. 
          Join thousands of satisfied tech enthusiasts today!
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/items"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Browse Items
          </Link>
          <Link
            href="/add-items"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Add Item
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;
