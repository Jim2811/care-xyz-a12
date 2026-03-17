import { FaHandHoldingHeart, FaBars } from "react-icons/fa";

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
            <a className="text-sm font-medium hover:text-primary transition-colors active" href="#">
              Home
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              Services
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              About
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              My Bookings
            </a>
          </nav>

          <div className="hidden items-center gap-4 sm:flex">
            <button className="text-sm font-semibold text-primary hover:text-primary/80">
              Register
            </button>
            <button className="btn btn-primary rounded-lg px-6 text-sm font-bold text-white">
              Login
            </button>
          </div>

          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              <FaBars className="text-lg" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 w-56 rounded-box border border-slate-200 bg-base-100 p-2 shadow"
            >
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">My Bookings</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}