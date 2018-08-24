// import {GraphQLSchema} from 'graphql'
// import {rootQuery} from '../query/rootQuery.mjs'
const {GraphQLSchema} = require('graphql')
const {rootQuery} = require('../query/rootQuery')
const {rootMutation} = require('../mutation/rootMutaion')
const schema =  new GraphQLSchema(
  {
    query:rootQuery,//ObjectType
    mutation:rootMutation//ObjectType
  }
)
console.log('Use Schema.js',schema)
module.exports = {
  schema
}