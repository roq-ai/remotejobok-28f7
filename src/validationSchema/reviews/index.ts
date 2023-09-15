import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().nullable(),
  comment: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
  reviewee_id: yup.string().nullable().required(),
});
