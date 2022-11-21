import React from 'react'
import Card from './Card'
import Follower from './Follower'

export default function User() {
  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-6'>
          <Card />
        </div>
        <div className='col-md-6'>
          <Follower />
        </div>
      </div>
    </div>
  )
}
