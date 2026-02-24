"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const sectionRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    product: [
      { name: "Mobile Recharge", href: "#solutions" },
      { name: "DTH Recharge", href: "#solutions" },
      { name: "Money Transfer", href: "#solutions" },
      { name: "Bill Payments", href: "#solutions" },
      { name: "AEPS Services", href: "#solutions" },
      { name: "Voucher Services", href: "#solutions" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "FAQs", href: "#FAQ" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
    resources: [
      { name: "Partner With Us", href: "#" },
      { name: "Developer API", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Security", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "#", color: "hover:bg-black" },
    { name: "LinkedIn", icon: "in", href: "#", color: "hover:bg-blue-600" },
    { name: "Facebook", icon: "f", href: "#", color: "hover:bg-blue-500" },
    { name: "Instagram", icon: "📷", href: "#", color: "hover:bg-pink-600" },
    { name: "YouTube", icon: "▶", href: "#", color: "hover:bg-red-600" },
  ];

  const appStores = [
    { name: "Google Play", icon: "📱", url: "#" },
    { name: "App Store", icon: "🍎", url: "#" },
  ];
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <footer
      ref={sectionRef}
      className={`relative overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-indigo-500/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(16,185,129,0.03)_0%,transparent_70%)]"></div>
      </div>

      {/* Main CTA Section - Bold & Prominent */}
      <div
        className={`relative border-b ${
          isDark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8 animate-slide-up">
            {/* Gradient Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full border ${
                isDark
                  ? "bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 border-emerald-400/20"
                  : "bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 border-emerald-200/20"
              }`}
            >
              <span
                className={`text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark
                    ? "from-emerald-400 to-indigo-400"
                    : "from-emerald-600 to-indigo-600"
                }`}
              >
                ⚡ Limited Time Offer
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-bold">
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark
                    ? "from-emerald-400 to-indigo-400"
                    : "from-emerald-600 to-indigo-600"
                }`}
              >
                Start Your Digital Income
              </span>
              <br />
              <span className={isDark ? "text-white" : "text-gray-900"}>
                Journey Today.
              </span>
            </h2>

            {/* Subheadline */}
            <p
              className={`text-xl max-w-2xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Join 10,000+ entrepreneurs building their financial future with
              India's fastest growing fintech platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {/* Primary */}
              <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-600 p-0.5">
                <div className="relative flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-8 py-5 text-white transition-all duration-300 group-hover:scale-105">
                  <span className="text-2xl">✨</span>
                  <span className="font-semibold text-lg">
                    Create Free Account
                  </span>
                  <span className="text-xl transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  <div className="absolute bg-white group-hover:opacity-20 transition-opacity"></div>
                </div>
              </button>

              {/* Secondary */}
              <button
                className={`group relative overflow-hidden rounded-2xl border-2 px-8 py-5 font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
                  isDark
                    ? "border-gray-700 text-white hover:border-emerald-400"
                    : "border-gray-300 text-gray-900 hover:border-emerald-500"
                }`}
              >
                <span>💬</span>
                <span>Contact Sales</span>
                <span className="text-xl group-hover:translate-x-1 transition-all">
                  →
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap justify-center gap-8 pt-12 text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> No Credit Card
                Required
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> 14 Days Free Trial
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Cancel Anytime
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              {[
                { value: "₹50Cr+", label: "Monthly Transactions", icon: "💰" },
                { value: "10K+", label: "Active Partners", icon: "🤝" },
                { value: "99.9%", label: "Uptime", icon: "⚡" },
                { value: "24/7", label: "Support", icon: "🛡️" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl backdrop-blur-sm border ${
                    isDark
                      ? "bg-slate-800/50 border-gray-700/30"
                      : "bg-gray-50 border-gray-200/30"
                  }`}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <p
                    className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span
                className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark
                    ? "from-emerald-400 to-indigo-400"
                    : "from-emerald-600 to-indigo-600"
                }`}
              >
                ETopup India
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              India's simplest multi-operator fintech platform. Empowering
              retailers and distributors with one wallet for all services.
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-3">
              {appStores.map((store) => (
                <a
                  key={store.name}
                  href={store.url}
                  className={`flex items-center gap-2 px-4 py-2 text-white rounded-xl transition-all hover:scale-105 ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  <span className="text-xl">{store.icon}</span>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on</p>
                    <p className="text-sm font-semibold">{store.name}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white ${
                    isDark
                      ? "bg-slate-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } ${social.color}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Product
            </h3>

            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-emerald-400"
                        : "text-gray-600 hover:text-emerald-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Support
            </h3>

            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-emerald-400"
                        : "text-gray-600 hover:text-emerald-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Resources
            </h3>

            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-emerald-400"
                        : "text-gray-600 hover:text-emerald-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Strip */}
        <div
          className={`mt-16 pt-8 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? "bg-emerald-900/30" : "bg-emerald-100"
                }`}
              >
                <span
                  className={`text-xl ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  📞
                </span>
              </div>
              <div>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  24/7 Helpline
                </p>
                <p
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? "bg-indigo-900/30" : "bg-indigo-100"
                }`}
              >
                <span
                  className={`text-xl ${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  ✉️
                </span>
              </div>
              <div>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Email Support
                </p>
                <p
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  support@etopupindia.com
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? "bg-amber-900/30" : "bg-amber-100"
                }`}
              >
                <span
                  className={`text-xl ${
                    isDark ? "text-amber-400" : "text-amber-600"
                  }`}
                >
                  📍
                </span>
              </div>
              <div>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Corporate Office
                </p>
                <p
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Ahmedabad, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            © 2024 Etopup India. All rights reserved. | RBI Licensed | ISO 27001
            Certified
          </p>

          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-emerald-400"
                    : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
      >
        <span className="text-xl transform group-hover:-translate-y-1 transition-transform">
          ↑
        </span>
      </button>
    </footer>
  );
}
