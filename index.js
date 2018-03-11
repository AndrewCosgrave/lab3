var express = require('express');
var graphqlHTTP = require('express-graphql');

//var  graphql = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = require('./schema.js'); 

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};



// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});

