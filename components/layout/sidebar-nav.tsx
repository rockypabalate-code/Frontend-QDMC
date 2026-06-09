import Link from "next/link";
import { primaryNavigation } from "@/lib/routes";

export function SidebarNav() {
  const mainRoutes = primaryNavigation.filter((route) => route.section === "main");
  const adminRoutes = primaryNavigation.filter((route) => route.section === "admin");

  return (
    <nav className="space-y-6 px-3 py-4 text-sm">
      <NavGroup label="Main" routes={mainRoutes} />
      <NavGroup label="Admin" routes={adminRoutes} />
    </nav>
  );
}

type NavGroupProps = {
  label: string;
  routes: typeof primaryNavigation;
};

function NavGroup({ label, routes }: NavGroupProps) {
  return (
    <section>
      <p className="px-2 text-xs font-medium uppercase text-neutral-400">
        {label}
      </p>
      <div className="mt-2 space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="block rounded-md px-2 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
