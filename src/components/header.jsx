import React from 'react'

export default function Header({setSearchQuery, user}) {

  return (
    <div className="header">
            <h1>DogFood</h1>
            <input type="search" name="search" id="search" className='search' onChange={e => setSearchQuery(e.target.value)}/>
            <div className='userInfo'>
              <img src={user.avatar} alt="" className='avatar'/>
              <p>{user.name}</p>
            </div>
    </div>
  )
}
