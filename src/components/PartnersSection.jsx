"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useState, useEffect, useRef } from "react";

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState("retailer");
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const retailerBenefits = [
    {
      icon: "💰",
      title: "Low Investment",
      desc: "Start with as low as ₹1,000",
      highlight: "90% less than traditional business",
    },
    {
      icon: "📈",
      title: "High Margins",
      desc: "Earn up to 2% on every transaction",
      highlight: "Industry best commission",
    },
    {
      icon: "⚡",
      title: "Instant Onboarding",
      desc: "Go live in 10 minutes",
      highlight: "Paperless KYC",
    },
    {
      icon: "🛡️",
      title: "24x7 Support",
      desc: "Dedicated relationship manager",
      highlight: "WhatsApp support available",
    },
  ];

  const distributorBenefits = [
    {
      icon: "🌐",
      title: "Network Commission",
      desc: "Earn on every retailer you onboard",
      highlight: "Tier-1 commission structure",
    },
    {
      icon: "📊",
      title: "Dashboard Monitoring",
      desc: "Real-time network performance",
      highlight: "Live analytics & insights",
    },
    {
      icon: "📑",
      title: "Automated Reports",
      desc: "Daily, weekly & monthly statements",
      highlight: "Excel/PDF exports",
    },
    {
      icon: "🚀",
      title: "Business Growth",
      desc: "Tools to expand your network",
      highlight: "Marketing collateral provided",
    },
  ];

  const stats = {
    retailer: [
      {
        value: "10,000+",
        label: "Active Retailers",
        change: "+156% this year",
      },
      {
        value: "₹50K",
        label: "Avg Monthly Earnings",
        change: "Top earners make ₹2L+",
      },
      {
        value: "99.7%",
        label: "Retailer Satisfaction",
        change: "Based on 2024 survey",
      },
    ],
    distributor: [
      { value: "500+", label: "Active Distributors", change: "+89% this year" },
      {
        value: "₹2.5L",
        label: "Avg Monthly Commission",
        change: "Top distributors earn ₹8L+",
      },
      {
        value: "1,500+",
        label: "Avg Network Size",
        change: "Retailers per distributor",
      },
    ],
  };
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
   <section
  ref={sectionRef}
  className={`relative py-32 overflow-hidden ${
    isDark
      ? 'bg-gradient-to-b from-slate-900 to-slate-800'
      : 'bg-gradient-to-b from-white to-gray-50'
  }`}
  id="become-partner"
