import { 
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLID
 } from 'graphql'

 export const  statementType = new GraphQLObjectType({
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
     timeStamp:{
       type: GraphQLInt
     }
   })
 })