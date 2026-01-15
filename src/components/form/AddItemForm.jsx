"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    rating: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ratingValue = Number(formData.rating);

    // Validation
    if (ratingValue < 0 || ratingValue > 5) {
      toast.error("Rating must be between 0 and 5");
      return;
    }

    const res = await fetch(
      "https://super-tech-server-henna.vercel.app/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          rating: ratingValue,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Item added successfully!");
      router.push("/items");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-xl max-w-xl mx-auto space-y-4"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Add New Item</h2>

      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-900 text-white"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-900 text-white"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-900 text-white"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-900 text-white"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-900 text-white"
      />

      {/* ⭐ Rating Input */}
      <div>
        <label className="text-gray-300 block mb-1">Rating (0 – 5)</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.5"
          placeholder="e.g. 4.5"
          required
          className="w-full p-3 rounded bg-gray-900 text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 cursor-pointer rounded-lg transition"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
