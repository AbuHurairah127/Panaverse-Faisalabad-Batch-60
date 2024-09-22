"use client"
import React, { useState } from 'react'
const Page = () => {
  let data = ""
  const [formData,setFormData] =useState("")
  return (
    <>
      <div>This is a page which is rendered at server side</div>
      <input className='border border-black rounded-lg mx-auto my-5 block px-1 py-0.5' placeholder='Your name here....' type='text' onChange={(e) => {
        data = e.target.value
        setFormData(e.target.value)
        console.log(data)
      }} />
      <button type='submit' className='bg-red-600 border border-black text-white rounded-lg p-2 px-5 block mx-auto'>Submit</button>
      <span>Data={formData}</span>
    </>
  )
}
export default Page