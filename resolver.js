const psql = require('./database').psql; // 

// should match type Query in schema.js
// one function per endpoint
exports.resolver = {
  const root = {
	  getProduct: function(){
		const productsQuery = 'SELECT title FROM postgraphile.products';
		return psql.manyOrNone(productsQuery);
	  }
  }
};