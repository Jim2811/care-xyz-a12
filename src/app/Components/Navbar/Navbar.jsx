// import NavLink from "next/NavLink";
import { FaHandHoldingHeart, FaBars } from "react-icons/fa";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Navbar() {
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
            <NavLink className="text-sm font-medium hover:text-primary transition-colors active" href="/">
              Home
            </NavLink>
            <NavLink className="text-sm font-medium hover:text-primary transition-colors" href="/services">
              Services
            </NavLink>
            <NavLink className="text-sm font-medium hover:text-primary transition-colors" href="/about">
              About
            </NavLink>
            <NavLink className="text-sm font-medium hover:text-primary transition-colors" href="/my-bookings">
              My Bookings
            </NavLink>
          </nav>

          <div className="hidden items-center gap-4 sm:flex">
            <Link className="text-sm font-semibold text-primary hover:text-primary/80" href={"/register"}>
              Register
            </Link>
            <Link className="btn btn-primary rounded-lg px-6 text-sm font-bold text-white" href={"/login"}>
              Login
            </Link>
          </div>

          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              <FaBars className="text-lg" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 w-56 rounded-box border border-slate-200 bg-base-100 p-2 shadow"
            >
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/services">Services</NavLink></li>
              <li><NavLink href="/about">About</NavLink></li>
              <li><NavLink href="/my-bookings">My Bookings</NavLink></li>
              <li><NavLink href="/register">Register</NavLink></li>
              <li><NavLink href="/login">Login</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}