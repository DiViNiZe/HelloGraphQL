const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLFloat
} = require('graphql')

const  statementType = new GraphQLObjectType({
   name: 'statement',
   fields: () => ({
     _id:{
      type: GraphQLID
     },
     title:{
       type:GraphQLString
     },
     price:{
       type: GraphQLFloat
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