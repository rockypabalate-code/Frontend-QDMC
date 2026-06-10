import { LoginForm } from "@/components/auth/login-form";
import { appConfig } from "@/lib/config";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,#ccfbf1,transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)] px-4 py-10 text-slate-950">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/80 bg-white shadow-2xl shadow-slate-900/10 md:min-h-[680px] md:grid-cols-2">
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-14">
          <div className="w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
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

        <aside className="relative min-h-[420px] overflow-hidden bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.34),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(59,130,246,0.26),transparent_30%)]" />
          <div className="absolute inset-x-8 bottom-8 top-28 rounded-2xl border border-white/10 bg-white/5" />
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-lg font-black text-emerald-600 shadow-xl shadow-emerald-950/20">
                Q
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {appConfig.name}
                </p>
                <p className="text-xs text-emerald-100/80">
                  Operations Technology
                </p>
              </div>
            </div>

            <div className="my-auto py-10">
              <div className="mx-auto max-w-md">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur">
                  <div className="aspect-[4/3] rounded-xl border border-dashed border-emerald-200/50 bg-gradient-to-br from-emerald-300/20 via-sky-300/10 to-white/10 p-5">
                    <div className="flex h-full flex-col justify-between rounded-lg bg-slate-950/25 p-5">
                      <div className="flex items-center justify-between">
                        <span className="h-2.5 w-20 rounded-full bg-emerald-200/80" />
                        <span className="h-8 w-8 rounded-full border border-white/30 bg-white/10" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
                          Image placeholder
                        </p>
                        <h2 className="mt-3 text-3xl font-bold leading-tight">
                          Clear daily control from one secure entry point.
                        </h2>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-100/80">
                          Upload a brand image later, or keep this visual panel
                          as a clean system welcome area.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {["Secure", "Fast", "Visible"].map((item) => (
                    <div
                      className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-xs font-semibold text-white/90"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
