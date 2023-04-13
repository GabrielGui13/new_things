import { Plans, Projects, Role, Subscription, Users } from "@prisma/client";

export interface Payment {
  id?: string;
  external_id?: string;
  value: number;
	user: Users;
  user_id: string;
  subscription: Subscription;
  subscription_id: string;
  payment_date: Date;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
}
