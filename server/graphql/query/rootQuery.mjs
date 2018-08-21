import { GraphQLObjectType } from 'graphql'
import {getStatement} from './statement.mjs'

export const rootQuery = new GraphQLObjectType({
  name:'rootOfAllQuery',
  description:'All Query will be store here',
  fields: () => ({
    getStatement: getStatement
  })
})