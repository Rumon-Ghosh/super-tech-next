"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-green-500">
          Super Tech
        </h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/items">Items</NavLink>
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/add-items">Add Items</NavLink>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <NavLink href="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/items" onClick={() => setMenuOpen(false)}>
            Items
          </NavLink>
          <NavLink href="/login" onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
          <NavLink href="/add-items" onClick={() => setMenuOpen(false)}>
            Add Items
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
