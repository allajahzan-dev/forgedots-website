"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

import AppLogo from "@/components/common/AppLogo";

// Nav items
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isLightTheme = pathname === "/services" || pathname === "/contact";
  const textColor = isLightTheme ? "text-black" : "text-white";

  return (
    <header className={cn("fixed top-0 z-100 w-full")}>
      <div
        className={cn(
          "h-18 px-10 md:px-20 lg:px-40 flex items-center justify-between",
          textColor,
          scrolled ? "bg-white text-black shadow-md" : "bg-transparent",
        )}
      >
        {/* App logo */}
        <AppLogo className="text-lg" />

        <nav
          className="hidden md:flex gap-10 relative right-8"
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
                  // !active && "text-primary-foreground/80 ",
                )}
              >
                {l.label}
                {/* {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -translate-x-1/2 bottom-0 h-px bg-background rounded-full"
                  />
                )} */}
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
