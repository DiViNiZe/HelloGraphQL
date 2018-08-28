const {GraphQLObjectType} = require('graphql')
const {
    addStatement,
    deleteStatement,
    deleteStatementByID
} = require('./statement')
const rootMutation = new GraphQLObjectType({
  name:'rootMutation',
  description:'all mutation will be store here',
  fields: () => ({
    addStatement:addStatement,
    deleteStatement,
    deleteStatementByID
  })
})

module.exports = {
  rootMutation
}