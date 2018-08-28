const {GraphQLObjectType} = require('graphql')
const {addStatement,
deleteStatement} = require('./statement')
const rootMutation = new GraphQLObjectType({
  name:'rootMutation',
  description:'all mutation will be store here',
  fields: () => ({
    addStatement:addStatement,
    deleteStatement
  })
})

module.exports = {
  rootMutation
}