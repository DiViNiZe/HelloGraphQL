const {GraphQLSchema} = require('graphql')
const {rootQuery} = require('../query/rootQuery')
const {rootMutation} = require('../mutation/rootMutaion')
const schema =  new GraphQLSchema(
  {
    query:rootQuery,//ObjectType
    mutation:rootMutation//ObjectType
  }
)
module.exports = {
  schema
}