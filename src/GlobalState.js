import React, { createContext, useContext, useEffect, useState } from 'react'
// import MockFollowers from './mockData.js/MockFollowers'
// import MockRepos from './mockData.js/mockRepos'
// import MockUser from './mockData.js/mockUser'
import mockFollowers from './mockData.js/mockFollowers'
import mockRepos from './mockData.js/mockRepos'
import mockUser from './mockData.js/mockUser'
import axios from 'axios'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  // Actions for changing state
  const [follower, setFollower] = useState(mockFollowers)
  const [repos, setRepos] = useState(mockRepos)
  const [user, setUser] = useState(mockUser)

  const [request, setRequest] = useState(0)

  const [loading, setLoading] = useState(false)

  const [found, setFound] = useState(true)

  const checkRequest = async () => {
    axios
      .get('https://api.github.com/rate_limit')
      .then((response) => {
        // console.log(response)
        // setPost(response.data)
        setRequest(response.data.rate.remaining)
        // setRequest(0)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const searchUser = async (user) => {
    setFound(true)
    setLoading(true)
    // console.log('asdf', user)
    let url = `https://api.github.com/users/${user}`
    axios
      .get(url)
      .then((response) => {
        // console.log('response =', response.data)

        setUser(response.data)
        if (response.data) {
          let repoUrl = `${response.data.repos_url}?per_page=100`
          // axios.get(repoUrl).then((response) => {
          //   setRepos(response.data)
          // })
          let followUrl = `${response.data.followers_url}?per_page=100`
          // axios.get(followUrl).then((response) => {
          //   setFollower(response.data)
          // })
          Promise.allSettled([axios.get(repoUrl), axios.get(followUrl)]).then(
            ([repo, follower]) => {
              let status = 'fulfilled'
              // console.log('repo = ', repo)
              // console.log('follower = ', follower)
              if (repo.status === status) {
                // console.log(repo.value.data)
                setRepos(repo.value.data)
              }
              if (follower.status === status) {
                // console.log(follower.value.data)
                setFollower(follower.value.data)
              }
            }
          )
          // console.log('sdf11')
        } else {
          // console.log('aa11')
        }
      })
      .catch((error) => {
        console.log('error =', error)
        // console.log(error)
        setFound(false)
      })
    checkRequest()
    setLoading(false)
  }

  useEffect(() => {
    checkRequest()
  }, [])

  // console.log('follower =', follower)
  // console.log('repos =', repos)
  // console.log('user =', user)
  // setRequest(2)

  const value = {
    follower,
    repos,
    user,
    request,
    searchUser,
    loading,
    checkRequest,
    found,
  }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export const GlobalContextFunc = () => {
  return useContext(GlobalContext)
}
