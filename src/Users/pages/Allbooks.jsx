import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Allbooks() {
  const [filterStatus, setFilterStatus] = useState(false)
  return (
    <>
      <Header />
      {/* when the user is logged in */}
    <div>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-center text-2xl font-semibold mt-10'>Collections</h1>
          <div className='flex  items-center my-8 md:w-1/4 1/2'>
            <input type="text" placeholder='Search by title' className='placeholder-gray-300 border border-gray-300 px-3 py-2 w-full shadow' />
            <button className='bg-blue-900 px-5 py-2 text-white hover:border hover:border-blue-900 hover:bg-white hover:text-blue-900'>Search</button>
          </div>
        </div>
  
        <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5">
          <div>
            <div className='mt-4 flex justify-between items-center'>
              <h1 className='text-xl font-medium'>Filters</h1>
              <span className='md:hidden'><FontAwesomeIcon icon={faBars} className='text-xl ' onClick={() => setFilterStatus(!filterStatus)} /></span>
            </div>
  
            <div className={filterStatus ? `block` : `md:block hidden`}>
              <div className='mt-3 '>
                <input type="radio" name="filter" id='Literary' />
                <label htmlFor="Literary" className='ms-2'>Literary Fiction</label>
              </div>
              <div className='mt-2 '>
                <input type="radio" name="filter" id='Philosophy' />
                <label htmlFor="Philosophy" className='ms-2'>Philosophy</label>
              </div>
              <div className='mt-2 '>
                <input type="radio" name="filter" id='Romance' />
                <label htmlFor="Romance" className='ms-2'>Romance</label>
              </div>
              <div className='mt-2 '>
                <input type="radio" name="filter" id='Horror' />
                <label htmlFor="Horror" className='ms-2'>Horror</label>
              </div>
              <div className='mt-2 '>
                <input type="radio" name="filter" id='Biography' />
                <label htmlFor="Biography" className='ms-2'>Auto/Biography</label>
              </div>
              <div className='mt-2 '>
                <input type="radio" name="filter" id='Self-Help' />
                <label htmlFor="Self-Help" className='ms-2'>Self-Help</label>
              </div>
              <div className='mt-2 '>
                <input type="radio" name="filter" id='Politics' />
                <label htmlFor="Politics" className='ms-2'>Politics</label>
              </div>
  
            </div>
          </div>
  
          <div>
            <div className="md:grid grid-cols-4 w-full  my-5">
              <div className='p-4 shadow-md mt-4 '>
                <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{ width: "100%", height: "300px" }} />
                <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-600'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <button className='bg-blue-900 px-4 py-2 mt-5 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 w-full'>$18</button>
                </div>
              </div>
              <div className='p-4 shadow-md mt-4 '>
                <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{ width: "100%", height: "300px" }} />
                <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-600'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <button className='bg-blue-900 px-4 py-2 mt-5 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 w-full'>$18</button>
                </div>
              </div>
              <div className='p-4 shadow-md mt-4'>
                <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{ width: "100%", height: "300px" }} />
                <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-600'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <button className='bg-blue-900 px-4 py-2 mt-5 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 w-full'>$18</button>
                </div>
              </div>
              <div className='p-4 shadow-md mt-4'>
                <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{ width: "100%", height: "300px" }} />
                <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-600'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <button className='bg-blue-900 px-4 py-2 mt-5 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 w-full'>$18</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
    </div>

    {/* not logged in  */}

    {/* <div className="md:grid grid-cols-3 py-30">
      <div></div>
      <div className='flex justify-center items-center flex-col w-full'>
        <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="no-image" className='w-1/2'  />
        <p className='md:text-xl mb-2'>Please <Link to={'/login'} className='text-red-700 underline'>Login</Link> to Explore More</p>
      </div>
      <div></div>
    </div> */}

      <Footer />

    </>
  )
}

export default Allbooks
