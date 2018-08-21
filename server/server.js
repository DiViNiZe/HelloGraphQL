//express Server
// import express from 'express'
import graphqlHttp from 'express-graphql'
import cors from 'cors'

const app = express()
const PORT = process.env.port || 3030 //Port สำหรับ run GraphQLServer
app.use(cors())
app.use('/graphql',graphQLHTTP({
  schema: GraphQLSchema, //ยัด Schema ของเราใส่เข้าไปใน Server
  graphiql:true// GraphQL Debugger
}))
app.listen(PORT)
console.info("Server is Runing on localhost:",PORT)
