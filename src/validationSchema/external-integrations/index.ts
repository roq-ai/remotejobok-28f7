import * as yup from 'yup';

export const externalIntegrationValidationSchema = yup.object().shape({
  service_name: yup.string().nullable(),
  status: yup.string().nullable(),
  api_key: yup.string().nullable(),
  api_secret: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
