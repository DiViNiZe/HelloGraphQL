import React from 'react'
import { Mutation,ApolloConsumer } from 'react-apollo'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const ADD_STATEMENT = gql`
mutation($title: String,$price: Float,$description: String){
  addStatement(title:$title,price: $price,description: $description){
    _id,
    title,
    price,
    description
  }
}`

export default class Form extends React.Component{
  constructor(){
    super()
    this.state={title:'',price:0.00,description:'',data:{}}
  }

   render() {
    return (
      <ApolloConsumer query={GET_TITLE}>
        {(client) => (
          <Mutation mutation={ADD_STATEMENT}>
          {(addStatement) => (
            <div className='row' >
              <div className='col-2'>
                <input type="text" className="form-control" onChange={(e) => {
                  this.setState({title:e.target.value})
                }} id='title' placeholder="Title" />
              </div>
              <div className='col-2'>
                <input type="text" className="form-control" id='price' onChange={(e) => {
                  this.setState({price:e.target.value})
                }}  placeholder="amount" />
              </div>
              <div className='col-6'>
                <input type="text" className="form-control" id='description' onChange={(e) => {
                    this.setState({description:e.target.value})
                }}  placeholder="description" />
              </div>
              <div className='col-2'>
                <input type="submit"  className="btn btn-success" onClick={e => {
                  e.preventDefault()
                  console.log(addStatement({variables:{title:this.state.title,price:this.state.price,description:this.state.description}}).then(data => {
                    this.props.handel()
                    this.props.refetch()
                  }))
                }} placeholder="description" />
              </div>
          </div>
          )}
        </Mutation>
        )}
      </ApolloConsumer>
      
    )
  }
}