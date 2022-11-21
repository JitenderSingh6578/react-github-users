import React from 'react'
import Languages from '../carts/Languages'
import TestingChart from '../carts/TestingChart'
import Stars from '../carts/Stars'
import Popular from '../carts/Popular'
import Fork from '../carts/Fork'

export default function Repos() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 card p-2'>
          <Languages />
        </div>
        <div className='col-md-8 card p-2'>
          <Popular />
        </div>
        <div className='col-md-4 card p-2'>
          <Stars />
        </div>
        <div className='col-md-8 card p-2'>
          <Fork />
        </div>
      </div>
    </div>
  )
}
