"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? "text-primary font-semibold"
          : "text-slate-700 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}