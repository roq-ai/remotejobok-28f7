import axios from 'axios';
import queryString from 'query-string';
import { ExternalIntegrationInterface, ExternalIntegrationGetQueryInterface } from 'interfaces/external-integration';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExternalIntegrations = async (
  query?: ExternalIntegrationGetQueryInterface,
): Promise<PaginatedInterface<ExternalIntegrationInterface>> => {
  const response = await axios.get('/api/external-integrations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createExternalIntegration = async (externalIntegration: ExternalIntegrationInterface) => {
  const response = await axios.post('/api/external-integrations', externalIntegration);
  return response.data;
};

export const updateExternalIntegrationById = async (id: string, externalIntegration: ExternalIntegrationInterface) => {
  const response = await axios.put(`/api/external-integrations/${id}`, externalIntegration);
  return response.data;
};

export const getExternalIntegrationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/external-integrations/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteExternalIntegrationById = async (id: string) => {
  const response = await axios.delete(`/api/external-integrations/${id}`);
  return response.data;
};
