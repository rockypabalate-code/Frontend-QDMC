export type AppRoute = {
  label: string;
  href: string;
  section: "main" | "admin";
};

export const appRoutes = {
  home: "/",
  login: "/login",
  dashboard: "/dashboard",
  overtimeRequests: "/overtime-requests",
  employees: "/employees",
  departments: "/departments",
  policies: "/policies",
} as const;

export const primaryNavigation: AppRoute[] = [
  { label: "Dashboard", href: appRoutes.dashboard, section: "main" },
  {
    label: "OT Requests",
    href: appRoutes.overtimeRequests,
    section: "main",
  },
  { label: "Employees", href: appRoutes.employees, section: "admin" },
  { label: "Departments", href: appRoutes.departments, section: "admin" },
  { label: "Policies", href: appRoutes.policies, section: "admin" },
];
