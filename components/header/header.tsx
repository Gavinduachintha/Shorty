"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuGithub, LuMenu, LuX } from "react-icons/lu";
import SignInButton from "@/components/buttons/SignInButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch("/api/github/stars");
        const data = await response.json();
        setStars(data.stars ?? 0);
      } catch {
        setStars(0);
      }
    };
    fetchStars();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
<header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-4 text-white backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 sm:h-16 sm:px-6 lg:px-8 ${
          scrolled
            ? "border-white/20 bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "border-white/10 bg-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white transition-opacity hover:opacity-80 sm:text-2xl"
        >
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Shorty
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-1 md:flex"
        >
          <Link
            href="https://github.com/Gavinduachintha"
            target="_blank"
            rel="noopener noreferrer"
            className="group mr-1 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <LuGithub className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
            <span className="font-mono tabular-nums">
              {stars === null ? (
                <span className="inline-block h-3 w-4 animate-pulse rounded bg-white/20" />
              ) : (
                stars.toLocaleString()
              )}
            </span>
          </Link>

          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-white/80" />
                )}
              </Link>
            );
          })}

          <div className="ml-1">
            <SignInButton />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-lg p-2 text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="relative block h-6 w-6">
            <LuMenu
              className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <LuX
              className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mx-auto max-w-6xl overflow-hidden transition-all duration-300 ease-out md:hidden ${
          isOpen ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="rounded-2xl border border-white/15 bg-black/60 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
          }}
        >
          <nav className="flex flex-col gap-1 p-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="https://github.com/Gavinduachintha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <LuGithub className="h-5 w-5" />
              GitHub
              <span className="ml-auto font-mono text-xs text-white/50">
                {stars === null ? "…" : `★ ${stars.toLocaleString()}`}
              </span>
            </Link>

            <div className="mt-2 border-t border-white/10 pt-3 px-1">
              <SignInButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;