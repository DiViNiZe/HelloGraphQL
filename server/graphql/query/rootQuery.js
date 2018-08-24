// import { GraphQLObjectType } from 'graphql'
// import {getStatement} from './statement.mjs'
const { GraphQLObjectType } = require('graphql')
const {getStatement,test} = require('../query/statement')
const rootQuery = new GraphQLObjectType({
  name:'rootQuery',
  description:'All Query will be store here',
  fields: () => ({
    getStatement: getStatement,
    test:test
  })
})

module.exports = {
  rootQuery
}