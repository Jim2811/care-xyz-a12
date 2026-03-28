"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaHandHoldingHeart,
  FaGoogle,
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";
import useAuth from "@/hooks/useAuth";

export default function RegisterPage() {
  const { createUser, signInWithGoogle } = useAuth();
  const router = useRouter();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const fullName = form.fullName.value;
    const nid = form.nid.value;
    const email = form.email.value;
    const contact = form.contact.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    console.log({ fullName, nid, email, contact, password, terms });

    if (!terms) {
      setError("You must accept the terms and privacy policy.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log("Registered user:", result.user);

      setSuccess("Account created successfully!");
      form.reset();

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setSuccess("");

    try {
      const result = await signInWithGoogle();
      console.log("Google user:", result.user);

      setSuccess("Google sign up successful!");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

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
                Create an account
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-primary hover:underline"
                >
                  Log in here
                </Link>
              </p>
            </div>
          </header>

          <div className="mt-8">
            <button
              onClick={handleGoogleSignUp}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            >
              <FaGoogle className="text-lg text-[#4285F4]" />
              Sign up with Google
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

            <form onSubmit={handleRegister} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="nid"
                    className="block text-sm font-medium text-slate-700"
                  >
                    NID Number
                  </label>
                  <input
                    id="nid"
                    name="nid"
                    type="text"
                    placeholder="1234567890"
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-slate-700"
                >
                  Contact Number
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />

                <div className="mt-3 space-y-2">
                  <p className="text-xs text-slate-500">
                    Must include at least:
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <FaCheckCircle className="text-[14px] text-green-500" />
                      6+ characters
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <FaRegCircle className="text-[14px] text-slate-300" />
                      1 uppercase letter
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <FaRegCircle className="text-[14px] text-slate-300" />
                      1 lowercase letter
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-slate-700"
                >
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              {success && (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}