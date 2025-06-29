import React from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'

function Allbooks() {
  return (
    <>
    <Header/>
      <h1 className='text-center text-2xl font-semibold mt-10'>Collections</h1>
        <div className="grid grid-cols-3 w-full">
            <div></div>
            <div className='flex justify-center items-center mt-8 w-full'>
                <input type="text" placeholder='Search by title' className='placeholder-gray-500 border border-gray-500 px-3 py-2 w-full' />
                <button className='bg-blue-700 px-8 py-2 border text-white'>Search</button>
            </div>
            <div></div>
        </div>

        

    <Footer/>
    
    </>
  )
}

export default Allbooks
