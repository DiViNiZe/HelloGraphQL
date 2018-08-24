const {GraphQLObjectType} = require('graphql')
const {addStatement} = require('./statement')
const rootMutation = new GraphQLObjectType({
  name:'rootMutation',
  description:'all mutation will be store here',
  fields: () => ({
    addStatement:addStatement
  })
})

console.log('Use Rootmutation')


module.exports = {
  rootMutation
}