import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faL } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../Components/EditProfile'

function Profile() {

  const [sellStatus, setSellStatus] = useState(true)
  const [bookStatus, setbookStatus] = useState(false)
  const [purchaseStatus, setpurchaseStatus] = useState(false)


  return (
    <>
     <Header/>
       <div style={{height:"200px"}} className='bg-gray-950'></div>
       <div style={{width:"230px", height:"230px",borderRadius:"50%", marginTop:"-110px", marginLeft:"70px"}} className='bg-white p-3'>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="no-image" style={{width:"200px", height:"200px",borderRadius:"50%"}} />
       </div>
       <div className='md:flex justify-between items-center px-20 mt-3'>
          <p className='flex justify-center items-center'><span className='md:text-2xl text-xl'>Dhanya Anuraj <FontAwesomeIcon icon={faCircleCheck} style={{color: "#075ced",}} className='text-sm ms-2' /></span></p>

          <EditProfile/>
          
       </div>
       <p className='md:px-20 px-5 text-justify my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel molestiae accusamus et laborum itaque ipsum hic culpa distinctio illo praesentium quibusdam commodi temporibus ipsam nemo, architecto, exercitationem eos. Cumque nisi fugiat aliquam voluptatum asperiores, odio architecto maiores reprehenderit quos explicabo facilis nihil dolor, quia sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto.</p>

       <div className='md:px-40'>
        {/* tab */}
        <div className='flex justify-center items-center my-5'>
          <p onClick={()=>{setSellStatus(true); setbookStatus(false); setpurchaseStatus(false)}}  className={sellStatus? `p-4 text-blue-600  border-l border-t border-r  border-gray-200 rounded cursor-pointer`: `p-4 border-b border-gray-200 text-black  cursor-pointer`}>SellBook</p>
          <p onClick={()=>{setSellStatus(false); setbookStatus(true); setpurchaseStatus(false)}} className={bookStatus? `p-4 text-blue-600  border-l border-t border-r  border-gray-200 rounded cursor-pointer`: `p-4 border-b border-gray-200 text-black  cursor-pointer`}>Book Status</p>
          <p onClick={()=>{setSellStatus(false); setbookStatus(false); setpurchaseStatus(true)}} className={purchaseStatus? `p-4 text-blue-600  border-l border-t border-r  border-gray-200 rounded cursor-pointer`: `p-4 border-b border-gray-200 text-black  cursor-pointer`}>Purchase History</p>
        </div>

        {/* content */}
        { sellStatus && 
          <div className='bg-gray-100 p-5 my-10 shadow rounded'>
            <h2 className='text-center text-2xl mt-5 font-medium'>Book Details</h2>
          <div className="md:grid grid-cols-2 md:px-5 mt-5 w-full">
            <div className='px-5'>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Title'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Author'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='No of pages'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Image Url'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Price'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Discount Price'  />
              </div>
              <div className="my-3">
                <textarea type="text" className='bg-white px-3 pb-10 pt-2 w-full rounded shadow' placeholder='Abstract'  />
              </div>
            </div>
            <div className='px-5'>
               <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Publisher'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Language'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='ISBN'  />
              </div>
              <div className="my-3">
                <input type="text" className='bg-white px-3 py-2 w-full rounded shadow' placeholder='Category'  />
              </div>
              <div className="my-3">
                <label htmlFor="">
                  <input type="file"  />
                </label>
              </div>
            </div>
          </div>
          </div>}
        { bookStatus && <div>book status</div>}
        { purchaseStatus && <div>purchase</div>}
       </div>
     <Footer/>
    </>
  )
}

export default Profile
