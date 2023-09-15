import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  user_id: string;
  rating?: number;
  comment?: string;
  job_id: string;
  reviewee_id: string;
  created_at?: any;
  updated_at?: any;

  user_review_user_idTouser?: UserInterface;
  job?: JobInterface;
  user_review_reviewee_idTouser?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  comment?: string;
  job_id?: string;
  reviewee_id?: string;
}
