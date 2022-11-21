import React from 'react'
import { GlobalContextFunc } from '../GlobalState'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0()

  console.log({ isAuthenticated, user, isLoading })

  return (
    <Wrapper className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            {isAuthenticated && (
              <li className='nav-item mr-3'>
                <img src={user.picture} className='imgProf' />
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item mr-3 pt-2'>Welcome, {user.name}</li>
            )}
            {isAuthenticated && (
              <li className='nav-item'>
                <a
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className='btn btn-primary text-white'
                >
                  Log Out
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .imgProf {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
`
