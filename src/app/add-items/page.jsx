import AddItemForm from "@/components/form/AddItemForm";
import React from "react";

const AddItems = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AddItemForm />
      </div>
    </section>
  );
};

export default AddItems;
