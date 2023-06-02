import React from 'react'
import { useState } from 'react'

const Cleaning = () => {
  
    const [time, setTime] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
          const res = await newRequest.post("/complaint/login",{
            time,
            message
          },
          {withCredentials:true})
          navigate("/")
        }catch(err){
          setError(err.response.data)
        }
        }

    return (
    <div>
        <h1 className='pt-32 pl-6 text-3xl text-center mb-4'>ROOM CLEANING</h1>
        <div className='px-36'>
            <div className='bg-purple-200 rounded-lg p-8'>
            <h2 className='font-bold mb-8 pl-4'>Your Room no. is Q-609</h2>
            <form className='border-black-100 px-4' onSubmit={handleSubmit}>
                  <label htmlFor=''>Timing</label>
                  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline py-2 mb-4 mt-2" name='time' onChange={e=>setTime(e.target.value)}>
                    <option className='text-gray-300 pl-4'>select time</option>
                    <option>6:00 am - 8:00 am</option>
                    <option>12:00 am - 2:00 am</option>
                    <option>5:00 am - 7:00 am</option>
                  </select>
                  <label htmlFor="">Message</label>
                  <input name="message" type='text' placeholder='message' className='my-4 border-b-2 w-full outline-none pl-4 py-2' onChange={e=>setTime(e.target.value)}></input>
                  <button className='btn btn-lg bg-purple-400 rounded-md text-white text-center py-2 w-full mt-4' type="submit" >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Cleaning