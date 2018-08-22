const {
      GraphQLList,
      GraphQLString,
      GraphQLInt,
      GraphQLID
    } = require('graphql')
const {statementType}  = require('../type/statementType')
const {addStatementResolver,resolveAddStatement} = require('../resolver/statement')

const addStatement = {
  type: new GraphQLList(statementType),
  args:{
    title:{
      type:GraphQLString
    },
    price:{
      type:GraphQLInt
    },
    description:{
      type:GraphQLString
    },
    timestamp:{
      type:GraphQLID
    }
  },
  reslove: (_,args) => {
    return new Promise((resolve,reject) => {
        resolveAddStatement(args,data => {
        resolve(data)
      })
    })
  }
}

module.exports = {
  addStatement
}