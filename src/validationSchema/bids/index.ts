import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  amount: yup.number().integer().nullable(),
  proposal: yup.string().nullable(),
  status: yup.string().nullable(),
  duration: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
