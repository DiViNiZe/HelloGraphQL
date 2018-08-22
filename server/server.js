//express Server
// import express from 'express'
const express = require('express')
const cors = require('cors')
const app = express()
const graphQLHTTP = require('express-graphql')
const {schema} = require('./graphql/schema/schema')
const PORT = process.env.port || 3030 //Port สำหรับ run GraphQLServer
app.use(cors())
app.use('/graphql',graphQLHTTP({
  schema: schema, //ยัด Schema ของเราใส่เข้าไปใน Server
  graphiql:true// GraphQL Debugger
}))
app.listen(PORT)
console.info("Server is Runing on localhost:",PORT)
