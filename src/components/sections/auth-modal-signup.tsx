"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function AuthModalSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-[424px] rounded-2xl bg-white p-8 animate-in fade-in-0 zoom-in-95">
        <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
          <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/close_popup-22.svg?" alt="Close" width={24} height={24} />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black">
            Welcome to <span className="font-bold">Jobright</span>
          </h2>
        </div>

        <div className="mt-8">
          <button className="flex h-12 w-full items-center justify-center gap-2.5 rounded-md border border-border bg-white text-sm font-semibold text-black transition-colors hover:bg-gray-50">
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/google-23.svg?" alt="Google icon" width={20} height={20} />
            Sign up with Google
          </button>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-200" />
            <span className="mx-4 flex-shrink-0 text-xs text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-200" />
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="h-12 w-full rounded-md border border-border px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 w-full rounded-md border border-border px-4 pr-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/hide-24.svg?" alt="Show password" width={20} height={20} />
                )}
              </button>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <button
                type="button"
                role="checkbox"
                aria-checked={receiveUpdates}
                onClick={() => setReceiveUpdates(!receiveUpdates)}
                className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border transition-colors ${
                  receiveUpdates 
                    ? "border-primary bg-primary" 
                    : "border-gray-400 bg-white"
                }`}
              >
                {receiveUpdates && <CheckIcon />}
              </button>
              <label
                onClick={() => setReceiveUpdates(!receiveUpdates)}
                className="cursor-pointer text-xs font-medium text-gray-500"
              >
                I want to receive updates from Jobright about latest job offers
              </label>
            </div>

            <button
              type="submit"
              className="!mt-6 h-12 w-full rounded-md bg-black text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              SIGN UP
            </button>
          </form>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link href="#" className="font-semibold text-black hover:underline">
            Sign in now
          </Link>
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-gray-400">
          By continuing, you agree to the Jobright&nbsp;
          <Link href="/legal/service" className="text-gray-500 hover:underline">
            Terms of Service
          </Link>
          <br /> and the&nbsp;
          <Link href="/legal/privacy" className="text-gray-500 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}