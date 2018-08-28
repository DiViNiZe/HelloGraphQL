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

const forceResolveStatementByTitle = ({title},callback) => {
  Statement.find({'title':{'$regex':title}},(err,result) => {
    if(err){
      callback(err)
    }else{
      callback(result)
    }
  })
}

const resolveDeleteStatementByTitle = ({title},callback) => {
  Statement.deleteOne({'title':title},(err,result) => {
    if (err) {
      callback(err)
    } else {
      callback(result)
    }
  })
}

const resolveDeleteStatementByID = ({_id},error) => {
  Statement.deleteOne(new Object({"_id" : _id}), err => {
    if(err){
      error(err)
    }else{
      error(null)
    }
  })
}

module.exports = {
  resolveStatement,
  resolveAddStatement:addStatement,
  resolveStatementByTitle,
  resolveDeleteStatementByTitle,
  forceResolveStatementByTitle,
  resolveDeleteStatementByID
}