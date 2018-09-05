import React from 'react'
import {graphql,Query} from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'
import Form from '../../component/form'

const statement = gql`
query{
  getStatement {
    _id
    title
    price
    description
    timestamp
  }
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

  componentDidMount() {
    this.setState({statements:this.props.data.getStatement})
  }

  render () {
    const handelChangedata = () => {
      this.setState({loading:!this.state.loading})
    }

    return(
      <div>
      <h1>Hi Graph</h1>
      <Query query={statement}
          >
        {({data,refetch}) => (
          <div>
            <Form refetch={refetch} handel={handelChangedata}/>
            {data.getStatement.map((statement,i) => (
                <div className='row' key={i}>
                  <div className='col-3'>{statement.title}</div>
                  <div className='col-2'>{statement.price}</div>
                  <div className='col-5'>{statement.description}</div>
                  <div className='col-2'>{moment(parseInt(statement.timestamp)).format("D MMM YY")}</div>
               </div>
            ))}
          </div>
        )}
      </Query>
    </div>
     )
  }
}

export default graphql(statement, {
  options: {
    variables: {
      skip: 0,
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(Page)