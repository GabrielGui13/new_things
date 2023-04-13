import { Payment, Plans, Projects, Role, UserPlanStatus, Users } from "@prisma/client";

export interface Subscription {
  id?: string;
  external_id?: string;
  value: number;
  user: Users;
  user_id: string;
  plan: Plans;
  plan_id: string;
  expiration: string;
  plan_status?: UserPlanStatus;
  active: boolean;
  payment: Payment[];
  created_at: Date;
  updated_at: Date;
}
