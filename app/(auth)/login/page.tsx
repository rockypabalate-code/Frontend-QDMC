import { LoginForm } from "@/components/auth/login-form";
import { appConfig } from "@/lib/config";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100 px-4 py-10 text-neutral-950">
      <section className="w-full max-w-sm rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
        <header className="mb-6">
          <p className="text-sm font-medium text-neutral-500">
            {appConfig.name}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-neutral-950">
            Sign in
          </h1>
        </header>
        <LoginForm />
      </section>
    </main>
  );
}
