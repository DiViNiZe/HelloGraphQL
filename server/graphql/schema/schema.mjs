import {GraphQLSchema} from 'graphql'
import {rootQuery} from '../query/rootQuery.mjs'

export default new GraphQLSchema({
  query:rootQuery
})