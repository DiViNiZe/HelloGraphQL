// import { GraphQLObjectType } from 'graphql'
// import {getStatement} from './statement.mjs'
const { GraphQLObjectType } = require('graphql')
const {getStatement} = require('../query/statement')
const rootQuery = new GraphQLObjectType({
  name:'rootOfAllQuery',
  description:'All Query will be store here',
  fields: () => ({
    getStatement: getStatement
  })
})

module.exports = {
  rootQuery
}