const {
      GraphQLList,
      GraphQLString,
      GraphQLInt,
      GraphQLFloat,
      GraphQLBoolean,
      GraphQLID
    } = require('graphql')
const {statementType}  = require('../type/statementType')
const {resolveAddStatement,resolveDeleteStatementByTitle,resolveDeleteStatementByID} = require('../resolver/statement')

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

 const deleteStatementByID = {
   args:{
     _id:{
       type:GraphQLString
     }
   },
   type:GraphQLString,
   resolve: (_,args) => {
      return new Promise((resolve,reject) => {
        resolveDeleteStatementByID(args,error => {
          resolve(error)
        })
      })
   }
 }

module.exports = {
  addStatement,
  deleteStatement,
  deleteStatementByID
}