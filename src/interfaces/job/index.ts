import { BidInterface } from 'interfaces/bid';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  company_id: string;
  category?: string;
  experience_level?: string;
  salary_range?: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    bid?: number;
    review?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  company_id?: string;
  category?: string;
  experience_level?: string;
  salary_range?: string;
}
