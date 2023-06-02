import React from 'react'
import logo from '../assets/logo-black.png'
import { useRef } from 'react';
import { useContext, useState } from 'react';
import {Context} from '../utils/context';
import {useNavigate} from 'react-router-dom'
import newRequest from '../../utils/newRequest';

const Navbar = () => {
  const {handleClick, scrollToRefs} = useContext(Context)
  const navigate= useNavigate()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const [open, setOpen] = useState(false)

  const handleLogout = async()=>{
    try{
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser", null)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <nav className='bg-white w-full z-10 fixed border-b shadow-lg'>
      <div className='w-full px-10 pt-6 -mb-16' ref={scrollToRefs.ref5}>
        <div className='flex justify-between text-black'>
        <div className='relative bottom-12 cursor-pointer'><img src={logo} width='160px'/></div>
          <ul className='flex gap-12 ml-60'>
            <li className='cursor-pointer hover:text-purple-400' onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>handleClick('ref1')} className='cursor-pointer hover:text-purple-400'>About Us</li>
            <li onClick={()=>handleClick('ref2')} className='cursor-pointer hover:text-purple-400'>Services</li>
            <li onClick={()=>handleClick('ref3')} className='cursor-pointer hover:text-purple-400'>Complaints</li>
            {/* <li onClick={()=>handleClick('ref4')} className='cursor-pointer hover:text-purple-400'>Amenities</li> */}
            {/* <li onClick={()=>handleClick('ref6')} className='cursor-pointer hover:text-purple-400'>Gallery</li> */}
            <li onClick={()=>handleClick('ref7')} className='cursor-pointer hover:text-purple-400'>Contact Us</li>
          </ul>
          <div className='ml-16 mb-2'>{currentUser && <img src='https://img.freepik.com/premium-vector/cute-boy-avatar-illustration_637684-31.jpg?w=2000' width='40px' className='rounded-lg'/>}</div>
          <ul>
            
            <li>{currentUser ? <span onClick={()=>setOpen(!open)} className='cursor-pointer'>{currentUser?.name}</span> : <button className = "w-48" onClick={()=>navigate('/login')}>Login | SignUp</button>}</li>
            {open && <div className='bg-purple-700 opacity-80 w-24 ml-4 rounded-lg mt-2'>
                {currentUser && <span className='text-white cursor-pointer pl-6' onClick={handleLogout}>Logout</span>}
              </div>
              }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar