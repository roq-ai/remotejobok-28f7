import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createExternalIntegration } from 'apiSdk/external-integrations';
import { externalIntegrationValidationSchema } from 'validationSchema/external-integrations';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { ExternalIntegrationInterface } from 'interfaces/external-integration';

function ExternalIntegrationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ExternalIntegrationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createExternalIntegration(values);
      resetForm();
      router.push('/external-integrations');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ExternalIntegrationInterface>({
    initialValues: {
      service_name: '',
      status: '',
      api_key: '',
      api_secret: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: externalIntegrationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'External Integrations',
              link: '/external-integrations',
            },
            {
              label: 'Create External Integration',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create External Integration
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.service_name}
            label={'Service Name'}
            props={{
              name: 'service_name',
              placeholder: 'Service Name',
              value: formik.values?.service_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.api_key}
            label={'Api Key'}
            props={{
              name: 'api_key',
              placeholder: 'Api Key',
              value: formik.values?.api_key,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.api_secret}
            label={'Api Secret'}
            props={{
              name: 'api_secret',
              placeholder: 'Api Secret',
              value: formik.values?.api_secret,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/external-integrations')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'external_integration',
    operation: AccessOperationEnum.CREATE,
  }),
)(ExternalIntegrationCreatePage);
