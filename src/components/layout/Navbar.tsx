"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

import LogoMark from "@/components/common/LogoMark";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn("fixed top-0 z-100 w-full transition-all duration-300")}
    >
      <div
        className={cn(
          "h-16 px-10 md:px-20 flex items-center justify-between text-primary-foreground",
          // scrolled
          //   ? "bg-background text-foreground shadow-lg"
          //   : "bg-transparent text-primary-foreground",
        )}
      >
        <Link
          href="/"
          className={cn(
            bricolageGrotesque.className,
            "flex items-center gap-2 text-lg font-bold",
          )}
        >
          <LogoMark size={28} />
          Forgedots
        </Link>

        <nav
          className="hidden md:flex gap-16 relative right-8"
          aria-label="Main"
        >
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors duration-200",
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
            className="p-2 px-3 text-sm border rounded-full"
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
