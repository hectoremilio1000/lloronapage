/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducto = /* GraphQL */ `
  query GetProducto($id: ID!) {
    getProducto(id: $id) {
      id
      title
      category
      price
      img
      desc
      createdAt
      updatedAt
    }
  }
`;
export const listProductos = /* GraphQL */ `
  query ListProductos(
    $filter: ModelProductoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        category
        price
        img
        desc
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
