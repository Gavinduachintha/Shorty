"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LuGithub, LuMenu, LuX } from "react-icons/lu";
import SignInButton from "@/components/buttons/SignInButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchStars = async () => {
      const response = await fetch("/api/github/stars");
      const data = await response.json();
      setStars(data.stars ?? 0);
    };
    fetchStars();
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-black/20 px-4 text-white backdrop-blur-xl backdrop-saturate-150 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Shorty
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-2 md:flex"
        >
          <Link
            href="https://github.com/Gavinduachintha"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <LuGithub className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="font-mono tabular-nums">{stars}</span>
          </Link>

          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            About
          </Link>

          {/* SignInButton is itself a <Link> — no wrapper needed */}
          <SignInButton />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <LuX className="h-6 w-6" />
          ) : (
            <LuMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col p-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              About
            </Link>

            <Link
              href="https://github.com/Gavinduachintha"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <LuGithub className="h-5 w-5" />
              GitHub
            </Link>

            <div
              className="mt-3 border-t border-white/10 pt-3"
              onClick={() => setIsOpen(false)}
            >
              <SignInButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
