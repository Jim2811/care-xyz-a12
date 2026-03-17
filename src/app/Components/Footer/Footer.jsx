import Link from "next/link";
import {
  FaHandHoldingHeart,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaUsers,
  FaComments,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
      <div className="section-container">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="text-primary">
                <FaHandHoldingHeart className="text-3xl" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Care.xyz
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Our mission is making caregiving easy, secure, and accessible for
              everyone. Connecting hearts and homes through professional support.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-slate-900">Services</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link className="hover:text-primary transition-colors" href="/">Babysitting</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/">Elderly Care</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/">Sick Care</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/">Housekeeping</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-slate-900">Company</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link className="hover:text-primary transition-colors" href="/">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/">Careers</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/">Trust & Safety</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-slate-900">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-base" />
                hello@care.xyz
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-base" />
                +1 (800) CARE-XYZ
              </li>
              <li className="flex gap-4 pt-4">
                <Link className="text-slate-400 hover:text-primary" href="/">
                  <FaGlobe />
                </Link>
                <Link className="text-slate-400 hover:text-primary" href="/">
                  <FaUsers />
                </Link>
                <Link className="text-slate-400 hover:text-primary" href="/">
                  <FaComments />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© 2024 Care.xyz Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link className="hover:text-slate-900" href="/">Privacy Policy</Link>
            <Link className="hover:text-slate-900" href="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}