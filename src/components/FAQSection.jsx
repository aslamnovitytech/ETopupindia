"use client";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    id: 1,
    category: "Getting Started",
    question: "How do I add money to my wallet?",
    answer:
      "Adding money is simple! You can add funds via UPI, Net Banking, Debit/Credit Card, or even cash deposit at any partner bank. Minimum add amount is ₹100 and maximum is ₹2,00,000 per transaction. Funds reflect instantly in your wallet.",
    icon: "💰",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    category: "Wallet",
    question: "What is the minimum wallet balance required?",
    answer:
      "There is no minimum balance requirement! You can keep your wallet at ₹0 when not in use. However, for seamless transactions, we recommend maintaining at least ₹500 for retail customers and ₹2,000 for business partners.",
    icon: "⚖️",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    category: "Transactions",
    question: "How fast is Domestic Money Transfer (DMR)?",
    answer:
      "DMR transactions are processed in real-time! Most transfers complete within 30 seconds. For IMPS transactions, it's instant 24x7. NEFT transfers are batched but we guarantee completion within 30 minutes during banking hours.",
    icon: "⚡",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    category: "Verification",
    question: "Is KYC required? What documents do I need?",
    answer:
      "Yes, KYC is mandatory as per RBI guidelines. For retailers, we need Aadhaar, PAN card, and a passport-size photo. The process is fully digital and takes just 5 minutes. Your data is encrypted and securely stored.",
    icon: "🆔",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    category: "Security",
    question: "How secure is my money in the wallet?",
    answer:
      "Your money is 100% safe! We use bank-grade 256-bit encryption, PCI DSS compliant systems, and all funds are held in escrow accounts with partner banks. We're also RBI regulated and insured up to ₹1,00,000 per customer.",
    icon: "🔒",
    gradient: "from-red-500 to-rose-500",
  },
  {
    id: 6,
    category: "Earnings",
    question: "When and how do I get my commission?",
    answer:
      "Commissions are credited instantly to your wallet for every transaction! You can withdraw earnings anytime to your bank account. Settlements happen in real-time, with no minimum withdrawal limit.",
    icon: "💸",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 7,
    category: "Services",
    question: "What services can I offer as a retailer?",
    answer:
      "As a retailer, you can offer all services: Mobile Recharge, DTH, Money Transfer, Bill Payments, AEPS, and Voucher Services. We add new services regularly. Everything is available through a single dashboard.",
    icon: "📱",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 8,
    category: "Technical",
    question: "What if there's a transaction failure?",
    answer:
      "In case of failure, money is automatically refunded within 2-4 hours. For instant help, our 24x7 support team is available via call, WhatsApp, or chat. Failed transaction rate is less than 0.1%.",
    icon: "🛠️",
    gradient: "from-slate-500 to-gray-500",
  },
];

const categories = [
  "All",
  "Getting Started",
  "Wallet",
  "Transactions",
  "Verification",
  "Security",
  "Earnings",
  "Services",
  "Technical",
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);
  const searchInputRef = useRef(null);
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

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularSearches = [
    "Add money",
    "KYC",
    "Commission",
    "Wallet balance",
    "Refund",
  ];
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <section
      ref={sectionRef}
      className={`relative py-32 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-800 to-slate-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
      id="FAQ"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-40 left-20 w-72 h-72 rounded-full filter blur-3xl opacity-20 ${
            isDark
              ? "bg-emerald-500/10 mix-blend-soft-light"
              : "bg-emerald-200 mix-blend-multiply"
          }`}
        ></div>

        <div
          className={`absolute bottom-40 right-20 w-72 h-72 rounded-full filter blur-3xl opacity-20 ${
            isDark
              ? "bg-indigo-500/10 mix-blend-soft-light"
              : "bg-indigo-200 mix-blend-multiply"
          }`}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-slide-up">
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
              ❓ Got Questions? We've Got Answers
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked{" "}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-emerald-400 to-indigo-400"
                  : "from-emerald-600 to-indigo-600"
              }`}
            >
              Questions
            </span>
          </h2>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Everything you need to know about starting and growing with us
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 animate-slide-up animation-delay-200">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative flex items-center">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search your question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-6 py-4 border-2 rounded-2xl outline-none transition-all pr-12 ${
                  isDark
                    ? "bg-slate-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-400"
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500"
                }`}
              />

              <div className="absolute right-4">
                <svg
                  className={`w-6 h-6 ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up animation-delay-300">
          <span
            className={`text-sm py-2 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Popular:
          </span>

          {popularSearches.map((term, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(term)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                isDark
                  ? "bg-slate-800 text-gray-300 border-gray-700 hover:border-emerald-400 hover:text-emerald-400"
                  : "bg-white text-gray-700 border-gray-200 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {term}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up animation-delay-400">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-lg scale-105"
                  : isDark
                    ? "bg-slate-800 text-gray-300 hover:bg-slate-700 border border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative rounded-2xl border hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isDark
                    ? "bg-slate-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute bg-gradient-to-r ${faq.gradient} group-hover:opacity-10 transition-opacity`}
                ></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${faq.gradient} text-white text-xs font-medium rounded-full`}
                  >
                    {faq.category}
                  </span>
                </div>

                {/* Question Section */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-6 pr-16"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      {faq.icon}
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold pr-8 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </h3>

                      {/* Answer */}
                      {openItems.includes(faq.id) && (
                        <div
                          className={`mt-4 leading-relaxed animate-slide-up ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </div>
                </button>

                {/* Expand / Collapse Indicator */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className={`absolute right-4 top-15 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isDark ? "bg-slate-700" : "bg-gray-100"
                  } ${openItems.includes(faq.id) ? "rotate-180" : ""}`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Most Asked Badge */}
                {faq.id === 1 && (
                  <div className="absolute -top-2 -left-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-full blur-md"></div>

                      <div
                        className={`relative px-3 py-1 rounded-full text-xs font-semibold border-2 border-emerald-500 ${
                          isDark
                            ? "bg-slate-800 text-emerald-400"
                            : "bg-white text-emerald-600"
                        }`}
                      >
                        Most Asked ✨
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Found */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>

            <h3
              className={`text-2xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              No questions found
            </h3>

            <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Try searching with different keywords
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Still Have Questions Banner */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            {
              icon: "📧",
              label: "Email Support",
              value: "support@etopupindia.com",
              action: "Copy Email",
            },
            {
              icon: "📱",
              label: "WhatsApp",
              value: "+91 98765 43210",
              action: "Message Us",
            },
            {
              icon: "🕒",
              label: "Response Time",
              value: "Average 2 minutes",
              action: "24x7 Available",
            },
            {
              icon: "📚",
              label: "Documentation",
              value: "Detailed Guides",
              action: "View Docs",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-4 backdrop-blur-sm rounded-2xl border text-center transition-all group ${
                isDark
                  ? "bg-slate-800/50 border-gray-700/30 hover:bg-slate-800"
                  : "bg-white/50 border-gray-200/30 hover:bg-white"
              }`}
            >
              <div className="text-2xl mb-2">{item.icon}</div>

              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                {item.label}
              </p>

              <p
                className={`font-semibold text-sm mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.value}
              </p>

              <button
                className={`text-xs font-medium group-hover:gap-1 transition-all inline-flex items-center gap-0.5 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                {item.action} <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Quick Contact Options */}
        <div
          className={`mt-12 flex flex-wrap justify-center items-center gap-8 text-sm ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> RBI Regulated
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> 256-bit Encryption
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> ISO Certified
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> 10M+ Happy Users
          </div>
        </div>
      </div>
    </section>
  );
}
