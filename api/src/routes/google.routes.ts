// routes/google.routes.ts

import { FastifyInstance } from 'fastify';
import {getCustomerName, importCampaigns, listAccessibleCustomers} from '../controllers/google.controller';
import {getCustomerNameSchema, importCampaignsSchema, listAccessibleCustomersSchema} from '../schema/google.schema';

export default async function (fastify: FastifyInstance) {
  fastify.post('/import-campaigns', { schema: importCampaignsSchema }, importCampaigns);
  fastify.post('/list-accessible-customers', { schema: listAccessibleCustomersSchema }, listAccessibleCustomers);
  fastify.post('/get-customer-name', { schema: getCustomerNameSchema }, getCustomerName);

}
