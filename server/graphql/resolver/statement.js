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
  let statement = new Statement({
    title:args.title,
    price:args.price,
    description:args.description,
    timestamp:args.timestamp
  })

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