// import {GraphQLSchema} from 'graphql'
// import {rootQuery} from '../query/rootQuery.mjs'
const {GraphQLSchema} = require('graphql')
const {rootQuery} = require('../query/rootQuery')
const {rootMutation} = require('../mutation/rootMutaion')
const schema =  new GraphQLSchema({
  query:rootQuery,
  mutation:rootMutation
})

module.exports = {
  schema
}