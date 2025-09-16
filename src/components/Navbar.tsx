"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { 
    label: "Why", 
    href: "#why",
    dropdown: [
      { label: "Problem We Solve", href: "#why", key: "why-problem" },
      { label: "Our Approach", href: "#why", key: "why-approach" },
      { label: "Success Stories", href: "#why", key: "why-stories" }
    ]
  },
  { 
    label: "How", 
    href: "#how",
    dropdown: [
      { label: "Our Process", href: "#how", key: "how-process" },
      { label: "Technology Stack", href: "#how", key: "how-tech" },
      { label: "Integration", href: "#how", key: "how-integration" }
    ]
  },
  { 
    label: "Use cases", 
    href: "#use-cases",
    dropdown: [
      { label: "Marketing Automation", href: "#use-cases", key: "use-marketing" },
      { label: "Customer Support", href: "#use-cases", key: "use-support" },
      { label: "Data Processing", href: "#use-cases", key: "use-data" },
      { label: "Workflow Management", href: "#use-cases", key: "use-workflow" }
    ]
  },
  { 
    label: "Pricing", 
    href: "#pricing",
    dropdown: [
      { label: "Starter Plan", href: "#pricing", key: "price-starter" },
      { label: "Professional", href: "#pricing", key: "price-professional" },
      { label: "Enterprise", href: "#pricing", key: "price-enterprise" },
      { label: "Custom Solutions", href: "#pricing", key: "price-custom" }
    ]
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-[4000] transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg" 
          : "bg-white/90 backdrop-blur-sm border-b border-slate-200/30"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with clockwork animation */}
          <Link href="#" className="group flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-700 group-hover:text-slate-900 transition-colors">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="6" fill="currentColor"/>
                  <path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50" stroke="currentColor" strokeWidth="2"/>
                  <path d="M30 30 L35 35 M65 30 L60 35 M30 70 L35 65 M65 70 L60 65" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-8 h-8"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-500 group-hover:text-slate-700 transition-colors">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M50 20 L50 30 M50 70 L50 80 M20 50 L30 50 M70 50 L80 50" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </motion.div>
            </motion.div>
            <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
              Clockworq.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.svg
                    className="ml-1 h-4 w-4 text-slate-500 group-hover:text-slate-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-slate-900 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-xl z-50"
                    >
                      <div className="p-2">
                        {item.dropdown?.map((dropdownItem, dropdownIndex) => (
                          <motion.a
                            key={dropdownItem.key || dropdownItem.href}
                            href={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                            className="group relative flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-200"
                          >
                            <span className="relative z-10">{dropdownItem.label}</span>
                            <motion.div
                              className="absolute inset-0 rounded-xl bg-slate-100"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                            <motion.div
                              className="absolute right-4 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-slate-600"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex"
          >
            <a 
              href="#cta" 
              className="group relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            aria-label="Toggle menu"
            className="group relative inline-flex items-center justify-center rounded-xl p-3 text-slate-700 hover:bg-slate-100 md:hidden transition-colors duration-300"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-6 h-6"
            >
              <motion.span
                className="absolute top-1 left-0 w-6 h-0.5 bg-slate-700 group-hover:bg-slate-900 transition-colors"
                animate={{ 
                  rotate: open ? 45 : 0,
                  y: open ? 0 : -6
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute top-3 left-0 w-6 h-0.5 bg-slate-700 group-hover:bg-slate-900 transition-colors"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute top-5 left-0 w-6 h-0.5 bg-slate-700 group-hover:bg-slate-900 transition-colors"
                animate={{ 
                  rotate: open ? -45 : 0,
                  y: open ? 0 : 6
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-slate-200/50 px-4 py-4 md:hidden bg-white/95 backdrop-blur-md"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <div key={item.href}>
                    <motion.a
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.label ? null : item.label);
                        } else {
                          setOpen(false);
                        }
                      }}
                      className="group relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors duration-300"
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.dropdown && (
                        <motion.svg
                          className="h-4 w-4 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-slate-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.a>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: activeDropdown === item.label ? "auto" : 0,
                          opacity: activeDropdown === item.label ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <motion.a
                              key={dropdownItem.key || dropdownItem.href}
                              href={dropdownItem.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                              onClick={() => setOpen(false)}
                              className="group relative flex items-center rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
                            >
                              <span className="relative z-10">{dropdownItem.label}</span>
                              <motion.div
                                className="absolute inset-0 rounded-lg bg-slate-50"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                              />
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
                <motion.a
                  href="#cta"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  onClick={() => setOpen(false)}
                  className="group relative overflow-hidden rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-bold text-white hover:bg-slate-800 transition-colors duration-300 mt-2"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

