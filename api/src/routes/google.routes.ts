// routes/google.routes.ts

import { FastifyInstance } from 'fastify';
import { importCampaigns } from '../controllers/google.controller';
import { importCampaignsSchema } from '../schema/google.schema';

export default async function (fastify: FastifyInstance) {
  fastify.post('/import-campaigns', { schema: importCampaignsSchema }, importCampaigns);
}
