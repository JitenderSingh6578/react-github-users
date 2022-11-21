import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
import Protected from './components/Protected'
import { useAuth0 } from '@auth0/auth0-react'
import preloader from './images/preloader.gif'
import styled from 'styled-components'

function App() {
  // const isLoggedIn = true
  // const isLoggedIn = true
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <LoadingWrapper>
        <img src={preloader} className='loadingImgClass' />
      </LoadingWrapper>
    )
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Protected isAuthenticated={isAuthenticated}>
            <Home />
          </Protected>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App

const LoadingWrapper = styled.div`
  .loadingImgClass {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
