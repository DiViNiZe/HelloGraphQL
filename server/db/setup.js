const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/graphql')
const db = mongoose.connection
db.on('error',console.error.bind(console, 'connection Error:'))
db.once('open', ()=>{
  console.log('DB Connected!!!!')
})

const Statement = mongoose.model('statement',
{
  title:String,
  price:Number,
  description:String,
  timestamp:Number
})

module.exports = {
  Statement
}

