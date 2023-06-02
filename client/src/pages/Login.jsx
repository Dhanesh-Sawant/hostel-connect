import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import newRequest from "../../utils/newRequest"


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate= useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const res = await newRequest.post("/auth/login",{
        username,
        password
      },
      {withCredentials:true})
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
    }catch(err){
      setError(err.response.data)
    }
    }

  return (
    <div className='bg-cover h-[580px]' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/elegant-restaurant-with-wooden-tables_1203-567.jpg?w=826&t=st=1685536697~exp=1685537297~hmac=fee269961c954c4f763162ae4de5f8fd1daae149fd62b589c9d342614624b911)' }}>
      <div className='flex pt-32 px-10 gap-16'>
        <div className='text-white w-1/2 px-16'>
          <h1 className='font-bold text-4xl mb-16'>Discover a Smarter Way to Stay at VIT Hostels</h1>
          <p>At VIT Hostel Management, we believe in making your experience hassle-free and convenient. That's why we have introduced our new housekeeping services platform, designed to provide you with a smarter way to manage your housekeeping needs. Sign up and gain exclusive access to a range of benefits</p>
        </div>
        <div className='w-1/3'>
            <div className='bg-white p-8 rounded-md shadow-lg shadow-purple-200'>
                <h1 className='text-2xl font-bold pb-8 text-center'>Login/SignUp</h1>
                <form className='border-black-100 px-4' onSubmit={handleSubmit}>
                  <label htmlFor="">Username</label>
                  <input type='text' name="username" placeholder='Your username' className='my-4 border-b-2 w-full outline-none' onChange={e=>setUsername(e.target.value)}></input>
                  <label htmlFor="">Password</label>
                  <input name="password" type='password' placeholder='Your password' className='my-4 border-b-2 w-full outline-none' onChange={e=>setPassword(e.target.value)}></input>
                  <button className='btn btn-lg bg-purple-400 rounded-md text-white text-center py-2 w-full mt-4' type="submit" >Login</button>
                  {error && error}
                </form>
                <p className='text-center mt-4 cursor-pointer underline' onClick={()=>navigate('/')}>Go to home page</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login