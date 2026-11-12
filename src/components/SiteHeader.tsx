"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavKey = "home" | "privacy" | "terms" | "support";

const links: { href: string; label: string; key: NavKey; priority?: boolean }[] =
  [
    { href: "/#how", label: "How it works", key: "home", priority: true },
    { href: "/privacy", label: "Privacy", key: "privacy" },
    { href: "/terms", label: "Terms", key: "terms" },
    { href: "/support", label: "Support", key: "support", priority: true },
  ];

export function SiteHeader({ current }: { current?: NavKey }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      data-site-header
    >
      <div className="site-header__inner">
        <Link
          className="brand"
          href="/"
          aria-current={current === "home" ? "page" : undefined}
        >
          <Image
            className="brand__mark"
            src="/app-icon.png"
            width={28}
            height={28}
            alt=""
          />
          OurNext
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.priority ? "nav-priority" : undefined}
              aria-current={current === link.key ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
