const {
      GraphQLList,
      GraphQLString,
      GraphQLInt,
      GraphQLFloat,
      GraphQLID
    } = require('graphql')
const {statementType}  = require('../type/statementType')
const {addStatementResolver,resolveAddStatement} = require('../resolver/statement')

const addStatement = {
  args:{
    title:{
      type:GraphQLString
    },
    price:{
      type:GraphQLFloat
    },
    description:{
      type:GraphQLString
    },
    timestamp:{
      type:GraphQLID
    }
  },
  type: statementType,
  resolve: (_,args) => {
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