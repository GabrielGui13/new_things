export interface Project {
  id?: string;
  name: string;
  description: string;
  address: string;
  cep: string;
  city: string;
  state: string;
  district: string;
  complement: string;
  created_at: Date;
  updated_at: Date;
}
