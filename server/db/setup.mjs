import {Mongoose} from 'mongoose'
mongoose.connect('mongodb://localhost:27017/graphql')
const db = mongoose.connection
db.on('error',console.error.bind(console, 'connection Error:'))
db.once('open', ()=>{
  console.log('DB Connected!!!!')
})

export const statement = mongoose.model('statement',
{
  title:String,
  price:Number,
  description:String,
  timeStamp:Number
})