import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const UserList = () => {
  let [userData, setUserData] = useState([])



  useEffect(async()=>{
    let response = await axios.get('http://localhost:5000/data')
      setUserData(response.data)
  },[])



  return (
    <div>
      {userData.map((item)=>{
        return(
          <div>
            <h1>{item.book}</h1>
            <p>{item.price}</p>
          </div>
        )
      })}

    </div>
  )
}

export default UserList