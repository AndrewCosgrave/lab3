
var  graphql = require('graphql');
const productType = new graphql.GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
  }
});
const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    product: {
      type: productType,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: function (_, {id}) {
        const productsQuery = 'SELECT title FROM postgraphile.products';
		return psql.manyOrNone(productsQuery);
      }
    }
  }
});
const schema = new graphql.GraphQLSchema({query: queryType});
