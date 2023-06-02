import React from 'react'

const Carpenter = () => {
  return (
    <div>
        <h1 className='pt-32 pl-6 text-3xl text-center'>CARPENTRY COMPLAINT</h1>
        <div className='px-36'>
            <div className='bg-purple-200 rounded-lg p-8'>
            <h2 className='font-bold mb-8 pl-4'>Your Room no. is Q-609</h2>
            <form className='border-black-100 px-4'>
                  <label htmlFor=''>Timing</label>
                  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option className='text-gray-300'>select time</option>
                    <option>6:00 am - 8:00 am</option>
                    <option>12:00 am - 2:00 am</option>
                    <option>5:00 am - 7:00 am</option>
                  </select>
                  <label htmlFor="">Message</label>
                  <input name="password" type='password' placeholder='message' className='my-4 border-b-2 w-full outline-none'></input>
                  <button className='btn btn-lg bg-purple-400 rounded-md text-white text-center py-2 w-full mt-4' type="submit" >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Carpenter