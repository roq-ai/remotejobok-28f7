const mapping: Record<string, string> = {
  bids: 'bid',
  companies: 'company',
  'external-integrations': 'external_integration',
  jobs: 'job',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
