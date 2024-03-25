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
// Add or update `schema/google.schema.ts` with a schema for the new endpoint
export const listAccessibleCustomersSchema = {
  tags: ['Google Ads'],
  description: 'List accessible Google Ads customer IDs and names',
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
        customers: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              resourceName: { type: 'string' },
              id: { type: 'string' }, // Include the ID
              name: { type: 'string', nullable: true }, // Include the name, which can be null
            },
          },
        },
      },
    },
    400: { $ref: 'messageResponseSchema#' },
    500: { $ref: 'messageResponseSchema#' },
  },
};
export const getCustomerNameSchema = {
  tags: ['Google Ads'],
  description: 'Get Google Ads customer name by ID',
  body: {
    type: 'object',
    required: ['refreshToken', 'customerId'],
    properties: {
      refreshToken: { type: 'string' },
      customerId: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
      },
    },
    400: { $ref: 'messageResponseSchema#' },
    500: { $ref: 'messageResponseSchema#' },
  },
};

