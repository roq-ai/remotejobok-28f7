interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner'],
  tenantName: 'Company',
  applicationName: 'remotejobok',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage secure payment system',
    'Develop job matching and recommendation algorithms',
    'Set up external integrations for third-party services',
    'Manage job posting and bidding system',
    'Establish rating and review system',
    'Design user interface',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/cd6e4b07-7856-4aae-9b94-cdabbae7bc20',
};
