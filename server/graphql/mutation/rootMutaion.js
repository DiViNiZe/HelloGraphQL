const {GraphQLObjectType} = require('graphql')
const {addStatement} = require('./statement')
const rootMutation = new GraphQLObjectType({
  name:'root of all mutation',
  description:' all mutation will be store here',
  fields: () => ({
    addStatement:addStatement
  })
})

module.exports = {
  rootMutation
}