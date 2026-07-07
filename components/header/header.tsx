import React from "react";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import SignInButton from "../Buttons/SignInButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-15 max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-black/10 px-10 text-white backdrop-blur-xl backdrop-saturate-150">
        <Link href="/landing" className="flex items-center gap-3">
          <span className="text-2xl font-semibold tracking-tight text-white">
            S
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex cursor-pointer">
          <Link
            href="https://github.com/Gavinduachintha"
            className="rounded px-4 py-2 text-sm font-medium text-white/80 transition  hover:text-white"
          >
            <LuGithub className="h-5 w-5 hover:text-white" />
          </Link>
          <Link
            href="/landing"
            className="rounded px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>
          <a
            href="#about"
            className="rounded px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            About
          </a>
          <Link href="/login">
            <SignInButton />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
