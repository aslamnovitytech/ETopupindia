"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    icon: "📱",
    title: "Mobile Recharge",
    benefit: "Instant prepaid & postpaid recharge for all operators",
    gradient: "from-emerald-400 to-teal-500",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-900/20",
    borderLight: "border-emerald-200",
    borderDark: "dark:border-emerald-800",
    textColor: "text-emerald-600 dark:text-emerald-400",
    stats: "2M+ recharges/month",
  },
  {
    id: 2,
    icon: "📺",
    title: "DTH Recharge",
    benefit: "Tata Play, Airtel, Dish TV & more - zero convenience fee",
    gradient: "from-indigo-400 to-purple-500",
    bgLight: "bg-indigo-50",
    bgDark: "dark:bg-indigo-900/20",
    borderLight: "border-indigo-200",
    borderDark: "dark:border-indigo-800",
    textColor: "text-indigo-600 dark:text-indigo-400",
    stats: "98% instant activation",
  },
  {
    id: 3,
    icon: "💸",
    title: "Domestic Money Transfer",
    benefit: "Send money to any bank account instantly, 24x7",
    gradient: "from-blue-400 to-cyan-500",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-900/20",
    borderLight: "border-blue-200",
    borderDark: "dark:border-blue-800",
    textColor: "text-blue-600 dark:text-blue-400",
    stats: "₹0 transaction fee",
  },
  {
    id: 4,
    icon: "🧾",
    title: "Bill Payments",
    benefit: "Electricity, water, gas, broadband - all bills in one place",
    gradient: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-900/20",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    textColor: "text-amber-600 dark:text-amber-400",
    stats: "100+ billers onboard",
  },
  {
    id: 5,
    icon: "🏦",
    title: "AEPS Services",
    benefit: "Cash withdrawal, balance enquiry & Aadhaar pay at your store",
    gradient: "from-purple-400 to-pink-500",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-900/20",
    borderLight: "border-purple-200",
    borderDark: "dark:border-purple-800",
    textColor: "text-purple-600 dark:text-purple-400",
    stats: "10,000+ daily transactions",
  },
  {
    id: 6,
    icon: "🎟️",
    title: "Voucher Services",
    benefit: "Google Play, Amazon, Netflix, and 50+ gift cards",
    gradient: "from-rose-400 to-red-500",
    bgLight: "bg-rose-50",
    bgDark: "dark:bg-rose-900/20",
    borderLight: "border-rose-200",
    borderDark: "dark:border-rose-800",
    textColor: "text-rose-600 dark:text-rose-400",
    stats: "Instant delivery",
  },
];

export default function ServicesSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
      { threshold: 0.1, rootMargin: "0px" },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section
      ref={sectionRef}
      className={`relative py-32 bg-gradient-to-b overflow-hidden ${
        isDark ? "from-slate-900 to-slate-800" : "from-white to-gray-50"
      }`}
      id="solutions"
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 ${isDark ? "opacity-10" : "opacity-5"}`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
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
              ✨ Services We Offer
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Everything Your{" "}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-emerald-400 to-indigo-400"
                  : "from-emerald-600 to-indigo-600"
              }`}
            >
              Customers Need
            </span>
          </h2>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            One platform. All essential financial services. Zero complexity for
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group"
            >
              <div
                className={`relative p-8 backdrop-blur-sm rounded-3xl border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  isDark ? service.bgDark : service.bgLight
                } ${isDark ? service.borderDark : service.borderLight}`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3
                    className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mb-4 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {service.benefit}
                  </p>

                  {/* Stats Badge */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      isDark ? service.bgDark : service.bgLight
                    } ${service.textColor}`}
                  >
                    {service.stats}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    <span
                      className={`text-sm font-semibold ${service.textColor}`}
                    >
                      Start Now
                    </span>
                    <span
                      className={`text-lg ${service.textColor} transform group-hover:translate-x-1 transition-transform`}
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${service.gradient} opacity-0 group-hover:opacity-10 rounded-tl-3xl rounded-br-3xl transition-opacity duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Trust Banner */}
        <div className="mt-20 text-center">
          <div
            className={`inline-flex flex-wrap items-center justify-center gap-8 p-6 backdrop-blur-md rounded-3xl border ${
              isDark
                ? "bg-slate-800/50 border-gray-700/30"
                : "bg-white/50 border-gray-200/30"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                RBI Regulated
              </span>
            </div>

            <div
              className={`w-px h-8 ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                Bank Grade Security
              </span>
            </div>

            <div
              className={`w-px h-8 ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                99.9% Uptime
              </span>
            </div>

            <div
              className={`w-px h-8 hidden lg:block ${
                isDark ? "bg-gray-700" : "bg-gray-300"
              }`}
            ></div>

            <div className="flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                24/7 Support
              </span>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Mini Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💰",
              title: "Zero Investment",
              desc: "Start your fintech journey with ₹0 upfront cost",
            },
            {
              icon: "📈",
              title: "High Commissions",
              desc: "Earn up to 2% on every transaction",
            },
            {
              icon: "🚀",
              title: "Instant Settlements",
              desc: "Get your earnings settled directly in bank account",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                isDark ? "hover:bg-slate-800/50" : "hover:bg-white/50"
              }`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>

              <h4
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h4>

              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-indigo-600 p-12 text-center">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:50px_50px]"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Fintech Journey?
            </h3>
            <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
              Join 10,000+ retailers who trust us for their daily financial
              services
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Become a Partner Today →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
