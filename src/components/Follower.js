import React from 'react'
import styled from 'styled-components'
import { GlobalContextFunc } from '../GlobalState'

export default function Follower() {
  const { follower } = GlobalContextFunc()
  //   console.log(follower)
  return (
    <Wrapper className='card m-5 p-5'>
      <div className='userHead'>Followers</div>
      <div className='followerListing'>
        {follower.map((arr, index) => {
          // console.log(arr)
          const { avatar_url: url, login, html_url } = arr
          return (
            <div className='list card m-2' key={index}>
              <div className='d-flex'>
                <div className='pic'>
                  <img src={url} width='50px' />
                </div>
                <div className='nameTt mx-3'>
                  <div className='h6'>{login}</div>
                  <p>{html_url}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .userHead {
    padding-bottom: 25px;
  }
  .followerListing {
    max-height: 200px;

    overflow-x: auto;
    white-space: nowrap;
  }
`
