"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/http";
import {
  getPostLoginRoute,
  saveAuthSession,
} from "@/lib/auth/session-storage";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const session = await login({ email, password });
      console.log("[LoginForm] login success", {
        userId: session.user.id,
        email: session.user.email,
        role: session.user.role,
        status: session.user.status,
        hasToken: Boolean(session.token),
      });
      saveAuthSession(session);
      const nextRoute = getPostLoginRoute(session.user.role);
      console.log("[LoginForm] redirecting", { nextRoute });
      router.replace(nextRoute);
    } catch (caughtError) {
      console.log("[LoginForm] login failed", caughtError);
      if (caughtError instanceof ApiError) {
        setError(caughtError.message);
      } else {
        setError("Unable to sign in. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label
          className="block text-sm font-semibold text-slate-800"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@company.com"
          className="h-12 w-full rounded-lg border border-blue-100 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10"
        />
      </div>
      <div className="space-y-2">
        <label
          className="block text-sm font-semibold text-slate-800"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="h-12 w-full rounded-lg border border-blue-100 bg-white px-4 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-slate-500 transition hover:bg-blue-50 hover:text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-700/30"
          >
            {showPassword ? (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m3 3 18 18" />
                <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 8.7 4 10 8a12.2 12.2 0 0 1-2.7 4.3" />
                <path d="M6.6 6.6A12.2 12.2 0 0 0 2 12c1.3 4 5 8 10 8a10.8 10.8 0 0 0 4.4-.9" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <label className="flex cursor-pointer items-center justify-between gap-4 rounded-lg bg-blue-50 px-3 py-2.5">
        <span className="text-sm font-medium text-slate-700">
          Remember password
        </span>
        <input
          type="checkbox"
          checked={rememberPassword}
          onChange={(event) => setRememberPassword(event.target.checked)}
          className="peer sr-only"
        />
        <span className="flex h-7 w-12 items-center rounded-full bg-slate-300 p-1 transition peer-checked:bg-blue-700 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-700/20">
          <span
            className={`h-5 w-5 rounded-full bg-white shadow-sm transition ${
              rememberPassword ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </span>
      </label>
      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-lg bg-blue-800 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:bg-blue-950 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
