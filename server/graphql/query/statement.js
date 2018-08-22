// import {GraphQLList} from 'graphql'
// import { statementType } from '../type/statementType.mjs'
// import { resloveStatement } from '../resolver/statement.mjs'

const {GraphQLList} = require('graphql')
const {statementType} = require('../type/statementType')
const {resolveStatement} = require('../resolver/statement')

const getStatement = {
  type: new GraphQLList(statementType),
  resolve:async (_,args) => {
    return new Promise((reslove,reject) => {
      resolveStatement  (data => {
        reslove(data)
      })
    })
  }
}

module.exports = {
  getStatement
}