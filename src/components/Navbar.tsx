"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { label: "Why Clockworq", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative w-8 h-8 bg-black rounded-lg flex items-center justify-center text-[#38bdf8] font-bold text-xl shadow-sm border border-[#38bdf8]/20">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-black">
              clockworq.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* User Menu or Login Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center gap-4"
          >
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-surface-highlight transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-surface-highlight text-text-primary rounded-full flex items-center justify-center font-bold border border-border">
                    {user.firstName?.[0] || user.email[0].toUpperCase()}
                  </div>
                  <span className="text-text-primary text-sm font-medium">
                    {user.firstName || user.email.split('@')[0]}
                  </span>
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-56 rounded-xl bg-surface border border-border shadow-xl z-50 overflow-hidden"
                    >
                      <div className="p-2">
                        <div className="px-3 py-2 border-b border-border mb-1">
                          <div className="text-xs text-text-secondary">Signed in as</div>
                          <div className="text-sm font-medium text-text-primary truncate">{user.email}</div>
                        </div>
                        <Link
                          href="/dashboard"
                          onClick={() => setUserMenuOpen(false)}
                          className="block w-full text-left px-3 py-2 text-sm text-text-secondary hover:bg-surface-highlight hover:text-text-primary rounded-lg transition-colors"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setUserMenuOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-text-secondary hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                        >
                          Sign out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                href="https://app.clockworq.ai"
                className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Login
              </a>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-base font-medium text-text-secondary hover:bg-surface-highlight hover:text-primary rounded-lg"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-border px-4 space-y-3">
                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setOpen(false)}
                        className="block w-full text-center px-4 py-2 bg-surface-highlight text-text-primary font-medium rounded-lg"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setOpen(false);
                        }}
                        className="block w-full text-center px-4 py-2 text-text-secondary font-medium"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <a
                      href="https://app.clockworq.ai"
                      onClick={() => setOpen(false)}
                      className="block w-full text-center px-4 py-2 bg-primary text-white font-medium rounded-lg shadow-sm"
                    >
                      Login
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
