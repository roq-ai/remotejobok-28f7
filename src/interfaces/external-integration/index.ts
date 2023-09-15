import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExternalIntegrationInterface {
  id?: string;
  user_id: string;
  service_name?: string;
  status?: string;
  api_key?: string;
  api_secret?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ExternalIntegrationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  service_name?: string;
  status?: string;
  api_key?: string;
  api_secret?: string;
}
