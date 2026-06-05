"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Database } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Dashboards", href: "/dashboards" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md py-4 border-b border-zinc-200 dark:border-white/5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-black shadow-md shadow-purple-500/10">
            SN
          </span>
          Sandra Nzekwe
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold tracking-wide uppercase transition-all ${
                isActive(link.href)
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-colors hover:scale-105"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-colors hover:scale-105"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <div className="h-4 w-px bg-zinc-200 dark:bg-white/10" />
          <ThemeToggle />
          <Link
            href="/admin"
            className="text-[10px] px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-all shadow-sm"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#09090b] border-b border-zinc-200 dark:border-white/5 py-6 px-6 flex flex-col gap-4 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors py-1 ${
                isActive(link.href)
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-zinc-200 dark:border-white/5 my-1" />
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="text-xs px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
            >
              Admin Console
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
