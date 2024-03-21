/*
* Some types used mostly to extract data from:
* - Request parameters
* - POST body
* - Query string
*/

type CrudAllRequest = {
  Querystring: {
    take: number;
    from?: string;
  }
}

type CrudIdRequest = {
  Params: {
    id: string;
  }
};


