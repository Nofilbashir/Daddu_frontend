import React from 'react'
import './Header.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const Header = () => {

  const [user, setUser] = useState({name:'', age:''})



  useEffect(async()=>{
    let response = await axios.get('http://localhost:5000/')
    console.log(response.data)
    setUser(response.data)
  },[])

  return (
    <div className='Header'>
        <div className="Header_left">
            <h4>Nofil Application</h4>
        </div>
        <div className="Header_right">
            <p className="icon">
                {user.name.slice(0,1)}
            </p>
            <h5 className='name'>{user.name}</h5>
            <h5 className='name'>{user.age}</h5>
        </div>

    </div>
  )
}

export default Header