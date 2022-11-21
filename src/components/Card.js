import React from 'react'
import { GlobalContextFunc } from '../GlobalState'
import { CgWebsite } from 'react-icons/cg'
import { MdLocationPin } from 'react-icons/md'
import styled from 'styled-components'

export default function Card() {
  const { user } = GlobalContextFunc()

  const {
    name,
    twitter_username,
    bio,
    avatar_url,
    html_url,
    company,
    location,
    blog,
  } = user

  return (
    <Wrapper className='card m-5 p-5'>
      <div className='userHead'>User</div>
      <div className='userContent'>
        <div className='d-flex'>
          <div className='pic'>
            <img src={avatar_url} width='50px' />
          </div>
          <div className='nameTt mx-3'>
            <div className='h6'>{name}</div>
            <p>@{twitter_username}</p>
          </div>
          <div className='followBtn px-5'>
            <a href={html_url}>
              <div className='btn btn-primary'>Follow</div>
            </a>
          </div>
        </div>
        <div className='h6'>{bio}</div>
        <div className='compnay commone'>
          <CgWebsite />
          <span>{company}</span>
        </div>
        <div className='location commone'>
          <MdLocationPin />
          <span>{location}</span>
        </div>
        <div className='website commone'>
          <MdLocationPin />
          <span>
            <a href={blog}>{blog}</a>
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .userContent {
    padding: 20px;
  }
  .commone {
    padding: 5px 20px;
  }
  span {
    padding: 10px;
  }
`
