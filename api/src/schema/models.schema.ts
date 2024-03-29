/*
* Some global schemas, representing our stuff from the Database.
* These will be used mostly when serializing data in our responses.
*
* See More: https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
*/

export const categorySchema = {
  $id: 'categorySchema',
  type: 'object',
  // required: ['name'],
  nullable: true,
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: ['string', 'null'], format: 'date-time' },
    products: { type: 'array', items: { $ref: 'productSchema#' } },
  },
};


