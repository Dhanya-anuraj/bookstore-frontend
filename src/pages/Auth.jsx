import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <>
    <div className='auth'>
      <div className='flex justify-center items-center'>
        <div className="md:grid grid-cols-3 w-full">
           <div></div>
           <div className='flex justify-center items-center flex-col mt-20  w-full md:px-10 px-5'>
             <h1 className='text-2xl font-bold md:text-white'>BOOK STORE</h1>
             <form className='w-full bg-gray-900 p-5 rounded mt-10 '>
                <div className='flex justify-center items-center flex-col'>
                  <span className='border border-white p-4 flex items-center justify-center'style={{width:"80px", height:"80px", borderRadius:"50%"}}><FontAwesomeIcon icon={faUser} className='fa-2x text-white' /></span>
                  {register?<h2 className='text-white mt-4 text-xl'>Register</h2>:
                  <h2 className='text-white mt-4 text-xl'>Login</h2>}
                </div>

                 { register && <div className='mb-3 mt-3'>
                  <input type="text" placeholder='Username' className='p-2 rounded placeholder-gray-500 bg-white w-full'/>
                </div>
}

                <div className='mb-3 mt-3'>
                  <input type="email" placeholder='Email Id' className='p-2 rounded placeholder-gray-500 bg-white w-full'/>
                </div>
                <div className='mb-3'>
                   <input type="password" placeholder='Password' className='p-2 rounded placeholder-gray-500 bg-white w-full'/>
                </div>
                <div className="mb-3 w-full flex justify-between items-center">
                  <p className='text-amber-400' style={{fontSize:"10px"}}>*Never share your password with others</p>
                  {!register && <p className='text-white underline' style={{fontSize:"10px"}}>Forget Password?</p>}
                </div>

                {register?<div className="mb-3 w-full">
                  <button className='bg-green-900 text-white w-full rounded px-3 py-2'>Register</button>
                </div>
                   :
                <div className="mb-3 w-full">
                  <button className='bg-green-900 text-white w-full rounded px-3 py-2'>Login</button>
                </div>}
                 <p className='text-white text-center mt-3'>----------------- or -----------------</p>
                {!register && <div className="mb-3 w-full">
                  <button className='bg-white text-black px-3 py-2 w-full rounded mt-3' >Sign in with google</button>
                </div>}

                {!register?<p className='text-white text-center '>Are you a New User ?<Link to={'/register'} className='text-blue-700 underline ms-2'> Register</Link></p>:
                <p className='text-white text-center '>Are you already a User ? <Link to={'/login'} className='text-blue-700 underline ms-2'>Login</Link></p>}

             </form>
           </div>
           <div></div>
        </div>

      </div>

    </div>

    </>
  )
}

export default Auth
