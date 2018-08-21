import {GraphQLList} from 'graphql'
import { statementType } from '../type/statementType.mjs'
import { resloveStatement } from '../resolver/statement.mjs'

export const getStatement = {
  type: new GraphQLList(statementType),
  resolve:async (_,args) => {
    return new Promise((reslove,reject) => {
      resloveStatement(data => {
        reslove(data)
      })
    })
  }
}