import type { ReactNode } from "react";
import { appConfig } from "@/lib/config";
import { SidebarNav } from "@/components/layout/sidebar-nav";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-950">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-neutral-200 bg-white lg:block">
          <div className="border-b border-neutral-200 px-5 py-4">
            <p className="text-sm font-semibold">{appConfig.name}</p>
            <p className="mt-1 text-xs text-neutral-500">Overtime Management</p>
          </div>
          <SidebarNav />
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
