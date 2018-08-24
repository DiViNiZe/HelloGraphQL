// import { statement } from '../../db/setup.mjs' 
const {Statement} = require('../../db/setup')

const resolveStatement = (callback) => {
  Statement.find((err,result) => {
    if(err){
      callback(err)
    }else{
      callback(result)
    }
  })
}

const addStatement =  (args,callback) => {
  const statement = new Statement({
    title:args.title,
    price:args.price,
    description:args.description,
    timestamp:args.timestamp
  })
  console.log('statement = ',statement.toString)
  statement.save((err,result) => {
    if(err){
      callback(err)
    }else{
      callback(result)
    }
  })
}

module.exports = {
  resolveStatement,
  resolveAddStatement:addStatement
}