import Image from "next/image";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-950">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl shadow-blue-950/10 md:min-h-[680px] md:grid-cols-2">
        <div className="flex items-center px-6 py-10 sm:px-10 md:order-2 lg:px-14">
          <div className="w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Welcome back
            </p>
            <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
              Sign in to your account
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Access your operations dashboard and continue managing QDMC
              workflows.
            </p>
            <div className="mt-8">
              <LoginForm />
            </div>
          </div>
        </div>

        <aside className="flex min-h-[520px] bg-gradient-to-br from-blue-900/70 to-blue-950/60 backdrop-blur-2xl border-r border-white/10 shadow-2xl p-6 text-white sm:p-8 md:order-1 lg:p-10">
          <div className="flex w-full flex-col">
            <div className="w-fit">
              <Image
                src="/assets/brand/company-logo.png"
                alt="Company logo"
                width={80}
                height={25}
                priority
                className="brightness-0 invert opacity-95"
              />
            </div>

            <div className="flex flex-1 items-center justify-center py-10">
              <div className="w-full max-w-sm text-center">
                <h2 className="text-3xl font-bold leading-tight">
                  Login with QR Code
                </h2>

                <div className="mx-auto mt-6 w-fit rounded-2xl bg-white p-4 shadow-2xl shadow-blue-950/30">
                  <div className="relative">
                    <Image
                      src="/assets/qr/qr-code.png"
                      alt="QR code"
                      width={220}
                      height={220}
                      className="h-56 w-56"
                    />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-blue-100">
                  Manage overtime requests, approvals, and employee records in
                  one secure system.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