>
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge */}
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
              🤝 Join Our Growing Network
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Partner with{" "}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-emerald-400 to-indigo-400"
                  : "from-emerald-600 to-indigo-600"
              }`}
            >
              India's Fastest
            </span>
            <br />
            Growing Fintech Platform
          </h2>

          {/* Description */}
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Choose your path to financial success. Whether you're starting small
            or building big, we have the perfect opportunity for you.
          </p>
        </div>

        {/* Split Screen Tabs (Mobile) */}
        <div className="lg:hidden flex justify-center mb-8">
          <div
            className={`inline-flex p-1 rounded-2xl ${
              isDark ? "bg-slate-800" : "bg-gray-100"
            }`}
          >
            {/* Retailer Tab */}
            <button
              onClick={() => setActiveTab("retailer")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "retailer"
                  ? `${
                      isDark
                        ? "bg-slate-700 text-emerald-400"
                        : "bg-white text-emerald-600"
                    } shadow-lg`
                  : `${isDark ? "text-gray-400" : "text-gray-600"}`
              }`}
            >
              👤 For Retailers
            </button>

            {/* Distributor Tab */}
            <button
              onClick={() => setActiveTab("distributor")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "distributor"
                  ? `${
                      isDark
                        ? "bg-slate-700 text-indigo-400"
                        : "bg-white text-indigo-600"
                    } shadow-lg`
                  : `${isDark ? "text-gray-400" : "text-gray-600"}`
              }`}
            >
              🤝 For Distributors
            </button>
          </div>
        </div>

        {/* Split Screen Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Retailer Side */}
          <div
            className={`relative group ${
              activeTab === "retailer" ? "block" : "hidden lg:block"
            }`}
            ref={(el) => (cardsRef.current[0] = el)}
            onMouseEnter={() => setHoveredCard("retailer")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-3xl blur-3xl transition-opacity duration-500 ${
                hoveredCard === "retailer" ? "opacity-100" : ""
              }`}
            ></div>

            {/* Card */}
            <div
              className={`relative rounded-3xl shadow-2xl border-2 transition-all duration-500 overflow-hidden ${
                isDark ? "bg-slate-800" : "bg-white"
              } ${
                hoveredCard === "retailer"
                  ? isDark
                    ? "border-emerald-400 scale-105"
                    : "border-emerald-500 scale-105"
                  : isDark
                    ? "border-gray-700"
                    : "border-gray-200"
              }`}
            >
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 p-8">
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-4xl">👤</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    Become a Retailer
                  </h3>

                  <p className="text-emerald-100">
                    Start your fintech journey today
                  </p>
                </div>

                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">Most Popular</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="grid gap-6">
                  {retailerBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 group/benefit"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover/benefit:scale-110 transition-transform ${
                          isDark
                            ? "bg-gradient-to-br from-emerald-900/30 to-emerald-800/30"
                            : "bg-gradient-to-br from-emerald-100 to-emerald-50"
                        }`}
                      >
                        {benefit.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4
                            className={`text-lg font-semibold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {benefit.title}
                          </h4>

                          <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                              isDark
                                ? "bg-emerald-900/30 text-emerald-400"
                                : "bg-emerald-100 text-emerald-600"
                            }`}
                          >
                            {benefit.highlight}
                          </span>
                        </div>

                        <p
                          className={`${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div
                  className={`mt-8 grid grid-cols-3 gap-4 p-4 rounded-2xl ${
                    isDark ? "bg-slate-700/50" : "bg-gray-50"
                  }`}
                >
                  {stats.retailer.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p
                        className={`text-xl font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stat.value}
                      </p>

                      <p
                        className={`text-xs ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <button className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-0.5">
                    <div className="relative flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-white transition-all duration-300 group-hover:scale-105">
                      <span className="font-semibold text-lg">
                        Join as Retailer
                      </span>
                      <span className="text-xl transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                      <div className="absolute inset-0 transition-opacity"></div>
                    </div>
                  </button>

                  <p
                    className={`text-center mt-3 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    ✨ Zero setup fee • Instant activation • No hidden charges
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Distributor Side */}
          <div
            className={`relative group ${activeTab === "distributor" ? "block" : "hidden lg:block"}`}
            ref={(el) => (cardsRef.current[1] = el)}
            onMouseEnter={() => setHoveredCard("distributor")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-3xl blur-3xl transition-opacity duration-500 ${
                hoveredCard === "distributor" ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            <div
              className={`relative rounded-3xl shadow-2xl border-2 transition-all duration-500 overflow-hidden ${
                isDark ? "bg-slate-800" : "bg-white"
              } ${
                hoveredCard === "distributor"
                  ? isDark
                    ? "border-indigo-400 scale-105"
                    : "border-indigo-500 scale-105"
                  : isDark
                    ? "border-gray-700"
                    : "border-gray-200"
              }`}
            >
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 p-8">
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-4xl">🤝</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    Become a Distributor
                  </h3>

                  <p className="text-indigo-100">
                    Build and manage your network
                  </p>
                </div>

                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">Enterprise</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="grid gap-6">
                  {distributorBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 group/benefit"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover/benefit:scale-110 transition-transform ${
                          isDark
                            ? "bg-gradient-to-br from-indigo-900/30 to-indigo-800/30"
                            : "bg-gradient-to-br from-indigo-100 to-indigo-50"
                        }`}
                      >
                        {benefit.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4
                            className={`text-lg font-semibold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {benefit.title}
                          </h4>

                          <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                              isDark
                                ? "bg-indigo-900/30 text-indigo-400"
                                : "bg-indigo-100 text-indigo-600"
                            }`}
                          >
                            {benefit.highlight}
                          </span>
                        </div>

                        <p
                          className={`${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div
                  className={`mt-8 grid grid-cols-3 gap-4 p-4 rounded-2xl ${
                    isDark ? "bg-slate-700/50" : "bg-gray-50"
                  }`}
                >
                  {stats.distributor.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p
                        className={`text-xl font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stat.value}
                      </p>

                      <p
                        className={`text-xs ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <button className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 p-0.5">
                    <div className="relative flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 py-4 text-white transition-all duration-300 group-hover:scale-105">
                      <span className="font-semibold text-lg">
                        Become Distributor
                      </span>
                      <span className="text-xl transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                      <div className="absolute inset-0 transition-opacity"></div>
                    </div>
                  </button>

                  <p
                    className={`text-center mt-3 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    🚀 Priority support • Custom solutions • Higher commissions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-slate-950 dark:to-slate-900 p-8">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <p className="text-white font-semibold">Quickest Growth</p>
              <p className="text-gray-400 text-sm mt-1">
                Average 156% revenue increase in 6 months
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💎</div>
              <p className="text-white font-semibold">Premium Benefits</p>
              <p className="text-gray-400 text-sm mt-1">
                Exclusive rewards and recognition programs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🤝</div>
              <p className="text-white font-semibold">Dedicated Support</p>
              <p className="text-gray-400 text-sm mt-1">
                24/7 priority assistance for all partners
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories Teaser */}
        <div className="mt-16 text-center">
          <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Trusted by India's fastest growing fintech entrepreneurs
          </p>

          <div className="flex justify-center -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-600 border-2 ${
                  isDark ? "border-slate-900" : "border-white"
                }`}
              />
            ))}

            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                isDark
                  ? "bg-slate-700 border-slate-900"
                  : "bg-gray-200 border-white"
              }`}
            >
              <span
                className={`text-xs font-semibold ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                2k+
              </span>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-emerald-500">✓</span> No lock-in period
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-emerald-500">✓</span> Withdraw earnings
            anytime
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-emerald-500">✓</span> Zero penalty for exit
          </div>
        </div>
      </div>
    </section>
  );
}
