"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Why", href: "#why" },
  { label: "How", href: "#how" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[4000] bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
            <Link href="#" className="font-black tracking-tight text-slate-900">Clockworq.ai</Link>

            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex">
              <a href="#cta" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                Get Started
              </a>
            </div>

            <button
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
            </button>
          </div>

          {open && (
            <div className="border-t border-slate-200 px-4 py-3 md:hidden bg-white">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800">
                  Get Started
                </a>
              </nav>
            </div>
          )}
      </div>
    </header>
  );
}

