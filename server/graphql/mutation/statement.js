const {
      GraphQLList,
      GraphQLString,
      GraphQLInt,
      GraphQLFloat,
      GraphQLID
    } = require('graphql')
const {statementType}  = require('../type/statementType')
const {resolveAddStatement,resolveDeleteStatementByTitle} = require('../resolver/statement')

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

 const deleteStatement = {
   args:{
     title:{
       type:GraphQLString
     }
   },
   type:new GraphQLList(statementType),
   resolve: (_,args) => {
     return new Promise((resolve,reject) => {
      resolveDeleteStatementByTitle(args,data => {
         resolve(data)
       })
     })
   }
 }

module.exports = {
  addStatement,
  deleteStatement
}