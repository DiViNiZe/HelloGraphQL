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
    timestamp:new Date().getTime()
  })
  statement.save((err,result) => {
    if(err){
      callback(err)
    }else{
      callback(result)
    }
  })
}

const resolveStatementByTitle = ({title},callback) => {
  Statement.find({'title':title},(err,result) => {
    if (err) {
      callback(err)
    } else {
      callback(result)
    }
  })
}

const resolveDeleteStatementByTitle = (args,callback) => {
  Statement.deleteOne({'title':args.title},(err,result) => {
    if (err) {
      callback(err)
    } else {
      callback(result)
    }
  })
}

module.exports = {
  resolveStatement,
  resolveAddStatement:addStatement,
  resolveStatementByTitle,
  resolveDeleteStatementByTitle
}