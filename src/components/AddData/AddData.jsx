import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddData = () => {
    const [data, setData]  =useState({book:'', price:''})
    const SubmitData  = async()=>{
        let response = await axios.post('http://localhost:5000/', data)
    }
  return (
    <div>
        <input type="text" value={data.book}  id='book' onChange={(e)=>setData({...data,[e.target.id]:e.target.value})}/>
        <input type="text" value={data.price}  id='price' onChange={(e)=>setData({...data,[e.target.id]:e.target.value})}/>
        <button onClick={SubmitData}>Submit Data</button>
    </div>
  )
}

export default AddData