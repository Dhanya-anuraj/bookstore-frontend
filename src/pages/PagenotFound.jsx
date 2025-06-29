import React from 'react'
import { Link } from 'react-router-dom'

function PagenotFound() {
  return (
    <>
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='md:grid grid-cols-3 , md:px-0 px-10'>
         <div></div>
         <div className='flex justify-center items-center flex-col '>
            <img src="https://cdn.dribbble.com/userupload/21373125/file/original-f5e997f969963006e96ff5a9e7f7dbe9.gif" alt="no-image" />

            <p>oh No!</p>
            <h1  className='text-3xl font-semibold'>Look Like You're Lost</h1>
            <p>The page you are looking for its not available</p>

            <Link to={'/'}><button className='bg-purple-950 text-white px-3 py-2 rounded mt-5 hover:border hover:border-purple-950 hover:bg-white hover:text-purple-950 font-semibold'>Back Home</button></Link>
         </div>
         <div></div>
      </div>
    </div>

    </>
  )
}

export default PagenotFound
