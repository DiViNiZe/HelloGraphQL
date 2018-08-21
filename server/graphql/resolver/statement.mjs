import { statement } from '../../db/setup.mjs' 

export const resloveStatement = (callback) => {
  statement.find((err,result) => {
    if(err){
      callback(err)
    }else{
      callback(result)
    }
  })
}