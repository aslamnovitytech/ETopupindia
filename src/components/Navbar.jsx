"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const navmenu = [
    { name: "Solutions", href: "#solutions" },
    { name: "Add money", href: "#add-money" },
    { name: "Become Parter", href: "#become-partner" },
    { name: "FAQ's", href: "#FAQ" },
  ];
  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-4/5 z-50 transition-all duration-500 rounded-2xl border-gray-500 bg-white/80 backdrop-blur-lg shadow-md`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <a href="#">
            <span
              className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                ? "from-emerald-400 to-indigo-400"
                : "from-emerald-600 to-indigo-600"
              }`}
              >
              ETopup India
            </span>
              </a>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navmenu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors text-gray-600 hover:text-emerald-600`}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href={"#"} className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
