import { apiFetch } from "@/lib/api/http";
import type {
  CreateEmployeePayload,
  Department,
  Employee,
  OvertimePolicy,
  OvertimeRequest,
} from "@/types/overtime";

export function getDepartments(token: string) {
  return apiFetch<{ departments: Department[] }>("/overtime/departments", {
    token,
  });
}

export function getEmployees(token: string) {
  return apiFetch<{ employees: Employee[] }>("/overtime/employees", {
    token,
  });
}

export function createEmployee(token: string, payload: CreateEmployeePayload) {
  return apiFetch<{ employee: Employee; message?: string }>(
    "/overtime/employees",
    {
      method: "POST",
      token,
      body: JSON.stringify(payload),
    }
  );
}

export function getOvertimeRequests(token: string) {
  return apiFetch<{ overtimeRequests: OvertimeRequest[] }>(
    "/overtime/requests",
    { token }
  );
}

export function getPolicies(token: string) {
  return apiFetch<{ policies: OvertimePolicy[] }>("/overtime/policies", {
    token,
  });
}
