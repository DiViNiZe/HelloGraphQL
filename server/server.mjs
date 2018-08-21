//express Server
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema/schema.mjs'
import cors from 'cors'

const app = express()
const PORT = process.env.port || 3030 //Port สำหรับ run GraphQLServer
app.use(cors())
app.use('/graphql',graphqlHTTP({
  schema: schema, //ยัด Schema ของเราใส่เข้าไปใน Server
  graphiql:true// GraphQL Debugger
}))
app.listen(PORT)
console.info("Server is Runing on localhost:",PORT)
