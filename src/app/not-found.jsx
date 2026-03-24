import Link from "next/link";
import { FaTriangleExclamation, FaHouse, FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-6 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
          <FaTriangleExclamation className="text-4xl" />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">
          404 Error
        </p>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Sorry, the page you are looking for doesn&apos;t exist, has been moved,
          or the link may be broken.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90"
          >
            <FaHouse className="text-sm" />
            Back to Home
          </Link>

          <button
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50"
          >
            <FaArrowLeft className="text-sm" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}