import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface BidInterface {
  id?: string;
  user_id: string;
  job_id: string;
  amount?: number;
  proposal?: string;
  status?: string;
  duration?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface BidGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_id?: string;
  proposal?: string;
  status?: string;
}
