import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [ status, setStatus] = useState(false)
  return (
   <>

   <div className='md:grid grid-cols-3 md:px-10 px-4 py-2 flex items-center'>

    <div className='flex items-center ms-3'>
          <Link to={"/"}><img src="https://www.kindpng.com/picc/m/19-194546_icon-book-transparent-book-icon-png-png-download.png" alt="book-logo" style={{ width: '50px', height: '50px' }} /></Link>
          <h1 className='text-center text-2xl font-semibold ms-4 md:hidden'>BOOK STORE</h1>

          
    </div>
    <div className='md:flex justify-center items-center hidden'>
       <h1 className='text-center text-2xl font-semibold '>BOOK STORE</h1>
    </div>
    <div className='md:flex justify-end items-center hidden '>
       <FontAwesomeIcon className='me-5 text-xl' icon={faInstagram} />
       <FontAwesomeIcon className='me-5 text-xl' icon={faTwitter} />
       <FontAwesomeIcon className='me-5 text-xl' icon={faFacebook} />

       <Link to={'/login'}>
         <button className=' border border-black text-black rounded px-3 py-1'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button>
  
       </Link>
       {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no-image" style={{width:"50px", height:"50px"}} /> */}

    </div>

   </div>

   <nav className=' p-4 ' style={{backgroundColor:"rgb(1, 1, 30)"}}>
     <div className='flex md:hidden justify-between items-center'>
      <span onClick={()=>setStatus(!status)}><FontAwesomeIcon icon={faBars} className='text-2xl text-white' /></span>
      
       <Link to={'/login'}><button className=' border border-white text-white rounded px-3 py-1 '><FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link>
       {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no-image" style={{width:"50px", height:"50px"}} /> */}



     </div>
      <ul className={status?`md:flex`:`md:flex hidden justify-center items-center`}>
        <Link to={'/'}><li className='md:mx-10 mx-1 mt-3 md:mt-0 text-white font-semibold '>Home</li></Link>
        <Link to={'/allbooks'}><li className='md:mx-10 mx-1  text-white font-semibold '>Books</li></Link>
        <li className='md:mx-10 mx-1  text-white font-semibold '>Careers</li>
        <li className='md:mx-10 mx-1  text-white font-semibold '>Contact</li>
      </ul>
   </nav>
   </>
  )
}

export default Header
