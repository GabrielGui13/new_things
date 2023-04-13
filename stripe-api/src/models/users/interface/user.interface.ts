import { Payment, Projects, Role, Subscription } from "@prisma/client";

export interface User {
  id?: string;
  external_id?: string;
  name: string;
	role: Role;
  email: string;
  password: string;
  phone?: string;
  cpf?: string;
  license_type?: string;
  license_number?: string;
  projects: Projects[];
  subscription: Subscription[]
  payment: Payment[];
  deleted: boolean;
  created_at: Date;
  updated_at: Date;
}
