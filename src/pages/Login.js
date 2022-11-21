import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <Wrapper>
      <div className='mainBox'>
        <div className='h1'>GitHub User</div>
        <div className='btnDiv'>
          {/* <div className='btn btn-primary text-uppercase'>Login</div> */}
          <button
            onClick={() => loginWithRedirect()}
            className='btn btn-danger'
          >
            Log In
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightblue;

  text-align: center;
  min-height: 100vh;
  width: 100vw;
  border-radius: 0px;
  .mainBox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
