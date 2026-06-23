"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import AppLogo from "@/components/common/AppLogo";

// Nav items
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isLightTheme = pathname === "/services" || pathname === "/contact";

  return (
    <header className="fixed top-0 z-100 w-full">
      <div
        className={cn(
          "h-18 px-10 md:px-20 lg:px-40 flex items-center justify-between",
          scrolled || isLightTheme
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white",
        )}
      >
        {/* App logo */}
        <AppLogo className="text-lg" />

        <nav
          className="hidden md:flex gap-10 relative right-5"
          aria-label="Main"
        >
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative py-2 text-sm font-medium",
                  // !active && "text-muted-foreground ",
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-px rounded-full",
                      isLightTheme || scrolled ? "bg-black" : "bg-white",
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              "px-4 py-2 text-sm border rounded-full",
              "border-border hover:bg-white/10",
              (scrolled || isLightTheme) && "hover:bg-muted",
            )}
          >
            Let's Talk
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="p-2 inline-flex md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* In phone screen */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-4 pb-6 px-5 border-t flex md:hidden flex-col gap-1 bg-white"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-3 text-base font-semibold"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-3 btn btn-primary">
            Let's Talk
          </Link>
        </motion.nav>
      )}
    </header>
  );
}
