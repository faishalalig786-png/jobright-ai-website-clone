"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 relative">
            <Link 
              href="/"
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              ✕
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Welcome back to <span className="font-extrabold">Jobright</span>
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8">
            {/* Social Sign In */}
            <div className="space-y-3 mb-6">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/google-23.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Sign in with Google
              </button>
              
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Sign in with Apple
              </button>
            </div>

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
            <div className="mb-2 relative">
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

            {/* Forgot Password */}
            <div className="mb-6 text-center">
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors mb-6"
            >
              SIGN IN
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Not a member?{" "}
              <Link href="/sign-up" className="font-semibold text-gray-900 hover:underline">
                Sign up now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}