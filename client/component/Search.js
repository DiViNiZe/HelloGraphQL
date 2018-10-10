import React from 'react'

export default class Search extends React.components{
  render (){
    return (
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    )
  }
}
