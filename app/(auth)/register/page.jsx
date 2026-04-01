'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-8">
      <div className="max-w-md w-full">

        {/* Brand */}
        <div className="text-center mb-12">
          <div className="mb-2">
            <Image
              src="/logo.png"
              className="mx-auto"
              alt="Artza Logo"
              width={150}
              height={150}
            />
          </div>
          <p className="text-zinc-400 text-sm tracking-[0.2em] uppercase">Art Gallery</p>
        </div>

        <div className="bg-white">

          <h1 className="text-3xl font-light text-center text-zinc-900 mb-10">
            Create Account
          </h1>

          <form className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm text-zinc-600 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-3.5 border border-zinc-300 focus:border-[#162456] focus:ring-1 focus:ring-[#162456] outline-none transition-all text-base"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3.5 border border-zinc-300 focus:border-[#162456] focus:ring-1 focus:ring-[#162456] outline-none transition-all text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-zinc-600 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full px-5 py-3.5 border border-zinc-300 focus:border-[#162456] focus:ring-1 focus:ring-[#162456] outline-none transition-all text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-zinc-500 hover:text-zinc-700"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#162456] hover:bg-black text-white py-4 text-lg font-medium transition-all mt-4"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-200"></div>
            <span className="text-zinc-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>

          {/* Google Button */}
          <button className="w-full border border-zinc-300 hover:bg-zinc-50 py-4 flex items-center justify-center gap-3 text-zinc-700 transition-all">
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-5 h-5" 
            />
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-zinc-600 mt-10">
            Already have an account?{' '}
            <Link href="/login" className="text-[#162456] hover:underline font-medium">
              Sign in
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