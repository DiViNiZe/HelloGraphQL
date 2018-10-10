import React from 'react'
import {graphql,Query,Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'
import Form from '../../component/form'

const GET_STATEMENT = gql`
query($skip: Int){
  getStatement(skip:$skip) {
    _id
    title
    price
    description
    timestamp
  }
}  
`

var  skip = 0


const DELETE_STATEMENT = gql`
mutation($id: String){
  deleteStatementByID(_id:$id)
}
`

class Page extends React.Component{

  constructor(){
    super()
    this.state = {
      loading:true,
      statements:[{}]
    }
  }

  // componentDidMount() {
  //   this.setState({statements:this.props.data.getStatement})
  // }

  render () {
    const handelChangedata = () => {
      this.setState({loading:!this.state.loading})
    }

    return(
      <div>
      <h1>Hi Graph</h1>
      <Query query={GET_STATEMENT} variables={{skip:skip}}>
        { (getStatement) => (
          <div>
            {console.log(getStatement)}
            <Form refetch={getStatement.refetch} handel={handelChangedata}/>
            {getStatement.data.getStatement.map((statement,i) => (
                <div className='row' key={i} style={{marginTop:'6px'}}>
                  <div className='col-3'>{statement.title}</div>
                  <div className='col-2'>{statement.price}</div>
                  <div className='col-3'>{statement.description}</div>
                  <div className='col-2'>{moment(parseInt(statement.timestamp)).format("D MMM YY")}</div>
                  <div className='col-2'> 
                    <Mutation mutation={DELETE_STATEMENT}>
                      {(deleteStatement) => (
                        <button type='button' className='btn btn-danger btn-sm' onClick={(e) => {
                          console.log(deleteStatement({variables:{id:statement._id}}))
                          getStatement.refetch()
                        }}>
                          <span className='glyphicon glyphicon-repeat'></span>X 
                        </button>
                      )}
                    </Mutation>
                  </div>
               </div>
            ))}
            <div style={{display:'flex',justifyContent:'center'}}>
              <button className='btn btn-success' onClick={()=>{
                if(skip==0){
                  skip=0
                }else{
                  skip-=5
                }
                getStatement.refetch({skip:skip})
              }}>{'< prev'}</button>
              <button className='btn btn-success' style={{marginLeft:'3px'}} onClick={()=>{
                skip+=5
                getStatement.refetch({skip:skip})
              }}>{'Next >'}</button>
            </div>
          </div>
        )}
      </Query>
    </div>
     )
  }
}
export default Page