"use client";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";

const transactions = [
  {
    id: 1,
    service: "Mobile Recharge",
    amount: "₹399",
    time: "2 min ago",
    icon: "📱",
    status: "success",
    color: "emerald",
  },
  {
    id: 2,
    service: "DTH Payment",
    amount: "₹599",
    time: "15 min ago",
    icon: "📺",
    status: "success",
    color: "indigo",
  },
  {
    id: 3,
    service: "Money Transfer",
    amount: "₹2,500",
    time: "1 hour ago",
    icon: "💸",
    status: "success",
    color: "blue",
  },
  {
    id: 4,
    service: "Electricity Bill",
    amount: "₹1,200",
    time: "3 hours ago",
    icon: "⚡",
    status: "success",
    color: "amber",
  },
];

export default function OneWalletSection() {
  const [walletBalance, setWalletBalance] = useState(12500);
  const [selectedService, setSelectedService] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDeduction, setShowDeduction] = useState(false);
  const [deductionAmount, setDeductionAmount] = useState(0);
  const sectionRef = useRef(null);
  const walletRef = useRef(null);
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
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (walletRef.current) observer.observe(walletRef.current);

    return () => observer.disconnect();
  }, []);

  const simulateTransaction = (service) => {
    if (isAnimating) return;

    setSelectedService(service);
    setIsAnimating(true);
    setShowDeduction(true);

    // Random amount between 100 and 1000
    const amount = Math.floor(Math.random() * 900) + 100;
    setDeductionAmount(amount);

    // Animate balance deduction
    setTimeout(() => {
      setWalletBalance((prev) => prev - amount);
    }, 500);

    // Reset animation
    setTimeout(() => {
      setShowDeduction(false);
      setIsAnimating(false);
      setSelectedService(null);
    }, 2000);
  };

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section
      ref={sectionRef}
      className={`relative py-32 bg-gradient-to-b overflow-hidden ${
        isDark ? "from-slate-800 to-slate-900" : "from-gray-50 to-white"
      }`}
      id="add-money"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full filter blur-3xl opacity-30 animate-float ${
            isDark
              ? "bg-emerald-500/10 mix-blend-soft-light"
              : "bg-emerald-200 mix-blend-multiply"
          }`}
        ></div>

        <div
          className={`absolute bottom-20 right-10 w-72 h-72 rounded-full filter blur-3xl opacity-30 animate-float animation-delay-2000 ${
            isDark
              ? "bg-indigo-500/10 mix-blend-soft-light"
              : "bg-indigo-200 mix-blend-multiply"
          }`}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <div
            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r backdrop-blur-sm rounded-full border ${
              isDark
                ? "from-emerald-500/20 to-indigo-500/20 border-emerald-400/20"
                : "from-emerald-500/10 to-indigo-500/10 border-emerald-200/20"
            }`}
          >
            <span
              className={`text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-emerald-400 to-indigo-400"
                  : "from-emerald-600 to-indigo-600"
              }`}
            >
              💡 One Wallet Philosophy
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Add Money{" "}
            <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>
              Once.
            </span>
            <br />
            Use It{" "}
            <span className={isDark ? "text-indigo-400" : "text-indigo-600"}>
              Everywhere.
            </span>
          </h2>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            No more juggling between multiple wallets. One balance. All
            services. Zero confusion.
          </p>
        </div>

        {/* Main Visual Explainer */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Wallet & Flow Diagram */}
          <div ref={walletRef} className="space-y-8">
            {/* Wallet Card */}
            <div className="relative">
              {/* Connection Lines SVG */}
              <svg
                className="absolute -right-20 top-1/2 w-24 h-24 hidden lg:block"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,50 L70,50"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;20"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>

              <div
                className={`rounded-3xl shadow-2xl border p-6 transform hover:scale-105 transition-all duration-500 ${
                  isDark
                    ? "bg-slate-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>

                    <div>
                      <p
                        className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                      >
                        Main Wallet
                      </p>

                      <p
                        className={`text-3xl font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ₹{walletBalance.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full ${
                      isDark ? "bg-emerald-900/30" : "bg-emerald-100"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    >
                      Active
                    </span>
                  </div>
                </div>

                {/* Add Money Button */}
                <button
                  onClick={() => {
                    setWalletBalance((prev) => prev + 5000);
                    setShowDeduction(true);
                    setTimeout(() => setShowDeduction(false), 1500);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>+ Add Money</span>
                  <span className="text-xl group-hover:translate-y-[-2px] transition-transform">
                    ↑
                  </span>
                </button>

                {/* Real-time Deduction Animation */}
                {showDeduction && (
                  <div className="absolute -top-4 right-4 animate-bounce">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {deductionAmount > 0 ? `-₹${deductionAmount}` : "+₹5,000"}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Flow Arrow (Mobile) */}
            <div className="flex justify-center lg:hidden">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-xl">↓</span>
              </div>
            </div>

            {/* Services Grid - Visual Representation */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "📱",
                  label: "Mobile",
                  color: "emerald",
                  bgLight: "bg-emerald-100",
                  bgDark: "bg-emerald-900/20",
                },
                {
                  icon: "📺",
                  label: "DTH",
                  color: "indigo",
                  bgLight: "bg-indigo-100",
                  bgDark: "bg-indigo-900/20",
                },
                {
                  icon: "💸",
                  label: "Transfer",
                  color: "blue",
                  bgLight: "bg-blue-100",
                  bgDark: "bg-blue-900/20",
                },
                {
                  icon: "🧾",
                  label: "Bills",
                  color: "amber",
                  bgLight: "bg-amber-100",
                  bgDark: "bg-amber-900/20",
                },
                {
                  icon: "🏦",
                  label: "AEPS",
                  color: "purple",
                  bgLight: "bg-purple-100",
                  bgDark: "bg-purple-900/20",
                },
                {
                  icon: "🎟️",
                  label: "Vouchers",
                  color: "rose",
                  bgLight: "bg-rose-100",
                  bgDark: "bg-rose-900/20",
                },
              ].map((service, index) => (
                <button
                  key={index}
                  onClick={() => simulateTransaction(service)}
                  disabled={isAnimating}
                  className={`p-4 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark ? service.bgDark : service.bgLight
                  } ${isDark ? "border-gray-700" : "border-gray-200"} ${
                    selectedService?.label === service.label
                      ? "ring-2 ring-emerald-500 scale-105"
                      : ""
                  } ${
                    isAnimating
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }`}
                >
                  <div className="text-3xl mb-2">{service.icon}</div>

                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {service.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Key Benefits Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "No Multiple Wallets",
                "No Switching",
                "Real-time Deduction",
                "Full Logs",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-full border shadow-sm ${
                    isDark
                      ? "bg-slate-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    ✓ {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Transaction Logs & Live Demo */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Live Demo Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>

              <span
                className={`text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Live Transaction Logs
              </span>
            </div>

            {/* Transaction Logs Card */}
            <div
              className={`rounded-3xl shadow-2xl border overflow-hidden ${
                isDark
                  ? "bg-slate-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Header */}
              <div
                className={`p-6 border-b ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Recent Transactions
                  </h3>

                  <span
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Real-time updates
                  </span>
                </div>
              </div>

              {/* Transaction List */}
              <div
                className={`divide-y ${
                  isDark ? "divide-gray-700" : "divide-gray-200"
                }`}
              >
                {transactions.map((tx, index) => {
                  const colorMap = {
                    emerald: {
                      light: "bg-emerald-100",
                      dark: "bg-emerald-900/20",
                    },
                    indigo: {
                      light: "bg-indigo-100",
                      dark: "bg-indigo-900/20",
                    },
                    blue: {
                      light: "bg-blue-100",
                      dark: "bg-blue-900/20",
                    },
                    amber: {
                      light: "bg-amber-100",
                      dark: "bg-amber-900/20",
                    },
                    purple: {
                      light: "bg-purple-100",
                      dark: "bg-purple-900/20",
                    },
                    rose: {
                      light: "bg-rose-100",
                      dark: "bg-rose-900/20",
                    },
                  };

                  return (
                    <div
                      key={tx.id}
                      className={`p-4 transition-colors group ${
                        isDark ? "hover:bg-slate-700/50" : "hover:bg-gray-50"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
                              isDark
                                ? colorMap[tx.color]?.dark
                                : colorMap[tx.color]?.light
                            }`}
                          >
                            {tx.icon}
                          </div>

                          <div>
                            <p
                              className={`font-medium ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {tx.service}
                            </p>

                            <p
                              className={`text-xs ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {tx.time}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p
                            className={`font-semibold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {tx.amount}
                          </p>

                          <p
                            className={`text-xs ${
                              isDark ? "text-emerald-400" : "text-emerald-600"
                            }`}
                          >
                            Deducted
                          </p>
                        </div>
                      </div>

                      {/* Progress bar */}
                      {index === 0 && (
                        <div
                          className={`mt-2 h-1 rounded-full overflow-hidden ${
                            isDark ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-full animate-progress"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div
                className={`p-4 text-center ${
                  isDark ? "bg-slate-700/50" : "bg-gray-50"
                }`}
              >
                <button
                  className={`text-sm font-medium transition-all inline-flex items-center gap-1 ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  View Full Transaction History
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "0", label: "Multiple Wallets" },
                { value: "1", label: "Simple Wallet" },
                { value: "6+", label: "Services" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 backdrop-blur-sm rounded-2xl border ${
                    isDark
                      ? "bg-slate-800/60 border-gray-700/30"
                      : "bg-white/60 border-gray-200/30"
                  }`}
                >
                  <p
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.value}
                  </p>

                  <p
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works - Step Cards */}
        <div className="mt-20 grid md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Add Money Once",
              desc: "Deposit funds to your main wallet",
              icon: "💰",
            },
            {
              step: "02",
              title: "Choose Service",
              desc: "Pick any service you need",
              icon: "🎯",
            },
            {
              step: "03",
              title: "Real-time Deduction",
              desc: "Amount deducted instantly",
              icon: "⚡",
            },
            {
              step: "04",
              title: "Track Everything",
              desc: "Complete transaction logs",
              icon: "📊",
            },
          ].map((item, index) => (
            <div key={index} className="relative group">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-2xl group-hover:opacity-10 transition-opacity"></div>

              <div
                className={`relative p-6 backdrop-blur-sm rounded-2xl border ${
                  isDark
                    ? "bg-slate-800/50 border-gray-700/30"
                    : "bg-white/50 border-gray-200/30"
                }`}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>

                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {item.step}
                </span>

                <h4
                  className={`text-lg font-semibold mt-1 mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h4>

                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>

              {/* Connector Arrow (except last) */}
              {index < 3 && (
                <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                  <div
                    className={`w-8 h-8 rounded-full shadow-lg flex items-center justify-center ${
                      isDark ? "bg-slate-700" : "bg-white"
                    }`}
                  >
                    <span
                      className={`${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl">
            <span className="text-2xl">🔒</span>

            <span className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Your money is always safe with us •
            </span>

            <span
              className={`font-semibold ${
                isDark ? "text-emerald-400" : "text-emerald-600"
              }`}
            >
              RBI Approved
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
