// controllers/google.controller.ts

import { FastifyRequest, FastifyReply } from 'fastify';
import { GoogleAdsApi, enums } from 'google-ads-api';

const clientId = '645397317989-ffbu72jpm7grh5alrklke7bttuhca6jr.apps.googleusercontent.com';
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
    console.log(customers)

    // Assuming the user has only one accessible customer, we'll use the first one
    const customerResourceName = customers.resource_names[0];
    const customerId = customerResourceName.split('/')[1];

    const customer = googleAdsApi.Customer({
      customer_id: customerId,
      login_customer_id: customerId,
      refresh_token: refreshToken,
    });
    console.log(customer)
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
export async function listAccessibleCustomers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { refreshToken } = request.body as { refreshToken: string };
    if (!refreshToken) {
      return reply.status(400).send({ message: 'Refresh token is required' });
    }

    const response = await googleAdsApi.listAccessibleCustomers(refreshToken);
    const customerNamesPromises = response.resource_names.map(async (resourceName: string) => {
      const customerId = resourceName.split('/')[1];
      const customer = googleAdsApi.Customer({
        customer_id: customerId,
        login_customer_id: customerId,
        refresh_token: refreshToken,
      });

      const query = `SELECT customer.descriptive_name FROM customer WHERE customer.id = '${customerId}'`;
      const result = await customer.query(query);
      const name = result[0]?.customer?.descriptive_name ?? '';

      return {
        resourceName,
        id: customerId,
        name, // Only include name if it's not an empty string
      };
    });

    const customersWithNames = await Promise.all(customerNamesPromises);

    return reply.status(200).send({ customers: customersWithNames });
  } catch (error) {
    console.error('Error listing accessible customers:', error);
    return reply.status(500).send({ message: 'Failed to list accessible customers' });
  }
}

export async function getCustomerName(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { refreshToken, customerId } = request.body as { refreshToken: string; customerId: string };
    // Initialize Google Ads API customer client with necessary credentials
    const customer = googleAdsApi.Customer({
      customer_id: customerId,
      login_customer_id: customerId, // Adjust based on your account structure
      refresh_token: refreshToken,
    });

    // Fetch customer details, focusing on the descriptive name
    const query = `SELECT customer.descriptive_name FROM customer WHERE customer.id = '${customerId}'`;
    const result = await customer.query(query);

    if (result.length > 0) {
      return reply.send({ name: result[0]?.customer?.descriptive_name ?? '' });
    } else {
      return reply.send({ name: '' }); // Send empty name if not found
    }
  } catch (error) {
    console.error('Failed to fetch customer name:', error);
    return reply.status(500).send({ message: 'Failed to fetch customer name' });
  }
}
