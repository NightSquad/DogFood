import React, { useState, useEffect } from 'react'

export default function Header({setSearchQuery}) {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('https://api.react-learning.ru/v2/:groupId/users/me', {
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
    })
    .then(res => res.json())
    .then((result) => {
        setUser(result)
    });
    }, [])

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
