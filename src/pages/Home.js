import React from 'react'
import { Info, Navbar, Repos, Search, User } from '../components'
import { GlobalContextFunc } from '../GlobalState'
import image from '../images/preloader.gif'
import styled from 'styled-components'

export default function Home() {
  const { loading } = GlobalContextFunc()
  if (loading) {
    return (
      <div>
        <Navbar />
        <Search />
        <ImageWrapper>
          <img src={image} alt='Loader-gif' className='imgClass' />
        </ImageWrapper>
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </div>
  )
}

const ImageWrapper = styled.div`
  img.imgClass {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
`
