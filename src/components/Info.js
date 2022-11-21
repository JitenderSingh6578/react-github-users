import React from 'react'
import { GoRepo } from 'react-icons/go'
import { BsCodeSquare, BsFillPeopleFill, BsPerson } from 'react-icons/bs'
import { GlobalContextFunc } from '../GlobalState'
import styled from 'styled-components'

export default function Info() {
  const { user } = GlobalContextFunc()

  const { public_repos, followers, following, public_gists } = user

  const infoArr = [
    {
      id: 1,
      label: 'Repos',
      data: public_repos,
      icon: <GoRepo />,
    },
    {
      id: 2,
      label: 'Followers',
      data: followers,
      icon: <BsCodeSquare />,
    },
    {
      id: 3,
      label: 'Following',
      data: following,
      icon: <BsFillPeopleFill />,
    },
    {
      id: 4,
      label: 'Gists',
      data: public_gists,
      icon: <BsPerson />,
    },
  ]

  // console.log(infoArr)

  return (
    <Wrapper>
      <div className='my-2 container'>
        <div className='row'>
          {infoArr.map((arr, index) => {
            return (
              <div className='col-md-3 ' key={index}>
                <div className='innerDiv bg-light p-3'>
                  <div className='row'>
                    <div className='col-md-3 text-center iconDiv'>
                      {arr.icon}
                    </div>
                    <div className='col-md-9 pl-5'>
                      <div className='noData  h4'>{arr.data}</div>
                      <div className='dataLabel'>{arr.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .iconDiv {
    position: relative;
    top: 15px;
    left: 20px;
  }
`
