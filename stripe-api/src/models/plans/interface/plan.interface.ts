import { Plans, Projects, Role, Subscription, UserPlanStatus, Users } from "@prisma/client";

export interface Plan {
  id?: string;
  external_id?: string;
  name: string;
  value: number;
  duration_months: number;
  subscription: Subscription[];
  active: boolean;
  public: boolean;
  created_at: Date;
  updated_at: Date;
}
