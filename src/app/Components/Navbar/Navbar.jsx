"use client";

import { useRouter } from "next/navigation";
import { FaHandHoldingHeart, FaBars, FaUserCircle } from "react-icons/fa";
import NavLink from "./NavLink";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <FaHandHoldingHeart className="text-3xl" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Care.xyz
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink
              href="/"
              className="text-sm font-medium transition-colors"
            >
              Home
            </NavLink>

            <NavLink
              href="/services"
              className="text-sm font-medium transition-colors"
            >
              Services
            </NavLink>

            <NavLink
              href="/about"
              className="text-sm font-medium transition-colors"
            >
              About
            </NavLink>

            <NavLink
              href="/my-bookings"
              className="text-sm font-medium transition-colors"
            >
              My Bookings
            </NavLink>
          </nav>

          <div className="hidden items-center gap-4 sm:flex">
            {user ? (
              <>
                <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                  <FaUserCircle className="text-lg text-primary" />
                  <span className="max-w-[160px] truncate font-medium">
                    {user.displayName || user.email}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="text-sm font-semibold transition-colors"
                >
                  Register
                </Link>

                <Link
                  href="/login"
                  className="btn btn-primary rounded-lg px-6 text-sm font-bold text-white"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              <FaBars className="text-lg" />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 w-64 rounded-box border border-slate-200 bg-base-100 p-2 shadow"
            >
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/services">Services</NavLink>
              </li>
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/my-bookings">My Bookings</NavLink>
              </li>

              {user ? (
                <>
                  <li className="mt-2 px-4 py-2 text-sm text-slate-500">
                    {user.displayName || user.email}
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink href="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink href="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}