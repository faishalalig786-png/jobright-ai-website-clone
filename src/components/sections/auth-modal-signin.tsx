"use client";

import { useState } from "react";
import Image from "next/image";

const AuthModalSignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // This is just a presentation component, so onClick can be empty for now.
  // In a real app, this would dispatch an action to close the modal.
  const handleClose = () => {
    console.log("Close modal");
  };

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-sans animate-in fade-in-0">
      <div className="relative w-full max-w-[440px] rounded-2xl bg-white p-8 animate-in fade-in-0 zoom-in-95">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6"
          aria-label="Close"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/close_popup-22.svg?"
            alt="Close icon"
            width={22}
            height={22}
          />
        </button>
        <h2 className="text-center text-2xl font-semibold text-black">
          Welcome to <strong className="font-bold">Jobright</strong>
        </h2>
        <div className="mt-6">
          <button className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-md border border-border bg-white text-base font-semibold text-black ring-offset-background transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/google-23.svg?"
              alt="Google icon"
              width={22}
              height={22}
              className="mr-3"
            />
            Sign in with Google
          </button>
        </div>
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <span className="text-xs font-medium text-zinc-400">OR</span>
          <div className="h-px flex-grow bg-border" />
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="flex h-12 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="flex h-12 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="button"
              onClick={handlePasswordVisibilityToggle}
              className="absolute inset-y-0 right-4 flex items-center"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/hide-24.svg?"
                alt="Toggle password visibility"
                width={18}
                height={18}
              />
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-md bg-black text-base font-semibold text-white ring-offset-background transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            SIGN IN
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not a member?{" "}
          <a href="#" className="font-semibold text-black hover:underline">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthModalSignIn;