import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'
import { GlobalContextFunc } from '../GlobalState'

export default function Search() {
  const { request, searchUser, loading, found } = GlobalContextFunc()

  const [search, setSearch] = useState('')
  const [msg, setMsg] = useState({ show: false, msg: '' })

  const formSubmit = (e) => {
    setMsg({
      show: false,
      msg: '',
    })
    e.preventDefault()
    // console.log('Asdf')
    if (!request) {
      setMsg({
        show: true,
        msg: 'Sorry, you have exceeded limit of request number allowed per hour.',
      })
    } else {
      searchUser(search)
    }
    setSearch('')
  }

  return (
    <Wrapper>
      <div className='my-2 '>
        <div className='container'>
          {!found && (
            <div className='my-2 text-danger'>
              No user found with this search.
            </div>
          )}
          {msg.show ? <div className='my-2 text-danger'>{msg.msg}</div> : ''}
          <div className='row'>
            <div className='col-md-8'>
              <form onSubmit={formSubmit}>
                <div className='form-group'>
                  <input
                    type='emtextail'
                    className='form-control'
                    id='exampleInputEmail1'
                    placeholder='Enter Github User'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {request && !loading ? (
                    <button type='submit' className='searchBtn'>
                      <BsSearch />
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </form>
            </div>
            <div className='col-md-4'>
              <span className='h4'>Requests : {request} / 60</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  button.searchBtn {
    position: absolute;
    right: 25px;
    top: 4px;
    border: 0px;
    background: transparent;
  }
`
