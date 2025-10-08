"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    subscribeToUpdates: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign up:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Gradient with Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cyan-300 via-teal-200 to-cyan-400 p-12 flex-col justify-between relative overflow-hidden">
        {/* Logo */}
        <div>
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/logo-1.svg"
            alt="Jobright"
            width={140}
            height={40}
            className="mb-16"
          />

          {/* Main Content */}
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Ensure a Fast and Successful Journey{" "}
              <span className="text-gray-700">to Your Next Career Move</span>
            </h1>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <span className="font-semibold text-gray-900">2X More Qualified Job Matches</span>
              </div>

              <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏱️</span>
                </div>
                <span className="font-semibold text-gray-900">60% Time Savings in Job Searches</span>
              </div>

              <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">😊</span>
                </div>
                <span className="font-semibold text-gray-900">50% More Interview Invites</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Welcome to <span className="font-extrabold">Jobright</span>
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Social Sign Up */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium mb-6"
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/google-23.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Sign up with Google
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative px-4 bg-white">
                  <span className="text-sm text-gray-500">OR</span>
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00D68F] focus:border-transparent"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00D68F] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.subscribeToUpdates}
                    onChange={(e) => setFormData({ ...formData, subscribeToUpdates: e.target.checked })}
                    className="mt-0.5 w-5 h-5 rounded border-gray-300 text-[#00D68F] focus:ring-[#00D68F]"
                  />
                  <span className="text-sm text-gray-700">
                    I want to receive updates from Jobright about latest job offers
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors mb-4"
              >
                SIGN UP
              </button>

              {/* Terms */}
              <p className="text-xs text-center text-gray-600 mb-6">
                By continuing, you agree to the Jobright{" "}
                <Link href="/terms" className="text-gray-900 hover:underline">
                  Terms of Service
                </Link>{" "}
                and the{" "}
                <Link href="/privacy" className="text-gray-900 hover:underline">
                  Privacy Policy
                </Link>
              </p>

              {/* Sign In Link */}
              <p className="text-center text-sm text-gray-600">
                Already a member?{" "}
                <Link href="/sign-in" className="font-semibold text-gray-900 hover:underline">
                  Sign in now
                </Link>
              </p>
            </form>
          </div>

          {/* Back to Home Link - Mobile Only */}
          <div className="mt-6 text-center lg:hidden">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}