// schema/google.schema.ts

export const importCampaignsSchema = {
  tags: ['Google Ads'],
  description: 'Import Google Ads campaigns',
  body: {
    type: 'object',
    required: ['refreshToken'],
    properties: {
      refreshToken: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        campaigns: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              status: { type: 'string' },
              start_date: { type: 'string' },
              end_date: { type: 'string' },
            },
          },
        },
      },
    },
    400: { $ref: 'messageResponseSchema#' },
    500: { $ref: 'messageResponseSchema#' },
  },
};
