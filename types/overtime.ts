export type Department = {
  departmentId: string;
  departmentName: string;
  parentDepartmentId: string;
  headEmployeeId: string;
  status: "active" | "inactive";
};

export type EmployeeShift = "day" | "night";
export type EmploymentType = "regular" | "contractual" | string;

export type Employee = {
  employeeId: string;
  userId: string;
  employeeNo: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  departmentId: string;
  position: string;
  managerId: string;
  shift: EmployeeShift;
  employmentType: EmploymentType;
  dailyRate: number;
  isDepartmentLeader: boolean;
  status: "active" | "inactive";
  createdAt: string;
};

export type CreateEmployeePayload = {
  userId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  departmentId: string;
  position?: string;
  managerId?: string;
  shift: EmployeeShift;
  employmentType?: EmploymentType;
  dailyRate: number;
  isDepartmentLeader?: boolean;
};

export type OvertimeStatus = "pending" | "approved" | "rejected" | "paid";

export type OvertimeRequest = {
  overtimeId: string;
  employeeId: string;
  date: string;
  startTime: string;
  endTime: string;
  breakMinutes: number;
  totalHours: number;
  reason: string;
  status: OvertimeStatus;
  submittedBy: string;
  submittedAt: string;
  approvedBy: string;
  approvedAt: string;
  rejectedBy: string;
  rejectedAt: string;
  paidBy: string;
  paidAt: string;
  hourlyRate: number | "";
  rateMultiplier: number | "";
  overtimePay: number | "";
  remarks: string;
};

export type OvertimePolicy = {
  policyId: string;
  name: string;
  minimumHours: number;
  maximumHoursPerDay: number;
  requiresManagerApproval: "yes" | "no";
  requiresHrApproval: "yes" | "no";
  rateMultiplier: number;
  status: "active" | "inactive";
};
