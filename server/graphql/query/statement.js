// import {GraphQLList} from 'graphql'
// import { statementType } from '../type/statementType.mjs'
// import { resloveStatement } from '../resolver/statement.mjs'

const {GraphQLList,
GraphQLString} = require('graphql')
const {statementType} = require('../type/statementType')
const {resolveStatement} = require('../resolver/statement')

const test = {
  type: GraphQLString,
  resolve: (_,args) => {
    return new Promise((resolve,reject) => {
      resolve('Test')
    })
  }
}

const getStatement = {
  type: new GraphQLList(statementType),
  resolve: (_,args) => {
    return new Promise((reslove,reject) => {
      resolveStatement  (data => {
        reslove(data)
      })
    })
  }
}

module.exports = {
  getStatement:getStatement,
  test:test
}