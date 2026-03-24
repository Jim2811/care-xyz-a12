import Link from "next/link";
import { FaHandHoldingHeart, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

export const metadata = {
  title: "Login | Care.xyz",
  description: "Login to your Care.xyz account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-20 xl:px-32">
        <div className="w-full max-w-sm lg:max-w-md">
          <header className="mb-10 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-primary">
              <FaHandHoldingHeart className="text-4xl" />
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Care.xyz
              </h1>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-primary hover:underline"
                >
                  Create one here
                </Link>
              </p>
            </div>
          </header>

          <div className="mt-8">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
              <FaGoogle className="text-lg text-[#4285F4]" />
              Continue with Google
            </button>

            <div className="relative my-8">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium">
                <span className="bg-base-200 px-4 text-slate-500">
                  Or continue with email
                </span>
              </div>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <FaEnvelope />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="block w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <FaLock />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Login
              </button>
            </form>

            <div className="mt-8 rounded-xl border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm text-slate-600">
                By continuing, you agree to our{" "}
                <Link href="#" className="font-medium text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-medium text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}