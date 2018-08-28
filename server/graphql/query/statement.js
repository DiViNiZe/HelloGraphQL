const {GraphQLList,
GraphQLString} = require('graphql')
const {statementType} = require('../type/statementType')
const {resolveStatement,
resolveStatementByTitle} = require('../resolver/statement')

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

const getStatementByTitle = {
  args:{
    title:{
      type:GraphQLString
    }
  },
  type:new GraphQLList(statementType),
  resolve:(_,args) => {
    return new Promise((resolve,reject) => {
      resolveStatementByTitle(args,data => {
        resolve(data)
      })
    })
  }
}

const forceGetStatementByTitle = {
  args:{
    title:{
      type: GraphQLString
    }
  },
  type:new GraphQLList(statementType),
  resolve: (_,args) => {
    return new Promise((resolve,reject) => {
      forceGetStatementByTitle(args, data => {
        resolve(data)
      })
    })
  }
}

module.exports = {
  getStatement:getStatement,
  test:test,
  getStatementByTitle
}

