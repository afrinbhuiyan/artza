"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/"); // or dashboard check later
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        {/* Brand */}
        <div className="text-center mb-12">
          <div className="mb-2">
            <Image
              src="/logo.png"
              className="mx-auto"
              alt="Art Gallery Logo"
              width={150}
              height={150}
            />
          </div>
          <p className="text-zinc-400 text-sm tracking-[0.2em] uppercase">
            Art Gallery
          </p>
        </div>

        <div className="bg-white">
          <h1 className="text-3xl font-light text-center text-zinc-900 mb-10">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-5 py-3.5 border border-zinc-300 focus:border-[#162456] focus:ring-1 focus:ring-[#162456] outline-none transition-all text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-zinc-600 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-5 py-3.5 border border-zinc-300 focus:border-[#162456] focus:ring-1 focus:ring-[#162456] outline-none transition-all text-base"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-zinc-500 hover:text-zinc-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-zinc-600 cursor-pointer">
                <input type="checkbox" className="accent-[#162456]" />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-[#162456] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#162456] hover:bg-black text-white py-4 text-lg font-medium transition-all mt-4"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-200"></div>
            <span className="text-zinc-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={() => signIn("google")}
            className="w-full border border-zinc-300 hover:bg-zinc-50 py-4 flex items-center justify-center gap-3 text-zinc-700 transition-all"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-zinc-600 mt-10">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#162456] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>

        <p className="text-center text-zinc-500 text-xs mt-8">
          Secure • Simple • Trusted by Art Lovers
        </p>
      </div>
    </div>
  );
}
