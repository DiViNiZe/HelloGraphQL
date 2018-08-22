const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLID
} = require('graphql')

const  statementType = new GraphQLObjectType({
   name: 'statement',
   fields: () => ({
     _id:{
      type: GraphQLID
     },
     price:{
       type:GraphQLString
     },
     price:{
       type: GraphQLInt
     },
     description:{
       type:GraphQLString
     },
     timestamp:{
       type: GraphQLID
     }
   })
 })

 module.exports = {
   statementType
 }