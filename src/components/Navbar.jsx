"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import LogoutButton from "./Button/LogoutButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/user", {
          credentials: "include",
        });
        const data = await res.json();
        setIsLoggedIn(data.isLoggedIn);
        setRefetch(!refetch)
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, [refetch]);

  return (
    <header className="bg-gray-900 text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-green-500">Super Tech</h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/items">Items</NavLink>

          <NavLink href="/add-items">Add Items</NavLink>
          {!isLoggedIn && <NavLink href="/login">Login</NavLink>}
          {isLoggedIn && <LogoutButton />}
        </nav>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          ☰
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

          <NavLink href="/add-items" onClick={() => setMenuOpen(false)}>
            Add Items
          </NavLink>

          {!isLoggedIn && (
            <NavLink href="/login" onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>
          )}

          {isLoggedIn && <LogoutButton />}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
