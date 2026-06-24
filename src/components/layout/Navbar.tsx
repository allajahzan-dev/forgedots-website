"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import AppLogo from "@/components/common/AppLogo";
import AppButton from "@/components/common/AppButton";

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
          "h-18 px-5 sm:px-10 md:px-20 lg:px-40 flex items-center justify-between",
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
                className={cn("relative py-2 text-sm font-medium")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              "px-4 py-2 text-sm border border-zinc-200 rounded-full",
              "border-zinc-200 hover:bg-white/10",
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

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 px-5 bg-white flex flex-col items-center justify-center md:hidden"
          >
            {/* Close Button */}
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute top-[17px] right-5 p-2 text-black transition-colors"
            >
              <X size={22} />
            </button>

            {/* Links */}
            <nav className="flex flex-col items-center gap-8 w-full px-5">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-lg font-semibold text-zinc-800 tracking-tight hover:text-black transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              {/* CTA Button */}
              <AppButton
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-10 py-3.5 bg-[#141835] hover:bg-[#0c1029] text-white text-lg font-semibold rounded-full transition-all active:scale-95"
              >
                Let's Talk
              </AppButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
