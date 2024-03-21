// controllers/google.controller.ts

import { FastifyRequest, FastifyReply } from 'fastify';
import { GoogleAdsApi, enums } from 'google-ads-api';

const clientId = '22202495353-8lrc4moj4phsgos8smqm8gg20h7fqtq4.apps.googleusercontent.com';
const clientSecret = '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';
const developerToken = 'OQHHyk3cC96E0koIbHbCxA';

const googleAdsApi = new GoogleAdsApi({
  client_id: clientId,
  client_secret: clientSecret,
  developer_token: developerToken,
});

export async function importCampaigns(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { refreshToken } = request.body as { refreshToken: string };

    if (!refreshToken) {
      return reply.status(400).send({ message: 'Refresh token is required' });
    }

    const customers = await googleAdsApi.listAccessibleCustomers(refreshToken);

    // Assuming the user has only one accessible customer, we'll use the first one
    const customerResourceName = customers.resource_names[0];
    const customerId = customerResourceName.split('/')[1];

    const customer = googleAdsApi.Customer({
      customer_id: customerId,
      refresh_token: refreshToken,
    });

    const campaigns = await customer.report({
      entity: 'campaign',
      attributes: [
        'campaign.id',
        'campaign.name',
        'campaign.status',
        'campaign.start_date',
        'campaign.end_date',
      ],
      constraints: {
        'campaign.status': enums.CampaignStatus.ENABLED,
      },
      limit: 20,
    });

    return reply.status(200).send({ campaigns });
  } catch (error) {
    console.error('Error importing campaigns:', error);
    return reply.status(500).send({ message: 'Failed to import campaigns' });
  }
}
