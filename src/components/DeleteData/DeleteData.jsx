import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const DeleteData = () => {
    const DeleteLastBook=async()=>{
        let response = await axios.delete('http://localhost:5000/')
        console.log(response)
    }


  return (
    <div>
        <button onClick={DeleteLastBook}>Delete last book</button>
    </div>
  )
}

export default DeleteData