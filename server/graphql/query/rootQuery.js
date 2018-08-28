const { GraphQLObjectType } = require('graphql')
const {getStatement,test,getStatementByTitle} = require('../query/statement')
const rootQuery = new GraphQLObjectType({
  name:'rootQuery',
  description:'All Query will be store here',
  fields: () => ({
    getStatement: getStatement,
    test:test,
    getStatementByTitle
  })
})

module.exports = {
  rootQuery
}